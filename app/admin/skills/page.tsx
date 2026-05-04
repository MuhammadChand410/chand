"use client";
import { useEffect, useState } from "react";

const skillGroups = [
  { cat: "Frontend", icon: "🎨", color: "#5b8dee", skills: [{ name: "React / Next.js", pct: 90, icon: "⚛️" },{ name: "TypeScript", pct: 85, icon: "🔷" },{ name: "Tailwind CSS", pct: 92, icon: "🎨" },{ name: "HTML / CSS", pct: 95, icon: "🌐" }] },
  { cat: "Backend",  icon: "⚙️", color: "#2dd4a0", skills: [{ name: "Node.js / Express", pct: 80, icon: "🟢" },{ name: "PostgreSQL", pct: 75, icon: "🐘" },{ name: "MongoDB", pct: 78, icon: "🍃" },{ name: "GraphQL", pct: 65, icon: "🔗" }] },
  { cat: "DevOps & Tools", icon: "🛠️", color: "#f97316", skills: [{ name: "AWS / Vercel", pct: 70, icon: "☁️" },{ name: "Docker", pct: 65, icon: "🐳" },{ name: "Git / GitHub", pct: 88, icon: "🔄" },{ name: "Linux", pct: 72, icon: "🐧" }] },
];
const techStack = ["React.js","Next.js","MongoDB","Redis","Tailwind","HTML/CSS","GraphQL","REST API","Git","Figma","Python","Linux","Vercel","Stripe"];
const certs = [
  { name: "AWS Cloud Practitioner",  issuer: "Amazon Web Services", date: "2024", icon: "☁️", color: "#f97316" },
  { name: "Meta Frontend Developer", issuer: "Meta / Coursera",     date: "2023", icon: "⚛️", color: "#5b8dee" },
  { name: "Google UX Design",        issuer: "Google / Coursera",   date: "2023", icon: "🎨", color: "#2dd4a0" },
  { name: "Node.js Application Dev", issuer: "OpenJS Foundation",   date: "2024", icon: "🟢", color: "#9d6ff0" },
];

function AC({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [v, setV] = useState(false);
  useEffect(() => { const t = setTimeout(() => setV(true), delay); return () => clearTimeout(t); }, [delay]);
  return <div className={`transition-all duration-500 ${v ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>{children}</div>;
}

export default function SkillsPage() {
  const [barVis, setBarVis] = useState(false);
  useEffect(() => { const t = setTimeout(() => setBarVis(true), 300); return () => clearTimeout(t); }, []);

  return (
    <div>
      <AC delay={0}>
        <div className="mb-8">
          <h1 className="text-[clamp(20px,3vw,28px)] font-black text-text tracking-tight mb-1"><span className="grad-text">Skills</span></h1>
          <p className="text-text2 text-sm">Technical expertise and proficiency levels</p>
        </div>
      </AC>

      <div className="grid gap-5 mb-5" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))" }}>
        {skillGroups.map((g, gi) => (
          <AC key={g.cat} delay={gi * 100}>
            <div className="bg-card border border-border rounded-2xl p-7 relative overflow-hidden h-full">
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg,${g.color},transparent)` }} />
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: `${g.color}15`, border: `1px solid ${g.color}30` }}>{g.icon}</div>
                <h2 className="text-base font-extrabold text-text">{g.cat}</h2>
              </div>
              {g.skills.map((s, si) => (
                <div key={s.name} className={si < g.skills.length - 1 ? "mb-4" : ""}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-base">{s.icon}</span>
                      <span className="text-[13px] font-semibold text-text">{s.name}</span>
                    </div>
                    <span className="text-[13px] font-bold font-mono" style={{ color: g.color }}>{s.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-border rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all duration-1000" style={{ width: barVis ? `${s.pct}%` : "0%", background: `linear-gradient(90deg,${g.color},var(--a2))`, transitionDelay: `${(gi * 4 + si) * 80}ms` }} />
                  </div>
                </div>
              ))}
            </div>
          </AC>
        ))}
      </div>

      <AC delay={400}>
        <div className="bg-card border border-border rounded-2xl p-7 mb-5">
          <h2 className="text-[17px] font-extrabold text-text mb-5">Full Tech Stack</h2>
          <div className="flex flex-wrap gap-2.5">
            {techStack.map(t => (
              <span key={t} className="px-4 py-1.5 rounded-full border border-border bg-bg2 text-[13px] text-text2 font-mono cursor-default transition-all duration-200 hover:border-a1 hover:text-a1 hover:bg-[var(--g1)]">{t}</span>
            ))}
          </div>
        </div>
      </AC>

      <AC delay={500}>
        <div className="bg-card border border-border rounded-2xl p-7">
          <h2 className="text-[17px] font-extrabold text-text mb-5">Certifications</h2>
          <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))" }}>
            {certs.map(c => (
              <div key={c.name} className="px-4 py-4 bg-bg2 border border-border rounded-[14px] flex gap-3 items-start transition-colors duration-200 hover:border-a1 cursor-default">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ background: `${c.color}15`, border: `1px solid ${c.color}30` }}>{c.icon}</div>
                <div>
                  <div className="text-[13px] font-bold text-text mb-0.5">{c.name}</div>
                  <div className="text-[11px] text-text3 font-mono">{c.issuer} · {c.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AC>
    </div>
  );
}
