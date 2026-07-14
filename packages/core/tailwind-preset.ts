import type { Config } from "tailwindcss";

/**
 * ARELUNA GOLDEN STANDARD — preset Tailwind partilhado pelos dois sites.
 * Cores e tipografia preservadas do Manual de Normas (Φ-locked).
 * Cada app aplica via `presets: [preset]` e define o seu próprio `content`.
 */
const preset: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        // Negative space (Jet)
        abyssal: "#1a1a1a",
        "jet-off": "#222222",
        jet: "#292929",
        // Signal palette
        sand: "#E8E3DA", // marble cream — primary type on dark
        marble: "#FFFFFF",
        "marble-light": "#F4F1EB",
        "marble-2": "#EBE6DD",
        "gold-leaf": "#C9A96E",
        "gold-deep": "#A98853",
        "gold-pale": "#E5D4A6",
        lilac: "#A295B3",
        battleship: "#858585",
        rust: "#B45443",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-jost)", "Jost", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wide: "0.01em",
        wider: "0.22em", // Areluna elegance tracking
      },
      lineHeight: {
        phi: "1.618",
      },
      maxWidth: {
        content: "1180px",
      },
      boxShadow: {
        card: "0 24px 80px -32px rgba(0,0,0,0.45)",
        gold: "0 12px 40px -12px rgba(201,169,110,0.35)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.145,0.618,0.236,1) both",
      },
    },
  },
  plugins: [],
};

export default preset;
