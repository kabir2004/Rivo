import { Briefcase, Building2, MapPin, Search, SlidersHorizontal, ArrowUpRight, Zap } from 'lucide-react'

const jobs = [
  { company: 'Jane Street', role: 'Quantitative Trading Intern', location: 'New York, NY', tags: ['Quant', 'OCaml'], match: 98, status: 'Applying', time: '2h ago', logoUrl: '/logos/janestreet.png' },
  { company: 'OpenAI', role: 'Research Engineer Intern', location: 'San Francisco, CA', tags: ['AI', 'Python'], match: 96, status: 'Saved', time: '5h ago', logoUrl: '/logos/openai.svg' },
  { company: 'TD', role: 'Software Engineer Intern', location: 'Toronto, ON', tags: ['Java', 'Banking'], match: 94, status: 'Interview', time: '1d ago', logoUrl: '/logos/td.png' },
  { company: 'Vercel', role: 'Frontend Engineer Intern', location: 'New York / Remote', tags: ['React', 'Next.js'], match: 89, status: 'Saved', time: '2d ago', logoUrl: '/logos/vercel.svg' },
  { company: 'Cursor', role: 'AI Engineer', location: 'San Francisco, CA', tags: ['AI', 'C++'], match: 88, status: 'Applying', time: '3d ago', logoUrl: '/logos/cursor-icon.png' },
]

export default function Dashboard() {
  return (
    <div className="bg-background text-foreground w-full min-h-[480px] lg:min-h-[540px] flex flex-col text-left">
      {/* App Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-background">
        <div className="flex items-center gap-6">
          <h2 className="text-[14px] font-semibold tracking-tight">Opportunities</h2>
          <div className="hidden md:flex items-center gap-4 text-[13px] font-medium text-muted-foreground">
            <span className="text-foreground border-b-2 border-foreground py-4 -my-4">Recommended</span>
            <span className="hover:text-foreground cursor-pointer transition-colors">Saved</span>
            <span className="hover:text-foreground cursor-pointer transition-colors">Tracked</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative hidden md:block">
            <Search className="absolute left-2.5 top-1.5 text-muted-foreground" size={14} />
            <input 
              type="text" 
              placeholder="Search companies, roles..." 
              className="bg-secondary border border-border rounded-md pl-8 pr-3 py-1.5 text-[12px] w-56 focus:outline-none focus:border-accent/50 transition-colors"
            />
          </div>
          <button className="p-1.5 rounded-md border border-border text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
            <SlidersHorizontal size={14} />
          </button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="flex-1">
        <div className="w-full relative">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-2 sm:gap-4 px-4 sm:px-6 py-3 bg-secondary/30 text-[11px] font-semibold text-muted-foreground tracking-wider font-arimo border-transparent">
            <div className="col-span-8 sm:col-span-5 flex items-center gap-2">
              <Briefcase size={12} />
              <span>Role & Company</span>
            </div>
            <div className="hidden sm:flex col-span-3 items-center gap-2">
              <MapPin size={12} />
              <span>Location</span>
            </div>
            <div className="hidden md:flex col-span-2 items-center gap-2">
              <Zap size={12} />
              <span>Signal</span>
            </div>
            <div className="col-span-4 sm:col-span-2 text-right">Action</div>
          </div>

          {/* Table Rows */}
          <div className="flex flex-col">
            {jobs.map((job, idx) => (
              <div 
                key={idx} 
                className="grid grid-cols-12 gap-2 sm:gap-4 px-4 sm:px-6 py-4 items-center hover:bg-secondary/40 transition-colors cursor-pointer group"
              >
                <div className="col-span-8 sm:col-span-5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-background flex items-center justify-center border border-border group-hover:border-border/80 transition-colors overflow-hidden">
                    <img 
                      src={job.logoUrl} 
                      alt={job.company} 
                      className="w-5 h-5 object-contain" 
                      loading="lazy" 
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.nextElementSibling) return;
                        const span = document.createElement('span');
                        span.className = 'text-[10px] font-bold font-arimo';
                        span.innerText = job.company.charAt(0);
                        e.currentTarget.parentElement?.appendChild(span);
                      }} 
                    />
                  </div>
                  <div>
                    <h3 className="text-[13px] font-semibold text-foreground group-hover:text-accent transition-colors">
                      {job.role}
                    </h3>
                    <p className="text-[12px] text-muted-foreground mt-0.5">{job.company}</p>
                  </div>
                </div>

                <div className="hidden sm:block col-span-3 text-[12px] text-muted-foreground truncate pr-4">
                  {job.location}
                </div>

                <div className="hidden md:flex col-span-2 items-center gap-2">
                  <div className="flex-1 h-1.5 rounded-full bg-secondary overflow-hidden border border-border/50">
                    <div 
                      className="h-full rounded-full bg-accent/80" 
                      style={{ width: `${job.match}%` }}
                    />
                  </div>
                  <span className="text-[11px] font-medium text-foreground w-6">{job.match}%</span>
                </div>

                <div className="col-span-4 sm:col-span-2 flex justify-end">
                  <button className="text-[11px] font-medium text-muted-foreground group-hover:text-foreground flex items-center gap-1 hover:underline transition-colors pb-0.5 border-b border-transparent group-hover:border-foreground">
                    Apply <ArrowUpRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer / Pagination */}
      <div className="px-6 py-3 flex items-center justify-between text-[11px] text-muted-foreground bg-secondary/20 border-transparent">
        <span>Showing 1-5 of 124 opportunities</span>
        <div className="flex gap-4">
          <button className="hover:text-foreground transition-colors disabled:opacity-50" disabled>Previous</button>
          <button className="hover:text-foreground transition-colors font-medium text-foreground">Next</button>
        </div>
      </div>
    </div>
  )
}
