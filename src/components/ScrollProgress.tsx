import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const reduceMotion = useReducedMotion()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    mass: 0.24,
    restDelta: 0.001,
  })

  return (
    <div className="fixed inset-x-0 top-0 z-[120] pointer-events-none">
      <motion.div
        className="h-[2px] origin-left bg-gradient-to-r from-foreground/80 via-foreground to-foreground/80 shadow-[0_0_16px_hsl(var(--foreground)/0.35)]"
        style={{ scaleX: reduceMotion ? scrollYProgress : scaleX }}
        aria-hidden
      />
    </div>
  )
}
