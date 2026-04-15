import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

const cols = {
  Product: ['Student profiles', 'Matching', 'Application tracking'],
  Company: ['About RIVO', 'Careers', 'Contact'],
  Legal: ['Privacy', 'Terms'],
}

export default function Footer() {
  return (
    <footer className="mt-8">
      <div className="container py-14 grid grid-cols-2 sm:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-foreground" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            <span className="text-[15px] font-semibold tracking-tight font-arimo">RIVO</span>
          </div>
          <p className="text-[13px] text-muted-foreground leading-relaxed max-w-[220px]">
            The definitive platform for early careers.
          </p>
          <Button asChild variant="ghost" className="mt-3 px-0 h-auto text-foreground hover:bg-transparent hover:text-foreground/80 font-medium">
            <a href="#waitlist">Sign up today</a>
          </Button>
        </div>

        {Object.entries(cols).map(([group, items]) => (
          <div key={group}>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">{group}</p>
            <ul className="space-y-2.5">
              {items.map(item => (
                <li key={item}>
                  <a href="#" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container pb-8 text-transparent border-transparent">
        <div className="flex flex-col sm:flex-row items-center justify-center text-center mt-6 pt-4 gap-2 sm:gap-3">
          <p className="text-[12px] text-muted-foreground">
          © {new Date().getFullYear()} RIVO Careers Inc.
          </p>
          <span className="hidden sm:block text-muted-foreground/30 text-[10px]">•</span>
          <p className="text-[12px] text-muted-foreground font-arimo tracking-wide">
            Built by students for students.
          </p>
        </div>
      </div>
    </footer>
  )
}
