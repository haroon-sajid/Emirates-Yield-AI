"use client"

import { useState } from "react"
import {
  Building2,
  Calculator,
  CircleDollarSign,
  MessageCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  hotListings,
  pipeline,
} from "@/lib/dashboard/mock-data"
import { cn } from "@/lib/utils"

export function DashboardPage() {
  const [monthlyBudget, setMonthlyBudget] = useState(64000)
  const [selectedPlan, setSelectedPlan] = useState("360")
  const [launchAfterPayment, setLaunchAfterPayment] = useState(true)

  const estimatedClients = Math.round(monthlyBudget / 6.7)
  const selectedDeals = hotListings.slice(0, 3)

  const strategyPlans = [
    {
      id: "flex",
      title: "Flexible Monthly",
      subtitle: "Pause any time. Best for testing new locations and filters.",
      amount: `AED ${monthlyBudget.toLocaleString()}`,
      badge: "",
      oldAmount: "",
    },
    {
      id: "90",
      title: "90 Days",
      subtitle: "Focused quarter execution with weekly optimization support.",
      amount: `AED ${Math.round(monthlyBudget * 0.96).toLocaleString()}`,
      badge: "Save 4%",
      oldAmount: `AED ${monthlyBudget.toLocaleString()}`,
    },
    {
      id: "180",
      title: "180 Days",
      subtitle: "Designed for investors building a repeatable acquisition engine.",
      amount: `AED ${Math.round(monthlyBudget * 0.9).toLocaleString()}`,
      badge: "Save 10%",
      oldAmount: `AED ${monthlyBudget.toLocaleString()}`,
    },
    {
      id: "360",
      title: "360 Days",
      subtitle: "Maximum compounding: AI monitoring, alerts, and full ROI tracking.",
      amount: `AED ${Math.round(monthlyBudget * 0.75).toLocaleString()}`,
      badge: "Save 25%",
      oldAmount: `AED ${monthlyBudget.toLocaleString()}`,
    },
  ]

  return (
    <div className="space-y-4 pt-2">
      <section className="grid gap-4 xl:grid-cols-12">
        <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-slate-900 xl:col-span-8">
        <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-300">
              Monthly Investment Budget
            </p>
            <h1 className="mt-2 text-2xl font-bold">AED {monthlyBudget.toLocaleString()}</h1>
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-500 dark:text-slate-300">~ {estimatedClients.toLocaleString()} investor leads</p>
            <p className="mt-1 text-xs text-slate-400">ROI forecast updates in real-time</p>
          </div>
        </div>

        <input
          type="range"
          min={3200}
          max={400000}
          step={200}
          value={monthlyBudget}
          onChange={(event) => setMonthlyBudget(Number(event.target.value))}
          className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-blue-600 dark:bg-slate-700"
        />
        <div className="mt-2 flex justify-between text-xs text-slate-500 dark:text-slate-300">
          <span>AED 3,200</span>
          <span>AED 400,000+</span>
        </div>

        <div className="mt-7">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-300">
            Campaign Duration
          </p>
          <div className="space-y-2.5">
            {strategyPlans.map((plan) => {
              const isSelected = selectedPlan === plan.id
              return (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => setSelectedPlan(plan.id)}
                  className={cn(
                    "w-full rounded-xl border p-3 text-left transition-colors",
                    isSelected
                      ? "border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-blue-500/10"
                      : "border-slate-200 bg-white hover:bg-slate-50 dark:border-white/10 dark:bg-slate-900 dark:hover:bg-slate-800/70"
                  )}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2">
                      <span
                        className={cn(
                          "size-4 rounded-full border",
                          isSelected ? "border-blue-500 bg-blue-500" : "border-slate-300 dark:border-slate-600"
                        )}
                      />
                      <p className="font-semibold">{plan.title}</p>
                      {plan.badge ? (
                        <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
                          {plan.badge}
                        </span>
                      ) : null}
                    </div>
                    <div className="text-right">
                      {plan.oldAmount ? <p className="text-xs text-slate-400 line-through">{plan.oldAmount}</p> : null}
                      <p className="text-lg font-bold">{plan.amount}</p>
                    </div>
                  </div>
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-300">{plan.subtitle}</p>
                </button>
              )
            })}
          </div>
        </div>

        <Button className="mt-4 h-11 w-full bg-blue-600 text-base font-semibold text-white hover:bg-blue-500">
          Activate Strategy · {strategyPlans.find((plan) => plan.id === selectedPlan)?.amount ?? "AED 0"}
        </Button>

        <label className="mt-2 inline-flex cursor-pointer items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
          <input
            type="checkbox"
            checked={launchAfterPayment}
            onChange={(event) => setLaunchAfterPayment(event.target.checked)}
            className="size-4 rounded border-slate-300 accent-blue-600"
          />
          Enable auto-launch after payment
        </label>
        </article>

        <div className="space-y-4 xl:col-span-4">
          <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-slate-900">
            <h2 className="text-lg font-bold">Quick Actions</h2>
            <div className="mt-3 space-y-2">
              <Button className="h-10 w-full justify-start bg-emerald-600 text-white hover:bg-emerald-500">
                <MessageCircle className="size-4" />
                Join WhatsApp Community
              </Button>
              <Button variant="outline" className="h-10 w-full justify-start border-slate-300 hover:bg-slate-100 dark:border-white/15 dark:hover:bg-white/10">
                <Calculator className="size-4" />
                Open ROI Calculator
              </Button>
              <Button variant="outline" className="h-10 w-full justify-start border-slate-300 hover:bg-slate-100 dark:border-white/15 dark:hover:bg-white/10">
                <CircleDollarSign className="size-4" />
                ROI Insights
              </Button>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-slate-900">
            <h2 className="text-lg font-bold">Deal Pipeline Snapshot</h2>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {pipeline.map((stage) => (
                <div key={stage.label} className="rounded-lg border border-slate-200 p-3 dark:border-white/10">
                  <p className="text-xs text-slate-500 dark:text-slate-300">{stage.label}</p>
                  <p className="mt-1 text-xl font-bold">{stage.count}</p>
                  <p className="text-xs text-blue-600 dark:text-blue-300">{stage.value}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section>
        <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-slate-900">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-bold">Hot Opportunities</h2>
            <button type="button" className="text-sm font-semibold text-blue-600 dark:text-blue-300">
              View all
            </button>
          </div>
          <div className="space-y-2">
            {selectedDeals.map((deal) => (
              <div key={deal.id} className="rounded-xl border border-slate-200 p-3 dark:border-white/10">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-semibold">
                    {deal.community} · {deal.propertyType}
                  </p>
                  <p className="text-sm font-bold text-emerald-600 dark:text-emerald-300">{deal.estYield} yield</p>
                </div>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">
                  Asking {deal.askingPrice} · Deal score {deal.dealScore}
                </p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <footer className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs text-slate-500 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300">
        <p className="inline-flex items-center gap-1.5">
          <Building2 className="size-3.5" />
          Emirates Yield Dashboard · Property analyzer workspace
        </p>
      </footer>
    </div>
  )
}
