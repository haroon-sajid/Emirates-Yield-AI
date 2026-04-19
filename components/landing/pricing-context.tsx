"use client"

import * as React from "react"
import { useRouter } from "next/navigation"

export type PlanId = "basic" | "premium" | "enterprise"

type Ctx = {
  open: boolean
  plan: PlanId
  openModal: (plan?: PlanId) => void
  closeModal: () => void
}

const PricingModalContext = React.createContext<Ctx | null>(null)

export function PricingModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)
  const [plan, setPlan] = React.useState<PlanId>("premium")
  const router = useRouter()

  const openModal = React.useCallback((p?: PlanId) => {
    if (p) setPlan(p)
    router.push("/signup" + (p && p !== "premium" ? `?plan=${p}` : ""))
  }, [router])

  const closeModal = React.useCallback(() => setOpen(false), [])

  const value = React.useMemo(
    () => ({ open, plan, openModal, closeModal }),
    [open, plan, openModal, closeModal]
  )

  return (
    <PricingModalContext.Provider value={value}>
      {children}
    </PricingModalContext.Provider>
  )
}

export function usePricingModal() {
  const ctx = React.useContext(PricingModalContext)
  if (!ctx) throw new Error("usePricingModal must be used within PricingModalProvider")
  return ctx
}
