import { CircleDollarSign, Filter, Megaphone, TrendingUp } from "lucide-react"

import { hotListings } from "@/lib/dashboard/mock-data"

export default function RoiCampaignsPage() {
  return (
    <div className="space-y-4 pt-2">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-900">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-300">ROI Campaigns</p>
        <h1 className="mt-2 text-2xl font-bold">Campaign Performance & Acquisition Flow</h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">
          Track active deal campaigns, compare projected vs realized yield, and prioritize investor-ready listings.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          { label: "Active Campaigns", value: "8", icon: Megaphone },
          { label: "Avg Campaign Yield", value: "8.4%", icon: TrendingUp },
          { label: "Qualified Listing Pool", value: "42", icon: CircleDollarSign },
        ].map((item) => (
          <article key={item.label} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-slate-900">
            <p className="inline-flex items-center gap-2 text-xs text-slate-500 dark:text-slate-300">
              <item.icon className="size-4" />
              {item.label}
            </p>
            <p className="mt-2 text-2xl font-bold">{item.value}</p>
          </article>
        ))}
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-slate-900">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-bold">Campaign Deal Queue</h2>
          <button className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-300" type="button">
            <Filter className="size-4" />
            Filter
          </button>
        </div>
        <div className="space-y-2">
          {hotListings.map((deal) => (
            <div key={deal.id} className="rounded-lg border border-slate-200 p-3 dark:border-white/10">
              <p className="font-semibold">
                {deal.id} · {deal.community} · {deal.propertyType}
              </p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">
                Asking {deal.askingPrice} · Estimated yield {deal.estYield} · Score {deal.dealScore}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
