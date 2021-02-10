module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './component/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'gilroy': ['Gilroy',"ui-sans-serif"]
      },
      colors: {
        'blue-hard': '#070E27',
        'blue-dark':'#1C233F',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}