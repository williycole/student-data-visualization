module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        black: "#000",
        white: "#fff",
        primary: "#44337a",
        secondary: "#805ad5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
