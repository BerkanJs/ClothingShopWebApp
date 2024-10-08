/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily:{
        primary:'arial',

      },
      container:{
        padding:{
          DEFAULT:"30px",
          lg:'0',
        },
      },
      screens:{
        sm:'640px',
        md:'768px',
        lg:'1024px',
        xl:'1440px',
      },
      colors:{
        primary:'#222222',
        secondary:'#F5E6E0',
      },
      backgroundImage:{
        hero:"url('./src/assets/img/bg1.jepg')",
      },








    },
  },
  plugins: [],
}

