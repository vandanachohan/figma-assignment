import type { Config } from "tailwindcss";

const config: Config = {
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
      },
      fontFamily: {
        rye: ['Rye'], // Add Rye as a custom font
        'libre-bodoni': ['Libre Bodoni', 'serif'], // Add Libre Bodoni as a custom font
      },
    },
  },
  plugins: [],
};

export default config;
