/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', "sans-serif"],
        satoshi: ['"Satoshi"', "sans-serif"],
      },
      boxShadow: {
        "custom-shadow": "0px 0px 24px 0px #08173529",
        "box-shadow": "0px 1px 2px 0px #0a0d120d",
      },
    },
  },
  plugins: [],
};
