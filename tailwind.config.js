/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      screens: {
        'mobile': [
          {'min': '300px', 'max': '450px'}
        ],
      },
      backgroundImage: {
        blur: 'url(/src/assets/blur.png)',
      },
      colors: {
        gren: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43'
        },
        blue: {
          500: '#81D8F7'
        },
        orange: {
          500: '#FBA94C'
        },
        red: {
          500: '#F75A68'
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        },
        fontFamily: {
          sans: 'Roboto sans-serif',
        }
      }
    },
  },
  plugins: [],
}
