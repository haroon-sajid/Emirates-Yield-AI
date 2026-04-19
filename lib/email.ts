export async function sendWelcomeEmail(to: string, plan: string) {
  const key = process.env.RESEND_API_KEY
  if (!key) {
    console.info(`[email] welcome skipped (no RESEND_API_KEY): ${to} / ${plan}`)
    return
  }
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM ?? "Emirates Yield <onboarding@example.com>",
      to: [to],
      subject: "Welcome to Emirates Yield",
      text: `You're in — ${plan} plan. Your 7-day trial has started.`,
    }),
  })
}

export async function notifyAdminInquiry(payload: {
  name: string
  email: string
  message: string
}) {
  const admin = process.env.ADMIN_NOTIFY_EMAIL
  const key = process.env.RESEND_API_KEY
  if (!key || !admin) {
    console.info("[email] admin inquiry skipped:", payload.email)
    return
  }
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM ?? "Emirates Yield <onboarding@example.com>",
      to: [admin],
      subject: `Inquiry from ${payload.name}`,
      text: `${payload.message}\n\n— ${payload.email}`,
    }),
  })
}
