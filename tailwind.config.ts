import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "fv-blue": "#1E466B",
        "fv-blue-deep": "#152F48",
        "fv-purple": "#66479C",
        "fv-purple-deep": "#4A3375",
        "fv-purple-light": "#F3F0FF",
        "fv-purple-bright": "#8265B8",
        "fv-pink": "#EC81B4",
        "fv-charcoal": "#333638",
        "fv-charcoal-soft": "#555759",
        "fv-bone": "#F5F5F0",
        "fv-cloud": "#EEF0EA",
        "fv-midnight": "#1A1A2E",
        "fv-text-body": "#3D3D4E",
        "fv-text-muted": "#8A8A9A",
        "fv-border": "#E8E6F0",
      },
      fontFamily: {
        display: ["var(--font-bricolage)", "system-ui", "sans-serif"],
        sub: ["var(--font-newsreader)", "Georgia", "serif"],
        body: ["var(--font-inter)", "Helvetica", "sans-serif"],
      },
      backgroundImage: {
        "fv-grad-purple": "linear-gradient(135deg, #523884 0%, #66479C 50%, #8265B8 100%)",
        "fv-grad-purple-deep": "linear-gradient(135deg, #4A3375 0%, #66479C 50%, #1E466B 100%)",
      },
      boxShadow: {
        "fv-card": "0 4px 16px rgba(102,71,156,0.08)",
        "fv-card-hover": "0 12px 32px rgba(102,71,156,0.14)",
        "fv-cta": "0 6px 22px rgba(102,71,156,0.45)",
        "fv-ing": "0 4px 16px rgba(45,96,144,0.18)",
      },
      letterSpacing: {
        "fv-eyebrow": "0.22em",
      },
    },
  },
  plugins: [],
};

export default config;
