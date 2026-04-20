import { Mail, MessageSquare, UserPlus } from "lucide-react"

export default function LeadFormsPage() {
  const leadForms = [
    { name: "Premium Buyer Intake", channel: "Website", submissions: 64, conversion: "22%" },
    { name: "WhatsApp Investor Opt-In", channel: "WhatsApp", submissions: 39, conversion: "31%" },
    { name: "Off-Plan Interest Form", channel: "Landing", submissions: 28, conversion: "18%" },
  ]

  return (
    <div className="space-y-4 pt-2">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-900">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-300">Lead Forms</p>
        <h1 className="mt-2 text-2xl font-bold">Investor Lead Capture & Qualification</h1>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-slate-900">
          <p className="inline-flex items-center gap-2 text-xs text-slate-500 dark:text-slate-300">
            <UserPlus className="size-4" />
            Total Submissions
          </p>
          <p className="mt-2 text-2xl font-bold">131</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-slate-900">
          <p className="inline-flex items-center gap-2 text-xs text-slate-500 dark:text-slate-300">
            <Mail className="size-4" />
            Email Follow-ups
          </p>
          <p className="mt-2 text-2xl font-bold">47 queued</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-slate-900">
          <p className="inline-flex items-center gap-2 text-xs text-slate-500 dark:text-slate-300">
            <MessageSquare className="size-4" />
            WhatsApp Replies
          </p>
          <p className="mt-2 text-2xl font-bold">29 active</p>
        </article>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-slate-900">
        <h2 className="text-lg font-bold">Form Performance</h2>
        <div className="mt-3 space-y-2">
          {leadForms.map((form) => (
            <div key={form.name} className="rounded-lg border border-slate-200 p-3 dark:border-white/10">
              <p className="font-semibold">{form.name}</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">
                Channel: {form.channel} · Submissions: {form.submissions} · Conversion: {form.conversion}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
