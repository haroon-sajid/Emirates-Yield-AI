import { z } from "zod"

export const subscribeSchema = z.object({
  email: z.string().email(),
  plan: z.enum(["basic", "premium", "enterprise"]),
  paymentMethodId: z.string().min(1),
  agreedToTerms: z.boolean().refine((v) => v === true, "Accept the terms to continue"),
})

export const waitlistSchema = z.object({
  email: z.string().email(),
  plan: z.enum(["basic", "premium", "enterprise"]).optional(),
})

export const contactSchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email(),
  message: z.string().min(10).max(5000),
})

export const newsletterSchema = z.object({
  email: z.string().email(),
})
