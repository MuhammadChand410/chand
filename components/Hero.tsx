"use client";
import { useEffect, useRef, useState } from "react";

const roles = ["Frontend Developer", "React Specialist", "Next.js Expert", "Problem Solver"];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = roles[roleIdx];
    let timer: ReturnType<typeof setTimeout>;
    if (typing) {
      if (displayed.length < target.length)
        timer = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 75);
      else timer = setTimeout(() => setTyping(false), 1800);
    } else {
      if (displayed.length > 0)
        timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      else { setRoleIdx(p => (p + 1) % roles.length); setTyping(true); }
    }
    return () => clearTimeout(timer);
  }, [displayed, typing, roleIdx]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;
    let mouse = { x: W / 2, y: H / 2 };
    const onResize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    const onMouse = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouse);
    const count = 110;
    const pts = Array.from({ length: count }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .5, vy: (Math.random() - .5) * .5,
      r: Math.random() * 1.8 + .4, hue: Math.random() > .5 ? 220 : 270,
      alpha: Math.random() * .45 + .1,
    }));
    let raf: number;
    function draw() {
      ctx!.clearRect(0, 0, W, H);
      for (const p of pts) {
        const dx = p.x - mouse.x, dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) { p.vx += dx / dist * .08; p.vy += dy / dist * .08; }
        p.x += p.vx; p.y += p.vy; p.vx *= .99; p.vy *= .99;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx!.beginPath(); ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `hsla(${p.hue},80%,70%,${p.alpha})`; ctx!.fill();
      }
      for (let i = 0; i < count; i++) for (let j = i + 1; j < count; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 130) {
          ctx!.beginPath(); ctx!.moveTo(pts[i].x, pts[i].y); ctx!.lineTo(pts[j].x, pts[j].y);
          ctx!.strokeStyle = `hsla(220,80%,70%,${.06 * (1 - d / 130)})`; ctx!.lineWidth = .6; ctx!.stroke();
        }
      }
      raf = requestAnimationFrame(draw);
    }
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); window.removeEventListener("mousemove", onMouse); };
  }, []);

  return (
    <section id="home" className="mesh-bg min-h-screen flex items-center justify-center relative overflow-hidden w-full pt-20">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-50" />

      {/* Orbital rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
        {[280, 400, 520].map((size, i) => (
          <div key={i} className={i % 2 === 0 ? "anim-spin" : "anim-spinrev"}
            style={{ position: "absolute", width: size, height: size, borderRadius: "50%", border: `1px ${i === 1 ? "dashed" : "solid"} rgba(91,141,238,${.06 - i * .01})`, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
        ))}
        <div className="absolute top-1/2 left-1/2 w-0 h-0">
          <div className="w-2 h-2 rounded-full bg-a1 anim-orbit" style={{ boxShadow: "0 0 12px var(--a1)" }} />
        </div>
      </div>

      {/* Glow blob */}
      <div className="absolute w-[700px] h-[700px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(91,141,238,.06) 0%,transparent 70%)" }} />

      {/* Content */}
      <div className="relative z-[2] text-center px-5 max-w-[900px] w-full">

        {/* Badge */}
        <div className="anim-fadeup d1 inline-flex items-center gap-2 px-[18px] py-[6px] rounded-full border border-[rgba(91,141,238,.35)] bg-[rgba(91,141,238,.08)] mb-8 text-xs font-mono tracking-[1.5px] text-a1">
          <span className="w-[7px] h-[7px] rounded-full bg-a3 inline-block" style={{ boxShadow: "0 0 8px var(--a3)", animation: "glow-pulse 2s infinite" }} />
          AVAILABLE FOR WORK
        </div>

        {/* Name */}
        <h1 className="anim-fadeup d2 font-black leading-none mb-5" style={{ fontSize: "clamp(52px,9vw,104px)", letterSpacing: "-4px" }}>
          <span className="grad-text-3">Muhammad</span><br />
          <span className="text-text">Chand</span>
        </h1>

        {/* Typewriter */}
        <div className="anim-fadeup d3 h-10 flex items-center justify-center mb-7">
          <span className="font-mono text-a2 tracking-[2px]" style={{ fontSize: "clamp(14px,2.2vw,20px)" }}>
            &lt; {displayed}
            <span className="border-l-2 border-a1 ml-0.5" style={{ animation: "typeCursor 1s infinite" }} />
            {" />"}
          </span>
        </div>

        {/* Bio */}
        <p className="anim-fadeup d4 text-text2 max-w-[580px] mx-auto mb-12 leading-[1.9]" style={{ fontSize: "clamp(15px,1.6vw,18px)" }}>
          Crafting high-performance, beautiful web experiences that make a lasting impact. Turning ideas into elegant digital reality.
        </p>

        {/* CTAs */}
        <div className="anim-fadeup d5 flex gap-3 justify-center flex-wrap mb-[70px]">
          <a href="#projects" className="btn-p">View My Work →</a>
          <a href="#contact" className="btn-o">Let&apos;s Talk</a>
        </div>

        {/* Stats */}
        <div className="anim-fadeup d6 flex justify-center flex-wrap" style={{ gap: "clamp(20px,4vw,80px)" }}>
          {[["50+", "Projects Done"], ["3+", "Years Exp"], ["20+", "Happy Clients"], ["99%", "Satisfaction"]].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="grad-text font-black font-mono" style={{ fontSize: "clamp(28px,4vw,42px)", letterSpacing: "-1px" }}>{n}</div>
              <div className="text-xs text-text3 mt-1 font-mono tracking-[1.5px]">{l.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text3 text-[10px] font-mono tracking-[2px] anim-float">
        <span>SCROLL</span>
        <div className="w-px h-[50px]" style={{ background: "linear-gradient(to bottom,var(--a1),transparent)" }} />
      </div>

      <style dangerouslySetInnerHTML={{__html:`@keyframes glow-pulse{0%,100%{box-shadow:0 0 6px var(--a3)}50%{box-shadow:0 0 20px var(--a3),0 0 40px var(--a3)}}@keyframes typeCursor{0%,100%{opacity:1}50%{opacity:0}}@keyframes orbit{from{transform:rotate(0deg) translateX(120px) rotate(0deg)}to{transform:rotate(360deg) translateX(120px) rotate(-360deg)}}.anim-orbit{animation:orbit 8s linear infinite}`}} />
    </section>
  );
}
