/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Barlow Condensed'],
      },
      colors: {
        primary: '#ff002f',
        secondary: '#77ffff'
      }
    },
  },
  safelist: [
    'border-secondary'
  ],
  plugins: [],
}
