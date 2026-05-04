"use client";
import { useEffect, useState } from "react";

const monthlyViews = [
  { month: "Jul", views: 1200 }, { month: "Aug", views: 1800 }, { month: "Sep", views: 2200 },
  { month: "Oct", views: 1900 }, { month: "Nov", views: 2800 }, { month: "Dec", views: 3200 }, { month: "Jan", views: 4100 },
];
const topPages = [
  { page: "/",         label: "Portfolio Home", views: 4100, pct: 100, color: "#5b8dee" },
  { page: "/projects", label: "Projects",       views: 2800, pct: 68,  color: "#9d6ff0" },
  { page: "/about",    label: "About",          views: 1900, pct: 46,  color: "#2dd4a0" },
  { page: "/contact",  label: "Contact",        views: 1400, pct: 34,  color: "#f97316" },
  { page: "/admin",    label: "Admin",          views: 320,  pct: 8,   color: "#38bdf8" },
];
const traffic = [
  { source: "Direct",        pct: 38, color: "#5b8dee" },
  { source: "Google Search", pct: 28, color: "#9d6ff0" },
  { source: "GitHub",        pct: 18, color: "#2dd4a0" },
  { source: "LinkedIn",      pct: 10, color: "#f97316" },
  { source: "Twitter/X",     pct: 6,  color: "#e879f9" },
];
const kpis = [
  { label: "Total Views",     val: "14.2K",  chg: "+32%", icon: "👁️", color: "#5b8dee" },
  { label: "Unique Visitors", val: "8.7K",   chg: "+18%", icon: "👤", color: "#9d6ff0" },
  { label: "Avg. Session",    val: "3m 42s", chg: "+12%", icon: "⏱️", color: "#2dd4a0" },
  { label: "Bounce Rate",     val: "24%",    chg: "-8%",  icon: "📉", color: "#f97316" },
];

