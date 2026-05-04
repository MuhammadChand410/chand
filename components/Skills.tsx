"use client";
import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "React.js",     pct: 90, icon: "⚛️",  cat: "Frontend", color: "var(--a1)" },
  { name: "Next.js",      pct: 92, icon: "▲",   cat: "Frontend", color: "var(--a2)" },
  { name: "Tailwind CSS", pct: 92, icon: "🌊",  cat: "Frontend", color: "#06b6d4"   },
  { name: "HTML",         pct: 96, icon: "🟧",  cat: "Frontend", color: "#e34c26"   },
  { name: "CSS",          pct: 94, icon: "🔵",  cat: "Frontend", color: "#264de4"   },
  { name: "Bootstrap",    pct: 92, icon: "🅱️",  cat: "Frontend", color: "#7952b3"   },
  { name: "Git / GitHub", pct: 88, icon: "🐙",  cat: "Tools",    color: "var(--a2)" },
];

const stack = ["React.js","Next.js","HTML","CSS","Bootstrap","Tailwind","REST API","Git","Figma",];

export default function Skills() {
  const secRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: .2 });
    if (secRef.current) obs.observe(secRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={secRef} className="py-[120px] px-[5%] md:py-20 bg-bg2 relative overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-25 pointer-events-none"
        style={{ backgroundImage: "linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px)", backgroundSize: "70px 70px" }} />

      <div className="max-w-[1200px] mx-auto relative">
        <div className="text-center mb-[70px]">
          <div className="sec-label justify-center">Expertise</div>
          <h2 className="font-black tracking-[-2px]" style={{ fontSize: "clamp(32px,5vw,56px)" }}>
            Skills &amp; <span className="grad-text">Technologies</span>
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid gap-[18px] mb-[60px]" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))" }}>
          {skills.map((s, i) => (
            <div key={s.name} className="hover-card p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-[10px]">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-[22px]"
                    style={{ background: `${s.color}18`, border: `1px solid ${s.color}30` }}>
                    {s.icon}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-text">{s.name}</div>
                    <div className="text-[10px] font-mono tracking-[1.5px] mt-0.5" style={{ color: s.color }}>{s.cat.toUpperCase()}</div>
                  </div>
                </div>
                <span className="font-mono text-xl font-bold" style={{ color: s.color }}>{s.pct}%</span>
              </div>
              <div className="h-[5px] bg-border rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all duration-[1200ms]"
                  style={{ background: `linear-gradient(90deg,${s.color},var(--a2))`, width: visible ? `${s.pct}%` : "0%", transitionDelay: `${i * 80}ms` }} />
              </div>
            </div>
          ))}
        </div>

        {/* Stack tags */}
        <div className="text-center">
          <div className="text-[11px] text-text3 tracking-[3px] font-mono mb-5">TECH STACK</div>
          <div className="flex flex-wrap gap-[10px] justify-center">
            {stack.map(t => (
              <span key={t}
                className="px-4 py-[6px] cursor-pointer rounded-full border border-border bg-card text-[13px] text-text2 font-mono cursor-default transition-all duration-200 hover:border-a1 hover:text-a1 hover:bg-[var(--g1)]">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
