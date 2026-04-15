import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'

const EASE = [0.16, 1, 0.3, 1] as const

const before = [
  'Job boards with hundreds of irrelevant listings',
  'Applications tracked in a spreadsheet',
  'Resume PDFs lost in recruiter inboxes',
  'No signal on where you actually stand',
]

const after = [
  'Roles matched to your profile and goals',
  'A unified dashboard for your full pipeline',
  'A shareable, structured career profile',
  'Clear insights on progress and next steps',
]

const stats = [
  { v: '3.4×', label: 'More qualified applicants per role' },
  { v: '68%',  label: 'Land an interview within 30 days' },
  { v: '< 4m', label: 'Time to a complete profile' },
]

export default function WhyRivo() {
  return (
    <section id="why-rivo" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mb-16"
      >
        <h2 className="text-[40px] sm:text-[48px] font-semibold track-tighter leading-[1.05] text-zinc-900 dark:text-white">
          Not another job board.<br />
          <span className="text-zinc-300 dark:text-zinc-700">A better system entirely.</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-px bg-zinc-100 dark:bg-zinc-800/50 rounded-xl overflow-hidden mb-px">
        {/* Before */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: EASE }}
          className="bg-white dark:bg-zinc-950 p-8"
        >
          <ul className="space-y-3.5">
            {before.map((t, i) => (
              <li key={i} className="flex items-start gap-3">
                <X size={13} className="text-zinc-300 dark:text-zinc-700 mt-0.5 flex-shrink-0" />
                <span className="text-[14px] text-zinc-400 dark:text-zinc-600 leading-snug">{t}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* After */}
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.08, ease: EASE }}
          className="bg-white dark:bg-zinc-950 p-8"
        >
          <ul className="space-y-3.5">
            {after.map((t, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check size={13} className="text-zinc-900 dark:text-white mt-0.5 flex-shrink-0" />
                <span className="text-[14px] text-zinc-700 dark:text-zinc-300 leading-snug font-medium">{t}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Stat row — same grid line */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-zinc-100 dark:bg-zinc-800/50 rounded-xl overflow-hidden"
      >
        {stats.map((s, i) => (
          <div key={i} className="bg-white dark:bg-zinc-950 px-8 py-7">
            <p className="text-[36px] font-semibold track-tighter text-zinc-900 dark:text-white">{s.v}</p>
            <p className="text-[13px] text-zinc-400 dark:text-zinc-600 mt-1">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
