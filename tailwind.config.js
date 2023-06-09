/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F08013',
        secondary: '#114388'
      },
    },
  },
  plugins: [require("daisyui")],
}
