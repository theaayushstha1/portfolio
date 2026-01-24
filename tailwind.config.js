/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Warm dark palette - sophisticated amber/gold
        dark: {
          DEFAULT: '#121214',      // Softer black with warm undertone
          50: '#1a1a1c',
          100: '#222224',
          200: '#2a2a2d',
          300: '#3a3a3d',
          400: '#4a4a4d',
        },
        cream: {
          DEFAULT: '#FAFAF8',      // Warm off-white
          50: '#FFFDFB',
          100: '#FEF7ED',
          200: '#FDE8CD',
          muted: '#B8B5AD',        // Warm gray
          dark: '#8A8780',
        },
        amber: {
          DEFAULT: '#F59E0B',      // Primary amber
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          glow: 'rgba(245, 158, 11, 0.4)',
        },
        warm: {
          orange: '#EA580C',
          rose: '#E11D48',
          stone: '#78716C',
        },
      },
      fontFamily: {
        display: ['Syne', 'system-ui', 'sans-serif'],
        body: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.1rem' }],
        'sm': ['0.8125rem', { lineHeight: '1.4rem' }],
        'base': ['0.9375rem', { lineHeight: '1.6rem' }],
        'lg': ['1.0625rem', { lineHeight: '1.6rem' }],
        'xl': ['1.25rem', { lineHeight: '1.5rem' }],
        '2xl': ['1.5rem', { lineHeight: '1.3rem' }],
        '3xl': ['2rem', { lineHeight: '1.2rem' }],
        '4xl': ['2.5rem', { lineHeight: '1.1' }],
        '5xl': ['3.5rem', { lineHeight: '1' }],
        '6xl': ['4.5rem', { lineHeight: '1' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'glow': '0 0 30px -5px rgba(245, 158, 11, 0.25)',
        'glow-lg': '0 0 60px -10px rgba(245, 158, 11, 0.35)',
        'inner-glow': 'inset 0 1px 0 0 rgba(255,255,255,0.05)',
      },
    },
  },
  plugins: [],
}
