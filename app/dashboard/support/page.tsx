import { CircleHelp, LifeBuoy, MessageCircle, PhoneCall } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="space-y-4 pt-2">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-900">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-300">Support</p>
        <h1 className="mt-2 text-2xl font-bold">Help Center & Investor Support</h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">
          Get help with platform usage, strategy guidance, and account support.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-slate-900">
          <p className="inline-flex items-center gap-2 text-sm font-semibold">
            <MessageCircle className="size-4 text-blue-500" />
            WhatsApp Support
          </p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">Fast response for urgent investment questions.</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-slate-900">
          <p className="inline-flex items-center gap-2 text-sm font-semibold">
            <PhoneCall className="size-4 text-blue-500" />
            Strategy Call
          </p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">Book a guided session with our analyst team.</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-slate-900">
          <p className="inline-flex items-center gap-2 text-sm font-semibold">
            <LifeBuoy className="size-4 text-blue-500" />
            Technical Help
          </p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">Get support for dashboard, alerts, and account issues.</p>
        </article>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-slate-900">
        <h2 className="text-lg font-bold">Frequently Asked Questions</h2>
        <div className="mt-3 space-y-2">
          {[
            "How often are deal alerts updated?",
            "How is projected ROI calculated?",
            "Can I customize my watchlist filters?",
          ].map((q) => (
            <div key={q} className="rounded-lg border border-slate-200 p-3 text-sm dark:border-white/10">
              <p className="inline-flex items-center gap-2 font-semibold">
                <CircleHelp className="size-4 text-blue-500" />
                {q}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
