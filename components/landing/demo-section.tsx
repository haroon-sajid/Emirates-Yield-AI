"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePricingModal } from "@/components/landing/pricing-context"

export function DemoSection() {
  const { openModal } = usePricingModal()

  return (
    <section
      id="demo"
      className="relative py-16 md:py-20 scroll-mt-20 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-gradient-to-r from-blue-600/10 via-violet-600/10 to-purple-600/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Mock app dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-white/10 bg-card/80 backdrop-blur shadow-2xl overflow-hidden mb-16"
        >
          {/* Browser chrome */}
          <div className="flex items-center gap-2 border-b border-white/8 bg-white/[0.02] px-4 py-3">
            <span className="size-3 rounded-full bg-red-500/70" />
            <span className="size-3 rounded-full bg-amber-500/70" />
            <span className="size-3 rounded-full bg-emerald-500/70" />
            <span className="ml-4 flex-1 rounded-md bg-white/5 px-4 py-1 text-xs text-muted-foreground/60 font-mono">
              app.emiratesyield.com/dashboard
            </span>
          </div>

          {/* Dashboard content */}
          <div className="p-6 grid gap-4 lg:grid-cols-[1fr_300px]">
            {/* Left: deal list */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-bold text-base">Morning Digest — Today's Top Deals</h3>
                  <p className="text-xs text-muted-foreground">Sunday, 20 April 2026 · 89 deals found</p>
                </div>
                <span className="flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400 font-semibold">
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live
                </span>
              </div>

              <div className="space-y-3">
                {[
                  { area: "Dubai Marina", type: "2BR", price: "AED 2.4M", yield: "9.1%", score: "8.9", grade: "A", trend: "+0.3%" },
                  { area: "Business Bay", type: "Studio", price: "AED 950K", yield: "8.4%", score: "8.1", grade: "A-", trend: "+0.1%" },
                  { area: "JVC", type: "1BR", price: "AED 680K", yield: "8.9%", score: "7.6", grade: "B+", trend: "+0.5%" },
                  { area: "Downtown Dubai", type: "2BR", price: "AED 3.8M", yield: "7.8%", score: "7.2", grade: "B+", trend: "New" },
                ].map((deal, i) => (
                  <motion.div
                    key={deal.area + deal.type}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.07 }}
                    className="flex items-center justify-between rounded-xl border border-white/6 bg-white/[0.02] px-4 py-3 hover:bg-white/[0.04] hover:border-white/12 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-sm font-bold text-blue-300">
                        {deal.grade}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{deal.area} · {deal.type}</p>
                        <p className="text-xs text-muted-foreground">{deal.price}</p>
                      </div>
                    </div>
                    <div className="text-right flex items-center gap-4">
                      <div>
                        <p className="text-base font-bold text-emerald-400">{deal.yield}</p>
                        <p className="text-[10px] text-muted-foreground">net yield</p>
                      </div>
                      <div>
                        <p className="text-sm font-bold tabular-nums">{deal.score}</p>
                        <p className="text-[10px] text-muted-foreground">score</p>
                      </div>
                      <span className="text-[10px] font-semibold text-amber-400 hidden sm:block">{deal.trend}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: summary panel */}
            <div className="space-y-4">
              <div className="rounded-xl border border-white/8 bg-white/[0.02] p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Portfolio Summary</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Avg Yield", val: "8.4%", color: "text-emerald-400" },
                    { label: "Deals Today", val: "89", color: "text-blue-400" },
                    { label: "Avg Score", val: "7.9", color: "text-violet-400" },
                    { label: "Areas", val: "12", color: "text-amber-400" },
                  ].map((m) => (
                    <div key={m.label} className="rounded-lg bg-white/[0.03] p-2.5 text-center">
                      <p className={`text-xl font-bold ${m.color}`}>{m.val}</p>
                      <p className="text-[10px] text-muted-foreground">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-white/8 bg-white/[0.02] p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Alert Status</p>
                {[
                  { ch: "📧 Email", status: "Delivered", color: "text-emerald-400" },
                  { ch: "💬 WhatsApp", status: "Sent 06:30", color: "text-emerald-400" },
                  { ch: "📊 API", status: "Live", color: "text-blue-400" },
                ].map((a) => (
                  <div key={a.ch} className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0">
                    <span className="text-xs text-muted-foreground">{a.ch}</span>
                    <span className={`text-xs font-semibold ${a.color}`}>{a.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-5">
            Ready to Find Your Next{" "}
            <span className="gradient-text">High-Yield Deal?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Join 127+ investors getting the best Dubai deals delivered daily. Start your 7-day free trial — no credit card needed.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              id="demo-cta-trial"
              type="button"
              size="lg"
              onClick={() => openModal("premium")}
              className="h-12 px-8 text-base font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-200"
            >
              Start Free Trial
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <a
              href="#how-it-works"
              id="demo-cta-how"
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-8 text-base font-semibold hover:bg-white/10 transition-all duration-200"
            >
              <Play className="size-4" />
              How It Works
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
