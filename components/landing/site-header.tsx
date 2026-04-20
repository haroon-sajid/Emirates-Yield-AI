"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/landing/theme-toggle"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "AI Tools", href: "#ai-tools" },
  { label: "Insights", href: "#insights" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-white/8 bg-background/80 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            id="header-logo"
            className="flex items-center gap-2.5 font-extrabold text-lg tracking-tight"
          >
            <span className="flex size-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-500/25">
              <Sparkles className="size-4" />
            </span>
            <span>
              Emirates <span className="gradient-text">Yield</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="transition-colors duration-150 hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="/signin"
              className="hidden h-9 items-center rounded-lg border border-slate-200 px-4 text-sm font-semibold text-slate-700 transition-all hover:-translate-y-0.5 hover:bg-slate-100 dark:border-white/15 dark:text-slate-100 dark:hover:bg-white/10 sm:inline-flex"
            >
              Sign In
            </Link>
            <Button asChild id="header-cta" className="hidden h-9 px-5 text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-0.5 hover:shadow-blue-500/40 sm:inline-flex">
              <Link href="/signup">Get Started</Link>
            </Button>
            {/* Mobile menu button */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-muted-foreground hover:text-foreground md:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 border-b border-white/8 bg-background/95 backdrop-blur-xl shadow-xl md:hidden"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-white/6 hover:text-foreground transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/signin"
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex h-10 w-full items-center justify-center rounded-lg border border-slate-200 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-white/15 dark:text-slate-100 dark:hover:bg-white/10"
              >
                Sign In
              </Link>
              <Button asChild className="mt-2 h-10 w-full bg-blue-600 text-white hover:bg-blue-500">
                <Link href="/signup" onClick={() => setMobileOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
