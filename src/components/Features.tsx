import { motion } from 'framer-motion'
import { Search, User, LayoutGrid, Building2, Zap, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Search,
    title: 'Precision matching',
    body: 'Match seamlessly with top-tier engineering teams. We prioritize signal over volume.',
  },
  {
    icon: User,
    title: 'Technical identity',
    body: 'A structured developer profile designed specifically for rigorous engineering hiring managers.',
  },
  {
    icon: LayoutGrid,
    title: 'Pipeline tracking',
    body: 'Maintain full visibility over applications. Monitor stages and track technical assessments systematically.',
  },
  {
    icon: Building2,
    title: 'Seamless sharing',
    body: 'A persistent, elegant profile link engineered to replace static PDF resumes.',
  },
  {
    icon: Zap,
    title: 'Direct routing',
    body: 'Establish direct connections to active technical teams based on your specific stack.',
  },
  {
    icon: BarChart3,
    title: 'Engagement analytics',
    body: 'Measure your profile engagement, conversion rates, and interview metrics dynamically.',
  },
]

export default function Features() {
  return (
    <section id="features" className="px-4 max-w-5xl mx-auto pt-16">
      <div className="mb-12">
        <h2 className="text-3xl md:text-[40px] font-medium tracking-tight leading-[1.1] text-foreground">
          Everything you need <br className="hidden md:block" />
          <span className="text-muted-foreground">to move forward.</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 border border-border/60 bg-background divide-y sm:divide-y-0 lg:divide-x divide-border/50">
        {/* We use specific borders to mimic the Vercel machined grid without relying on background gap hacks */}
        {features.map((f, i) => (
          <div
            key={i}
            className="p-8 hover:bg-secondary/20 transition-colors duration-300 relative group flex flex-col"
          >
            {/* Horizontal divider for mobile/tablet that gets overridden by grid structure */}
            {i > 0 && <div className="absolute top-0 inset-x-0 h-[1px] bg-border/50 sm:hidden" />}
            {i > 1 && <div className="absolute top-0 inset-x-0 h-[1px] bg-border/50 hidden sm:block lg:hidden" />}
            {i > 2 && <div className="absolute top-0 inset-x-0 h-[1px] bg-border/50 hidden lg:block" />}
            
            <div className="w-8 h-8 flex items-center justify-center mb-6 text-foreground">
              <f.icon size={16} strokeWidth={1.5} />
            </div>
            <h3 className="text-[14px] font-semibold text-foreground mb-2 hidden md:block">
              {f.title}
            </h3>
            <h3 className="text-base font-semibold text-foreground mb-2 md:hidden">
              {f.title}
            </h3>
            <p className="text-[14px] text-muted-foreground/90 leading-relaxed font-normal">
              {f.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
