"use client";
import { useEffect, useState } from "react";

type Msg = { id: number; name: string; email: string; subject: string; message: string; time: string; read: boolean; tag: string; tagColor: string; };

const initialMsgs: Msg[] = [
  { id: 1, name: "Ahmed Khan",    email: "ahmed@example.com",   subject: "E-Commerce Project",     message: "Hi Muhammad! I need a full-stack e-commerce solution for my clothing brand. Budget is flexible. Can we schedule a call?",               time: "2h ago",  read: false, tag: "Project",  tagColor: "#5b8dee" },
  { id: 2, name: "Sarah Johnson", email: "sarah@startup.io",    subject: "React Developer Needed", message: "We're a startup looking for a React developer for a 3-month contract. The project involves building a SaaS dashboard. Interested?",    time: "5h ago",  read: false, tag: "Job",      tagColor: "#9d6ff0" },
  { id: 3, name: "Ali Raza",      email: "ali@agency.pk",       subject: "Collaboration Offer",    message: "Hey! I run a digital agency and we're looking for a reliable developer to collaborate on client projects. Let's connect!",             time: "1d ago",  read: true,  tag: "Collab",   tagColor: "#2dd4a0" },
  { id: 4, name: "Emma Williams", email: "emma@techcorp.com",   subject: "Portfolio Feedback",     message: "Your portfolio is absolutely stunning! The animations and design are top-notch. I'd love to discuss a potential opportunity.",          time: "2d ago",  read: true,  tag: "Feedback", tagColor: "#f97316" },
  { id: 5, name: "Hassan Malik",  email: "hassan@freelance.pk", subject: "Next.js Consultation",   message: "I'm working on a Next.js project and running into some performance issues. Would you be available for a 1-hour paid consultation?",    time: "3d ago",  read: true,  tag: "Consult",  tagColor: "#38bdf8" },
  { id: 6, name: "Priya Sharma",  email: "priya@design.in",     subject: "UI/UX Collaboration",    message: "I'm a UI/UX designer looking for a developer to bring my designs to life. I have a fintech app design ready. Are you available?",      time: "4d ago",  read: true,  tag: "Collab",   tagColor: "#2dd4a0" },
  { id: 7, name: "David Chen",    email: "david@venture.com",   subject: "Investment Opportunity", message: "We're impressed by your work and would like to discuss a potential partnership for our upcoming tech venture. Please reach out!",       time: "5d ago",  read: true,  tag: "Business", tagColor: "#e879f9" },
];

