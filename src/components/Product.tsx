import { cn } from '@/lib/utils'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Search, MapPin, ChevronRight,
  User, Code2, Briefcase,
  Circle, Clock, CheckCircle2,
} from 'lucide-react'
import { sectionViewport, smoothEase } from '@/lib/motion'

function JobFeed() {
  const roles = [
    { co: 'Linear',  title: 'Backend Engineer', loc: 'San Francisco', tag: 'New',   logoUrl: '/logos/linear.svg' },
    { co: 'Scale AI', title: 'ML Engineer',          loc: 'San Francisco', tag: '94%', logoUrl: '/logos/scale.png' },
    { co: 'Deel',    title: 'Software Engineer',               loc: 'Remote',       tag: '91%',  logoUrl: '/logos/deel.png' },
    { co: 'Ramp',    title: 'Product Engineer',      loc: 'New York',        tag: '88%',  logoUrl: '/logos/ramp.png' },
  ]
  return (
    <div className="border border-border/80 bg-background rounded-lg overflow-hidden ring-1 ring-black/[0.02]">
      <div className="px-4 py-3 flex items-center justify-between bg-secondary/20 border-transparent">
        <div className="flex items-center gap-2">
          <Search size={12} className="text-muted-foreground" />
          <span className="text-[11px] font-medium text-muted-foreground">Software Engineer, New Grad, Canada</span>
        </div>
        <div className="flex gap-1.5 opacity-30">
          <div className="w-2.5 h-2.5 rounded-full border border-border bg-border/50" />
          <div className="w-2.5 h-2.5 rounded-full border border-border bg-border/50" />
        </div>
      </div>
      <div className="flex flex-col">
        {roles.map((r, i) => (
          <div key={i} className="flex items-center justify-between px-4 py-3.5 hover:bg-secondary/40 transition-colors cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded bg-background shrink-0 flex items-center justify-center border border-border/50 overflow-hidden">
                <img 
                  src={r.logoUrl} 
                  alt={r.co} 
                  className="w-5 h-5 object-contain" 
                  loading="lazy" 
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.nextElementSibling) return;
                    const span = document.createElement('span');
                    span.className = 'text-[10px] font-bold font-arimo';
                    span.innerText = r.co.charAt(0);
                    e.currentTarget.parentElement?.appendChild(span);
                  }}
                />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-foreground leading-none">{r.title}</p>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <span className="text-[11px] text-muted-foreground font-medium">{r.co}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <MapPin size={10} className="text-muted-foreground/60" />
                  <span className="text-[11px] text-muted-foreground/80">{r.loc}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ChevronRight size={14} className="text-muted-foreground/40 group-hover:text-foreground transition-colors" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function InterviewPracticeTile() {
  const score = 84
  const signal = [
    { label: 'Clarity', value: 88 },
    { label: 'Structure', value: 82 },
    { label: 'Relevance', value: 85 },
  ]

  return (
    <div className="border border-border/80 bg-background rounded-lg overflow-hidden ring-1 ring-black/[0.02]">
      <div className="px-4 py-3 flex items-center justify-between gap-2 bg-secondary/20 border-transparent">
        <div className="flex-1 max-w-[240px] h-7 rounded-md border border-border/60 bg-background/90 px-2.5 flex items-center gap-1.5">
          <span className="text-[10px] font-medium text-foreground tracking-tight">Rivo Careers</span>
          <span className="text-border/80">|</span>
          <span className="text-[10px] text-muted-foreground">Search company</span>
        </div>
        <span className="text-[10px] font-medium px-2 py-0.5 rounded border border-border/60 text-foreground">
          Live mock
        </span>
      </div>

      <div className="p-4 space-y-3.5">
        <div className="rounded-lg border border-border/70 bg-secondary/20 p-3.5">
          <div className="flex items-center justify-between mb-3.5">
            <p className="text-[12px] text-muted-foreground">Interviewing for</p>
            <span className="inline-flex items-center gap-2 text-[12px] font-medium text-foreground">
              <img
                src="/logos/figma-icon.png"
                alt="Figma"
                className="h-4 w-4 object-contain"
                loading="lazy"
              />
              Figma - Product Design Intern
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div className="rounded-md border border-border/60 bg-background px-3 py-2.5 flex items-end min-h-[102px] relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-12 h-12 rounded-full border border-border/60 bg-secondary flex items-center justify-center">
                  <span className="text-[11px] font-semibold text-foreground">AI</span>
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                </div>
              </div>
              <span className="relative z-10 text-[10px] font-medium text-foreground bg-background/95 px-1.5 py-0.5 rounded border border-border/40">
                Speaking
              </span>
            </div>

            <div className="rounded-md border border-border/60 bg-background px-3 py-2.5 flex items-end min-h-[102px] relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border border-border/60 bg-secondary flex items-center justify-center">
                  <span className="text-[11px] font-semibold text-foreground">You</span>
                </div>
              </div>
              <span className="relative z-10 text-[10px] font-medium text-muted-foreground bg-background/95 px-1.5 py-0.5 rounded border border-border/40">
                Camera on
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-border/70 bg-background p-2">
          <div className="grid grid-cols-2 items-stretch">
            <div className="pr-3 border-r border-border/60 flex flex-col items-center justify-center text-center">
              <p className="text-[8px] text-muted-foreground">Live score</p>
              <p className="mt-0.5 text-[18px] font-semibold tracking-tight text-foreground leading-none tabular-nums">{score}</p>
            </div>

            <div className="pl-3 space-y-1.5">
              {signal.map((item) => (
                <div key={item.label}>
                  <div className="mb-0.5 flex items-center justify-between">
                    <span className="text-[8px] text-muted-foreground">{item.label}</span>
                    <span className="text-[9px] font-medium text-foreground tabular-nums">{item.value}</span>
                  </div>
                  <div className="h-1 rounded-full bg-secondary overflow-hidden border border-border/50">
                    <div
                      className="h-full rounded-full transition-all duration-500 bg-foreground"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProfileCard() {
  const skills = ['TypeScript', 'React', 'Go', 'System Design']
  return (
    <div className="border border-border/80 bg-background rounded-lg overflow-hidden ring-1 ring-black/[0.02]">
      <div className="p-5 flex items-start gap-4 border-transparent">
        <div className="w-12 h-12 rounded bg-secondary border border-border/50 flex items-center justify-center shrink-0 text-foreground">
          <span className="text-[13px] font-semibold">AK</span>
        </div>
        <div className="flex-1 min-w-0 pt-0.5">
          <p className="text-[15px] font-semibold text-foreground">Alex Kim</p>
          <p className="text-[13px] text-muted-foreground mt-0.5">CS, University of Waterloo, 3B</p>
          <div className="mt-4 flex items-center gap-3">
            <div className="flex-1 h-1.5 rounded-full bg-secondary overflow-hidden border border-border/50">
              <div className="h-full w-[92%] rounded-full bg-foreground" />
            </div>
            <p className="text-[11px] font-medium text-foreground w-6 text-right">92%</p>
          </div>
        </div>
      </div>
      <div className="p-5 space-y-4">
        {[
          { icon: Code2,    label: 'Top skills', content: skills },
          { icon: Briefcase, label: 'Experience', content: ['Intern @ Wish', 'TA @ UW CS'] },
          { icon: User,     label: 'Open to',    content: ['New Grad 2025', 'Summer Internship'] },
        ].map((row, i) => (
          <div key={i} className="flex items-start gap-4">
            <row.icon size={14} className="text-muted-foreground mt-0.5 shrink-0" />
            <div className="flex-1">
              <p className="text-[12px] font-medium text-foreground mb-2">{row.label}</p>
              <div className="flex flex-wrap gap-2">
                {row.content.map((c, idx) => (
                  <span key={c} className="text-[12px] text-muted-foreground font-medium">
                    {c}{idx !== row.content.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Tracker() {
  const apps = [
    { co: 'Cursor',   role: 'SWE Intern',        stage: 'OA sent',       status: 'action',  logoUrl: '/logos/cursor-icon.png' },
    { co: 'Figma',  role: 'Product Design',       stage: 'Interview x2',  status: 'active',  logoUrl: '/logos/figma-icon.png' },
    { co: 'Google',   role: 'ML Engineer',       stage: 'Applied',       status: 'pending', logoUrl: '/logos/google.svg' },
  ]
  
  return (
    <div className="border border-border/80 bg-background rounded-lg overflow-hidden ring-1 ring-black/[0.02]">
      <div className="px-5 py-4 flex items-center justify-between border-transparent">
        <span className="text-[13px] font-semibold text-foreground">Active Pipeline</span>
        <span className="text-[11px] font-medium px-2 py-0.5 border border-border/60 rounded text-muted-foreground">3 tracked</span>
      </div>
      <div className="flex flex-col">
        {apps.map((a, i) => (
          <div key={i} className="flex items-center gap-4 px-5 py-4">
            <div className="w-9 h-9 rounded bg-background flex items-center justify-center shrink-0 border border-border/50 overflow-hidden">
              <img 
                src={a.logoUrl} 
                alt={a.co} 
                className="w-5 h-5 object-contain" 
                loading="lazy" 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  if (e.currentTarget.nextElementSibling) return;
                  const span = document.createElement('span');
                  span.className = 'text-[10px] font-bold font-arimo';
                  span.innerText = a.co.charAt(0);
                  e.currentTarget.parentElement?.appendChild(span);
                }}
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[14px] font-semibold text-foreground truncate leading-tight mb-1">{a.co}</p>
              <p className="text-[12px] text-muted-foreground">{a.role}</p>
            </div>
            <div className="w-24 shrink-0 flex items-center gap-2">
              {a.status === 'pending' ? <Clock size={12} className="text-muted-foreground/60" />
                : a.status === 'offer' ? <CheckCircle2 size={12} className="text-foreground" />
                : <Circle size={12} className="text-muted-foreground/60" />}
              <span className="text-[11px] font-medium text-foreground">{a.stage}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

interface RowProps {
  label: string
  title: string
  body: string
  flip?: boolean
  index: number
  children: React.ReactNode
}

function Row({ label, title, body, flip, index, children }: RowProps) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      initial={
        reduceMotion
          ? { opacity: 1 }
          : { opacity: 0, y: 24, filter: 'blur(5px)' }
      }
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={sectionViewport}
      transition={{
        duration: reduceMotion ? 0 : 0.7,
        delay: reduceMotion ? 0 : Math.min(index * 0.06, 0.2),
        ease: smoothEase,
      }}
      className={cn(
        'grid md:grid-cols-2 gap-12 lg:gap-24 items-center',
        flip && 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1'
      )}
    >
      <div>
        <h3 className="text-2xl md:text-3xl font-medium tracking-tight leading-[1.1] mb-4 text-foreground">
          {title}
        </h3>
        <p className="text-[15px] text-muted-foreground/90 leading-[1.6] max-w-sm">
          {body}
        </p>
      </div>
      <div>{children}</div>
    </motion.div>
  )
}

export default function Product() {
  return (
    <section className="px-4 max-w-5xl mx-auto py-16 space-y-32">
      <Row
        label="Discover"
        title="Precision matching."
        body="Opportunities strictly aligned with your technical depth. Connect directly with rigorous engineering teams."
        index={0}
      >
        <JobFeed />
      </Row>

      <Row
        label="Interview Prep"
        title="Practice interviews that feel real."
        body="Train with realistic prompts, live scoring, and company-specific context before your actual interview loop."
        flip
        index={1}
      >
        <InterviewPracticeTile />
      </Row>

      <Row
        label="Identity"
        title="A standardized profile."
        body="Designed for pure clarity. Present your technical stack, projects, and history in a format industry recruiters trust."
        index={2}
      >
        <ProfileCard />
      </Row>

      <Row
        label="System"
        title="Pipeline management."
        body="Automate your application lifecycle. Keep every interview, technical assessment, and follow-up strictly organized."
        flip
        index={3}
      >
        <Tracker />
      </Row>
    </section>
  )
}
