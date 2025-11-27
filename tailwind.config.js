/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff5252",
        secondary : "#01020c"
        
      },
      backgroundColo:{
        'primary': '#ff5252',
        'secondary' : '#01020c'
      }
    },
  },
  plugins: [],
};
