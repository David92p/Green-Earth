/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "myfirstyellow": "#FFFAE5", 
        "mysecondyellow": "#FFCC31",
        "mygreen": "#37818A"
      }, 
      fontFamily: {
        "mytitlefont": ["Playfair Display", "serif"],
        "mytextfont": ["Playfair Display", "serif"]
      }
    },
  },
  plugins: [],
}

