import { NextResponse } from "next/server"
import { newsletterSchema } from "@/lib/schemas"
import { getSupabaseAdmin } from "@/lib/supabase/admin"

export async function POST(req: Request) {
  let json: unknown
  try {
    json = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  const parsed = newsletterSchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten().fieldErrors },
      { status: 400 }
    )
  }

  const supabase = getSupabaseAdmin()
  if (!supabase) {
    return NextResponse.json({ success: true })
  }

  const { error } = await supabase
    .from("newsletter_subscribers")
    .insert({ email: parsed.data.email })

  if (error && error.code !== "23505") {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
