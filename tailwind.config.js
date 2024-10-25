/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        priceGreen: "#00A000",
        darkGray: "#404040"
      },
    },
  },
  plugins: [],
}