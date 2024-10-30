/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "primary" : ["Josefin Sans", "sans-serif"],
        "secondary" : ["Playfair", "serif"]
      }
    },
  },
  plugins: [],
}

