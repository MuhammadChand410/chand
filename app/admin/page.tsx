"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const stats = [
  { label: "Total Projects",  val: 50,   suffix: "",    chg: "+12%", icon: "🚀", color: "#5b8dee" },
  { label: "GitHub Commits",  val: 1247, suffix: "+",   chg: "+8%",  icon: "⌨️", color: "#9d6ff0" },
  { label: "Clients Served",  val: 20,   suffix: "",    chg: "+25%", icon: "👥", color: "#2dd4a0" },
  { label: "Portfolio Views", val: 14,   suffix: ".2K", chg: "+32%", icon: "👁️", color: "#f97316" },
];
const recentProjects = [
  { name: "E-Commerce Platform", tech: "Next.js",      status: "Live",        prog: 100, date: "Jan 2025", color: "#5b8dee" },
  { name: "AI Chat App",         tech: "React/OpenAI", status: "Live",        prog: 100, date: "Dec 2024", color: "#9d6ff0" },
  { name: "Task SaaS",           tech: "Next.js",      status: "In Progress", prog: 65,  date: "Ongoing",  color: "#f97316" },
  { name: "DevOps Dashboard",    tech: "React",        status: "Live",        prog: 100, date: "Nov 2024", color: "#38bdf8" },
  { name: "Banking App",         tech: "React Native", status: "Live",        prog: 100, date: "Oct 2024", color: "#2dd4a0" },
];
const topSkills = [
  { skill: "React / Next.js", lvl: 90, color: "#5b8dee" },
  { skill: "TypeScript",      lvl: 85, color: "#9d6ff0" },
  { skill: "Node.js",         lvl: 80, color: "#2dd4a0" },
  { skill: "PostgreSQL",      lvl: 75, color: "#38bdf8" },
  { skill: "AWS / Cloud",     lvl: 70, color: "#f97316" },
];
const activity = [
  { act: "Deployed E-Commerce v2.1",    time: "2h ago",  icon: "🚀", color: "#5b8dee" },
  { act: "15 commits pushed to GitHub", time: "5h ago",  icon: "⌨️", color: "#9d6ff0" },
  { act: "Fixed critical API bug",      time: "1d ago",  icon: "🐛", color: "#f97316" },
  { act: "Completed client review",     time: "2d ago",  icon: "✅", color: "#2dd4a0" },
  { act: "Started SaaS project",        time: "3d ago",  icon: "🎯", color: "#9d6ff0" },
  { act: "Updated portfolio design",    time: "4d ago",  icon: "✏️", color: "#5b8dee" },
];
const goals = [
  { label: "Projects this year",   current: 8,  target: 12,  color: "#5b8dee" },
  { label: "Client satisfaction",  current: 99, target: 100, color: "#2dd4a0" },
  { label: "Open source contribs", current: 34, target: 50,  color: "#9d6ff0" },
  { label: "Certifications",       current: 4,  target: 6,   color: "#f97316" },
];
const weekData = [40, 65, 45, 80, 55, 90, 72];
const weekDays = ["M","T","W","T","F","S","S"];
const quickLinks = [
  { label: "View Projects",  href: "/admin/projects",  icon: "🚀", color: "#5b8dee" },
  { label: "Check Messages", href: "/admin/messages",  icon: "💬", color: "#9d6ff0" },
  { label: "Analytics",      href: "/admin/analytics", icon: "📈", color: "#2dd4a0" },
  { label: "Portfolio",      href: "/",                icon: "🌐", color: "#f97316" },
];
const statusItems = [
  { label: "Availability",  val: "Remote / Freelance", dot: "#2dd4a0" },
  { label: "Response Time", val: "Within 24 hours",    dot: "#5b8dee" },
  { label: "Location",      val: "Pakistan 🇵🇰",        dot: "#9d6ff0" },
  { label: "Experience",    val: "3+ Years",            dot: "#f97316" },
];

function AC({ children, delay = 0, cls = "" }: { children: React.ReactNode; delay?: number; cls?: string }) {
  const [v, setV] = useState(false);
  useEffect(() => { const t = setTimeout(() => setV(true), delay); return () => clearTimeout(t); }, [delay]);
  return (
    <div className={`transition-all duration-500 ease-out ${v ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} ${cls}`}>
      {children}
    </div>
  );
}

function CountUp({ target }: { target: number }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let s = 0; const step = target / 87;
    const t = setInterval(() => { s += step; if (s >= target) { setN(target); clearInterval(t); } else setN(Math.floor(s)); }, 16);
    return () => clearInterval(t);
  }, [target]);
  return <>{n}</>;
}

