"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, PlayCircle } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-16"
    >
      {/* ── Animated background ── */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Radial gradient base */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(37,99,235,0.30) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 0%, rgba(124,58,237,0.20) 0%, transparent 60%), radial-gradient(ellipse 50% 30% at 20% 10%, rgba(6,182,212,0.12) 0%, transparent 60%)",
          }}
        />

        {/* Animated light rays (like HashLogics) */}
        <motion.div
          className="absolute left-1/2 top-[-30%] h-[800px] w-[120%] -translate-x-1/2"
          style={{
            background:
              "conic-gradient(from 0deg at 50% 0%, transparent 0deg, rgba(37,99,235,0.08) 30deg, transparent 60deg, rgba(124,58,237,0.06) 120deg, transparent 150deg, rgba(37,99,235,0.08) 210deg, transparent 240deg, rgba(124,58,237,0.06) 300deg, transparent 330deg, transparent 360deg)",
          }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        />

        {/* Pulsing orb */}
        <motion.div
          className="absolute left-1/2 top-[10%] h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600/20 via-violet-500/15 to-purple-600/20 blur-[100px]"
          animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Real Estate Theme Skyline */}
        <div className="absolute bottom-0 left-0 right-0 h-[25vh] min-h-[150px] opacity-[0.03] dark:opacity-[0.06] pointer-events-none flex items-end justify-center overflow-hidden">
          <svg viewBox="0 0 1200 200" preserveAspectRatio="none" className="w-full h-full text-blue-900 dark:text-white fill-current">
            <path d="M0,200 L0,180 L20,180 L20,140 L50,140 L50,160 L80,160 L80,90 L110,90 L110,150 L140,150 L140,50 L160,50 L160,130 L190,130 L190,70 L230,70 L230,170 L260,170 L260,110 L300,110 L300,40 L340,40 L340,120 L380,120 L380,30 L420,30 L420,150 L460,150 L460,80 L510,80 L510,140 L550,140 L550,20 L580,20 L580,130 L620,130 L620,60 L660,60 L660,160 L700,160 L700,90 L750,90 L750,120 L790,120 L790,50 L840,50 L840,140 L880,140 L880,70 L930,70 L930,150 L960,150 L960,80 L1010,80 L1010,130 L1050,130 L1050,40 L1090,40 L1090,160 L1130,160 L1130,100 L1170,100 L1170,180 L1200,180 L1200,200 Z" />
          </svg>
        </div>
      </div>

      {/* ── Content Split Layout ── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT COLUMN */}
          <div className="text-left pt-10 pb-12 lg:py-0">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.02em] leading-[1.15] text-balance mb-6"
            >
              FIND HIGH-ROI DUBAI PROPERTIES <span className="gradient-text">BEFORE</span> EVERYONE ELSE.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-xl text-lg text-slate-600 dark:text-muted-foreground leading-relaxed mb-8"
            >
              AI-powered Dubai property intelligence that ranks investment opportunities with verified ROI, risk, and growth signals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <Link
                href="/signup"
                className={`${buttonVariants()} h-12 min-w-[170px] rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-500/40`}
              >
                <span className="inline-flex items-center justify-center gap-2 whitespace-nowrap">
                  Get Started
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover/button:translate-x-0.5" />
                </span>
              </Link>
              <Link
                href="#demo"
                className={`${buttonVariants({ variant: "outline" })} h-12 min-w-[170px] rounded-xl border-slate-300/80 bg-white/80 px-6 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-slate-100 dark:hover:border-white/25 dark:hover:bg-white/10`}
              >
                <span className="inline-flex items-center justify-center gap-2 whitespace-nowrap">
                  <PlayCircle className="size-4" />
                  View Demo
                </span>
              </Link>
            </motion.div>

            {/* Stats mimicking reference */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="mt-8 flex flex-wrap items-center gap-x-12 gap-y-6 border-t border-slate-200 pt-8 dark:border-white/10"
            >
               <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-muted-foreground mb-1">Properties Analyzed</p>
                  <h3 className="text-3xl font-bold">1.2K<span className="text-blue-600 dark:text-blue-500">+</span></h3>
               </div>
               <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-muted-foreground mb-1">Active Investors</p>
                  <h3 className="text-3xl font-bold">150<span className="text-blue-600 dark:text-blue-500">+</span></h3>
               </div>
               <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-muted-foreground mb-1">Cities & Regions</p>
                  <h3 className="text-3xl font-bold">45<span className="text-blue-600 dark:text-blue-500">+</span></h3>
               </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative h-[650px] hidden lg:block w-full">
             {/* Circular dashed line */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full border-[1.5px] border-dashed border-slate-300 dark:border-white/20" />

             {/* Left slanted image */}
             <motion.div 
               className="absolute top-[8%] left-[5%] w-[240px] h-[360px] z-10"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3, duration: 0.6 }}
             >
               {/* Background shape */}
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/80 to-cyan-400/80 translate-x-4 translate-y-4" style={{ clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0% 100%)" }} />
               <Image 
                 src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop" 
                 fill
                 className="object-cover shadow-lg"
                 style={{ clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0% 100%)" }}
                 alt="Dubai architecture"
                 priority
               />
             </motion.div>

             {/* Right slanted image */}
             <motion.div 
               className="absolute bottom-[8%] right-[5%] w-[260px] h-[380px] z-20"
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4, duration: 0.6 }}
             >
               {/* Background shape */}
               <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/80 to-purple-400/80 -translate-x-4 translate-y-4" style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)" }} />
              <Image 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop" 
                 fill
                 className="object-cover shadow-lg bg-slate-800"
                 style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)" }}
                 alt="Dubai real estate"
               />
             </motion.div>

             {/* Play button */}
             <motion.div 
               className="absolute top-[8%] right-[10%] flex items-center justify-center size-[130px] rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 cursor-pointer shadow-xl z-30"
               whileHover={{ scale: 1.05 }}
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.6, type: "spring" }}
             >
               <svg viewBox="0 0 100 100" className="absolute inset-2 w-[114px] h-[114px] animate-[spin_10s_linear_infinite]">
                 <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="none" />
                 <text fontSize="11" fontWeight="bold" letterSpacing="2.5" fill="currentColor">
                   <textPath href="#circlePath" startOffset="0%">WATCH OUR VIDEO • WATCH OUR VIDEO • </textPath>
                 </text>
               </svg>
                 <div className="size-16 bg-blue-600 text-white rounded-full flex items-center justify-center relative z-10 shadow-inner border-[3px] border-slate-900 dark:border-white">
                  <PlayCircle className="size-5 ml-1 fill-white" />
               </div>
             </motion.div>

             {/* Starburst */}
             <motion.div 
               className="absolute bottom-[22%] left-[15%] size-14 bg-blue-600 text-white z-30 drop-shadow-md"
               style={{ clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" }}
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             />
          </div>
        </div>
      </div>
    </section>
  )
}
