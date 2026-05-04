"use client";
import { useEffect, useState } from "react";

const allProjects = [
  { id: 1, name: "E-Commerce Platform",   tech: "Next.js / PostgreSQL / Stripe", status: "Live",        prog: 100, date: "Jan 2025", icon: "🛒", color: "#5b8dee", desc: "Full-stack e-commerce with real-time inventory and Stripe payments." },
  { id: 2, name: "AI Chat Application",   tech: "React / OpenAI / WebSocket",    status: "Live",        prog: 100, date: "Dec 2024", icon: "🤖", color: "#9d6ff0", desc: "Real-time AI chat with GPT-4 streaming and conversation history."   },
  { id: 3, name: "Task Management SaaS",  tech: "Next.js / Prisma / Redis",      status: "In Progress", prog: 65,  date: "Ongoing",  icon: "📋", color: "#2dd4a0", desc: "Collaborative Kanban tool with time tracking and team analytics."   },
  { id: 4, name: "DevOps Dashboard",      tech: "React / Docker / AWS",          status: "Live",        prog: 100, date: "Nov 2024", icon: "📊", color: "#38bdf8", desc: "Cloud infrastructure monitoring with auto-alerts and metrics."      },
  { id: 5, name: "Mobile Banking App",    tech: "React Native / Node.js / JWT",  status: "Live",        prog: 100, date: "Oct 2024", icon: "💳", color: "#f97316", desc: "Secure banking app with biometric auth and budget tracking."        },
  { id: 6, name: "Social Analytics Tool", tech: "Next.js / D3.js / REST API",   status: "Live",        prog: 100, date: "Sep 2024", icon: "📈", color: "#e879f9", desc: "Analytics platform tracking social media performance."             },
  { id: 7, name: "Portfolio v2",          tech: "Next.js / TypeScript",          status: "Live",        prog: 100, date: "Aug 2024", icon: "🎨", color: "#2dd4a0", desc: "This portfolio — built with Next.js, animations, and dark mode."   },
  { id: 8, name: "Blog CMS",             tech: "Next.js / MDX / Vercel",        status: "Planning",    prog: 10,  date: "Q2 2025",  icon: "✍️", color: "#fbbf24", desc: "Personal blog with MDX, syntax highlighting, and SEO."            },
];

const filters = ["All", "Live", "In Progress", "Planning"];

function AC({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [v, setV] = useState(false);
  useEffect(() => { const t = setTimeout(() => setV(true), delay); return () => clearTimeout(t); }, [delay]);
  return <div className={`transition-all duration-500 ${v ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>{children}</div>;
}

const sColor = (s: string) => s === "Live" ? "#2dd4a0" : s === "In Progress" ? "#f97316" : "#fbbf24";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<typeof allProjects[0] | null>(null);

  const filtered = allProjects.filter(p =>
    (filter === "All" || p.status === filter) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <AC delay={0}>
        <div className="mb-8">
          <h1 className="text-[clamp(20px,3vw,28px)] font-black text-text tracking-tight mb-1"><span className="grad-text">Projects</span></h1>
          <p className="text-text2 text-sm ">{allProjects.length} total · {allProjects.filter(p => p.status === "Live").length} live</p>
        </div>
      </AC>

      <AC delay={80}>
        <div className="flex gap-3 mb-7 flex-wrap items-center">
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search projects..."
            className="flex-1 min-w-[200px] px-4 py-2.5 bg-card border border-border rounded-xl text-text text-sm font-sans outline-none focus:border-a1 transition-colors" />
          <div className="flex gap-2 flex-wrap">
            {filters.map(f => (
              <button key={f} onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg border text-[13px] font-semibold cursor-pointer transition-all duration-200 font-sans ${filter === f ? "border-a1 bg-[var(--g1)] text-a1" : "border-border bg-transparent text-text2 hover:border-a1 hover:text-a1"}`}>
                {f}
              </button>
            ))}
          </div>
        </div>
      </AC>

      <div className="grid gap-4 cursor-pointer" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))" }}>
        {filtered.map((p, i) => (
          <AC key={p.id} delay={i * 60}>
            <div className="hover-card p-6 cursor-pointer relative overflow-hidden" onClick={() => setSelected(p)}>
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg,${p.color},transparent)` }} />
              <div className="flex justify-between items-center mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ background: `${p.color}15`, border: `1px solid ${p.color}30` }}>{p.icon}</div>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono" style={{ background: `${sColor(p.status)}15`, color: sColor(p.status), border: `1px solid ${sColor(p.status)}30` }}>{p.status}</span>
              </div>
              <h3 className="text-[15px] font-extrabold text-text mb-1.5 tracking-tight">{p.name}</h3>
              <p className="text-text2 text-[13px] leading-relaxed mb-4">{p.desc}</p>
              <div className="text-[11px] text-text3 font-mono mb-3">{p.tech}</div>
              <div className="h-1 bg-border rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${p.prog}%`, background: `linear-gradient(90deg,${p.color},var(--a2))` }} />
              </div>
              <div className="flex justify-between mt-2 text-xs">
                <span className="text-text3 font-mono">{p.date}</span>
                <span className="font-bold" style={{ color: p.color }}>{p.prog}%</span>
              </div>
            </div>
          </AC>
        ))}
      </div>

      {filtered.length === 0 && <div className="text-center py-16 text-text3 text-[15px]">No projects found 🔍</div>}

      {selected && (
        <div className="fixed inset-0 bg-black/60 z-[500] flex items-center justify-center p-5 backdrop-blur-md" onClick={() => setSelected(null)}>
          <div className="bg-card border border-border rounded-3xl p-9 max-w-[520px] w-full relative overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: `linear-gradient(90deg,${selected.color},var(--a2))` }} />
            <div className="flex justify-between items-start mb-5">
              <div className="flex gap-3 items-center">
                <div className="w-14 h-14 rounded-[14px] flex items-center justify-center text-3xl" style={{ background: `${selected.color}15`, border: `1px solid ${selected.color}30` }}>{selected.icon}</div>
                <div>
                  <h2 className="text-xl font-black text-text tracking-tight">{selected.name}</h2>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full font-mono" style={{ background: `${sColor(selected.status)}15`, color: sColor(selected.status) }}>{selected.status}</span>
                </div>
              </div>
              <button onClick={() => setSelected(null)} className="w-8 h-8 bg-bg2 border border-border rounded-lg cursor-pointer text-text2 text-base flex items-center justify-center">✕</button>
            </div>
            <p className="text-text2 leading-[1.8] mb-5 text-[15px]">{selected.desc}</p>
            <div className="grid grid-cols-2 gap-3 mb-5">
              {[["Tech Stack", selected.tech], ["Date", selected.date], ["Progress", `${selected.prog}%`], ["Status", selected.status]].map(([k, v]) => (
                <div key={k} className="px-4 py-3 bg-bg2 rounded-xl border border-border">
                  <div className="text-[10px] text-a1 tracking-[2px] font-mono mb-1">{k.toUpperCase()}</div>
                  <div className="text-[13px] font-bold text-text">{v}</div>
                </div>
              ))}
            </div>
            <div className="h-1.5 bg-border rounded-full overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${selected.prog}%`, background: `linear-gradient(90deg,${selected.color},var(--a2))` }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
