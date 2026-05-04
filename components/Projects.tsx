"use client";

const projects = [
  { title: "E-Commerce Platform",   desc: "Full-stack e-commerce with real-time inventory, Stripe payments, and admin dashboard.", tags: ["Next.js","TypeScript","PostgreSQL","Stripe"], icon: "🛒", color: "#5b8dee", status: "Live",       year: "2024" },
  { title: "AI Chat Application",   desc: "Real-time AI chat platform with streaming responses, GPT-4 integration, and history.", tags: ["React","Node.js","OpenAI","WebSocket"],     icon: "🤖", color: "#9d6ff0", status: "Live",       year: "2024" },
  { title: "Task Management SaaS",  desc: "Collaborative project tool with Kanban boards, time tracking, and team analytics.",   tags: ["Next.js","Prisma","PostgreSQL","Redis"],    icon: "📋", color: "#2dd4a0", status: "In Progress", year: "2025" },
  { title: "DevOps Dashboard",      desc: "Real-time cloud infrastructure monitoring with auto-alerts and performance metrics.",  tags: ["React","Docker","AWS","GraphQL"],           icon: "📊", color: "#38bdf8", status: "Live",       year: "2023" },
  { title: "Mobile Banking App",    desc: "Secure banking app with biometric auth, transaction history, and budget tracking.",   tags: ["React Native","Node.js","MongoDB","JWT"],  icon: "💳", color: "#f97316", status: "Live",       year: "2023" },
  { title: "Social Analytics Tool", desc: "Analytics platform tracking social media performance across multiple platforms.",     tags: ["Next.js","D3.js","Redis","REST API"],       icon: "📈", color: "#e879f9", status: "Live",       year: "2024" },
];

export default function Projects() {
  return (
    <section id="projects" className="mesh-bg overflow-hidden py-[120px] px-[5%] md:py-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-[70px]">
          <div className="sec-label justify-center">Portfolio</div>
          <h2 className="font-black tracking-[-2px]" style={{ fontSize: "clamp(32px,5vw,56px)" }}>
            Featured <span className="grad-text">Projects</span>
          </h2>
          <p className="text-text2 mt-4 text-base">Work that speaks for itself</p>
        </div>

        <div className="grid gap-[22px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(p => (
            <div key={p.title} className="hover-card p-[30px] relative overflow-hidden cursor-pointer">
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg,${p.color},transparent)` }} />

              <div className="flex justify-between items-center mb-5">
                <div className="w-[54px] h-[54px] rounded-[14px] flex items-center justify-center text-[26px]"
                  style={{ background: `${p.color}15`, border: `1px solid ${p.color}35` }}>
                  {p.icon}
                </div>
                <div className="flex gap-2 items-center">
                  <span className="px-[10px] py-[3px] rounded-full text-[11px] font-mono"
                    style={{ background: p.status === "Live" ? "rgba(45,212,160,.12)" : "rgba(249,115,22,.12)", color: p.status === "Live" ? "#2dd4a0" : "#f97316", border: `1px solid ${p.status === "Live" ? "rgba(45,212,160,.25)" : "rgba(249,115,22,.25)"}` }}>
                    {p.status}
                  </span>
                  <span className="text-[11px] text-text3 font-mono">{p.year}</span>
                </div>
              </div>

              <h3 className="text-[19px] font-extrabold text-text mb-[10px] tracking-tight">{p.title}</h3>
              <p className="text-text2 text-sm leading-[1.75] mb-[22px]">{p.desc}</p>

              <div className="flex flex-wrap gap-[7px] mb-[22px]">
                {p.tags.map(t => (
                  <span key={t} className="px-3 py-1 rounded-[7px] text-xs bg-bg2 text-text3 font-mono border border-border">{t}</span>
                ))}
              </div>

              <div className="pt-[18px] border-t border-border flex justify-between">
                <span className="text-[13px] font-bold font-mono cursor-pointer" style={{ color: p.color }}>View Project →</span>
                <span className="text-[13px] text-text3 cursor-pointer">GitHub ↗</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-o">View All on GitHub →</a>
        </div>
      </div>
    </section>
  );
}
