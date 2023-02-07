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
        'orange-to-red': 'linear-gradient(90deg, #FCB045 36.99%, #FD1D1D 100%)',
        'pink': 'linear-gradient(90deg, rgba(255, 216, 160, 0.5) -3.05%, rgba(253, 135, 135, 0.5) 52.27%, rgb(219, 166, 255) 100%)'
      },
      boxShadow: {
        'blue-shadow': '0px 0px 40px 6px rgba(64, 119, 243, 0.3)',
      },
    },
  },
  plugins: [],
}
