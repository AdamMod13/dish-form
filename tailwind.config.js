/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#8B5FBF',
          200: '#69514c',
          300: '#FFFFFF',
        },
        accent: {
          100: '#D6C6E1',
          200: '#9A73B5',
        },
        text: {
          100: '#4A4A4A',
          200: '#878787',
        },
        bg: {
          100: '#ffffff',
          200: '#fcf5ed',
          300: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
}