const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#E41D47",
        darkPurple: "#170a17",
        mediumPurple: "#271323",
        grey: "#808080",
      },
      fontFamily: {
        heading: ["Anton"],
      },
      lineHeight: {
        "extra-loose": "1",
      },
    },
    screens: {
      // xs: "576px",
      xs: "576px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
