/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme'); 
export default {
  content: [ "/.index.html" , "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
            'lg' : '1440px',
            'md' : '1024px',

      },
      colors: {
                customBlue :'#061d49',
                customYellow: '#FFBE3E',
                customGray: '#525252',
                customWhite: '#ffffff',
      },
      fontFamily:{
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
      }
    
    },
  },
  plugins: [],
}

