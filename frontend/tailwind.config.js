/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      xxs: "280px",
      xs: "475px",
      ...defaultTheme.screens,
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    // themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "blue",
          "primary-focus": "mediumblue",
        },
      },
      {
        dark: { ...require("daisyui/src/colors/themes")["[data-theme=dark]"] },
      },
      {
        synthwave: {
          ...require("daisyui/src/colors/themes")["[data-theme=synthwave]"],
        },
      },
      {
        halloween: {
          ...require("daisyui/src/colors/themes")["[data-theme=halloween]"],
        },
      },
      {
        forest: {
          ...require("daisyui/src/colors/themes")["[data-theme=forest]"],
        },
      },
      {
        luxury: {
          ...require("daisyui/src/colors/themes")["[data-theme=luxury]"],
        },
      },
      {
        lemonade: {
          ...require("daisyui/src/colors/themes")["[data-theme=lemonade]"],
          success: "#519903",
        },
      },
      {
        night: {
          ...require("daisyui/src/colors/themes")["[data-theme=night]"],
        },
      },
    ],
  },
};
