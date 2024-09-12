/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'custom-background': "url('./public/bg.jpeg')", // Path to your image
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Adding Poppins to the font family
      },
    },
  },
  plugins: [],
}

