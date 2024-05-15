/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        'airbnb' : "#DE3151",
        'airbnb-hover': '#781a2b'
      }
    },
    fontFamily: {
      'sans': ['Inter', 'Poppins', 'sans-serif']
    }
  },
  plugins: [],
}

