"use client";
import { useState } from "react";

const contactInfo = [
  { icon: "✉️", label: "Email",    val: "muhammadchand00001@gmail.com" },
  { icon: "📍", label: "Location", val: "Lahore 🇵🇰"            },
  { icon: "✅", label: "Status",   val: "Open to work"             },
  { icon: "⏰", label: "Response", val: "Within 24 hours"          },
];

export default function Contact() {
  const [step, setStep] = useState<"form" | "google" | "done">("form");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.includes("@")) return "Please enter a valid email.";
    if (!form.message.trim()) return "Please write a message.";
    return "";
  };

  const handleSubmit = () => {
    const e = validate();
    if (e) { setErr(e); return; }
    setErr(""); setStep("google");
  };

  const inputCls = "w-full px-[18px] py-[13px] bg-bg2 border border-border rounded-xl text-text text-[15px] font-sans outline-none transition-colors duration-200 focus:border-a1 appearance-none";

  return (
    <section id="contact" className="py-[120px] px-[5%] md:py-20 bg-bg2 relative overflow-hidden">
      {/* BG glows */}
      <div className="absolute w-[500px] h-[500px] rounded-full pointer-events-none -top-[100px] -right-[100px]"
        style={{ background: "radial-gradient(circle,var(--g2) 0%,transparent 70%)" }} />
      <div className="absolute w-[400px] h-[400px] rounded-full pointer-events-none -bottom-[80px] -left-[80px]"
        style={{ background: "radial-gradient(circle,var(--g1) 0%,transparent 70%)" }} />

      <div className="max-w-[1100px] mx-auto relative">
        <div className="text-center mb-[70px]">
          <div className="sec-label justify-center">Get In Touch</div>
          <h2 className="font-black tracking-[-2px]" style={{ fontSize: "clamp(32px,5vw,56px)" }}>
            Let&apos;s <span className="grad-text">Work Together</span>
          </h2>
          <p className="text-text2 mt-4">Have a project in mind? I&apos;d love to hear about it.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-[50px] md:gap-8 items-start">
          {/* Left info */}
          <div>
            <h3 className="text-[22px] font-extrabold mb-7 text-text">Contact Info</h3>
            {contactInfo.map(i => (
              <div key={i.label} className="flex gap-[14px] items-center mb-[22px]">
                <div className="w-[46px] h-[46px] rounded-xl flex items-center justify-center text-xl flex-shrink-0 border border-border2"
                  style={{ background: "var(--g1)" }}>
                  {i.icon}
                </div>
                <div>
                  <div className="text-[10px] text-a1 tracking-[2px] font-mono">{i.label.toUpperCase()}</div>
                  <div className="text-sm font-semibold text-text mt-0.5">{i.val}</div>
                </div>
              </div>
            ))}

            <div className="mt-8">
              <div className="text-[11px] text-text3 tracking-[2.5px] font-mono mb-[14px]">SOCIALS</div>
              <div className="flex gap-[10px] flex-wrap">
                {[
                  { name: "GitHub ⌨️", url: "https://github.com" },
                  { name: "LinkedIn 💼", url: "https://linkedin.com" },
                  { name: "Twitter 🐦", url: "https://twitter.com" }
                ].map(s => (
                  <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                    className="px-[14px] py-2 rounded-xl border border-border bg-card text-text2 text-xs cursor-pointer transition-all duration-200 font-sans hover:border-a1 hover:text-a1">
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form card */}
          <div className="bg-card border border-border rounded-[24px] p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "linear-gradient(90deg,var(--a1),var(--a2),var(--a3))" }} />

            {/* Step 1: Form */}
            {step === "form" && (
              <div className="flex flex-col gap-[18px]">
                <h3 className="text-xl font-extrabold text-text mb-1">Send a Message</h3>
                <div className="grid grid-cols-2 gap-[14px]">
                  <div>
                    <label className="text-xs text-text3 font-mono tracking-[1px] block mb-[7px]">YOUR NAME</label>
                    <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Muhammad Chand" className={inputCls} />
                  </div>
                  <div>
                    <label className="text-xs text-text3 font-mono tracking-[1px] block mb-[7px]">YOUR EMAIL</label>
                    <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" className={inputCls} />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-text3 font-mono tracking-[1px] block mb-[7px]">SUBJECT</label>
                  <input value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} placeholder="Project inquiry / Collaboration..." className={inputCls} />
                </div>
                <div>
                  <label className="text-xs text-text3 font-mono tracking-[1px] block mb-[7px]">MESSAGE</label>
                  <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell me about your project..." rows={5} className={`${inputCls} resize-none`} />
                </div>
                {err && (
                  <div className="px-4 py-[10px] rounded-lg text-[13px] text-[#f97316] bg-[rgba(249,115,22,.1)] border border-[rgba(249,115,22,.3)]">⚠️ {err}</div>
                )}
                <button onClick={handleSubmit} className="btn-p w-full justify-center py-[14px]">Continue to Verify →</button>
                <p className="text-center text-xs text-text3">Next step: verify with Google for secure delivery</p>
              </div>
            )}

            {/* Step 2: Google */}
            {step === "google" && (
              <div className="text-center py-5">
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-[38px] mx-auto mb-6 border border-border2" style={{ background: "var(--g1)" }}>📨</div>
                <h3 className="text-[22px] font-extrabold text-text mb-[10px]">Almost There!</h3>
                <p className="text-text2 text-[15px] leading-[1.7] mb-3">Your message is ready. Please verify with your Google account for secure delivery.</p>
                <div className="p-[14px] bg-bg2 rounded-xl border border-border mb-7 text-left">
                  <div className="text-xs text-text3 font-mono mb-2">MESSAGE PREVIEW</div>
                  <div className="text-sm text-text font-semibold">From: {form.name} &lt;{form.email}&gt;</div>
                  {form.subject && <div className="text-[13px] text-text2 mt-1">Subject: {form.subject}</div>}
                  <div className="text-[13px] text-text2 mt-1 overflow-hidden text-ellipsis whitespace-nowrap">{form.message}</div>
                </div>
                <button onClick={() => { setLoading(true); window.location.href = "/api/auth/signin/google?callbackUrl=/"; }}
                  disabled={loading}
                  className="w-full py-[14px] px-5 rounded-xl border border-border2 bg-white text-[#1f2937] text-[15px] font-bold cursor-pointer flex items-center justify-center gap-3 font-sans transition-all duration-200 hover:shadow-[0_6px_20px_rgba(0,0,0,.2)]"
                  style={{ boxShadow: "0 2px 10px rgba(0,0,0,.15)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  {loading ? "Redirecting..." : "Continue with Google"}
                </button>
                <button onClick={() => setStep("form")} className="mt-[14px] bg-transparent border-none text-text2 text-[13px] cursor-pointer underline">← Edit message</button>
              </div>
            )}

            {/* Step 3: Done */}
            {step === "done" && (
              <div className="text-center py-[30px]">
                <div className="text-[60px] mb-5">✅</div>
                <h3 className="text-2xl font-extrabold text-a3 mb-[10px]">Message Sent!</h3>
                <p className="text-text2 text-[15px]">Thank you! I&apos;ll get back to you within 24 hours.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
