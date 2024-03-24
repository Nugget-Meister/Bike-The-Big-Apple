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
      gotham: ['"Gotham Condensed Bold"', 'sans-serif'],
    },
    extend: {
      colors: {
        'custom-red': 'rgb(235, 69, 95)',
        'custom-red-dark': 'rgb(211, 62, 85)',
      }
    },
  },
  plugins: [],
}