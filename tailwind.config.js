
/**  @type {import('tailwindcss').Config} **/

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
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
          letterSpacing: '.12rem',
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
