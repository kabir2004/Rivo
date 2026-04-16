import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Dashboard from './Dashboard'
import { Button } from '@/components/ui/button'
import { smoothEase } from '@/lib/motion'

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -18])
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -12])
  const ctaY = useTransform(scrollYProgress, [0, 1], [0, -9])
  const dashboardY = useTransform(scrollYProgress, [0, 1], [0, -24])
  const dashboardScale = useTransform(scrollYProgress, [0, 1], [1, 0.985])
  const dashboardOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.9])

  const titleYSmooth = useSpring(titleY, { stiffness: 85, damping: 22, mass: 0.45 })
  const subtitleYSmooth = useSpring(subtitleY, { stiffness: 88, damping: 22, mass: 0.45 })
  const ctaYSmooth = useSpring(ctaY, { stiffness: 90, damping: 22, mass: 0.45 })
  const dashboardYSmooth = useSpring(dashboardY, { stiffness: 82, damping: 24, mass: 0.5 })
  const dashboardScaleSmooth = useSpring(dashboardScale, { stiffness: 95, damping: 24, mass: 0.45 })
  const dashboardOpacitySmooth = useSpring(dashboardOpacity, { stiffness: 95, damping: 24, mass: 0.45 })

  return (
    <section ref={sectionRef} className="container pt-36 pb-24 md:pt-44 md:pb-32 max-w-5xl relative overflow-hidden">
      <div className="flex flex-col items-center text-center relative z-10 px-4">
        


        {/* Profound, quiet, Vercel/Apple-like typography */}
        <motion.h1
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: smoothEase, delay: 0.05 }}
          style={reduceMotion ? undefined : { y: titleYSmooth }}
          className="w-full max-w-[700px] text-balance text-4xl sm:text-5xl md:text-[54px] font-medium leading-[1.1] tracking-tight mb-6 text-foreground"
        >
          The modern standard for early careers.
        </motion.h1>

        {/* Stark, highly refined subtext */}
        <motion.p
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: smoothEase }}
          style={reduceMotion ? undefined : { y: subtitleYSmooth }}
          className="text-[15px] md:text-[16px] text-muted-foreground/90 max-w-[540px] leading-[1.6] mb-10 text-balance font-normal"
        >
          Discover curated technical roles, build an employer-ready identity, and govern your application lifecycle in one unified platform.
        </motion.p>

        {/* Minimalist, crisp CTAs */}
        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: smoothEase }}
          style={reduceMotion ? undefined : { y: ctaYSmooth }}
          className="flex flex-row items-center gap-3 mb-24"
        >
          <Button asChild className="h-9 px-5 text-[13px] font-medium rounded-md bg-foreground text-background hover:bg-foreground/90 transition-all border border-transparent">
            <a href="#waitlist">
              Create an account
            </a>
          </Button>
          <Button asChild variant="outline" className="h-9 px-5 text-[13px] font-medium rounded-md bg-transparent hover:bg-secondary/50 backdrop-blur-sm transition-all border-border shadow-none">
            <a href="#login">Sign in</a>
          </Button>
        </motion.div>

        {/* Hyper-clean dashboard mock presentation */}
        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: smoothEase }}
          style={
            reduceMotion
              ? undefined
              : {
                  y: dashboardYSmooth,
                  scale: dashboardScaleSmooth,
                  opacity: dashboardOpacitySmooth,
                }
          }
          className="w-full max-w-[1040px] mx-auto relative"
          id="product"
        >
          {/* Vercel-style top glow line */}
          <div className="absolute -top-[1px] inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-foreground/30 to-transparent w-3/4 mx-auto z-20" />
          
          <div className="rounded-xl border border-border/40 bg-background overflow-hidden relative z-10">
            {/* Minimalist Top Bar, no huge MacOS buttons, just a clean line */}
            <div className="h-10 bg-background border-b border-border/40 flex items-center px-4 justify-between">
              <div className="flex gap-1.5 opacity-40 hover:opacity-100 transition-opacity">
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30 border border-border/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30 border border-border/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30 border border-border/50" />
              </div>
              <div className="flex items-center gap-2 text-[11px] font-medium text-muted-foreground/60 select-none">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                rivoco/app
              </div>
              <div className="w-10" />
            </div>
            {/* Content injected here */}
            <div className="bg-background">
              <Dashboard />
            </div>
          </div>
          
          {/* Bottom reflection/fade */}
          <div className="absolute -bottom-24 inset-x-0 h-48 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  )
}
