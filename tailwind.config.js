/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},

    container:{
      center:true
    },
    
    fontFamily:{
      "Rubik": ["Rubik Wet Paint", "system-ui"],
      "Poppins" : ["Poppins", 'serif'],
    },


  },
  plugins: [],
}