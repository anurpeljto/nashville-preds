import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'yellow': {
          20: '#ffb81c'
        },
        'purple': {
          20: '#041e42'
        },
        'gray': {
          20: '#A2A2A2',
        }
      },
      backgroundImage: {
        'bg-img-1': "url('/img-1.webp')",
        'bg-img-2': "url('/img-2.webp')",
      }
    },
  },
  plugins: [],
};
export default config;
