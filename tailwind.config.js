/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '375px',
      xl: '1440px',
    },
    extend: {
      colors: {
        lightgray: '#d6e2f0',
        grayishblue: '#7b879d',
        darkblue: '	#1f3251'
      }
    },
  },
  plugins: [],
}

