"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Sparkles, Zap, Building2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { usePricingModal } from "@/components/landing/pricing-context"

type BillingCycle = "monthly" | "yearly"

const plans = [
  {
    id: "basic" as const,
    name: "Basic",
    icon: Zap,
    monthlyPrice: 99,
    yearlyPrice: 79,
    description: "Perfect for individual investors just getting started with Dubai real estate.",
    color: "from-slate-500 to-slate-600",
    iconBg: "bg-slate-500/10",
    iconColor: "text-slate-400",
    popular: false,
    features: [
      "Daily email digest",
      "Up to 50 properties/day",
      "Basic yield calculations",
      "Deal Score (7+ filter)",
      "2 area filters",
      "Email support",
    ],
    cta: "Start 7-Day Trial",
  },
  {
    id: "premium" as const,
    name: "Premium",
    icon: Sparkles,
    monthlyPrice: 199,
    yearlyPrice: 159,
    description: "For serious investors who want every edge in the Dubai property market.",
    color: "from-blue-500 to-violet-600",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    popular: true,
    features: [
      "Everything in Basic",
      "WhatsApp real-time alerts",
      "Unlimited properties/day",
      "Advanced AI risk model",
      "Unlimited area filters",
      "Price history tracking",
      "Custom alert schedule",
      "Priority support",
    ],
    cta: "Start 7-Day Trial",
  },
  {
    id: "enterprise" as const,
    name: "Enterprise",
    icon: Building2,
    monthlyPrice: 399,
    yearlyPrice: 319,
    description: "For funds, agencies, and teams who need custom data and integrations.",
    color: "from-amber-500 to-orange-500",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
    popular: false,
    features: [
      "Everything in Premium",
      "API access",
      "Multi-seat workspace",
      "Custom data feeds",
      "Dedicated account manager",
      "White-label reports",
      "SLA guarantee",
      "Custom integrations",
    ],
    cta: "Contact Sales",
  },
]

function PricingCard({
  plan,
  billing,
}: {
  plan: (typeof plans)[0]
  billing: BillingCycle
}) {
  const { openModal } = usePricingModal()
  const price = billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice
  const saving = Math.round(((plan.monthlyPrice - plan.yearlyPrice) / plan.monthlyPrice) * 100)

  return (
    <motion.div
      whileHover={{ y: -6, rotateX: 2 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      className={`relative flex flex-col rounded-2xl border ${
        plan.popular
          ? "border-blue-500/50 shadow-2xl shadow-blue-500/20"
          : "border-white/8 shadow-sm"
      } bg-card/70 backdrop-blur overflow-hidden`}
    >
      {/* Popular ribbon */}
      {plan.popular && (
        <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500" />
      )}
      {plan.popular && (
        <div className="absolute top-4 right-4">
          <Badge className="gap-1 border-blue-500/30 bg-blue-500/15 text-blue-300 text-[11px] font-bold uppercase tracking-wider">
            <Sparkles className="size-3" />
            Most Popular
          </Badge>
        </div>
      )}

      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent" />

      <div className="relative p-7 flex flex-col flex-1">
        {/* Icon + Name */}
        <div className={`inline-flex size-11 items-center justify-center rounded-xl ${plan.iconBg} mb-5`}>
          <plan.icon className={`size-5 ${plan.iconColor}`} />
        </div>
        <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{plan.description}</p>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-end gap-1">
            <AnimatePresence mode="wait">
              <motion.span
                key={billing + price}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.2 }}
                className="text-5xl font-extrabold tracking-tight"
              >
                ${price}
              </motion.span>
            </AnimatePresence>
            <span className="text-muted-foreground text-base mb-1.5">/mo</span>
          </div>
          {billing === "yearly" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs text-emerald-400 font-semibold mt-1"
            >
              Save {saving}% · billed ${plan.yearlyPrice * 12}/year
            </motion.p>
          )}
        </div>

        {/* Features */}
        <ul className="space-y-2.5 mb-8 flex-1">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <span className={`mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${plan.color}`}>
                <Check className="size-2.5 text-white" />
              </span>
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button
          id={`pricing-cta-${plan.id}`}
          type="button"
          onClick={() => openModal(plan.id)}
          className={`w-full h-11 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${
            plan.popular
              ? `bg-gradient-to-r ${plan.color} text-white border-0 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50`
              : "bg-white/8 text-foreground border border-white/12 hover:bg-white/12"
          }`}
        >
          {plan.cta}
          <ArrowRight className="ml-2 size-4" />
        </Button>
      </div>
    </motion.div>
  )
}

export function PricingSection() {
  const [billing, setBilling] = useState<BillingCycle>("monthly")

  return (
    <section
      id="pricing"
      className="relative py-16 md:py-20 border-y border-white/8 scroll-mt-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(124,58,237,0.04) 0%, rgba(37,99,235,0.04) 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 -translate-x-1/2 -top-32 h-[400px] w-[600px] rounded-full bg-blue-600/8 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-3">Pricing</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-5">
            Simple,{" "}
            <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="max-w-xl mx-auto text-lg text-muted-foreground mb-8">
            Start free for 7 days. No credit card required. Cancel anytime.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 p-1">
            {(["monthly", "yearly"] as BillingCycle[]).map((cycle) => (
              <button
                key={cycle}
                id={`billing-toggle-${cycle}`}
                onClick={() => setBilling(cycle)}
                className={`relative rounded-lg px-5 py-2 text-sm font-semibold transition-all duration-200 capitalize ${
                  billing === cycle
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cycle}
                {cycle === "yearly" && (
                  <span className="ml-1.5 text-[10px] font-bold text-amber-400">-20%</span>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <PricingCard plan={plan} billing={billing} />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-sm text-muted-foreground"
        >
          All plans include a <strong className="text-foreground">7-day free trial</strong>. Prices in USD.
          VAT may apply. Need a custom plan?{" "}
          <a href="mailto:hello@emiratesyield.com" className="text-blue-400 hover:underline">
            Contact us.
          </a>
        </motion.p>
      </div>
    </section>
  )
}
