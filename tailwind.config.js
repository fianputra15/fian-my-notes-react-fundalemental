/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#85AFEE',
        'light': '#EAF0F9',
        'secondary': '#DFDCED',
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
