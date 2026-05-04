/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:      "var(--bg)",
        bg2:     "var(--bg2)",
        bg3:     "var(--bg3)",
        card:    "var(--card)",
        border:  "var(--border)",
        border2: "var(--border2)",
        text:    "var(--text)",
        text2:   "var(--text2)",
        text3:   "var(--text3)",
        a1:      "var(--a1)",
        a2:      "var(--a2)",
        a3:      "var(--a3)",
        a4:      "var(--a4)",
      },
      fontFamily: {
        sans:  ["Outfit", "sans-serif"],
        mono:  ["JetBrains Mono", "monospace"],
      },
      animation: {
        "fade-up":   "fadeUp .9s cubic-bezier(.16,1,.3,1) forwards",
        "fade-in":   "fadeIn .7s ease forwards",
        "slide-r":   "slideR .9s cubic-bezier(.16,1,.3,1) forwards",
        "slide-l":   "slideL .9s cubic-bezier(.16,1,.3,1) forwards",
        "float":     "float 6s ease-in-out infinite",
        "spin-slow": "spinSlow 28s linear infinite",
        "spin-rev":  "spinRev 20s linear infinite",
        "orbit":     "orbit 8s linear infinite",
        "blink":     "blink 2s infinite",
        "glow":      "glowPulse 2s infinite",
        "cursor":    "typeCursor 1s infinite",
      },
    },
  },
  plugins: [],
};
