"use client";
import { useTheme } from "@/context/ThemeContext";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { id: "overview",  label: "Overview",  href: "/admin"           },
  { id: "projects",   label: "Projects",  href: "/admin/projects"  },
  { id: "skills",     label: "Skills",    href: "/admin/skills"    },
  { id: "messages",   label: "Messages",  href: "/admin/messages"  },
  { id: "analytics",  label: "Analytics", href: "/admin/analytics" },
];

function NavContent({ onClose }: { onClose?: () => void }) {
  const { theme, toggleTheme } = useTheme();
  const { data: session } = useSession();
  const pathname = usePathname();
  const isActive = (href: string) => href === "/admin" ? pathname === "/admin" : pathname.startsWith(href);

  return (
    <>
      {/* Logo */}
      <div className="px-[10px] pb-7">
        <div className="flex items-center gap-[10px]">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-[13px] text-white flex-shrink-0"
            style={{ background: "linear-gradient(135deg,var(--a1),var(--a2))", boxShadow: "0 6px 20px rgba(91,141,238,.35)"}}>MC</div>
          <div>
            <div className="font-extrabold text-sm text-text tracking-tight">Muhammad Chand</div>
            <div className="font-mono text-[9px] text-a1 tracking-[2px]">ADMIN PANEL</div>
          </div>
        </div>
      </div>

      {/* Session user */}
      {session?.user && (
        <div className="mx-1 mb-4 px-3 py-3 bg-[var(--g1)] border border-border2 rounded-xl flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold text-white" style={{ background: "linear-gradient(135deg,var(--a1),var(--a2))" }}>MC</div>
          <div className="overflow-hidden">
            <div className="text-xs font-bold text-text truncate">{session.user.name}</div>
            <div className="text-[10px] text-text3 font-mono truncate">{session.user.email}</div>
          </div>
        </div>
      )}

      {/* Nav label */}
      <div className="text-[10px] text-text3 tracking-[2px] font-mono px-3 mb-2">NAVIGATION</div>

      {/* Nav links */}
      {navItems.map(n => (
        <Link key={n.id} href={n.href} onClick={onClose}
          className={`flex items-center gap-3 px-[14px] py-[11px] rounded-xl font-semibold text-sm no-underline transition-all duration-200 ${isActive(n.href) ? "bg-[var(--g1)] text-a1 border-l-2 border-a1" : "bg-transparent text-text2 border-l-2 border-transparent hover:bg-bg3 hover:text-text"}`}>
          <span className="text-base"></span>{n.label}
        </Link>
      ))}

      <div className="flex-1" />

      {/* Settings */}
      <div className="text-[10px] text-text3 tracking-[2px] font-mono px-3 mb-2">SETTINGS</div>
      <button onClick={toggleTheme}
        className="flex items-center gap-3 px-[14px] py-[11px] rounded-xl border border-border bg-transparent text-text2 text-[13px] font-semibold cursor-pointer transition-all duration-200 mb-2 w-full hover:border-a1 hover:text-a1">
        {theme === "dark" ? "" : ""} {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
      <Link href="/"
        className="flex items-center gap-3 px-[14px] py-[11px] rounded-xl border border-border bg-transparent text-text2 text-[13px] font-semibold no-underline transition-all duration-200 mb-2 hover:border-a1 hover:text-a1">
         Back to Portfolio
      </Link>
      <button onClick={() => signOut({ callbackUrl: "/login" })}
        className="flex items-center gap-3 px-[14px] py-[11px] rounded-xl border cursor-pointer text-[13px] font-semibold transition-all duration-200 w-full"
        style={{ borderColor: "rgba(249,115,22,.3)", background: "rgba(249,115,22,.08)", color: "#f97316" }}>
         Sign Out
      </button>
    </>
  );
}

export default function Sidebar() {
  const [mobOpen, setMobOpen] = useState(false);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="w-[260px] min-h-screen bg-bg2 border-r border-border px-4 py-7 fixed top-0 left-0 flex flex-col gap-1 z-[100] overflow-y-auto hidden md:flex">
        <NavContent />
      </aside>

      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-[200] bg-bg2 border-b border-border px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-[10px]">
          <div className="w-[34px] h-[34px] rounded-[10px] flex items-center justify-center font-mono font-bold text-[11px] text-white"
            style={{ background: "linear-gradient(135deg,var(--a1),var(--a2))" }}>MC</div>
          <span className="font-extrabold text-sm text-text">Admin Panel</span>
        </div>
        <button onClick={() => setMobOpen(o => !o)} className="bg-transparent border-none cursor-pointer flex flex-col gap-[5px] p-[6px]">
          <span className="block w-[22px] h-0.5 bg-text rounded-sm transition-all duration-300"
            style={{ transform: mobOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
          <span className="block w-[22px] h-0.5 bg-text rounded-sm transition-all duration-300"
            style={{ opacity: mobOpen ? 0 : 1 }} />
          <span className="block w-[22px] h-0.5 bg-text rounded-sm transition-all duration-300"
            style={{ transform: mobOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
        </button>
      </div>

      {/* Mobile drawer */}
      {mobOpen && (
        <div className="md:hidden fixed inset-0 z-[199] bg-bg2 px-5 pt-20 pb-7 flex flex-col gap-1 overflow-y-auto">
          <NavContent onClose={() => setMobOpen(false)} />
        </div>
      )}
    </>
  );
}
