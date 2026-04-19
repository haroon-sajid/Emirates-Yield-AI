"use client"

import * as React from "react"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe, type StripeElementsOptions } from "@stripe/stripe-js"

const pk = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
const stripePromise = pk ? loadStripe(pk) : null

export function StripeElementsProvider({
  children,
  options,
}: {
  children: React.ReactNode
  options?: StripeElementsOptions
}) {
  if (!stripePromise) {
    return <>{children}</>
  }
  return (
    <Elements stripe={stripePromise} options={options}>
      {children}
    </Elements>
  )
}

export function hasStripePublishableKey() {
  return Boolean(pk)
}
