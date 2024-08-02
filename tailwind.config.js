/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors:{
        btnBgColor:"#dbdcea",
        submitBgColor: "#283fea"

      },
      fontFamily:{
        marcellus: ['Marcellus', 'serif'],
        roboto: ['Roboto', 'sans-serif'],




      }
    },
  },
  plugins: [],
}

