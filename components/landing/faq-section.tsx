"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "Which properties and portals do you cover?",
    a: "Sakan IQ currently covers all residential listings on Bayut and Property Finder across Dubai. We ingest every listing — apartments, villas, townhouses — across all 40+ key areas and refresh every 6 hours.",
  },
  {
    q: "How accurate is the AI yield calculation?",
    a: "Our yield model accounts for purchase price, DLD transfer fee (4%), agent fees (2%), service charges (area-specific), and projected vacancy rates. Backtesting shows our Deal Score correlates strongly with actual investor returns. That said, we're a research tool — always verify with your own due diligence and advisors.",
  },
  {
    q: "What's included in the 7-day free trial?",
    a: "You'll get full Premium access for 7 days — daily email digests, WhatsApp alerts, unlimited properties, and all filters. No credit card required to start. After the trial, you can choose any plan or let it lapse with no charge.",
  },
  {
    q: "Can I switch plans or cancel anytime?",
    a: "Yes, absolutely. Upgrade or downgrade at any time. Cancel before your next billing cycle and you won't be charged. We offer a 14-day money-back guarantee if you're not happy for any reason.",
  },
  {
    q: "Do you offer team or agency accounts?",
    a: "Yes — our Enterprise plan supports multi-seat workspaces, API access for integrating into your own tools, white-label reports, and a dedicated account manager. Contact us at hello@sakaniq.com to discuss custom pricing for your team.",
  },
]

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="rounded-2xl border border-white/8 bg-card/60 backdrop-blur overflow-hidden"
    >
      <button
        id={`faq-item-${index}`}
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/[0.02] transition-colors duration-150"
        aria-expanded={open}
      >
        <span className="font-semibold text-sm sm:text-base pr-4">{faq.q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 size-5 rounded-full bg-white/8 flex items-center justify-center"
        >
          <ChevronDown className="size-3.5 text-muted-foreground" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-white/6 pt-4">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQSection() {
  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 py-16 md:py-20 scroll-mt-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-3">FAQ</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
          Common <span className="gradient-text">Questions</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Everything you need to know about Sakan IQ.
        </p>
      </motion.div>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <FAQItem key={faq.q} faq={faq} index={i} />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 text-center text-sm text-muted-foreground"
      >
        Still have questions?{" "}
        <a href="mailto:hello@sakaniq.com" className="text-blue-400 hover:underline font-medium">
          hello@sakaniq.com
        </a>
      </motion.p>
    </section>
  )
}
