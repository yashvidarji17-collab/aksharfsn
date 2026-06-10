import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        "primary-2": "hsl(var(--primary-2))",
        secondary: "hsl(var(--secondary, 32 32% 96%))",
        dark: "hsl(var(--dark))",
        "dark-2": "hsl(var(--dark-2))",
        gold: "hsl(var(--gold))",
        "gold-2": "hsl(var(--gold-2))",
        cream: "hsl(var(--cream))",
        "cream-2": "hsl(var(--cream-2))",
        greige: "hsl(var(--greige))",
        white: "hsl(var(--white))",
        text: "hsl(var(--text))",
        muted: "hsl(var(--muted))",
        line: "hsl(var(--line))",
      },
      borderRadius: {
        lg: "26px",
        xl: "36px",
      },
      boxShadow: {
        "elevation": "0 18px 48px rgba(43, 18, 61, 0.08)",
        "elevation-md": "0 18px 44px rgba(43, 18, 61, 0.06)",
        "elevation-lg": "0 26px 80px rgba(43, 18, 61, 0.12)",
        "elevation-xl": "0 38px 120px rgba(43, 18, 61, 0.22)",
      },
      keyframes: {
        "cardFloat": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        "cardFloat": "cardFloat 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
