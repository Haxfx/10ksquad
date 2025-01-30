import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'adrip': ['Adrip', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'luckiest': ['Luckiest Guy', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        backgroundLight: "#431F6E",
        foreground: "var(--foreground)",
        heading: "#A34472",
        pink: "#FFC1EF",
        darkpink: "#A34472",
      },
      letterSpacing: {
        'widest-2': '0.25em',
        'wide-plus': '0.15em', 
        'spaced': '0.1em',
      },
      transitionProperty: {
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        'default': '150ms',
      },
    },
  },
  plugins: [],
} satisfies Config;
