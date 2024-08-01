/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        archivo: ["Archivo", "sans-serif"],
      },
      colors: {
        grey: ["#1b1b1b"],
        darkishblue:["#202327"]
      },
    },
  },
  plugins: [],
}
