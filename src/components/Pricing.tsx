import { useState } from 'react'
import { motion, useReducedMotion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { sectionViewport, smoothEase } from '@/lib/motion'
import { cn } from '@/lib/utils'

function SpotlightCard({ children, className }: { children: React.ReactNode, className?: string }) {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      className={cn(
        "group relative h-full w-full flex flex-col will-change-transform z-10",
        className
      )}
      onMouseMove={handleMouseMove}
    >
      {/* Magical Alive Background Glow - Only visible strictly on hover */}
      <div 
        className="absolute -inset-[1px] rounded-[14px] bg-gradient-to-tr from-indigo-500/40 via-purple-500/40 to-cyan-400/40 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" 
      />

      <div className="relative h-full w-full rounded-xl border border-border/60 group-hover:border-transparent bg-card overflow-hidden flex flex-col transition-colors duration-500">
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                400px circle at ${mouseX}px ${mouseY}px,
                rgba(150, 150, 150, 0.12),
                transparent 80%
              )
            `,
          }}
        />
        <div className="relative z-20 flex flex-col h-full flex-1 p-8 md:p-10">
          {children}
        </div>
      </div>
    </div>
  )
}

export default function Pricing() {
  const reduceMotion = useReducedMotion()
  const [aiTier, setAiTier] = useState<'Basic' | 'Pro'>('Pro')

  return (
    <section id="pricing" className="container py-28 relative">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center mb-16 px-4">
        <h2 className="text-3xl md:text-[40px] font-medium tracking-tight leading-[1.1] text-foreground text-balance">
          Transparent pricing for your career.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto px-4">
        {/* Free Tier */}
        <motion.div
           initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={sectionViewport}
           whileHover={reduceMotion ? {} : { y: -4 }}
           transition={{ duration: 0.5, ease: smoothEase }}
        >
          <SpotlightCard>
            {/* Header Lock */}
            <div className="h-[84px]">
              <h3 className="text-[20px] font-semibold tracking-tight">Free</h3>
              <p className="text-[14px] text-muted-foreground mt-2">Get started, no card needed.</p>
            </div>
            
            {/* Price Lock */}
            <div className="h-[60px] flex items-end">
              <span className="text-5xl font-semibold tracking-tight leading-none">$0</span>
              <span className="text-muted-foreground text-[14px] font-medium ml-1.5 mb-1.5">/mo</span>
            </div>

            {/* Post-Price Extension Lock */}
            <div className="h-[44px] mt-4 mb-8 flex items-center">
              {/* Empty state for alignment */}
            </div>

            <ul className="space-y-4 mb-12 flex-1">
              {['Browse up to 100 job listings', 'Basic job search & filters', 'Application tracking'].map(f => (
                <li key={f} className="flex items-start gap-3">
                  <Check size={16} className="text-foreground shrink-0 mt-0.5" />
                  <span className="text-[14px] text-muted-foreground leading-tight">{f}</span>
                </li>
              ))}
            </ul>
            
            <Button variant="outline" className="w-full font-medium bg-background hover:bg-foreground hover:text-background border-border/80 shadow-none h-11 text-[14px] transition-all">
              Get Started
            </Button>
          </SpotlightCard>
        </motion.div>

        {/* Rivo Pass */}
        <motion.div
           initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={sectionViewport}
           whileHover={reduceMotion ? {} : { y: -4 }}
           transition={{ duration: 0.5, delay: 0.1, ease: smoothEase }}
        >
          <SpotlightCard>
            {/* Header Lock */}
            <div className="h-[84px]">
              <div className="flex items-center justify-between">
                <h3 className="text-[20px] font-semibold tracking-tight">Rivo Pass</h3>
                <span className="text-[11px] font-semibold tracking-wide text-muted-foreground bg-secondary px-3 py-1 rounded-full border border-border/50">Popular</span>
              </div>
              <p className="text-[14px] text-muted-foreground mt-2">Job platform + 30 AI credits.</p>
            </div>
            
            {/* Price Lock */}
            <div className="h-[60px] flex items-end">
              <span className="text-5xl font-semibold tracking-tight leading-none">$14.99</span>
              <span className="text-muted-foreground text-[14px] font-medium ml-1.5 mb-1.5">/mo</span>
            </div>

            {/* Post-Price Extension Lock */}
            <div className="h-[44px] mt-4 mb-8 flex items-center">
              <div className="inline-flex items-center text-[12px] text-muted-foreground font-medium rounded-md bg-secondary/40 px-2.5 py-1.5 border border-border/50 w-full sm:w-auto">
                Code <span className="text-foreground font-mono mx-1.5 px-1 bg-background rounded shadow-sm border border-border/40">RIVOLAUNCHED</span> for 25% off
              </div>
            </div>

            <ul className="space-y-4 mb-12 flex-1">
              {[
                'Access to all co-op & internship roles',
                'One-click apply to thousands of jobs',
                'Smart role matching for your resume',
                'Track every application in one place',
                '30 free AI interview credits'
              ].map(f => (
                <li key={f} className="flex items-start gap-3">
                  <Check size={16} className="text-foreground shrink-0 mt-0.5" />
                  <span className="text-[14px] text-muted-foreground leading-tight">{f}</span>
                </li>
              ))}
            </ul>

            <Button variant="outline" className="w-full font-medium bg-background hover:bg-foreground hover:text-background border-border/80 shadow-none h-11 text-[14px] transition-all">
              Get Started
            </Button>
          </SpotlightCard>
        </motion.div>

        {/* Rivo AI */}
        <motion.div
           initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={sectionViewport}
           whileHover={reduceMotion ? {} : { y: -4 }}
           transition={{ duration: 0.5, delay: 0.2, ease: smoothEase }}
        >
          <SpotlightCard>
            {/* Header Lock */}
            <div className="h-[84px]">
              <h3 className="text-[20px] font-semibold tracking-tight">Rivo AI</h3>
              <p className="text-[14px] text-muted-foreground mt-2">AI-powered mock interviews.</p>
            </div>
            
            {/* Price Lock */}
            <div className="h-[60px] flex items-end">
              <motion.div 
                key={aiTier}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-5xl font-semibold tracking-tight leading-none">{aiTier === 'Pro' ? '$19.99' : '$9.99'}</span>
              </motion.div>
              <span className="text-muted-foreground text-[14px] font-medium ml-1.5 mb-1.5">/mo</span>
            </div>

            {/* Post-Price Extension Lock */}
            <div className="h-[44px] mt-4 mb-8 flex items-center">
              <div className="bg-secondary/30 border border-border/40 rounded-lg p-1.5 flex gap-1 relative overflow-hidden w-[200px] h-full">
                {['Basic', 'Pro'].map((tier) => (
                  <button 
                    key={tier}
                    onClick={() => setAiTier(tier as 'Basic' | 'Pro')}
                    className={cn(
                      "flex-1 text-[13px] font-medium rounded-md transition-colors relative z-10 flex items-center justify-center",
                      aiTier === tier ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {aiTier === tier && (
                      <motion.div
                        layoutId="pricing-tier-bg"
                        className="absolute inset-0 bg-background rounded-[4px] shadow-sm border border-border/50 -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {tier}
                  </button>
                ))}
              </div>
            </div>

            <ul className="space-y-4 mb-12 flex-1">
              {[
                `${aiTier === 'Pro' ? '90' : '30'} interview credits a month`,
                'Realistic AI-powered mock interviews',
                'Detailed feedback after each session',
                'Questions tailored to your target role'
              ].map(f => (
                <motion.li 
                  layout="position"
                  key={f} 
                  className="flex items-start gap-3"
                >
                  <Check size={16} className="text-foreground shrink-0 mt-0.5" />
                  <span className="text-[14px] text-muted-foreground leading-tight">{f}</span>
                </motion.li>
              ))}
            </ul>

            <Button variant="outline" className="w-full font-medium bg-background hover:bg-foreground hover:text-background border-border/80 shadow-none h-11 text-[14px] transition-all">
              Get Started
            </Button>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  )
}
