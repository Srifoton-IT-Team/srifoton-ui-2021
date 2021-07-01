module.exports = {
  purge: ["./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        rubik: "'Rubik', sans-serif",
        azonix: "'Azonix', 'Rubik', sans-serif",
      },
      colors: {
        brand: {
          DEFAULT: "#108479",
          light: "#0f7a70",
          dark: "#063430",
        },
        cp: {
          DEFAULT: "#cbced3",
          light: "#eeeff0",
          dark: "#a9adb6",
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
