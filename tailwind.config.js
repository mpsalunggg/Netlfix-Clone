/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '34rem',
      },
      colors: {
        'red': '#ff0000',
      },
    },
  },
  plugins: [],
}
