/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['bebas-neue-pro', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        main: {
          primary: "#E31C38",
          secondary: "#A31427",
          accent: "#059DE3",
          neutral: "#630C18",
          "base-100": "#000000",
          info: "#ffff",
          warning: "#E3DC32",
          error: "#F04911",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
};
