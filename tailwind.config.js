const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    screens: {
      // '2xl': { 'max': '1280px' },
      // 'xl': { 'max': '1280px' },
      // 'lg': { 'max': '1023px' },
      // 'md': { 'max': '767px' },
      // 'sm': { 'max': '639px' },
      // 'xs': { 'max': '365px' },

      xs: '345px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1280px',
    },
    extend: {
      fontFamily: {
        'sans': ['PT Sans, sans-serif', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'blue-hover': 'rgba(3, 121, 182, 0.4)',
        'footer-bg': '#003048;',
        'footer-font-color': '#0379B6',
        'dark-blue': '#001B29',
        'click-me': '#0000FF',
        dark: {
          'click-me': '#000000',
        },
      },
      animation: {
        smoothScroll: 'smoothScroll 0.5s forwards;'
      },
      keyframes: {
        smoothScroll: {
          '0%': { transform: 'translateY(-40px)' },
          '100%': { transform: ' translateY(0px)' },
        },
      },
    },
    plugins: [],
  }
}
