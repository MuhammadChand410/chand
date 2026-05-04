"use client";
import { useTheme } from "@/context/ThemeContext";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { data: session } = useSession();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between transition-all duration-300 ${scrolled ? "px-[5%] py-[10px] border-b border-border backdrop-blur-[28px]" : "px-[5%] py-[22px]"}`}
        style={{ background: scrolled ? (theme === "dark" ? "rgba(4,7,26,0.93)" : "rgba(245,247,255,0.93)") : "transparent" }}>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="w-[42px] h-[42px] rounded-xl flex items-center justify-center font-mono font-bold text-sm text-white"
            style={{ background: "linear-gradient(135deg,var(--a1),var(--a2))", boxShadow: "0 6px 20px rgba(91,141,238,.4)" }}>
            MC
          </div>
          <div>
            <div className="font-extrabold text-[17px] text-text leading-tight tracking-tight">Muhammad Chand</div>
            <div className="font-mono text-[10px] text-a1 tracking-[2.5px]">WEB DEVELOPER</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <a key={l.label} href={l.href}
              className="no-underline px-[18px] py-2 rounded-lg text-sm font-medium text-text2 transition-all duration-200 hover:text-a1 hover:bg-[var(--g1)]">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button onClick={toggleTheme} title="Toggle theme"
            className="w-[46px] h-[26px] rounded-full border border-border2 flex items-center p-[3px] transition-all duration-300 outline-none cursor-pointer"
            style={{ background: theme === "dark" ? "var(--bg3)" : "var(--border)" }}>
            <div className="w-[19px] h-[19px] rounded-full flex items-center justify-center text-[9px] transition-transform duration-300"
              style={{ background: "linear-gradient(135deg,var(--a1),var(--a2))", transform: theme === "dark" ? "translateX(0)" : "translateX(20px)" }}>
              {theme === "dark" ? "🌙" : "☀️"}
            </div>
          </button>

          {/* Login / Logout — Desktop */}
          {/* {session ? (
            <Link href="/login"
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="hidden md:flex items-center gap-2 px-[18px] py-[9px] rounded-xl text-[13px] font-bold text-white no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(91,141,238,.35)]"
              style={{ background: "linear-gradient(135deg,var(--a1),var(--a2))" }}>
              Logout
            </Link>
          ) : (
            // <Link href="/login"
            //   className="hidden md:flex items-center gap-2 px-[18px] py-[9px] rounded-xl text-[13px] font-bold text-white no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(91,141,238,.35)]"
            //   style={{ background: "linear-gradient(135deg,var(--a1),var(--a2))" }}>
            //   🔐 Login
              // </Link>
              <Link href="/login"
                onClick={() => signOut({ callbackUrl: "/login" })}
                className="hidden md:flex items-center gap-2 px-[18px] py-[9px] rounded-xl text-[13px] font-bold text-white no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(91,141,238,.35)]"
                style={{ background: "linear-gradient(135deg,var(--a1),var(--a2))" }}>
                Logout
              </Link>
          )} */}

          <a href="#contact"
            className="hidden md:inline-flex items-center px-[22px] py-[9px] rounded-xl text-[13px] font-bold text-white no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(91,141,238,.35)]"
            style={{ background: "linear-gradient(135deg,var(--a1),var(--a2))" }}>
            Hire Me ✦
          </a>



          <button onClick={() => setMenuOpen(o => !o)}
            className="md:hidden flex flex-col gap-[5px] cursor-pointer p-[6px] bg-transparent border-none">
            <span className="block w-6 h-0.5 bg-text rounded-sm transition-all duration-300"
              style={{ transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
            <span className="block w-6 h-0.5 bg-text rounded-sm transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }} />
            <span className="block w-6 h-0.5 bg-text rounded-sm transition-all duration-300"
              style={{ transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center gap-8 bg-bg"
          onClick={() => setMenuOpen(false)}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
              className="text-[28px] font-bold text-text no-underline transition-colors duration-200 hover:text-a1">
              {l.label}
            </a>
          ))}
          {session ? (
            <>
              <Link href="/admin" onClick={() => setMenuOpen(false)} className="btn-o">Dashboard</Link>
              <button onClick={() => signOut({ callbackUrl: "/" })} className="btn-p">Logout 🚪</button>
            </>
          ) : (
            <>
              <Link href="/login" onClick={() => setMenuOpen(false)} className="btn-p">🔐 Login</Link>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-o">Hire Me ✦</a>
            </>
          )}
        </div>
      )}
    </>
  );
}
