/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
        midnight: {
          DEFAULT: "#0A0731", // deep starry night blue
          light: "#19124A",
          dark: "#06041F",
        },
        aurora: {
          purple: "#6E4AF0",
          pink: "#FF78E0",
          blue: "#4AC6FF",
          yellow: "#FFE680",
        },
        fairy: {
          glow: "#FFF8D7",
          lime: "#A6FF9E",
        },
        forest: {
          dark: "#0B1C1A",
          green: "#1E402E",
          fog: "#D4E3FF",
        },
      },
    },
  },
  plugins: [],
};
