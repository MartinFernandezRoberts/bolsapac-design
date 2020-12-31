module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors:{
      green:{
        DEFAULT: '#009245',
      },
      blue:{
        DEFAULT: '#06c',
      },
      white:{
        DEFAULT: '#fff',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
