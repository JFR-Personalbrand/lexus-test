
/**  @type {import('tailwindcss').Config} **/

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ec1f28',
          hover: '#D41C24',
        },
        secondary: {
          DEFAULT: '#444',
          hover: '#3D3D3D',
        },
        light: {
          DEFAULT: '#fff',
          100 : '#f3f3f3',
        },
        dark: {
          DEFAULT: '#000',
          hover: '#333',
        },
      }
    },
  },
  plugins: 
  [
   plugin(function ({ addComponents }) {
      addComponents({
        '.title-6': {
          fontSize: '0.75rem',
          fontStyle: 'normal',
          fontWeight: '300',
          lineHeight: '1.875rem',
          letterSpacing: '.025rem',
        },

        '.display-2': {
          fontSize: '2.25rem',
          fontWeight: '300',
          fontStyle: 'normal',
          lineHeight: '43px',
          letterSpacing: '-0.02em',
        },

        '.text-body': {
          fontSize: '1rem',
          fontWeight: '400',
          fontStyle: 'normal',
          lineHeight: '25.6px',
        },

        '.text-button': {
          fontSize: '1.125rem',
          fontWeight: '700',
          fontStyle: 'Normal',
          lineHeight: '28.8px',
          letterSpacing: '-0.02em',
        },

        
      })
    })
  ],
}