function AC({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [v, setV] = useState(false);
  useEffect(() => { const t = setTimeout(() => setV(true), delay); return () => clearTimeout(t); }, [delay]);
  return <div className={`transition-all duration-500 ${v ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>{children}</div>;
}

function BarChart({ data, vis }: { data: typeof monthlyViews; vis: boolean }) {
  const max = Math.max(...data.map(d => d.views));
  return (
    <div className="flex items-end gap-2.5 h-40 px-1">
      {data.map((d, i) => (
        <div key={d.month} className="flex-1 flex flex-col items-center gap-1.5">
          <div className="text-[10px] text-text3 font-mono">{d.views >= 1000 ? `${(d.views / 1000).toFixed(1)}k` : d.views}</div>
          <div className="w-full bg-border rounded-md overflow-hidden h-[120px] flex items-end">
            <div className="w-full rounded-md transition-all duration-700"
              style={{ height: vis ? `${(d.views / max) * 100}%` : "0%", background: i === data.length - 1 ? "linear-gradient(180deg,var(--a1),var(--a2))" : "linear-gradient(180deg,rgba(91,141,238,.5),rgba(157,111,240,.3))", transitionDelay: `${i * 80}ms` }} />
          </div>
          <div className="text-[10px] text-text3 font-mono">{d.month}</div>
        </div>
      ))}
    </div>
  );
}

function DonutChart({ data, vis }: { data: typeof traffic; vis: boolean }) {
  const size = 140; const r = 50; const cx = 70; const cy = 70;
  const circ = 2 * Math.PI * r;
  let offset = 0;
  return (
    <div className="flex gap-6 items-center flex-wrap">
      <svg width={size} height={size} className="flex-shrink-0">
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--border)" strokeWidth={18} />
        {data.map((d, i) => {
          const dash = (d.pct / 100) * circ; const gap = circ - dash; const cur = offset; offset += dash;
          return <circle key={d.source} cx={cx} cy={cy} r={r} fill="none" stroke={d.color} strokeWidth={18}
            strokeDasharray={vis ? `${dash} ${gap}` : `0 ${circ}`} strokeDashoffset={-cur + circ / 4}
            style={{ transition: `stroke-dasharray .8s ease ${i * 0.1}s` }} />;
        })}
        <text x={cx} y={cy - 6} textAnchor="middle" fill="var(--text)" fontSize={14} fontWeight={800} fontFamily="'JetBrains Mono',monospace">8.7K</text>
        <text x={cx} y={cy + 10} textAnchor="middle" fill="var(--text3)" fontSize={9} fontFamily="'JetBrains Mono',monospace">VISITORS</text>
      </svg>
      <div className="flex flex-col gap-2">
        {data.map(d => (
          <div key={d.source} className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-[3px] flex-shrink-0" style={{ background: d.color }} />
            <span className="text-xs text-text2 font-semibold">{d.source}</span>
            <span className="text-xs font-bold font-mono ml-auto" style={{ color: d.color }}>{d.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AnalyticsPage() {
  const [vis, setVis] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVis(true), 400); return () => clearTimeout(t); }, []);

  return (
    <div>
      <AC delay={0}>
        <div className="mb-8">
          <h1 className="text-[clamp(20px,3vw,28px)] font-black text-text tracking-tight mb-1"><span className="grad-text">Analytics</span></h1>
          <p className="text-text2 text-sm">Portfolio performance — last 7 months</p>
        </div>
      </AC>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
        {kpis.map((k, i) => (
          <AC key={k.label} delay={i * 70}>
            <div className="hover-card p-5 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg,${k.color},transparent)` }} />
              <div className="flex justify-between items-center mb-3">
                <span className="text-[26px]">{k.icon}</span>
                <span className="px-2 py-0.5 rounded-full text-[11px] font-mono" style={{ background: k.chg.startsWith("+") ? "rgba(45,212,160,.12)" : "rgba(249,115,22,.12)", color: k.chg.startsWith("+") ? "#2dd4a0" : "#f97316" }}>{k.chg}</span>
              </div>
              <div className="text-[26px] font-black font-mono mb-1" style={{ color: k.color, letterSpacing: "-1px" }}>{k.val}</div>
              <div className="text-xs text-text2 font-semibold">{k.label}</div>
            </div>
          </AC>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-5 mb-5">
        <AC delay={300}>
          <div className="bg-card border border-border rounded-2xl p-7">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-base font-extrabold text-text">Monthly Views</h2>
              <span className="text-[11px] text-a1 font-mono">Jul — Jan</span>
            </div>
            <BarChart data={monthlyViews} vis={vis} />
          </div>
        </AC>
        <AC delay={380}>
          <div className="bg-card border border-border rounded-2xl p-7">
            <h2 className="text-base font-extrabold text-text mb-6">Traffic Sources</h2>
            <DonutChart data={traffic} vis={vis} />
          </div>
        </AC>
      </div>

      <AC delay={460}>
        <div className="bg-card border border-border rounded-2xl p-7">
          <h2 className="text-base font-extrabold text-text mb-6">Top Pages</h2>
          {topPages.map((p, i) => (
            <div key={p.page} className={i < topPages.length - 1 ? "mb-4" : ""}>
              <div className="flex justify-between items-center mb-2">
                <div className="flex gap-2.5 items-center">
                  <span className="font-mono text-xs text-text3 w-20">{p.page}</span>
                  <span className="text-[13px] font-semibold text-text">{p.label}</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-[13px] font-bold font-mono" style={{ color: p.color }}>{p.views.toLocaleString()}</span>
                  <span className="text-[11px] text-text3 font-mono w-9 text-right">{p.pct}%</span>
                </div>
              </div>
              <div className="h-[5px] bg-border rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all duration-1000" style={{ width: vis ? `${p.pct}%` : "0%", background: `linear-gradient(90deg,${p.color},var(--a2))`, transitionDelay: `${i * 100}ms` }} />
              </div>
            </div>
          ))}
        </div>
      </AC>
    </div>
  );
}
