import { Badge } from '@/components/ui/badge'

const steps = [
  { n: '01', title: 'Build your profile', body: 'Create a polished candidate profile with projects, skills, and goals in under 10 minutes.' },
  { n: '02', title: 'Get smarter matches', body: 'RIVO surfaces internship roles that match your level, stack, and intent - not random volume.' },
  { n: '03', title: 'Run your pipeline', body: 'Track every application, interview stage, and follow-up so opportunities do not slip.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-4 max-w-5xl mx-auto py-16">
      <div className="mb-16">
        <h2 className="text-3xl md:text-[40px] font-medium tracking-tight leading-[1.1] text-foreground">
          From profile to internship,
          <br className="hidden md:block" />
          <span className="text-muted-foreground">every step stays clear.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-12 md:gap-8">
        {steps.map((s, i) => (
          <div key={i} className="flex flex-col">
            <div className="h-[1px] w-full bg-border/60 mb-6" />
            <span className="text-[12px] font-medium text-muted-foreground mb-4 font-mono">{s.n}</span>
            <h3 className="text-[15px] font-semibold text-foreground mb-3">{s.title}</h3>
            <p className="text-[14px] text-muted-foreground/90 leading-relaxed max-w-[280px]">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
