import { useId, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { sectionViewport, smoothEase } from '@/lib/motion'

const items = [
  {
    q: 'How is Rivo different from my university co-op portal?',
    a: "Your co-op office manages institutional policies, work-term sequencing, and certain employer programs. Rivo is a complementary channel focused on curated startup opportunities: a persistent profile, higher-signal role descriptions, and one place to track every stage, so you can run a focused search alongside your school's process.",
  },
  {
    q: 'Is Rivo free for students?',
    a: 'Yes. Core access, including browsing listings, search and filters, and application tracking, is free with no card required. Rivo Pass and Rivo AI add premium capabilities such as deeper matching, streamlined apply flows, and AI mock interviews with monthly credits.',
  },
  {
    q: 'What types of roles are available on Rivo?',
    a: 'Internships, co-ops, and new-graduate roles across product, engineering, design, data, growth, finance, and operations. Listings emphasize high-growth teams where scope, pace, and ownership are clearly articulated.',
  },
  {
    q: 'How do I apply to jobs through Rivo?',
    a: "Build your Rivo profile, shortlist roles that fit your background, then apply in one step where supported, or follow the employer's instructions when an external link is provided. Many students also share their profile link directly with recruiters for faster routing.",
  },
  {
    q: 'What does the application pipeline look like?',
    a: 'Each application moves through a structured pipeline (for example: submitted, screening, assessments, interviews, and outcome), so you always know what changed, what is next, and when a thoughtful follow-up makes sense, without maintaining parallel spreadsheets.',
  },
  {
    q: 'How does AI interview preparation work?',
    a: 'Rivo AI runs realistic mock interviews tailored to your target role. After each session you receive structured feedback on clarity, structure, and examples. Interview credits refresh monthly on paid plans; see Pricing for Basic versus Pro tiers.',
  },
  {
    q: 'Which universities does Rivo support?',
    a: 'Rivo serves students across major Canadian universities and adds campuses over time as partners and regional roles grow. If your school is not highlighted yet, joining the waitlist helps us prioritize expansion and onboarding in your market.',
  },
  {
    q: 'How often are new roles posted?',
    a: 'New opportunities are added on a rolling basis as partner companies open requisitions. Checking the feed regularly and keeping your profile up to date improves matching and ensures you see the newest postings early.',
  },
] as const

/** Strong ease-out for height and rotation (feels fluid through the full range). */
const cssEaseFluid = 'cubic-bezier(0.19, 1, 0.22, 1)'

const PANEL_MS = 520
const CHEVRON_MS = 480

export default function FAQ() {
  const reduceMotion = useReducedMotion()
  const baseId = useId()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const ease = reduceMotion ? undefined : cssEaseFluid
  const panelDuration = reduceMotion ? 0 : PANEL_MS
  const chevronDuration = reduceMotion ? 0 : CHEVRON_MS

  return (
    <section id="faq" className="container py-20 md:py-24">
      <motion.div
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={sectionViewport}
        transition={{ duration: 0.42, ease: smoothEase }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-[40px] font-medium tracking-tight leading-[1.1] text-foreground text-balance mb-8 md:mb-10">
          Frequently asked questions
        </h2>

        <ul className="flex list-none flex-col gap-2.5 p-0 contain-layout">
          {items.map((item, i) => {
            const isOpen = openIndex === i
            const qId = `${baseId}-q-${i}`
            const aId = `${baseId}-a-${i}`

            return (
              <li key={item.q}>
                <div
                  className={cn(
                    'rounded-xl border border-border/60 bg-card transition-[background-color,box-shadow,border-color]',
                    isOpen ? 'border-border/80 bg-card shadow-sm' : 'hover:border-border/70 hover:bg-card/90',
                  )}
                  style={{
                    transitionDuration: reduceMotion ? undefined : '280ms',
                    transitionTimingFunction: reduceMotion ? undefined : cssEaseFluid,
                  }}
                >
                  <button
                    type="button"
                    id={qId}
                    aria-expanded={isOpen}
                    aria-controls={aId}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-xl px-5 py-4 text-left text-[15px] font-medium leading-snug tracking-tight text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
                  >
                    <span className="pr-2">{item.q}</span>
                    <ChevronDown
                      size={18}
                      strokeWidth={1.75}
                      className={cn(
                        'size-[18px] shrink-0 text-muted-foreground transform-gpu',
                        !reduceMotion && 'transition-transform',
                        isOpen && 'rotate-180',
                      )}
                      style={
                        reduceMotion
                          ? undefined
                          : {
                              transitionDuration: `${chevronDuration}ms`,
                              transitionTimingFunction: ease,
                            }
                      }
                      aria-hidden
                    />
                  </button>

                  <div
                    id={aId}
                    role="region"
                    aria-labelledby={qId}
                    className={cn(
                      'grid transform-gpu motion-reduce:transition-none',
                      !reduceMotion && 'transition-[grid-template-rows]',
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                    )}
                    style={
                      reduceMotion
                        ? undefined
                        : {
                            transitionDuration: `${panelDuration}ms`,
                            transitionTimingFunction: ease,
                          }
                    }
                  >
                    <div className="min-h-0 overflow-hidden" inert={!isOpen ? true : undefined}>
                      <div
                        className={cn(
                          'px-5 pb-4 pt-0.5 transform-gpu motion-reduce:transition-none',
                          !reduceMotion && 'transition-[transform,opacity]',
                          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-1 opacity-0',
                        )}
                        style={
                          reduceMotion
                            ? undefined
                            : {
                                transitionDuration: `${Math.round(panelDuration * 0.75)}ms`,
                                transitionTimingFunction: ease,
                                transitionDelay: isOpen ? '40ms' : '0ms',
                              }
                        }
                      >
                        <p className="text-[14px] sm:text-[15px] leading-relaxed text-muted-foreground">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </motion.div>
    </section>
  )
}
