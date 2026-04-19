"use client"

import { motion } from "framer-motion"
import {
  Bell,
  Brain,
  Filter,
  LineChart,
  Plug,
  Radar,
  SlidersHorizontal,
  BarChart3,
} from "lucide-react"

const cards = [
  {
    icon: Radar,
    title: "Real-Time Scraping",
    body: "Listings ingested from Bayut & Property Finder on a 6-hour cadence — 24 hours a day, 7 days a week.",
    span: "lg:col-span-2",
    extra: (
      <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
        {["Bayut", "Property Finder", "Dubizzle"].map((s) => (
          <span
            key={s}
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-muted-foreground"
          >
            {s}
          </span>
        ))}
        <span className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-emerald-400">
          Live ●
        </span>
      </div>
    ),
    gradient: "from-blue-500/15 via-cyan-500/5 to-transparent",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-400/10",
  },
  {
    icon: Brain,
    title: "AI Analysis Engine",
    body: "Claude AI models cashflows, yields, service fees, DLD charges, and risk bands tailored to Dubai norms.",
    span: "lg:col-span-1",
    extra: (
      <div className="mt-4 space-y-1.5">
        {["ROI & net yield", "Risk scenarios", "Appreciation model"].map((f) => (
          <div key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-violet-400 shrink-0" />
            {f}
          </div>
        ))}
      </div>
    ),
    gradient: "from-violet-500/15 via-purple-500/5 to-transparent",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-400/10",
  },
  {
    icon: Filter,
    title: "Smart Filtering",
    body: "Only deals scoring 7+ on our proprietary Deal Score make it through. No noise, just opportunities.",
    span: "lg:col-span-2",
    extra: (
      <div className="mt-4">
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-1.5">
          <span>Deal Score threshold</span>
          <span className="font-bold text-amber-400">7.0+</span>
        </div>
        <div className="h-2 w-full rounded-full bg-white/8 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "70%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500"
          />
        </div>
      </div>
    ),
    gradient: "from-amber-500/12 via-orange-500/5 to-transparent",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-400/10",
  },
  {
    icon: Bell,
    title: "Email + WhatsApp Alerts",
    body: "Morning digest email for all plans. Real-time WhatsApp push notifications for Premium & Enterprise.",
    span: "lg:col-span-1",
    extra: (
      <div className="mt-4 flex gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 text-xs text-blue-300 font-medium">
          📧 Email
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-300 font-medium">
          💬 WhatsApp
        </span>
      </div>
    ),
    gradient: "from-emerald-500/12 via-teal-500/5 to-transparent",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-400/10",
  },
  {
    icon: LineChart,
    title: "Price History Tracking",
    body: "Spot repricing and motivated sellers before the broader market reacts. Every day, every listing.",
    span: "lg:col-span-2",
    extra: (
      <div className="mt-4 flex h-14 items-end gap-1.5">
        {[55, 42, 60, 35, 28, 45, 22, 38, 18, 30].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: "easeOut" }}
            className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-600/60 to-blue-400/90 min-w-0"
          />
        ))}
      </div>
    ),
    gradient: "from-cyan-500/12 via-blue-500/5 to-transparent",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-400/10",
  },
  {
    icon: SlidersHorizontal,
    title: "Custom Alerts",
    body: "Tune areas, budgets, yield floors, bedrooms, and alert windows to exactly match your investment mandate.",
    span: "lg:col-span-1",
    extra: (
      <div className="mt-4 flex flex-wrap gap-1.5 text-[11px]">
        {["Areas", "Budget", "Yield floor", "Bedrooms", "Alert time"].map((t) => (
          <span
            key={t}
            className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    ),
    gradient: "from-pink-500/12 via-rose-500/5 to-transparent",
    iconColor: "text-pink-400",
    iconBg: "bg-pink-400/10",
  },
]

export function BentoSection() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-16 md:py-20 scroll-mt-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-3">
              Features
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Your Unfair{" "}
              <span className="gradient-text">Advantage</span>
            </h2>
            <p className="mt-4 max-w-lg text-lg text-muted-foreground">
              Six powerful capabilities that turn Dubai's most chaotic market into your personal deal flow.
            </p>
          </div>
          <BarChart3 className="hidden size-12 text-blue-400/20 sm:block" />
        </div>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: (i % 3) * 0.07, duration: 0.5 }}
            whileHover={{ y: -4, boxShadow: "0 24px 48px -16px rgba(37,99,235,0.2)" }}
            className={`relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-card/70 backdrop-blur p-6 shadow-sm transition-all duration-300 ${c.span}`}
          >
            {/* gradient overlay */}
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${c.gradient}`}
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent" />

            <div className={`relative inline-flex size-11 items-center justify-center rounded-xl ${c.iconBg} mb-4`}>
              <c.icon className={`size-5 ${c.iconColor}`} />
            </div>
            <h3 className="relative font-bold text-lg mb-2">{c.title}</h3>
            <p className="relative flex-1 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
            <div className="relative">{c.extra}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-6 flex items-center gap-3 rounded-2xl border border-dashed border-blue-500/25 bg-blue-500/5 px-5 py-4 text-sm text-muted-foreground"
      >
        <Plug className="size-4 shrink-0 text-blue-400" />
        <span>
          <strong className="text-foreground">Enterprise</strong> adds API access, multi-seat workspaces,
          custom data feeds, and dedicated account management.
        </span>
      </motion.div>
    </section>
  )
}
