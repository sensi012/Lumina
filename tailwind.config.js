/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#0B0C0E',
          900: '#121316',
          850: '#18191E',
          800: '#22242B',
          700: '#333742',
          600: '#4E5363',
          500: '#6E7487',
          400: '#959BAE',
        },
        paper: {
          50: '#FFFFFF',
          100: '#FBFBFC',
          200: '#F4F4F6',
          300: '#EAEAEE',
        },
        borderline: {
          DEFAULT: '#E4E4E8',
          subtle: '#EEEEF2',
          dark: '#272930',
          darker: '#1E2026',
        },
        accent: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
        },
        forest: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          600: '#16A34A',
          700: '#15803D',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        brutal: '4px 4px 0px 0px #121316',
        'brutal-sm': '2px 2px 0px 0px #121316',
        'brutal-accent': '4px 4px 0px 0px #EA580C',
        subtle: '0 1px 2px 0 rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};
