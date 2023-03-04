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
  plugins: [
    require("daisyui"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
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
          primary: "#1f85ff",
          success: "#207f5c",
          "primary-focus": "#196acc",
        },
      },
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: "#945fee",
          "primary-focus": "#661ae6",
        },
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
          success: "#4d8303",
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
