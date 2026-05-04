"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const errors: Record<string, string> = {
  Configuration: "Server configuration error.",
  AccessDenied: "You do not have permission to sign in.",
  Verification: "The sign-in link is no longer valid.",
  Default: "An error occurred during sign in.",
};

function ErrorContent() {
  const params = useSearchParams();
  const error = params.get("error") ?? "Default";
  const msg = errors[error] ?? errors.Default;

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-4">
      <div className="w-full max-w-sm text-center">
        <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl"
          style={{ background: "rgba(249,115,22,.1)", border: "1px solid rgba(249,115,22,.3)" }}>
          ⚠️
        </div>
        <h1 className="text-2xl font-black text-text mb-2">Sign In Error</h1>
        <p className="text-text2 text-sm mb-6">{msg}</p>
        <a href="/login"
          className="inline-block px-6 py-3 rounded-xl text-sm font-bold text-white"
          style={{ background: "linear-gradient(135deg,var(--a1),var(--a2))" }}>
          Try Again
        </a>
      </div>
    </div>
  );
}

export default function AuthErrorPage() {
  return (
    <Suspense>
      <ErrorContent />
    </Suspense>
  );
}
