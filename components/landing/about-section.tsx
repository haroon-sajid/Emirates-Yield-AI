"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Sparkles, Users } from "lucide-react"

const aboutCards = [
  {
    icon: Sparkles,
    title: "AI-First Intelligence",
    body: "We evaluate Dubai opportunities using ROI, risk, and growth signals tailored to investor goals.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent by Design",
    body: "Clear assumptions, visible fees, and practical insights sit behind every recommendation.",
  },
  {
    icon: Users,
    title: "Investor-Centered",
    body: "Built for first-time buyers and experienced portfolio operators who need faster decisions.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-16 md:py-20 scroll-mt-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-3">
          About Emirates Yield
        </p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
          Built for Smarter Dubai Property Investing
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Emirates Yield combines AI research, local market expertise, and verified data so investors can make
          high-confidence real estate decisions.
        </p>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-3">
        {aboutCards.map((card, i) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-2xl border border-white/10 bg-card/70 p-5 backdrop-blur"
          >
            <card.icon className="size-5 text-blue-400" />
            <h3 className="mt-3 text-lg font-bold">{card.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{card.body}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
