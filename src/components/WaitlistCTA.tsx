import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { sectionViewport, smoothEase } from '@/lib/motion'

export default function WaitlistCTA() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const [loading, setLoading] = useState(false)
  const reduceMotion = useReducedMotion()

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 700))
    setDone(true)
    setLoading(false)
  }

  return (
    <section id="waitlist" className="container py-32 relative">
      <motion.div
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={sectionViewport}
        transition={{ duration: 0.6, ease: smoothEase }}
        className="flex flex-col items-center text-center max-w-2xl mx-auto"
      >
        <h2 className="text-[42px] sm:text-[56px] font-medium tracking-tight leading-[1] mb-6 text-balance text-foreground">
          Accelerate your
          <br />
          <span className="text-muted-foreground">engineering career.</span>
        </h2>
        <p className="text-[15px] sm:text-[16px] text-muted-foreground mb-10 max-w-[400px] mx-auto leading-relaxed">
          Join the fastest growing network of ambitious student engineers.
        </p>

        {done ? (
          <p className="text-[14px] text-emerald-600 dark:text-emerald-500 font-medium tracking-tight">
            You&apos;re on the list - we&apos;ll reach out with priority access.
          </p>
        ) : (
          <form onSubmit={submit} className="flex flex-col sm:flex-row gap-2.5 w-full max-w-[360px] mx-auto">
            <Input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@university.edu"
              aria-label="Email address"
              className="h-10 bg-transparent shadow-none border-border/80 focus-visible:ring-1 focus-visible:ring-ring"
            />
            <Button type="submit" disabled={loading} className="whitespace-nowrap h-10 px-5 text-[13px] font-medium shadow-none">
              {loading ? 'Processing...' : <>Sign up today <ArrowRight size={13} className="ml-1.5" /></>}
            </Button>
          </form>
        )}
      </motion.div>
    </section>
  )
}
