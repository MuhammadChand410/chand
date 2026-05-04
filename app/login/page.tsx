"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [gLoading, setGLoading] = useState(false);

  useEffect(() => {
    if (session) router.push("/admin");
  }, [session, router]);

  const handleCredentials = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) { setErr("Please fill all fields."); return; }
    setLoading(true); setErr("");
    const res = await signIn("credentials", { email, password, redirect: false });
    setLoading(false);
    if (res?.ok) router.push("/admin");
    else setErr("Incorrect email or password.");
  };

  const handleGoogle = () => {
    setGLoading(true);
    signIn("google", { callbackUrl: "/admin" });
  };

  if (status === "loading") return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-a1 border-t-transparent animate-spin" />
    </div>
  );

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-4 relative overflow-hidden">
      {/* BG glows */}
      <div className="absolute w-[500px] h-[500px] rounded-full pointer-events-none -top-32 -right-32 opacity-20"
        style={{ background: "radial-gradient(circle,var(--a2) 0%,transparent 70%)" }} />
      <div className="absolute w-[400px] h-[400px] rounded-full pointer-events-none -bottom-20 -left-20 opacity-20"
        style={{ background: "radial-gradient(circle,var(--a1) 0%,transparent 70%)" }} />

      <div className="w-full max-w-sm relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center font-mono font-black text-xl text-white"
            style={{ background: "linear-gradient(135deg,var(--a1),var(--a2))", boxShadow: "0 10px 30px rgba(91,141,238,.4)" }}>
            MC
          </div>
          <h1 className="text-2xl font-black text-text tracking-tight mb-1">Admin Login</h1>
          <p className="text-text2 text-sm">Sign in to access the dashboard</p>
        </div>

        {/* Card */}
        <div className="bg-card border border-border rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-0.5"
            style={{ background: "linear-gradient(90deg,var(--a1),var(--a2),var(--a3))" }} />

          {/* Google Button */}
          <button onClick={handleGoogle} disabled={gLoading}
            className="w-full flex items-center justify-center gap-3 py-3 px-5 rounded-xl bg-white text-[#1f2937] text-[14px] font-bold cursor-pointer transition-all duration-200 hover:shadow-lg mb-5 font-sans disabled:opacity-60 border border-[#e5e7eb]">
            {gLoading ? (
              <div className="w-5 h-5 rounded-full border-2 border-[#4285F4] border-t-transparent animate-spin" />
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            )}
            {gLoading ? "Redirecting..." : "Continue with Google"}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-text3 font-mono">OR</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Password Form */}
          <form onSubmit={handleCredentials} className="flex flex-col gap-4">
            <div>
              <label className="text-xs text-text3 font-mono tracking-[1px] block mb-2">EMAIL</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="admin@muhammadchand.dev"
                autoFocus
                className="w-full px-4 py-3 bg-bg2 border border-border rounded-xl text-text text-sm font-sans outline-none focus:border-a1 transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-text3 font-mono tracking-[1px] block mb-2">PASSWORD</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 bg-bg2 border border-border rounded-xl text-text text-sm font-sans outline-none focus:border-a1 transition-colors"
              />
            </div>

            {err && (
              <div className="px-4 py-2.5 rounded-lg text-[13px] text-[#f97316] bg-[rgba(249,115,22,.1)] border border-[rgba(249,115,22,.3)]">
                ⚠️ {err}
              </div>
            )}

            <button type="submit" disabled={loading}
              className="btn-p w-full justify-center py-3 disabled:opacity-60">
              {loading ? "Signing in..." : "Sign In →"}
            </button>
          </form>

          {/* Google setup note */}
          <div className="mt-5 pt-4 border-t border-border">
            <p className="text-[11px] text-text3 font-mono text-center leading-relaxed">
              Google login requires OAuth setup.<br />
              Email: <span className="text-a1">admin@muhammadchand.dev</span><br />
              Password: <span className="text-a1 font-bold">muhammad123</span>
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-text3 mt-5">
          <a href="/" className="text-a1 hover:underline no-underline">← Back to Portfolio</a>
        </p>
      </div>
    </div>
  );
}
