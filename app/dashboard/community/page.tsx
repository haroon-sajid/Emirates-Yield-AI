import { MessageCircle, Users, Zap } from "lucide-react"

import { alerts } from "@/lib/dashboard/mock-data"

export default function CommunityPage() {
  return (
    <div className="space-y-4 pt-2">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-900">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-300">Community</p>
        <h1 className="mt-2 text-2xl font-bold">Investor WhatsApp Community & Live Signals</h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">
          Stay synced with high-yield opportunities, instant deal alerts, and peer insights for Dubai property investments.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-slate-900">
          <p className="inline-flex items-center gap-2 text-xs text-slate-500 dark:text-slate-300">
            <Users className="size-4" />
            Active Members
          </p>
          <p className="mt-2 text-2xl font-bold">1,240</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-slate-900">
          <p className="inline-flex items-center gap-2 text-xs text-slate-500 dark:text-slate-300">
            <MessageCircle className="size-4" />
            Daily Discussions
          </p>
          <p className="mt-2 text-2xl font-bold">85+</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-slate-900">
          <p className="inline-flex items-center gap-2 text-xs text-slate-500 dark:text-slate-300">
            <Zap className="size-4" />
            Real-Time Alerts
          </p>
          <p className="mt-2 text-2xl font-bold">18 today</p>
        </article>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-slate-900">
        <h2 className="text-lg font-bold">Recent Community Alerts</h2>
        <div className="mt-3 space-y-2">
          {alerts.map((alert) => (
            <div key={alert.id} className="rounded-lg border border-slate-200 p-3 dark:border-white/10">
              <p className="font-semibold">{alert.title}</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">{alert.body}</p>
              <p className="mt-1 text-xs text-slate-400">{alert.time}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
