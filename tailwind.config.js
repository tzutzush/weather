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
      width: {
        896: "896px",
        740: "740px",
        610: "610px",
      },
      screens: {
        phone: { min: "375px", max: "428px" },

        sm: { min: "640px", max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: { min: "768px", max: "1023px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: "1024px", max: "1279px" },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        xl: { min: "1280px", max: "1535px" },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        "2xl": { min: "1536px" },
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
