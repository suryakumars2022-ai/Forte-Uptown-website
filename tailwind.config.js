/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0B0F14',
          dark: '#10151D',
          surface: '#151C26',
          surfaceHover: '#1B2431',
          border: 'rgba(255, 255, 255, 0.08)',
          borderGold: 'rgba(197, 164, 109, 0.3)',
          gold: '#C5A46D',
          goldLight: '#DFC99F',
          goldDark: '#9F7E47',
          ivory: '#FAF7F2',
          sand: '#DCD4C7',
          muted: '#8D9BAE',
          emerald: '#1C3B30',
        }
      },
      fontFamily: {
        serif: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-shimmer': 'linear-gradient(135deg, #DFC99F 0%, #C5A46D 50%, #9F7E47 100%)',
      },
      boxShadow: {
        'luxury': '0 20px 50px -10px rgba(0, 0, 0, 0.6), 0 0 20px -5px rgba(197, 164, 109, 0.15)',
        'gold-glow': '0 0 25px -5px rgba(197, 164, 109, 0.35)',
      }
    },
  },
  plugins: [],
}
