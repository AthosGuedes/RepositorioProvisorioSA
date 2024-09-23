/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        azul: { 
          500: '#338FCC',
          600: '#006BB7',
          700: '#005A97',
          800: '#004677',
        }
      }  
    },
  },
  plugins: [],
}