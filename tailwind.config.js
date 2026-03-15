/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'JetBrains Mono'", "monospace"],
        display: ["'Syne'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        bg: "#0a0a0f",
        surface: "#111118",
        card: "#16161f",
        border: "#1e1e2e",
        accent: "#7c6aff",
        "accent-dim": "#4f3fcc",
        green: "#39ff7a",
        muted: "#4a4a6a",
        subtle: "#2a2a3a",
        text: "#e8e8f0",
        "text-dim": "#8888aa",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        blink: "blink 1s step-end infinite",
        "slide-in": "slideIn 0.4s ease forwards",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: "translateY(24px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        slideIn: {
          from: { opacity: 0, transform: "translateX(-12px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        glow: {
          from: { boxShadow: "0 0 20px rgba(124,106,255,0.2)" },
          to: { boxShadow: "0 0 40px rgba(124,106,255,0.5)" },
        },
      },
    },
  },
  plugins: [],
};
