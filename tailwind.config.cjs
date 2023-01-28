/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'light-text': '#E4E5EA',
        'black': '#0E1014',
        'blue': '#4077F3',
        'dark-gray': '#656566',
        'light-stroke': '#25262C',
        'purple': '#833AB4',
        'red': '#FD1D1D',
        'dark-red': '#961A1A',
        'orange': '#FCB045',
      },
      screens: {
        'mw': '1140px'
      },
      backgroundImage: {
        'orange-to-red': 'linear-gradient(90deg, #FCB045 36.99%, #FD1D1D 100%)'
      },
    },
  },
  plugins: [],
}
