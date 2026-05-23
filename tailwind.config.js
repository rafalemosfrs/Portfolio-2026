/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          black: '#000000',
          deep: '#0a0a0f',
          night: '#0f1419',
          mid: '#1a1f2e',
        },
        nebula: {
          blue: '#1e3a8a',
          purple: '#4c1d95',
          violet: '#5b21b6',
          cyan: '#0891b2',
          plasma: '#06b6d4',
        },
        stellar: {
          white: '#ffffff',
          silver: '#e5e7eb',
          gray: '#6b7280',
          graphite: '#374151',
        },
        accent: {
          electric: '#3b82f6',
          gold: '#fbbf24',
          glow: '#60a5fa',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'orbit': 'orbit 15s linear infinite',
        'typing': 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          from: { boxShadow: '0 0 20px -10px #3b82f6' },
          to: { boxShadow: '0 0 30px -10px #60a5fa' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#3b82f6' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-cosmic': 'linear-gradient(135deg, #0a0a0f 0%, #1e3a8a 50%, #4c1d95 100%)',
        'gradient-nebula': 'linear-gradient(180deg, rgba(30,58,138,0.1) 0%, rgba(76,29,149,0.05) 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
