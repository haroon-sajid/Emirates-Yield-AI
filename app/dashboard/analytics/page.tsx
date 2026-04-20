import { BarChart3, LineChart, PieChart } from "lucide-react"

import { dashboardMetrics, topAreas } from "@/lib/dashboard/mock-data"

export default function AnalyticsPage() {
  return (
    <div className="space-y-4 pt-2">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-900">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-300">Analytics</p>
        <h1 className="mt-2 text-2xl font-bold">Dubai Real Estate Performance Intelligence</h1>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-slate-900">
          <p className="inline-flex items-center gap-2 text-xs text-slate-500 dark:text-slate-300">
            <LineChart className="size-4" />
            Yield Trend
          </p>
          <p className="mt-2 text-2xl font-bold">+0.8%</p>
          <p className="text-sm text-slate-500 dark:text-slate-300">over last 30 days</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-slate-900">
          <p className="inline-flex items-center gap-2 text-xs text-slate-500 dark:text-slate-300">
            <BarChart3 className="size-4" />
            Listings Analyzed
          </p>
          <p className="mt-2 text-2xl font-bold">1,248</p>
          <p className="text-sm text-slate-500 dark:text-slate-300">updated daily</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-slate-900">
          <p className="inline-flex items-center gap-2 text-xs text-slate-500 dark:text-slate-300">
            <PieChart className="size-4" />
            Risk Distribution
          </p>
          <p className="mt-2 text-2xl font-bold">68% low-risk</p>
          <p className="text-sm text-slate-500 dark:text-slate-300">in active shortlist</p>
        </article>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-slate-900">
          <h2 className="text-lg font-bold">Core KPI Signals</h2>
          <div className="mt-3 space-y-2">
            {dashboardMetrics.map((metric) => (
              <div key={metric.title} className="rounded-lg border border-slate-200 p-3 dark:border-white/10">
                <p className="text-sm font-semibold">{metric.title}</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">
                  {metric.value} · {metric.delta}
                </p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-slate-900">
          <h2 className="text-lg font-bold">Top Performing Areas</h2>
          <div className="mt-3 space-y-2">
            {topAreas.map((area) => (
              <div key={area.name} className="flex items-center justify-between rounded-lg border border-slate-200 p-3 dark:border-white/10">
                <p className="font-semibold">{area.name}</p>
                <p className="text-sm text-blue-600 dark:text-blue-300">{area.avgYield}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  )
}
