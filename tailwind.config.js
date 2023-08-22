/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      fontFamily: {
        customFont: ['Bacasime Antique', 'serif'],
        customFont2: ['Oswald', 'sans-serif']
      },
    },
  },
  plugins: [],
}