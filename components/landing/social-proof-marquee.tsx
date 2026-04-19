"use client"

import { motion } from "framer-motion"
import { Building2, TrendingUp, Star, MapPin, Award } from "lucide-react"

const logos = [
  { name: "Bayut", icon: Building2 },
  { name: "Property Finder", icon: Building2 },
  { name: "Dubizzle", icon: Building2 },
  { name: "RERA Dubai", icon: Award },
  { name: "DLD", icon: Building2 },
  { name: "Emaar", icon: Building2 },
  { name: "Nakheel", icon: MapPin },
  { name: "Damac", icon: TrendingUp },
]

const testimonials = [
  { name: "Ahmed R.", role: "Property Investor, Abu Dhabi", text: "Found a 9.2% yield deal in JVC in my first week.", rating: 5 },
  { name: "Sarah M.", role: "Portfolio Manager, Dubai", text: "Saves me 4 hours every morning. Worth every dirham.", rating: 5 },
  { name: "James T.", role: "Expat Investor, London", text: "The WhatsApp alerts are a game-changer for off-plan.", rating: 5 },
]

export function SocialProofMarquee() {
  return (
    <section className="py-16 overflow-hidden border-b border-white/6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
          Trusted data from
        </p>
      </div>

      {/* Marquee track */}
      <div className="relative">
        {/* Fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 gap-8 items-center">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 rounded-xl border border-white/8 bg-card/50 px-5 py-3 text-sm font-semibold text-muted-foreground whitespace-nowrap hover:border-white/20 hover:text-foreground transition-all duration-200"
              >
                <logo.icon className="size-4 text-blue-400/60" />
                {logo.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid gap-4 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-white/8 bg-card/50 backdrop-blur p-5"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="size-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">"{t.text}"</p>
              <div className="flex items-center gap-2.5">
                <div className="flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-600 text-white text-xs font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-xs font-semibold">{t.name}</p>
                  <p className="text-[10px] text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
