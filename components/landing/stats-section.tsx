"use client"

import { motion } from "framer-motion"
import { useInViewOnce } from "@/hooks/use-in-view-once"
import { useOdometer } from "@/hooks/use-odometer"
import { useDecimalCount } from "@/hooks/use-decimal-count"
import { TrendingUp, Building2, Users, Percent } from "lucide-react"

const icons = [Building2, TrendingUp, Percent, Users]
const colors = [
  "text-blue-400 bg-blue-400/10",
  "text-emerald-400 bg-emerald-400/10",
  "text-amber-400 bg-amber-400/10",
  "text-purple-400 bg-purple-400/10",
]

export function StatsSection() {
  const { ref, visible } = useInViewOnce<HTMLElement>()
  const n1 = useOdometer(1247, visible)
  const n2 = useOdometer(89, visible)
  const n3 = useDecimalCount(8.4, visible)
  const n4 = useOdometer(127, visible)

  const items = [
    {
      label: "Properties Analyzed",
      value: n1.toLocaleString(),
      suffix: "+",
      sub: "This week on Bayut & Property Finder",
    },
    {
      label: "High-ROI Deals Found",
      value: n2.toLocaleString(),
      suffix: "",
      sub: "Scoring 7+ on AI Deal Score",
    },
    {
      label: "Average Net Yield",
      value: n3.toFixed(1),
      suffix: "%",
      sub: "Across all analyzed properties",
    },
    {
      label: "Active Investors",
      value: n4.toLocaleString(),
      suffix: "",
      sub: "Receiving daily deal alerts",
    },
  ]

  return (
    <section
      ref={ref}
      className="relative border-y border-white/8 py-12 md:py-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(37,99,235,0.04) 0%, transparent 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-2">
            Real Numbers
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Proven Results for Dubai Investors
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={it.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="relative rounded-2xl border border-white/8 bg-card/60 backdrop-blur p-6 text-center shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent" />
                <div className={`inline-flex size-10 items-center justify-center rounded-xl mb-4 ${colors[i]}`}>
                  <Icon className="size-5" />
                </div>
                <p
                  className="text-4xl font-extrabold tracking-tight tabular-nums sm:text-5xl"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  <span className="gradient-text">{it.value}</span>
                  <span className="text-foreground">{it.suffix}</span>
                </p>
                <p className="mt-2 font-semibold text-foreground text-sm">{it.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{it.sub}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
