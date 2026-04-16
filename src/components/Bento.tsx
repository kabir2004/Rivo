import { motion, useReducedMotion } from 'framer-motion'
import { Check, Video } from 'lucide-react'
import { cn } from '@/lib/utils'
import { sectionViewport, smoothEase } from '@/lib/motion'

/* ─── Primitives ──────────────────────────────────────────────────────────── */

function Card({
  className,
  delay = 0,
  children,
}: {
  className?: string
  delay?: number
  children: React.ReactNode
}) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={sectionViewport}
      transition={{ duration: 0.45, delay, ease: smoothEase }}
      className={cn(
        'relative overflow-hidden rounded-xl border border-border/80 bg-background p-5 flex flex-col',
        className
      )}
    >
      {children}
    </motion.div>
  )
}

function Logo({ src, alt, size = 16 }: { src: string; alt: string; size?: number }) {
  return (
    <div className="w-7 h-7 rounded-md border border-border/60 bg-background flex items-center justify-center overflow-hidden shrink-0">
      <img src={src} alt={alt} width={size} height={size} className="object-contain" loading="lazy" />
    </div>
  )
}

function CardLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-[11px] font-medium text-muted-foreground mb-3">{children}</p>
}

/* ─── Cards ───────────────────────────────────────────────────────────────── */

