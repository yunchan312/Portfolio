/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        darkBlack: "#222831",
        lightBlack: "#393e46",
        emphaOrange: "#f96d00",
        line: "#f2f2f2",
      },
      backgroundImage: {
        selfie: "url('./assets/selfie.jpg')",
        kiwiLogo: "url('./assets/kiwiLogo.png')",
      },
    },
  },
  plugins: [],
};
