/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          xl: "1110px",
          tablet: '690px',
          mobile: "311px",
        },
      },
      screens: {
        // tablet: '768px', 
        mobile: "378px",
      },
      colors: {
        yellow: "#FCB72B",
        darkNavy: "#495567",
        dimGrey: "#939CAA",
        lightGrey: "#E5ECF4",
        snow: "#F2F5F9", 
        lightYellow: "#FFF4DF",
        footerBg: "#333A44",
        zinc: "#333A43",
      },
      fontFamily: {
        spaceMono: "Space Mono",
        lexendDeca: "Lexend Deca",
      },
    },

  },
  plugins: [],
};
