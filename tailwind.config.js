/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme'); 
export default {
  content: [ "/.index.html" , "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      lineHeight:{
        'extra' : '5.625rem',
        'medium' : '4.5rem',
      },
      margin:{
        '30' : '7.5rem',
        '31.5' : '8.0625rem',
        '12.5' : '3.125rem',
        '15.25' : '3.69rem',
        '10.5' : '2.5625rem',
        '22' : '5.5rem',
        '17' : '4.25rem',
        '18' : '4.5rem',
        '19' : '4.75rem',
        '61.5' : '15.375rem'
        
      },
      padding:{
          '22' : '5.5rem',
          '11.5' : '2.875rem',
          '18.5' : '4.625rem',
          '29.5' : '7.313rem',
          '30' : '7.5rem',
          '31.5' : '8.0625rem',
          '43' : '10.75rem',
          '42' : '10.5rem',
          '41' : '10.25rem',
          '25' : '6.25rem',
          '26' : '6.5rem',
          '27' : '6.75rem',
          '64.5' : '16.125rem',
          '65' : '16.25rem',
          '66' : '16.5rem',
          '67' : '16.75rem',
          '92' : '23.875rem',
          '91.5' : '23.8125rem',
          '31' : '7.75rem',
          

    
      },
      screens: {
            'lg' : '1440px',
            'md' : '1024px',

      },
      colors: {
                customBlue :'#061d49',
                customYellow: '#FFBE3E',
                customGray: '#525252',
                customWhite: '#ffffff',
                customBlack: '#000000',
      },
      fontFamily:{
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
      }
    
    },
  },
  plugins: [],
}

