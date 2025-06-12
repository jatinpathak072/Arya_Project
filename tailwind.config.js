/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',  // ✅ adjust according to your project
  ],  
  theme: {
    extend: {
      fontFamily: {
        poppin: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
