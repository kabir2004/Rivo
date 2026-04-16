import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20)
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 sm:top-4 z-[100] flex justify-center pointer-events-none p-4">
      <nav
        className={cn(
          "pointer-events-auto flex items-center justify-between gap-1.5 sm:gap-6 rounded-full px-2.5 py-1.5 transition-all duration-300 w-[96vw] sm:w-auto max-w-[95vw] shadow-sm",
          scrolled
            ? "border border-border/60 bg-background/90 backdrop-blur-md"
            : "border border-border/20 bg-background/40 backdrop-blur-sm sm:bg-background/60"
        )}
      >
        <a href="#" className="flex items-center gap-2 flex-shrink-0 ml-1 group">
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-foreground" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
          <span className="text-[14px] font-semibold tracking-tight font-arimo hidden sm:block">RIVO</span>
        </a>

        {/* Animated Pill Grid */}
        <div className="flex-1 overflow-x-auto no-scrollbar min-w-0 flex sm:justify-center px-1">
          <ul 
            className="flex items-center gap-0.5 sm:gap-1"
            onMouseLeave={() => setHovered(null)}
          >
            {links.map((l) => (
              <li key={l.label} className="relative flex-shrink-0">
                <a
                  href={l.href}
                  onMouseEnter={() => setHovered(l.label)}
                  className={cn(
                    "relative z-10 px-2.5 sm:px-4 py-2 text-[12px] sm:text-[13px] font-medium transition-colors block rounded-full",
                    hovered === l.label ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {hovered === l.label && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-secondary border border-border/40 rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 450, damping: 30 }}
                    />
                  )}
                  <span className="relative z-20 whitespace-nowrap">{l.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden sm:block w-px h-4 bg-border/60 flex-shrink-0" />

        <Button asChild className="inline-flex flex-shrink-0 h-7 sm:h-8 px-3 sm:px-4 text-[11px] sm:text-[12px] font-medium rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all mr-0.5 border border-transparent shadow-none">
          <a href="#waitlist">Sign in</a>
        </Button>
      </nav>
    </header>
  )
}
