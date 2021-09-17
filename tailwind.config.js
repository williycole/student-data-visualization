module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "bounce-slow": "bounce 2s infinite",
      },
      colors: {
        transparent: "transparent",
        black: "#000",
        white: "#fff",
        primary: "#13132C",
        secondary: "#040510",
        mainAccent: "#5625EC",
        secondaryAccent: "#DE22FE",
        blue: "#4FA3FB",
        orange: "#FD9820",
        purple: "#8E2DD9",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