export default function OverviewPage() {
  const [date, setDate] = useState("");
  const [barVis, setBarVis] = useState(false);
  const maxWeek = Math.max(...weekData);

  useEffect(() => {
    setDate(new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }));
    const t = setTimeout(() => setBarVis(true), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="flex flex-col gap-5">

      {/* Header */}
      <AC delay={0} cls="flex justify-between items-center flex-wrap gap-4">
        <div>
          <h1 className="text-[clamp(20px,3vw,30px)] font-black text-text tracking-tight mb-1">
            Welcome back, <span className="grad-text">Muhammad</span> 
          </h1>
          <p className="text-text2 text-sm">{date}</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-mono" style={{ background: "rgba(45,212,160,.1)", borderColor: "rgba(45,212,160,.25)", color: "#2dd4a0" }}>
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "#2dd4a0", animation: "blink 2s infinite" }} />
            OPEN TO WORK
          </div>
          <div className="px-4 py-2 rounded-full border text-xs font-mono" style={{ background: "rgba(91,141,238,.1)", borderColor: "rgba(91,141,238,.25)", color: "#5b8dee" }}>
            v2.0 LIVE
          </div>
        </div>
      </AC>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <AC key={s.label} delay={80 + i * 70}>
            <div className="hover-card p-5 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg,${s.color},transparent)` }} />
              <div className="absolute -bottom-4 -right-2 text-[64px] opacity-[0.04] select-none pointer-events-none">{s.icon}</div>
              <div className="flex justify-between items-center mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: `${s.color}15`, border: `1px solid ${s.color}25` }}>{s.icon}</div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono" style={{ background: `${s.color}15`, color: s.color, border: `1px solid ${s.color}25` }}>{s.chg}</span>
              </div>
              <div className="text-3xl font-black font-mono leading-none mb-1" style={{ color: s.color, letterSpacing: "-1px" }}>
                <CountUp target={s.val} />{s.suffix}
              </div>
              <div className="text-[13px] text-text2 font-semibold">{s.label}</div>
            </div>
          </AC>
        ))}
      </div>

      {/* Row 2: Chart + Quick Links */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <AC delay={300}>
          <div className="bg-card border border-border rounded-2xl p-6 h-full">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-base font-extrabold text-text">Weekly Commits</h2>
              <span className="text-[11px] text-a1 font-mono bg-[var(--g1)] px-3 py-0.5 rounded-full">This Week</span>
            </div>
            <div className="flex items-end gap-2 h-24">
              {weekData.map((v, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full bg-border rounded-md overflow-hidden h-20 flex items-end">
                    <div className="w-full rounded-md transition-all duration-700"
                      style={{ height: barVis ? `${(v / maxWeek) * 100}%` : "0%", background: i === 6 ? "linear-gradient(180deg,var(--a1),var(--a2))" : "linear-gradient(180deg,rgba(91,141,238,.55),rgba(157,111,240,.3))", transitionDelay: `${i * 60}ms` }} />
                  </div>
                  <span className="text-[10px] font-mono" style={{ color: i === 6 ? "var(--a1)" : "var(--text3)", fontWeight: i === 6 ? 700 : 400 }}>{weekDays[i]}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 pt-4 border-t border-border">
              {[["72","TODAY","var(--a1)"],["447","THIS WEEK","var(--a2)"],["1,247","ALL TIME","var(--a3)"]].map(([n,l,c]) => (
                <div key={l} className="text-center">
                  <div className="text-lg font-black font-mono" style={{ color: c }}>{n}</div>
                  <div className="text-[10px] text-text3 font-mono mt-0.5">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </AC>

        <AC delay={360} cls="flex flex-col gap-4">
          <div className="bg-card border border-border rounded-2xl p-5">
            <h2 className="text-[15px] font-extrabold text-text mb-3">Quick Links</h2>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map(q => (
                <Link key={q.label} href={q.href}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl no-underline transition-all duration-200 hover:opacity-80"
                  style={{ background: `${q.color}10`, border: `1px solid ${q.color}25` }}>
                  <span className="text-lg">{q.icon}</span>
                  <span className="text-xs font-bold" style={{ color: q.color }}>{q.label}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="bg-card border border-border rounded-2xl p-5 flex-1">
            <h2 className="text-[15px] font-extrabold text-text mb-3">Current Status</h2>
            {statusItems.map(s => (
              <div key={s.label} className="flex justify-between items-center mb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: s.dot }} />
                  <span className="text-[11px] text-text3 font-mono">{s.label.toUpperCase()}</span>
                </div>
                <span className="text-xs font-bold text-text">{s.val}</span>
              </div>
            ))}
          </div>
        </AC>
      </div>

      {/* Row 3: Projects + Skills */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-4">
        <AC delay={420}>
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-base font-extrabold text-text">Recent Projects</h2>
              <Link href="/admin/projects" className="text-[11px] text-a1 font-mono no-underline bg-[var(--g1)] px-3 py-1 rounded-full border border-border2">View all →</Link>
            </div>
            {recentProjects.map((p, i) => (
              <div key={p.name} className={i < recentProjects.length - 1 ? "mb-4" : ""}>
                <div className="flex justify-between items-center mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: p.color }} />
                    <div>
                      <div className="text-[13px] font-bold text-text">{p.name}</div>
                      <div className="text-[10px] text-text3 font-mono">{p.tech} · {p.date}</div>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-mono flex-shrink-0"
                    style={{ background: p.status === "Live" ? "rgba(45,212,160,.1)" : "rgba(249,115,22,.1)", color: p.status === "Live" ? "#2dd4a0" : "#f97316", border: `1px solid ${p.status === "Live" ? "rgba(45,212,160,.25)" : "rgba(249,115,22,.25)"}` }}>
                    {p.status}
                  </span>
                </div>
                <div className="h-[3px] bg-border rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-1000" style={{ width: barVis ? `${p.prog}%` : "0%", background: `linear-gradient(90deg,${p.color},var(--a2))`, transitionDelay: `${i * 100}ms` }} />
                </div>
              </div>
            ))}
          </div>
        </AC>

        <AC delay={480}>
          <div className="bg-card border border-border rounded-2xl p-6 h-full">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-base font-extrabold text-text">Top Skills</h2>
              <Link href="/admin/skills" className="text-[11px] text-a1 font-mono no-underline bg-[var(--g1)] px-3 py-1 rounded-full border border-border2">View all →</Link>
            </div>
            {topSkills.map((s, i) => (
              <div key={s.skill} className={i < topSkills.length - 1 ? "mb-4" : ""}>
                <div className="flex justify-between text-[13px] mb-1.5">
                  <span className="text-text font-semibold">{s.skill}</span>
                  <span className="font-bold font-mono" style={{ color: s.color }}>{s.lvl}%</span>
                </div>
                <div className="h-[5px] bg-border rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-1000" style={{ width: barVis ? `${s.lvl}%` : "0%", background: `linear-gradient(90deg,${s.color},var(--a2))`, transitionDelay: `${i * 100}ms` }} />
                </div>
              </div>
            ))}
          </div>
        </AC>
      </div>

      {/* Row 4: Goals + Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-4">
        <AC delay={540}>
          <div className="bg-card border border-border rounded-2xl p-6">
            <h2 className="text-base font-extrabold text-text mb-5">2025 Goals</h2>
            {goals.map((g, i) => {
              const pct = Math.round((g.current / g.target) * 100);
              return (
                <div key={g.label} className={i < goals.length - 1 ? "mb-5" : ""}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[13px] font-semibold text-text">{g.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-text3 font-mono">{g.current}/{g.target}</span>
                      <span className="text-[11px] font-bold font-mono" style={{ color: g.color }}>{pct}%</span>
                    </div>
                  </div>
                  <div className="h-1.5 bg-border rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all duration-1000" style={{ width: barVis ? `${pct}%` : "0%", background: `linear-gradient(90deg,${g.color},var(--a2))`, transitionDelay: `${i * 120}ms` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </AC>

        <AC delay={600}>
          <div className="bg-card border border-border rounded-2xl p-6">
            <h2 className="text-base font-extrabold text-text mb-5">Recent Activity</h2>
            <div className="flex flex-col">
              {activity.map((a, i) => (
                <div key={i} className={`flex gap-3 items-start relative ${i < activity.length - 1 ? "pb-4" : ""}`}>
                  {i < activity.length - 1 && <div className="absolute left-[15px] top-8 w-px bg-border" style={{ height: "calc(100% - 16px)" }} />}
                  <div className="w-8 h-8 rounded-[9px] flex items-center justify-center text-sm flex-shrink-0 z-[1]"
                    style={{ background: `${a.color}15`, border: `1px solid ${a.color}30` }}>{a.icon}</div>
                  <div className="pt-1">
                    <div className="text-[13px] text-text font-semibold">{a.act}</div>
                    <div className="text-[11px] text-text3 font-mono mt-0.5">{a.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AC>
      </div>

      <style dangerouslySetInnerHTML={{__html:`@keyframes blink{0%,100%{opacity:1;box-shadow:0 0 6px #2dd4a0}50%{opacity:.4;box-shadow:none}}`}} />
    </div>
  );
}
