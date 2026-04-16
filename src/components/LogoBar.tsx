import { motion } from 'framer-motion'
import { smoothEase } from '@/lib/motion'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { useState } from 'react'

const companies = [
  // High-rel Wikipedia SVGs (Wordmarks)
  { name: 'Google',  url: '/logos/google.svg' },
  { name: 'Stripe',  url: '/logos/stripe.svg' },
  { name: 'Linear',  url: '/logos/linear.svg' },
  { name: 'Vercel',  url: '/logos/vercel.svg' },
  { name: 'Notion',  url: '/logos/notion.svg' },
  { name: 'Figma',   url: '/logos/figma.svg' },
  
  // High-Tier Finance & Banks
  { name: 'Jane Street', url: '/logos/janestreet.png' },
  { name: 'RBC',     url: '/logos/rbc.svg' },
  { name: 'CIBC',    url: '/logos/cibc.png' },
  { name: 'TD Bank', url: '/logos/td.png' },

  // AI & Unicorns
  { name: 'OpenAI',  url: '/logos/openai.svg' },
  { name: 'Datadog', url: '/logos/datadog.svg' },
  { name: 'Scale AI',url: '/logos/scale.png' },
  
  // Additional Requested Unicorns / Tech / F1
  { name: 'Cursor',    url: '/logos/cursor-icon.png' }, // Swapped from 404 svg to valid icon png
  { name: 'Formula 1', url: '/logos/f1.png' },
  { name: 'Deel',      url: '/logos/deel.png' },
  { name: 'Ramp',      url: '/logos/ramp.png' },
]

export default function LogoBar() {
  return (
    <section className="pb-32 pt-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: smoothEase }}
        className="w-full"
      >
        <p className="text-center text-[12px] font-medium text-muted-foreground uppercase tracking-widest mb-10">
          Trusted by candidates interviewing at
        </p>
        
        <TooltipProvider delayDuration={100}>
          <div className="relative flex overflow-hidden w-full max-w-[1400px] mx-auto mask-image-fade">
            <div className="absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            {/* 100% to -50% Scroll System */}
            <div className="flex w-max animate-marquee items-center">
              {[...companies, ...companies].map((co, i) => (
                <LogoItem key={`${co.name}-${i}`} company={co} />
              ))}
            </div>
          </div>
        </TooltipProvider>
      </motion.div>
    </section>
  )
}

function LogoItem({ company }: { company: { name: string, url: string } }) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className="mx-8 sm:mx-12 shrink-0 flex items-center justify-center">
        <span className="text-[14px] font-bold text-foreground/80 font-arimo tracking-tight">{company.name}</span>
      </div>
    )
  }

  return (
    <div className="mx-8 sm:mx-12 shrink-0 flex items-center justify-center">
      <Tooltip>
        <TooltipTrigger asChild>
          <img
            src={company.url}
            alt={company.name}
            onError={() => setError(true)}
            className="h-9 sm:h-11 hover:scale-[1.05] transition-transform duration-300 object-contain cursor-pointer max-w-[160px]"
            loading="lazy"
          />
        </TooltipTrigger>
        <TooltipContent className="bg-popover text-popover-foreground border border-border text-xs font-medium">
          {company.name}
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
