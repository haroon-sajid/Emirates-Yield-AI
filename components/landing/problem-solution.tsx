"use client"

import { motion } from "framer-motion"
import { Bell, Bot, Brain, Clock, Percent, Zap, ArrowRight, Check } from "lucide-react"

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
}

const problems = [
  {
    icon: Clock,
    title: "Hours Wasted Every Day",
    body: "Manually checking 50+ portals daily wastes 3-4 hours you should spend closing deals — not hunting.",
    color: "text-red-400",
    bg: "bg-red-400/10",
    border: "border-red-400/20",
  },
  {
    icon: Percent,
    title: "Hidden Margin Killers",
    body: "Most 'deals' have hidden costs or are overpriced 20%+ once service fees, DLD, and vacancy are modeled.",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20",
  },
  {
    icon: Zap,
    title: "Always Late to the Best",
    body: "By the time you discover a gem listing, it's already under offer. Speed and intelligence wins in Dubai.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20",
  },
]

const steps = [
  {
    icon: Bot,
    step: "01",
    title: "Scan",
    subtitle: "AI scans every listing",
    body: "Our system ingests thousands of listings from Bayut & Property Finder every 6 hours, 24/7.",
    features: ["1,000+ listings/day", "Bayut & Property Finder", "6-hour refresh cadence"],
    color: "from-blue-500 to-cyan-500",
    glow: "shadow-blue-500/20",
  },
  {
    icon: Brain,
    step: "02",
    title: "Analyze",
    subtitle: "AI models the real numbers",
    body: "Claude AI calculates ROI, net yield, service fees, DLD, stress scenarios, and assigns a Deal Score.",
    features: ["Net yield calculation", "Risk-adjusted model", "Proprietary Deal Score"],
    color: "from-violet-500 to-purple-500",
    glow: "shadow-violet-500/20",
  },
  {
    icon: Bell,
    step: "03",
    title: "Alert",
    subtitle: "You get only the best",
    body: "Only properties scoring 7+ are delivered to your inbox every morning — and WhatsApp for Premium.",
    features: ["Morning email digest", "WhatsApp alerts (Premium)", "Custom filters"],
    color: "from-amber-500 to-orange-500",
    glow: "shadow-amber-500/20",
  },
]

export function ProblemSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:py-20 sm:px-6 lg:px-8">
      <motion.div {...fadeUp} className="text-center mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-red-400 mb-3">
          The Problem
        </p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
          Finding Good Deals Is{" "}
          <span className="amber-gradient-text">Broken</span>
        </h2>
        <p className="mt-5 max-w-2xl mx-auto text-lg text-muted-foreground">
          The Dubai property market moves fast. Without the right tools, you&apos;re always one step behind.
        </p>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-3">
        {problems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`relative rounded-2xl border ${item.border} bg-card/60 backdrop-blur p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent" />
            <div className={`inline-flex size-12 items-center justify-center rounded-xl mb-5 ${item.bg}`}>
              <item.icon className={`size-6 ${item.color}`} />
            </div>
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export function SolutionSection() {
  return (
    <section
      id="how-it-works"
      className="relative py-16 md:py-20 border-y border-white/8 scroll-mt-20 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, rgba(37,99,235,0.05) 0%, rgba(124,58,237,0.05) 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-blue-600/8 blur-[120px]" />
        <div className="absolute right-1/4 top-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-purple-600/8 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-3">
            The Solution
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Emirates Yield Does the{" "}
            <span className="gradient-text">Heavy Lifting</span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-muted-foreground">
            Three steps. Zero manual work. Only the deals that match your criteria, delivered daily.
          </p>
        </motion.div>

        {/* Steps with connector line */}
        <div className="relative grid gap-6 lg:grid-cols-3">
          {/* Connector line (desktop) */}
          <div className="pointer-events-none absolute top-[3.5rem] left-[calc(16.6%+1.5rem)] right-[calc(16.6%+1.5rem)] h-px border-t border-dashed border-white/15 hidden lg:block" />

          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className={`relative overflow-hidden rounded-2xl border border-white/10 bg-card/70 backdrop-blur p-6 shadow-xl ${s.glow} hover:shadow-2xl transition-all duration-300`}
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.04] via-transparent to-transparent" />

              {/* Step number */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`flex size-12 items-center justify-center rounded-xl bg-gradient-to-br ${s.color} shadow-lg`}
                >
                  <s.icon className="size-6 text-white" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                    Step {s.step}
                  </p>
                  <p className={`text-lg font-extrabold bg-gradient-to-r ${s.color} bg-clip-text text-transparent`}>
                    {s.title}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight className="ml-auto size-4 text-muted-foreground/40 hidden lg:block" />
                )}
              </div>

              <p className="font-semibold text-foreground text-sm mb-2">{s.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.body}</p>

              <div className="space-y-1.5">
                {s.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Check className="size-3.5 text-emerald-400 shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
