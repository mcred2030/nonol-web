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
        primary: "#0934ff",
        "bg-dark": "#000",
        "bg-light": "#f6f6f6",
        "text-gray": "#777",
        "text-light-gray": "#a6a6a6",
      },
      fontFamily: {
        yoon: ["YoonGothic", "Malgun Gothic", "sans-serif"],
      },
      maxWidth: {
        content: "830px",
        header: "1200px",
      },
      fontSize: {
        headline1: ["100px", { lineHeight: "1.1", letterSpacing: "-0.05em" }],
        headline2: ["48px", { lineHeight: "1.3", letterSpacing: "-0.03em" }],
        body1: ["22px", { lineHeight: "1.8" }],
      },
    },
  },
  plugins: [],
};

export default config;
