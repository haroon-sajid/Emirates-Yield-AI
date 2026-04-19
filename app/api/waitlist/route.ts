import { NextResponse } from "next/server"
import { waitlistSchema } from "@/lib/schemas"
import { getSupabaseAdmin } from "@/lib/supabase/admin"

export async function POST(req: Request) {
  let json: unknown
  try {
    json = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  const parsed = waitlistSchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten().fieldErrors },
      { status: 400 }
    )
  }

  const { email, plan } = parsed.data
  const supabase = getSupabaseAdmin()

  if (!supabase) {
    return NextResponse.json({
      success: true,
      position: 247,
      note: "Supabase not configured — position is illustrative.",
    })
  }

  const { error: insertError } = await supabase.from("waitlist").insert({
    email,
    plan: plan ?? null,
  })

  if (insertError && insertError.code !== "23505") {
    return NextResponse.json({ error: insertError.message }, { status: 500 })
  }

  const { count, error: countError } = await supabase
    .from("waitlist")
    .select("*", { count: "exact", head: true })

  if (countError) {
    return NextResponse.json({ success: true, position: 1 })
  }

  return NextResponse.json({ success: true, position: count ?? 1 })
}
