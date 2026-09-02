/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        base: {
          900: '#070a12',
          800: '#0b0f19',
          700: '#111726',
          600: '#161e30',
          500: '#1e293b',
        },
        cyber: {
          blue: '#38bdf8',
          emerald: '#10b981',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(56,189,248,0.15), 0 12px 40px -12px rgba(56,189,248,0.35)',
        'glow-emerald': '0 0 0 1px rgba(16,185,129,0.15), 0 12px 40px -12px rgba(16,185,129,0.35)',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.85)' },
        },
        'grid-fade': {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.6' },
        },
      },
      animation: {
        'pulse-dot': 'pulse-dot 1.8s ease-in-out infinite',
        'grid-fade': 'grid-fade 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
