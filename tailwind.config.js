/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        'maxPage': '79.8125rem',
      },
      padding:{
        'pd': '5rem',
        'pm': '2,5rem',
        '5.5': '22px'
      },
      gap:{
        '4.7':'0.9375rem'
      },
      screens: {
        'desktop': '1440px'
      }
    },
  },
  plugins: [],
}
