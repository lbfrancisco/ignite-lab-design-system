/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: '14px',
      sm: '16px',
      md: '18px',
      lg: '20px',
      xl: '24px',
      '2xl': '32px',
    },
    colors: {
      gray: {
        '900': '#121214',
        '800': '#202024',
        '400': '#7C7C8A',
        '200': '#C4C4CC',
        '100': '#E1E1E6',
      },
      cyan: {
        '500': '#81D8F7',
        '300': '#9BE1FB',
      },
      black: '#000000',
      white: '#ffffff',
      transparent: 'transparent',
    },
    fontFamily: {
      sans: 'Inter, sans-serif',
    },
    extend: {},
  },
  plugins: [],
}
