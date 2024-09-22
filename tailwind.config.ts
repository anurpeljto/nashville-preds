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
        'bg-player-1': "url('/player-1.png')",
        'bg-player-2': "url('/player-2.png')",
        'bg-player-3': "url('/player-3.png')",
        'bg-player-4': "url('/player-4.png')",
        'bg-player-5': "url('/player-5.png')",
        'bg-player-6': "url('/player-6.png')",
        'bg-player-7': "url('/player-7.png')",
        'bg-player-8': "url('/player-8.png')"
      }
    },
  },
  plugins: [],
};
export default config;
