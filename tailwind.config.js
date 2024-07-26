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
      keyframes: {
        rotate3: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(3deg)" },
        },
        rotate6: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(6deg)" },
        },
        rotate9: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(9deg)" },
        },
        rotate12: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(12deg)" },
        },
      },

      animation: {
        rotate3: "rotate3 0.1s ease-in-out",
        rotate6: "rotate6 0.2s ease-in-out",
        rotate9: "rotate9 0.3s ease-in-out",
        rotate12: "rotate12 0.4s ease-in-out",
      },
    },
  },
  plugins: [],
};
