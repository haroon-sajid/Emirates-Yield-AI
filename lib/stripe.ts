import Stripe from "stripe"

export function getStripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) return null
  return new Stripe(key, { typescript: true })
}

export const PLAN_TO_PRICE_ENV: Record<
  "basic" | "premium" | "enterprise",
  string | undefined
> = {
  basic: process.env.STRIPE_PRICE_BASIC,
  premium: process.env.STRIPE_PRICE_PREMIUM,
  enterprise: process.env.STRIPE_PRICE_ENTERPRISE,
}
