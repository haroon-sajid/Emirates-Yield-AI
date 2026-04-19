import { NextResponse } from "next/server"
import { contactSchema } from "@/lib/schemas"
import { getSupabaseAdmin } from "@/lib/supabase/admin"
import { notifyAdminInquiry } from "@/lib/email"

export async function POST(req: Request) {
  let json: unknown
  try {
    json = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten().fieldErrors },
      { status: 400 }
    )
  }

  const supabase = getSupabaseAdmin()
  if (supabase) {
    const { error } = await supabase.from("inquiries").insert(parsed.data)
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
  }

  await notifyAdminInquiry(parsed.data)

  return NextResponse.json({ success: true })
}
