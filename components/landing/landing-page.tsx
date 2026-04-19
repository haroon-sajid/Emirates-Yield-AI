"use client"

import { PricingModalProvider } from "@/components/landing/pricing-context"
import { PricingDialog } from "@/components/landing/pricing-dialog"
import { SiteHeader } from "@/components/landing/site-header"
import { HeroSection } from "@/components/landing/hero-section"
import { StatsSection } from "@/components/landing/stats-section"
import { ProblemSection, SolutionSection } from "@/components/landing/problem-solution"
import { BentoSection } from "@/components/landing/bento-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { DemoSection } from "@/components/landing/demo-section"
import { SiteFooter } from "@/components/landing/site-footer"

export function LandingPage() {
  return (
    <PricingModalProvider>
      <div className="min-h-screen bg-background text-foreground antialiased">
        <SiteHeader />
        <main>
          <HeroSection />
          <StatsSection />
          <ProblemSection />
          <SolutionSection />
          <BentoSection />
          <PricingSection />
          <DemoSection />
        </main>
        <SiteFooter />
        <PricingDialog />
      </div>
    </PricingModalProvider>
  )
}
