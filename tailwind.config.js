/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      'gotham-condensed': ['"Gotham Condensed"', 'sans-serif'],
      'gotham-condensed-bold': ['"Gotham Condensed Bold"', 'sans-serif'],
    },
    extend: {
      colors: {
        'custom-red': 'rgb(235, 69, 95)',
        'custom-red-dark': 'rgb(211, 62, 85)',
        'apple-red':'rgba(235,70,95,255)',
        'bike-blue':'rgba(43,53,103,255)',
        'bike-light-blue':'rgba(186,216,233,255)',
        'bike-off-white':'rgba(252,254,231,255)',
        'bike-golden-yellow':'rgba(252,254,231,255)',
      },
      keyframes: {
        slideRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        slideRight: 'slideRight 0.5s ease-out forwards'
      }
    },
  },
  plugins: [],
}