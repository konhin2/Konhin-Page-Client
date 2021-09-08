const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      k: {
        c1: '#A5F2A2',
        c2: '#F27EDF',
        c3: '#D08FD9',
        c4: '#CEB3F2',
        c5: '#A2D4F2',
        c6: '#80E7F2',
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
