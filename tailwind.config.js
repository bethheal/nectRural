/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors:{
        btnBgColor:"#dbdcea",
        submitBgColor: "#283fea",
        textColor: "#D9D9D9",

      },
      fontFamily:{
        marcellus: ['Marcellus', 'serif'],
        roboto: ['Roboto', 'sans-serif'],




      }
    },
  },
  plugins: [],
}

