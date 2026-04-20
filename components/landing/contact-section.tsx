"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="relative py-16 md:py-20 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-card/70 p-8 backdrop-blur md:p-10"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-3">Contact</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let&apos;s Talk About Your Investment Goals</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Reach our team for demos, partnerships, or investor onboarding. We&apos;ll help you choose the right setup.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <a
              href="mailto:hello@emiratesyield.com"
              className="rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:bg-white/[0.06]"
            >
              <Mail className="size-5 text-blue-400" />
              <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">Email</p>
              <p className="mt-1 font-semibold">hello@emiratesyield.com</p>
            </a>
            <a
              href="tel:+971555123456"
              className="rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:bg-white/[0.06]"
            >
              <Phone className="size-5 text-blue-400" />
              <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">Phone</p>
              <p className="mt-1 font-semibold">+971 55 512 3456</p>
            </a>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <MapPin className="size-5 text-blue-400" />
              <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">Office</p>
              <p className="mt-1 font-semibold">Dubai, United Arab Emirates</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
