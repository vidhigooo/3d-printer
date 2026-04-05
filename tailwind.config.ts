import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#00E5FF", // Neon Blue
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#7000FF", // Purple Accent
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#1F232B",
          foreground: "#A0AABF",
        },
        card: {
          DEFAULT: "rgba(20, 24, 31, 0.6)", // Glassmorphism base
          foreground: "#FFFFFF",
        },
        border: "#2A3140",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
export default config;
