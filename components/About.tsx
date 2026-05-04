"use client";

const info = [
  { k: "Location",   v: "Lahore"              },
  { k: "Email",      v: "muhammadchand00001@gmail.com"},
  { k: "Available",  v: "Remote / Freelance"    },
  { k: "Experience", v: "1+ Years"              },
];

const chips = [
  { txt: "React.js ⚛️",  top: "8%",  right: "-5%",  delay: "0s"  },
  { txt: "Next.js 🚀", bottom: "12%", left: "-8%", delay: ".4s" },
  { txt: "HTML/CSS 🌐", top: "55%", right: "-12%", delay: ".2s" },
];

export default function About() {
  return (
    <section id="about" className="mesh-bg overflow-hidden py-[120px] px-[5%] md:py-20">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[80px] md:gap-10 items-center">

        {/* Visual side — hidden on mobile */}
        <div className="anim-slider relative hidden md:block">
          <div className="w-full max-w-[420px] mx-auto relative" style={{ aspectRatio: "1" }}>
            <div className="anim-spin absolute inset-0 rounded-full border border-[rgba(91,141,238,.15)]" />
            <div className="anim-spinrev absolute rounded-full border border-dashed border-[rgba(157,111,240,.15)]" style={{ inset: 20 }} />
            <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle,rgba(91,141,238,.08),transparent 70%)" }} />

            {/* Avatar */}
            <div className="absolute flex flex-col items-center justify-center gap-3 rounded-[28px] bg-card border border-border" style={{ inset: 40 }}>
              <div className="w-[90px] h-[90px] rounded-full flex items-center justify-center font-black text-[32px] text-white font-mono"
                style={{ background: "linear-gradient(135deg,var(--a1),var(--a2))", boxShadow: "0 10px 30px rgba(91,141,238,.4)" }}>MC</div>
              <div className="font-extrabold text-lg text-text tracking-tight">Muhammad Chand</div>
              <div className="font-mono text-[10px] text-a1 tracking-[2px]">WEB DEVELOPER</div>
            </div>

            {/* Floating chips */}
            {chips.map(c => (
              <div key={c.txt} className="anim-float absolute bg-card border border-border2 rounded-[10px] px-[14px] py-2 text-xs text-text font-semibold whitespace-nowrap"
                style={{ top: c.top, bottom: c.bottom, left: c.left, right: c.right, boxShadow: "0 8px 24px rgba(0,0,0,.3)", animationDelay: c.delay }}>
                {c.txt}
              </div>
            ))}
          </div>
        </div>

        {/* Content side */}
        <div className="anim-slidel">
          <div className="sec-label">About Me</div>
          <h2 className="font-black leading-[1.1] mb-6 tracking-[-2px]" style={{ fontSize: "clamp(32px,4vw,52px)" }}>
            Building the Web,<br />
            <span className="grad-text">One Pixel at a Time</span>
          </h2>
          <p className="text-text2 leading-[1.9] text-base mb-5">
            I&apos;m a passionate Web Developer based in Pakistan with 3+ years of experience crafting modern web applications. I specialize in React, Next.js, and full-stack development.
          </p>
          <p className="text-text2 leading-[1.9] text-base mb-10">
            I believe in clean code, pixel-perfect design, and delivering experiences that users love. Every project is an opportunity to push boundaries and learn something new.
          </p>

          {/* Info grid */}
          <div className="grid grid-cols-2 gap-5 mb-9">
            {info.map(i => (
              <div key={i.k} className="px-[18px] py-[14px] bg-card border border-border rounded-xl">
                <div className="text-[10px] text-a1 tracking-[2px] font-mono mb-1">{i.k.toUpperCase()}</div>
                <div className="text-sm font-bold text-text">{i.v}</div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 flex-wrap">
            <a href="#contact" className="btn-p">Work With Me →</a>
            <a href="#projects" className="btn-o">View Projects</a>
          </div>
        </div>
      </div>
    </section>
  );
}
