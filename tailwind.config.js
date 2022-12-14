/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", 'sans-serif' ],
      },
      backgroundImage : {
        noise : "url('../public/noise.png')"
      },
      backgroundColor : {
        purple : '#50227D'
      },
      colors : {
        limegreen : '#91F1C3',
        banana : '#FFCB47'
      },
      height : {
        98 : '30rem'
      },
      fontSize : {
        xsm : '0.64rem',
        '4.5xl' : '2.50rem'
      }

    },
  },
  plugins: [],
}
