"use client"

import { useMemo, useState } from "react"
import { Calculator, Landmark, Percent } from "lucide-react"

export default function CalculatorPage() {
  const [purchasePrice, setPurchasePrice] = useState(1200000)
  const [annualRent, setAnnualRent] = useState(102000)
  const [annualCosts, setAnnualCosts] = useState(18000)

  const netYield = useMemo(() => {
    if (!purchasePrice) return 0
    return (((annualRent - annualCosts) / purchasePrice) * 100).toFixed(2)
  }, [purchasePrice, annualRent, annualCosts])

  return (
    <div className="space-y-4 pt-2">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-900">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-300">ROI Calculator</p>
        <h1 className="mt-2 text-2xl font-bold">Dubai Property Net Yield Calculator</h1>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-slate-900">
          <h2 className="text-lg font-bold">Inputs</h2>
          <div className="mt-3 space-y-3">
            <label className="block text-sm">
              Purchase Price (AED)
              <input
                type="number"
                value={purchasePrice}
                onChange={(event) => setPurchasePrice(Number(event.target.value))}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-white/15 dark:bg-slate-950"
              />
            </label>
            <label className="block text-sm">
              Annual Rent (AED)
              <input
                type="number"
                value={annualRent}
                onChange={(event) => setAnnualRent(Number(event.target.value))}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-white/15 dark:bg-slate-950"
              />
            </label>
            <label className="block text-sm">
              Annual Costs (AED)
              <input
                type="number"
                value={annualCosts}
                onChange={(event) => setAnnualCosts(Number(event.target.value))}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-white/15 dark:bg-slate-950"
              />
            </label>
          </div>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-slate-900">
          <h2 className="text-lg font-bold">Result</h2>
          <div className="mt-3 space-y-3">
            <div className="rounded-lg border border-slate-200 p-3 dark:border-white/10">
              <p className="inline-flex items-center gap-2 text-xs text-slate-500 dark:text-slate-300">
                <Percent className="size-4" />
                Net Yield
              </p>
              <p className="mt-1 text-3xl font-bold text-emerald-600 dark:text-emerald-300">{netYield}%</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-3 dark:border-white/10">
              <p className="inline-flex items-center gap-2 text-xs text-slate-500 dark:text-slate-300">
                <Landmark className="size-4" />
                Net Annual Cashflow
              </p>
              <p className="mt-1 text-xl font-bold">AED {(annualRent - annualCosts).toLocaleString()}</p>
            </div>
            <p className="inline-flex items-center gap-2 text-xs text-slate-500 dark:text-slate-300">
              <Calculator className="size-4" />
              Indicative values for early underwriting decisions.
            </p>
          </div>
        </article>
      </section>
    </div>
  )
}
