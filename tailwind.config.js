/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      s1: { max: "400px" },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
};
// "./components/**/*.{js,ts,jsx,tsx}"
// "./src/**/*.{html,js}";
