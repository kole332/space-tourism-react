/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `hsl(var(${variable}))`;
    }
    return `hsl(var(${variable}) / ${opacityValue})`;
  };
}

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    marginBlock: {
      1: "1rem",
      2: "2rem",
      4: "4rem",
      8: "8rem",
    },

    extend: {
      // Custom Screen sizes
      screens: {
        m2xl: { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        mxl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        mlg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        mmd: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        msm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },

      fontFamily: {
        sans: ["Barlow", ...defaultTheme.fontFamily.sans],
        serif: ["Bellefair", ...defaultTheme.fontFamily.serif],
        "sans-cond": ["Barlow Condensed", ...defaultTheme.fontFamily.sans],
      },

      colors: {
        "clr-dark": withOpacityValue("--clr-dark"),
        "clr-light": withOpacityValue("--clr-light"),
        "clr-white": withOpacityValue("--clr-white"),
      },

      backgroundImage: {
        // Icons
        arrow: "url('/assets/shared/icon-arrow.svg')",
        close: "url('/assets/shared/icon-close.svg')",
        hamburger: "url('/assets/shared/icon-hamburger.svg')",
        logo: "url('/assets/shared/logo.svg')",

        // Home
        "home-mobile": "url('/assets/home/background-home-mobile.jpg')",
        "home-tablet": "url('/assets/home/background-home-tablet.jpg')",
        "home-desktop": "url('/assets/home/background-home-desktop.jpg')",

        // crew
        "crew-mobile": "url('/assets/crew/background-crew-mobile.jpg')",
        "crew-tablet": "url('/assets/crew/background-crew-tablet.jpg')",
        "crew-desktop": "url('/assets/crew/background-crew-desktop.jpg')",

        // destination
        "destination-mobile":
          "url('/assets/destination/background-destination-mobile.jpg')",
        "destination-tablet":
          "url('/assets/destination/background-destination-tablet.jpg')",
        "destination-desktop":
          "url('/assets/destination/background-destination-desktop.jpg')",

        // technology
        "technology-mobile":
          "url('/assets/technology/background-technology-mobile.jpg')",
        "technology-tablet":
          "url('/assets/technology/background-technology-tablet.jpg')",
        "technology-desktop":
          "url('/assets/technology/background-technology-desktop.jpg')",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant, addUtilities, matchUtilities, theme }) {
      addVariant("optional", "&:optional");
      addVariant("hocus", ["&:hover", "&:focus"]);
      addVariant("supports-grid", "@supports (display: grid)");
      addVariant("aria-expanded", ['&[aria-expanded="true"]']);
      addVariant("aria-selected", ['&[aria-selected="true"]']);
      addVariant("data-visible", ['&[data-visible="true"]']);
      addUtilities({
        ".content-empty": {
          content: "''",
        },
      });
      matchUtilities(
        {
          "margin-block": (value) => ({
            marginBlock: value,
          }),
        },
        { values: theme("marginBlock") }
      );
    }),
  ],
};
