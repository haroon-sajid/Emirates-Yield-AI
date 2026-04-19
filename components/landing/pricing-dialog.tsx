"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, CreditCard, Shield, Check, ArrowRight, Loader2 } from "lucide-react"
import { usePricingModal } from "@/components/landing/pricing-context"
import { Button } from "@/components/ui/button"

const planDetails = {
  basic: {
    name: "Basic",
    price: "$99",
    cycle: "/month",
    color: "from-slate-500 to-slate-600",
    trial: "7-day free trial, then $99/month",
  },
  premium: {
    name: "Premium",
    price: "$199",
    cycle: "/month",
    color: "from-blue-500 to-violet-600",
    trial: "7-day free trial, then $199/month",
  },
  enterprise: {
    name: "Enterprise",
    price: "$399",
    cycle: "/month",
    color: "from-amber-500 to-orange-500",
    trial: "Custom pricing available",
  },
} as const

export function PricingDialog() {
  const { open, plan, closeModal } = usePricingModal()
  const [email, setEmail] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  // Reset on open
  useEffect(() => {
    if (open) { setDone(false); setEmail(""); setSubmitting(false) }
  }, [open])

  // Close on Escape
  useEffect(() => {
    const handle = (e: KeyboardEvent) => e.key === "Escape" && closeModal()
    window.addEventListener("keydown", handle)
    return () => window.removeEventListener("keydown", handle)
  }, [closeModal])

  const details = planDetails[plan]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitting(true)
    // Simulate Stripe/API call — replace with real loadStripe() checkout
    await new Promise((r) => setTimeout(r, 1800))
    setSubmitting(false)
    setDone(true)
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="fixed inset-x-4 top-1/2 z-50 mx-auto max-w-md -translate-y-1/2 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2"
          >
            <div className="overflow-hidden rounded-2xl border border-white/12 bg-card shadow-2xl">
              {/* Gradient top bar */}
              <div className={`h-1 bg-gradient-to-r ${details.color}`} />

              <div className="p-6">
                {/* Close button */}
                <button
                  id="pricing-modal-close"
                  type="button"
                  onClick={closeModal}
                  className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-lg bg-white/6 text-muted-foreground hover:text-foreground hover:bg-white/12 transition-colors"
                >
                  <X className="size-4" />
                </button>

                <AnimatePresence mode="wait">
                  {!done ? (
                    <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <h2 className="text-xl font-extrabold mb-1">
                        Start {details.name} Trial
                      </h2>
                      <p className="text-sm text-muted-foreground mb-6">{details.trial}. No credit card required.</p>

                      {/* Plan badge */}
                      <div className={`mb-6 flex items-center gap-3 rounded-xl bg-gradient-to-r p-px ${details.color}`}>
                        <div className="flex-1 flex items-center justify-between rounded-[11px] bg-card px-4 py-3">
                          <div>
                            <p className="font-semibold text-sm">{details.name} Plan</p>
                            <p className="text-xs text-muted-foreground">7-day free trial</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-lg">{details.price}</p>
                            <p className="text-xs text-muted-foreground">{details.cycle}</p>
                          </div>
                        </div>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-3">
                        <div>
                          <label htmlFor="trial-email" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">
                            Work Email
                          </label>
                          <input
                            id="trial-email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="w-full rounded-xl border border-white/12 bg-white/5 px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                          />
                        </div>

                        <Button
                          id="pricing-modal-submit"
                          type="submit"
                          disabled={submitting}
                          className={`w-full h-11 font-semibold bg-gradient-to-r ${details.color} text-white border-0 shadow-lg hover:opacity-90 hover:-translate-y-0.5 transition-all`}
                        >
                          {submitting ? (
                            <>
                              <Loader2 className="mr-2 size-4 animate-spin" />
                              Setting up your trial...
                            </>
                          ) : (
                            <>
                              Start Free Trial
                              <ArrowRight className="ml-2 size-4" />
                            </>
                          )}
                        </Button>
                      </form>

                      {/* Trust badges */}
                      <div className="mt-5 flex items-center justify-center gap-5 text-[11px] text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Shield className="size-3.5 text-emerald-400" />
                          256-bit SSL
                        </span>
                        <span className="flex items-center gap-1.5">
                          <CreditCard className="size-3.5 text-blue-400" />
                          Stripe secure
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Check className="size-3.5 text-amber-400" />
                          Cancel anytime
                        </span>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-emerald-500/15">
                        <Check className="size-8 text-emerald-400" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">You&apos;re on the list! 🎉</h3>
                      <p className="text-sm text-muted-foreground mb-6">
                        We&apos;ll email <strong className="text-foreground">{email}</strong> with your trial access
                        within 24 hours.
                      </p>
                      <Button
                        type="button"
                        onClick={closeModal}
                        variant="outline"
                        className="border-white/12 hover:bg-white/8"
                      >
                        Close
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