function AC({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [v, setV] = useState(false);
  useEffect(() => { const t = setTimeout(() => setV(true), delay); return () => clearTimeout(t); }, [delay]);
  return <div className={`transition-all duration-500 ${v ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>{children}</div>;
}

export default function MessagesPage() {
  const [msgs, setMsgs] = useState<Msg[]>(initialMsgs);
  const [selected, setSelected] = useState<Msg | null>(null);
  const [filter, setFilter] = useState("All");
  const [reply, setReply] = useState("");
  const [sent, setSent] = useState(false);

  const unread = msgs.filter(m => !m.read).length;
  const filters = ["All", "Unread", "Project", "Job", "Collab"];
  const filtered = msgs.filter(m => filter === "All" ? true : filter === "Unread" ? !m.read : m.tag === filter);

  const open = (m: Msg) => { setSelected(m); setSent(false); setReply(""); setMsgs(p => p.map(x => x.id === m.id ? { ...x, read: true } : x)); };
  const sendReply = () => { if (!reply.trim()) return; setSent(true); setReply(""); };
  const deleteMsg = (id: number) => { setMsgs(p => p.filter(m => m.id !== id)); if (selected?.id === id) setSelected(null); };

  return (
    <div>
      <AC delay={0}>
        <div className="flex justify-between items-start mb-8 flex-wrap gap-3">
          <div>
            <h1 className="text-[clamp(20px,3vw,28px)] font-black text-text tracking-tight mb-1"><span className="grad-text">Messages</span></h1>
            <p className="text-text2 text-sm">{msgs.length} total · <span className="text-a1 font-bold">{unread} unread</span></p>
          </div>
          {unread > 0 && (
            <button onClick={() => setMsgs(p => p.map(m => ({ ...m, read: true })))}
              className="px-4 py-2 rounded-xl border border-border bg-card text-text2 text-[13px] font-semibold cursor-pointer font-sans hover:border-a1 hover:text-a1 transition-colors">
              Mark all read ✓
            </button>
          )}
        </div>
      </AC>

      <AC delay={80}>
        <div className="flex gap-2 mb-5 flex-wrap">
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-lg border text-[13px] font-semibold cursor-pointer transition-all duration-200 font-sans ${filter === f ? "border-a1 bg-[var(--g1)] text-a1" : "border-border bg-transparent text-text2 hover:border-a1 hover:text-a1"}`}>
              {f}{f === "Unread" && unread > 0 && <span className="ml-1 bg-a1 text-white rounded-full px-1.5 py-0.5 text-[10px]">{unread}</span>}
            </button>
          ))}
        </div>
      </AC>

      <div className="grid gap-5 grid-cols-1">
        <div className="flex flex-col gap-2.5">
          {filtered.map((m, i) => (
            <AC key={m.id} delay={i * 50}>
              <div onClick={() => open(m)}
                className={`rounded-[14px] px-4 py-4 cursor-pointer transition-all duration-200 ${selected?.id === m.id ? "bg-[var(--g1)]" : "bg-card hover:bg-[var(--bg3)]"}`}
                style={{ border: `1px solid ${selected?.id === m.id ? "var(--a1)" : "var(--border)"}`, borderLeft: !m.read ? "3px solid var(--a1)" : undefined }}>
                <div className="flex justify-between items-start mb-1.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                      style={{ background: "linear-gradient(135deg,var(--a1),var(--a2))" }}>{m.name.charAt(0)}</div>
                    <div>
                      <div className={`text-sm text-text ${m.read ? "font-semibold" : "font-extrabold"}`}>{m.name}</div>
                      <div className="text-[11px] text-text3 font-mono">{m.email}</div>
                    </div>
                  </div>
                  <div className="flex gap-1.5 items-center flex-shrink-0">
                    <span className="px-2 py-0.5 rounded-lg text-[10px] font-mono" style={{ background: `${m.tagColor}15`, color: m.tagColor }}>{m.tag}</span>
                    <span className="text-[11px] text-text3 font-mono">{m.time}</span>
                    {!m.read && <span className="w-1.5 h-1.5 rounded-full bg-a1 inline-block" />}
                  </div>
                </div>
                <div className="text-[13px] font-bold text-text mb-1">{m.subject}</div>
                <div className="text-xs text-text2 overflow-hidden text-ellipsis whitespace-nowrap">{m.message}</div>
              </div>
            </AC>
          ))}
          {filtered.length === 0 && <div className="text-center py-16 text-text3 text-[15px]">No messages 📭</div>}
        </div>

        {selected && (
          <div className="fixed inset-0 z-[500] flex items-center justify-center p-4 backdrop-blur-sm" style={{ background: "rgba(0,0,0,.6)" }} onClick={() => setSelected(null)}>
            <AC delay={0}>
              <div className="bg-card border border-border rounded-2xl p-7 w-full max-w-lg max-h-[90vh] overflow-y-auto relative" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-start mb-5">
                  <div className="flex gap-3 items-center">
                    <div className="w-11 h-11 rounded-full flex items-center justify-center text-lg font-bold text-white flex-shrink-0"
                      style={{ background: "linear-gradient(135deg,var(--a1),var(--a2))" }}>{selected.name.charAt(0)}</div>
                    <div>
                      <div className="text-[15px] font-extrabold text-text">{selected.name}</div>
                      <div className="text-xs text-text3 font-mono">{selected.email}</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => deleteMsg(selected.id)} className="px-3 py-1.5 rounded-lg text-xs cursor-pointer font-sans transition-colors hover:opacity-80" style={{ border: "1px solid rgba(249,115,22,.3)", background: "rgba(249,115,22,.08)", color: "#f97316" }}>Delete</button>
                    <button onClick={() => setSelected(null)} className="px-3 py-1.5 rounded-lg border border-border bg-bg2 text-text2 text-xs cursor-pointer font-sans">✕</button>
                  </div>
                </div>

                <div className="flex justify-between items-center px-3.5 py-2.5 bg-bg2 rounded-xl border border-border mb-4">
                  <span className="text-sm font-bold text-text">{selected.subject}</span>
                  <span className="text-[11px] text-text3 font-mono">{selected.time}</span>
                </div>

                <p className="text-sm text-text2 leading-[1.8] mb-6 p-4 bg-bg2 rounded-xl border border-border">{selected.message}</p>

                {sent ? (
                  <div className="text-center p-5 rounded-xl border" style={{ background: "rgba(45,212,160,.08)", borderColor: "rgba(45,212,160,.25)" }}>
                    <div className="text-2xl mb-2">✅</div>
                    <div className="text-sm font-bold" style={{ color: "#2dd4a0" }}>Reply sent successfully!</div>
                  </div>
                ) : (
                  <div>
                    <div className="text-xs text-text3 font-mono tracking-[1px] mb-2">REPLY</div>
                    <textarea value={reply} onChange={e => setReply(e.target.value)} placeholder={`Reply to ${selected.name}...`} rows={4}
                      className="w-full px-4 py-3 bg-bg2 border border-border rounded-xl text-text text-sm font-sans outline-none resize-none mb-3 focus:border-a1 transition-colors" />
                    <button onClick={sendReply} className="btn-p w-full justify-center py-3">Send Reply →</button>
                  </div>
                )}
              </div>
            </AC>
          </div>
        )}
      </div>
    </div>
  );
}
