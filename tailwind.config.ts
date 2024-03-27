import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#051d36',
        secondary: '#b8df81'
      }
    },
  },
  plugins: [],
};
export default config;
