"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Sparkles, X, Link2, GitFork } from "lucide-react"

const columns = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Demo", href: "#demo" },
      { label: "Changelog", href: "#" },
      { label: "Roadmap", href: "#" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Dubai Market Reports", href: "#" },
      { label: "Yield Calculator", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Partners", href: "#" },
      { label: "Contact", href: "mailto:hello@emiratesyield.com" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Disclaimer", href: "#" },
      { label: "RERA Compliance", href: "#" },
    ],
  },
]

const socials = [
  { icon: X, label: "Twitter", href: "#" },
  { icon: Link2, label: "LinkedIn", href: "#" },
  { icon: GitFork, label: "GitHub", href: "#" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-card/30 backdrop-blur relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[600px] rounded-full bg-blue-600/5 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="py-16 grid gap-12 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4" id="footer-logo">
              <span className="flex size-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-500/30">
                <Sparkles className="size-4" />
              </span>
              <span className="text-lg font-extrabold tracking-tight">Emirates Yield</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-6">
              AI-powered real estate deal analyzer for Dubai investors. Find high-yield properties before
              everyone else.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  id={`footer-social-${s.label.toLowerCase()}`}
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all duration-200"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {columns.map((col, ci) => (
            <motion.div
              key={col.heading}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.05 }}
            >
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                {col.heading}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/6 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Emirates Yield Technologies LLC. All rights reserved.</p>
          <p className="text-[11px]">
            Not investment advice. Always consult a licensed financial advisor.{" "}
            <span className="text-muted-foreground/60">RERA-aligned data sources.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
