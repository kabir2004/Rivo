import { motion, useReducedMotion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { sectionViewport, smoothEase } from '@/lib/motion'

const stats = [
  { v: '3.4x', l: 'Increase in technical recruiter engagement' },
  { v: '14 Days', l: 'Average velocity to initial technical interview' },
  { v: 'Top 5%', l: 'Exclusive technical roles at high-growth engineering teams' },
]

export default function Signal() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="outcomes" className="container py-24">
      <motion.div
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={sectionViewport}
        transition={{ duration: 0.6, ease: smoothEase }}
        className="max-w-3xl mb-20"
      >
        <h2 className="text-[32px] sm:text-[44px] font-semibold tracking-[-0.025em] leading-[1.12] text-balance">
          Conventional platforms prioritize volume.
          <br className="hidden sm:block" />
          <span className="text-muted-foreground">We prioritize the hiring lifecycle.</span>
        </h2>
      </motion.div>

      <motion.div
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={sectionViewport}
        transition={{ duration: 0.5, delay: 0.08, ease: smoothEase }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4"
      >
        {stats.map((s, i) => (
          <Card key={i}>
            <CardContent className="p-8">
              <p className="text-[44px] font-semibold tracking-[-0.03em] leading-none mb-2">
                {s.v}
              </p>
              <p className="text-[13px] text-muted-foreground leading-snug max-w-[220px]">
                {s.l}
              </p>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </section>
  )
}
