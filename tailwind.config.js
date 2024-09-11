/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        itc: ["ITC-bm", "sans-serif"],
      },
      colors: {
        tgreen: "#92D14F",
        tblue: "#012060",
      },
      screens: {
        tablet: "1111px",
        // => @media (min-width: 1111px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
