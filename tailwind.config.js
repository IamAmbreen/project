/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme'); 
export default {
  content: [ "/.index.html" , "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
                customBlue :'#061d49',
                customYellow: '#FFBE3E',
      },
      fontFamily:{
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
      }
    
    },
  },
  plugins: [],
}

