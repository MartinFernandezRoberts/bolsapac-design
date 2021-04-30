const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      
      ...defaultTheme.screens,
      '2xl': '1430px',
    },
    
    extend: {
    minHeight: {
      '20': '5rem',
     'screen': '100vh',
     },
      screens: {
        '3xl': '1919px',
        '4xl': '3800px',
      },
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
      fontSize: {
        'xs':  '0.60rem',
        'sm': '0.8rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

