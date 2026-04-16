import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { smoothEase } from '@/lib/motion'

const quotes = [
  {
    text: "The precision of the matching algorithm is incredible. Instead of sending out 200 generic applications, I connected directly with a core product team looking specifically for my UI and research background.",
    name: "Arthur Chen",
    role: 'Product Design, UBC',
  },
  {
    text: "My structured profile on RIVO completely bypassed the standard HR screen. I dropped the link to a technical recruiter and immediately skipped to the onsite loop.",
    name: "Eleanor Richards",
    role: 'Software Engineering, Waterloo',
  },
  {
    text: "The pipeline management is arguably the best feature. It consolidated all my messy spreadsheets into a single, automated workflow that tracks every assessment and final round flawlessly.",
    name: "David Sterling",
    role: 'Business Analytics, McGill',
  },
  {
    text: 'RIVO is the first platform that actually understands how highly competitive recruiting works. Zero noise, zero ghosting, just high-signal matches with firms that are actively scaling.',
    name: "Jameson Hayes",
    role: 'Finance, McMaster',
  },
  {
    text: "I used to spend hours modifying my PDF resume for every single job portal. Sharing my persistent RIVO profile link got me a 4x higher response rate from top-tier employers.",
    name: "Jasmine Lin",
    role: 'Data Science, UofT',
  },
  {
    text: "The level of clarity this platform gives you over your entire job hunt is unmatched. Knowing exactly what stage my applications are in and when to follow up took all the stress away.",
    name: "Harrison Brooks",
    role: 'Marketing and Growth, Western',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const reduceMotion = useReducedMotion()

  const next = () => setActive((a) => (a + 1) % quotes.length)
  const prev = () => setActive((a) => (a - 1 + quotes.length) % quotes.length)

  useEffect(() => {
    const t = setInterval(next, 7000)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="testimonials" className="container py-24 mb-16 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        <div className="relative w-full h-[320px] sm:h-[240px] flex items-center justify-center pt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: smoothEase }}
              className="absolute inset-0 flex flex-col items-center justify-center -mt-6"
            >
              <p className="text-[20px] sm:text-[28px] md:text-[34px] font-medium leading-[1.3] tracking-tight text-foreground mb-10 text-balance px-4">
                &quot;{quotes[active].text}&quot;
              </p>
              
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-9 h-9 rounded-full border border-border/60 flex items-center justify-center flex-shrink-0 bg-transparent text-foreground">
                  <span className="text-[11px] font-bold">
                    {quotes[active].name.split(' ').map(w => w[0]).join('')}
                  </span>
                </div>
                <div className="flex flex-col items-start gap-0.5">
                  <span className="text-[14px] font-semibold leading-none text-foreground">{quotes[active].name}</span>
                  <span className="text-[13px] text-muted-foreground leading-none">{quotes[active].role}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-4 mt-8">
          <button 
            onClick={prev} 
            className="w-10 h-10 rounded-full border border-border/80 flex items-center justify-center text-muted-foreground hover:bg-secondary/50 hover:text-foreground hover:border-border transition-all shadow-sm"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={16} />
          </button>
          <div className="flex gap-2 mx-1">
            {quotes.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setActive(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === active ? 'bg-foreground scale-125' : 'bg-border hover:bg-muted-foreground/50'}`}
              />
            ))}
          </div>
          <button 
            onClick={next} 
            className="w-10 h-10 rounded-full border border-border/80 flex items-center justify-center text-muted-foreground hover:bg-secondary/50 hover:text-foreground hover:border-border transition-all shadow-sm"
            aria-label="Next testimonial"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}