function HeadlineCard({ className }: { className?: string }) {
  const stats = [
    { v: '3.4x', label: 'Recruiter engagement' },
    { v: '14 days', label: 'To first interview' },
    { v: 'Top 5%', label: 'Exclusive roles' },
  ]
  return (
    <Card delay={0} className={cn('justify-between gap-8', className)}>
      <div>
        <CardLabel>Platform</CardLabel>
        <h3 className="text-[24px] font-medium tracking-tight leading-[1.2] text-foreground mb-2.5">
          Rivo is different.
        </h3>
        <p className="text-[13px] text-muted-foreground leading-relaxed max-w-[260px]">
          Built for Canadian co-op and internship students. Not a job board, a hiring system.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border/60">
        {stats.map((s) => (
          <div key={s.v}>
            <p className="text-[18px] font-semibold tracking-tight text-foreground leading-none mb-1.5">{s.v}</p>
            <p className="text-[11px] text-muted-foreground leading-snug">{s.label}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}

function RolesCard() {
  const logos = [
    { src: '/logos/linear.svg', alt: 'Linear' },
    { src: '/logos/vercel.svg', alt: 'Vercel' },
    { src: '/logos/openai.svg', alt: 'OpenAI' },
    { src: '/logos/stripe.svg', alt: 'Stripe' },
    { src: '/logos/notion.svg', alt: 'Notion' },
    { src: '/logos/figma.svg', alt: 'Figma' },
  ]
  return (
    <Card delay={0.06} className="justify-between">
      <div>
        <CardLabel>Roles</CardLabel>
        <p className="text-[48px] font-semibold tracking-[-0.04em] text-foreground leading-none">5,371</p>
        <p className="text-[12px] text-muted-foreground mt-1.5">across 3,000+ career pages</p>
      </div>
      <div className="flex flex-wrap gap-2 mt-5">
        {logos.map((l) => (
          <Logo key={l.alt} src={l.src} alt={l.alt} />
        ))}
        <div className="w-7 h-7 rounded-md border border-border/60 bg-secondary/40 flex items-center justify-center">
          <span className="text-[10px] font-medium text-muted-foreground">+</span>
        </div>
      </div>
    </Card>
  )
}

function FiltersCard() {
  const filters = [
    { label: 'Co-op & Internship only', active: true },
    { label: 'Canada-based roles', active: true },
    { label: 'No senior positions', active: true },
    { label: 'Remote friendly', active: false },
  ]
  return (
    <Card delay={0.1} className="justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <CardLabel>Filters</CardLabel>
          <span className="text-[10px] font-medium px-1.5 py-0.5 rounded border border-border/60 text-muted-foreground -mt-2.5">
            3 active
          </span>
        </div>
        <div className="space-y-2.5">
          {filters.map((f) => (
            <div key={f.label} className="flex items-center gap-2.5">
              <div
                className={cn(
                  'w-3.5 h-3.5 rounded-sm border flex items-center justify-center shrink-0',
                  f.active ? 'bg-foreground border-foreground' : 'border-border/60'
                )}
              >
                {f.active && <Check size={8} className="text-background" strokeWidth={3} />}
              </div>
              <span className={cn('text-[12px]', f.active ? 'text-foreground' : 'text-muted-foreground/40')}>
                {f.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-4 border-t border-border/60 mt-4">
        <div className="flex items-baseline justify-between mb-2">
          <span className="text-[11px] text-muted-foreground">Results</span>
          <span className="text-[22px] font-semibold tracking-tight text-foreground leading-none">312</span>
        </div>
        <div className="h-[3px] rounded-full bg-secondary overflow-hidden">
          <div className="h-full w-[39%] rounded-full bg-foreground" />
        </div>
        <p className="mt-1.5 text-[10px] text-muted-foreground/60">vs 12,400 unfiltered</p>
      </div>
    </Card>
  )
}

function PipelineCard({ className }: { className?: string }) {
  const stages = [
    {
      label: 'Saved',
      logos: [
        { src: '/logos/google.svg', alt: 'Google' },
        { src: '/logos/linear.svg', alt: 'Linear' },
        { src: '/logos/vercel.svg', alt: 'Vercel' },
      ],
    },
    {
      label: 'Applied',
      logos: [
        { src: '/logos/cursor-icon.png', alt: 'Cursor' },
        { src: '/logos/rbc.svg', alt: 'RBC' },
      ],
    },
    {
      label: 'Interview',
      logos: [{ src: '/logos/figma-icon.png', alt: 'Figma' }],
    },
    {
      label: 'Offer',
      logos: [{ src: '/logos/ramp.png', alt: 'Ramp' }],
    },
  ]
  return (
    <Card delay={0.14} className={className}>
      <CardLabel>Pipeline</CardLabel>
      <div className="grid grid-cols-4 gap-2 flex-1">
        {stages.map((stage) => (
          <div key={stage.label} className="min-w-0">
            <p className="text-[11px] font-medium text-foreground mb-2.5 truncate">{stage.label}</p>
            <div className="space-y-1.5">
              {stage.logos.map((l) => (
                <div
                  key={l.alt}
                  className="flex items-center gap-1.5 px-2 py-1.5 rounded-md border border-border/60 bg-secondary/20 hover:bg-secondary/50 transition-colors min-w-0"
                >
                  <Logo src={l.src} alt={l.alt} size={13} />
                  <span className="text-[11px] font-medium text-foreground truncate">{l.alt}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

function InterviewCard({ className }: { className?: string }) {
  return (
    <Card delay={0.18} className={className}>
      <CardLabel>AI Interview</CardLabel>
      <div className="flex gap-2.5 flex-1 min-h-[120px]">
        <div className="flex-1 rounded-lg border border-border/70 bg-secondary/20 relative overflow-hidden flex items-end p-2.5">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-background border border-border/60 flex items-center justify-center">
              <Video size={12} className="text-muted-foreground" />
            </div>
          </div>
          <span className="relative z-10 flex items-center gap-1.5 text-[9px] font-medium text-foreground bg-background/90 px-1.5 py-0.5 rounded border border-border/40">
            <span className="w-1 h-1 rounded-full bg-red-400 animate-pulse" />
            Speaking
          </span>
        </div>
        <div className="flex-1 rounded-lg border border-border/70 bg-secondary/20 relative overflow-hidden flex items-end p-2.5">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-background border border-border/60 flex items-center justify-center">
              <span className="text-[10px] font-semibold text-foreground">You</span>
            </div>
          </div>
          <span className="relative z-10 text-[9px] font-medium text-muted-foreground bg-background/90 px-1.5 py-0.5 rounded border border-border/40">
            Camera on
          </span>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-[13px] font-medium text-foreground mb-1">Practice with AI</p>
        <p className="text-[12px] text-muted-foreground leading-relaxed">
          Role-specific questions, real-time feedback, instant debrief.
        </p>
      </div>
    </Card>
  )
}

function LeaderboardCard() {
  const entries = [
    { rank: 1, name: 'Sarah M.', pts: '2,450', you: false },
    { rank: 2, name: 'James K.', pts: '2,180', you: false },
    { rank: 3, name: 'You', pts: '1,920', you: true },
  ]
  return (
    <Card delay={0.22} className="justify-between">
      <div>
        <CardLabel>Leaderboard</CardLabel>
        <div className="space-y-1.5">
          {entries.map((e) => (
            <div
              key={e.rank}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg border',
                e.you ? 'border-foreground/20 bg-secondary/50' : 'border-border/50'
              )}
            >
              <span className="text-[10px] text-muted-foreground tabular-nums w-3">#{e.rank}</span>
              <span className="text-[12px] font-medium text-foreground flex-1">{e.name}</span>
              <span className="text-[11px] font-semibold text-foreground tabular-nums">{e.pts}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="text-[11px] text-muted-foreground mt-5">
        Compete with students across Canada.
      </p>
    </Card>
  )
}

/* ─── Section ─────────────────────────────────────────────────────────────── */

export default function Bento() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="px-4 max-w-5xl mx-auto">
      <motion.div
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={sectionViewport}
        transition={{ duration: 0.5, ease: smoothEase }}
        className="mb-10"
      >
        <h2 className="text-3xl md:text-[40px] font-medium tracking-tight leading-[1.1] text-foreground">
          Everything you need,{' '}
          <span className="text-muted-foreground">in one place.</span>
        </h2>
      </motion.div>

      {/*
        Mobile:  single column — all cards stack
        Tablet:  2 columns — pairs of cards
        Desktop: 3-column bento with col-span overrides
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {/* Row 1 */}
        <HeadlineCard className="sm:col-span-2 lg:col-span-2" />
        <RolesCard />

        {/* Row 2 */}
        <FiltersCard />
        <PipelineCard className="sm:col-span-2 lg:col-span-2" />

        {/* Row 3 */}
        <InterviewCard className="sm:col-span-2 lg:col-span-2" />
        <LeaderboardCard />
      </div>
    </section>
  )
}
