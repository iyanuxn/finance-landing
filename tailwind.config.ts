import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-open_sans)"],
        dm: ["var(--font-dm_sans)"],
      },
      colors: {
        primary: "#ddf446",
        black: "#1f1f1f",
        grey: "#f2f2f2",
      },
    },
  },
  plugins: [],
};
export default config;
