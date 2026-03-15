import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cream:  "#F5F2EC",
        linen:  "#E8E4DC",
        black:  "#131111",
        brown:  "#3D2D22",
        tan:    "#C4A47C",
        amber:  "#E5A020",
        ember:  "#C96B38",
        sage:   "#5A6E52",
      },
      fontFamily: {
        sans:    ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        serif:   ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        display: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
      },
      animation: {
        // Used by magicui/retro-grid.tsx
        grid:          "grid 15s linear infinite",
        // Our own
        "marquee-left":"marquee-left 40s linear infinite",
        "fade-in":     "fadeIn 0.6s ease-out forwards",
        "slide-up":    "slideUp 0.8s ease-out forwards",
        float:         "float 6s ease-in-out infinite",
      },
      keyframes: {
        // retro-grid expects this name
        grid: {
          "0%":   { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        "marquee-left": {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%":   { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-16px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":  "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "38": "9.5rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        warm:     "0 4px 24px -2px rgba(201, 107, 56, 0.15), 0 2px 8px -1px rgba(201, 107, 56, 0.1)",
        "warm-lg":"0 12px 48px -4px rgba(201, 107, 56, 0.2), 0 4px 16px -2px rgba(201, 107, 56, 0.15)",
        tan:      "0 4px 24px -2px rgba(196, 164, 124, 0.2), 0 2px 8px -1px rgba(196, 164, 124, 0.12)",
        glass:    "0 8px 32px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.4)",
        deep:     "0 24px 80px -12px rgba(0,0,0,0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
