/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,ts}"],
  theme: {
    extend: {
      boxShadow: {
        sbar: "0 0px 8px -1px rgb(0 0 0 / 0.2), 0 0px 8px -2px rgb(0 0 0 / 0.2)",
      },
      colors: {
        beige: "#f5f5f5",
        lightGrey: "#eaecef",
      },
    },
  },
  plugins: [],
};
