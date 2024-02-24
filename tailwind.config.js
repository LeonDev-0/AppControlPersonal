/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        azulito: 'rgb(32, 64, 176)', 
        plomo: 'rgb(226,229,233)'
      }
    },
  },
  plugins: [],
}