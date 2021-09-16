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
        mainAccent: "#a6a3e2",
        secondaryAccent: "#644bfd",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
