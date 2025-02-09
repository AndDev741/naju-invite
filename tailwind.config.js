/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            gold: "#DAA520",
            ligthGold: "#FFBB10"
        },
        fontFamily: {
            mainFont: "Inria Serif, serif"
          }
      },
    },
    plugins: [],
  };
  