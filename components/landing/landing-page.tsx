"use client"

import { SiteHeader } from "@/components/landing/site-header"
import { HeroSection } from "@/components/landing/hero-section"
import { StatsSection } from "@/components/landing/stats-section"
import { ProblemSection, SolutionSection } from "@/components/landing/problem-solution"
import { BentoSection } from "@/components/landing/bento-section"
import { DemoSection } from "@/components/landing/demo-section"
import { AboutSection } from "@/components/landing/about-section"
import { ContactSection } from "@/components/landing/contact-section"
import { SiteFooter } from "@/components/landing/site-footer"

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <SiteHeader />
      <main>
        <HeroSection />
        <StatsSection />
        <ProblemSection />
        <SolutionSection />
        <BentoSection />
        <AboutSection />
        <DemoSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
