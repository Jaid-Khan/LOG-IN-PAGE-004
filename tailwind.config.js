/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html, js}"],
  theme: {
    extend: {
      backgroundImage:{
        'hero-img':"url('assets/images/background-img.webp')",
      },
      boxShadow:{
        'custom-black': '4px 4px 20px #000000',
      },
      fontFamily:{
        'Poppins': ["Poppins", 'sans-serif'],
      }
    },
  },
  plugins: [],
}

