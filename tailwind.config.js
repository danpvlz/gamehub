const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        arcade: ["Arcade", "Inter", ...defaultTheme.fontFamily.sans],
        pixelify: ["Pixelify Sans"],
      },
      fontSize:{
        '80px': '80px',
      },
      colors:{
        accent:'#818189',
        "light-blue":'#2dbeef',
        whiteish:'#fefcff'
      }
    },
  },
  plugins: [],
}

