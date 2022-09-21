/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'mon' : ['Montserrat', 'sans-serif'],
      'open' : ['Open Sans', 'sans-serif'],
      'pop' : ['Poppins', 'sans-serif'],
      'source' : ['Source Code Pro', 'monospace']
    },
    extend: {
      colors: {
      mainNuclear: '#43DA2B',
      mainNuclear2: '#3ac122',
      mainBlack: '#111111',
      mainBlack2: '#232323',
      mainWhite: '#eeeeee',
      mainWhite2: '#cccccc',
      mainBlue: '#15161E',
    },
    },
  },
  plugins: [],
}
