import { motion, useReducedMotion } from 'framer-motion'
import { ShieldCheck, Scale, Building2, TimerReset } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { sectionViewport, smoothEase } from '@/lib/motion'

const standards = [
  {
    icon: ShieldCheck,
    title: 'Student-first data handling',
    body: 'Profile visibility, recruiter access, and communication settings stay explicit and controlled by the student.',
  },
  {
    icon: Building2,
    title: 'Verified startup opportunities',
    body: 'Roles are curated for quality and startup fit so students spend time on high-signal opportunities, not noise.',
  },
  {
    icon: Scale,
    title: 'Transparent hiring expectations',
    body: 'Clear role requirements, practical responsibilities, and concise timelines reduce ambiguity for both sides.',
  },
  {
    icon: TimerReset,
    title: 'Operational response discipline',
    body: 'RIVO is built around measurable follow-up loops, stage tracking, and consistent candidate communication.',
  },
]

export default function Standards() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="standards" className="container py-20">
      <motion.div
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={sectionViewport}
        transition={{ duration: 0.5, ease: smoothEase }}
        className="max-w-3xl mb-12"
      >
        <h2 className="text-[32px] sm:text-[44px] font-semibold tracking-[-0.025em] leading-[1.12] text-balance">
          Built with startup-grade rigor.
          <span className="text-muted-foreground"> Designed to earn trust from students, operators, and investors.</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4">
        {standards.map((item, i) => (
          <motion.div
            key={item.title}
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={sectionViewport}
            transition={{ duration: 0.45, delay: i * 0.05, ease: smoothEase }}
          >
            <Card className="h-full">
              <CardHeader className="pb-3">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border/70 bg-secondary">
                  <item.icon size={18} className="text-muted-foreground" />
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {item.body}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
