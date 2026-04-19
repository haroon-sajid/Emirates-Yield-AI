import { NextResponse } from "next/server"
import { subscribeSchema } from "@/lib/schemas"
import { getStripe, PLAN_TO_PRICE_ENV } from "@/lib/stripe"
import { getSupabaseAdmin } from "@/lib/supabase/admin"
import { sendWelcomeEmail } from "@/lib/email"

export async function POST(req: Request) {
  let json: unknown
  try {
    json = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  const parsed = subscribeSchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten().fieldErrors },
      { status: 400 }
    )
  }

  const { email, plan, paymentMethodId } = parsed.data

  if (plan === "enterprise") {
    return NextResponse.json(
      { error: "Enterprise is sold via sales. Use Contact Sales." },
      { status: 400 }
    )
  }

  const stripe = getStripe()
  const priceId = PLAN_TO_PRICE_ENV[plan]
  if (!stripe || !priceId) {
    return NextResponse.json(
      {
        error:
          "Billing is not configured. Set STRIPE_SECRET_KEY and STRIPE_PRICE_* env vars.",
      },
      { status: 503 }
    )
  }

  try {
    const customer = await stripe.customers.create({ email })
    await stripe.paymentMethods.attach(paymentMethodId, {
      customer: customer.id,
    })
    await stripe.customers.update(customer.id, {
      invoice_settings: { default_payment_method: paymentMethodId },
    })

    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: priceId }],
      trial_period_days: 7,
      default_payment_method: paymentMethodId,
      payment_settings: {
        save_default_payment_method: "on_subscription",
      },
      metadata: { plan },
    })

    const supabase = getSupabaseAdmin()
    if (supabase) {
      await supabase.from("subscribers").insert({
        email,
        plan,
        stripe_customer_id: customer.id,
        stripe_subscription_id: subscription.id,
      })
    }

    await sendWelcomeEmail(email, plan)

    return NextResponse.json({
      success: true,
      subscriptionId: subscription.id,
    })
  } catch (e) {
    const message = e instanceof Error ? e.message : "Stripe error"
    return NextResponse.json({ error: message }, { status: 502 })
  }
}
