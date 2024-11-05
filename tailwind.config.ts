/** @type {import('tailwindcss').Config} */
// import plugin from "tailwindcss/plugin";

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontWeight: {
        extrabold: 1000,
      },
      fontSize: {
        0: "0",
      },
      colors: {
        black: "#222",
        blue: {
          600: "#0027f5",
        },
        gray: {
          300: "#7d7d7d",
        },
        primary: "#F39200",
      },
      maxWidth: {
        "1/2": "50%",
        "1/3": "33.3333%",
        "1/4": "25%",
        "1/5": "20%",
      },
    },
  },
  plugins: [
    // plugin(({ addVariant, e, postcss }) => {
    //   addVariant("mouse-hover", ({ container, separator }) => {
    //     const mediaRule = postcss.atRule({
    //       name: "media",
    //       params: "(hover: hover)",
    //     });
    //     mediaRule.append(container.nodes);
    //     container.append(mediaRule);
    //     mediaRule.walkRules((rule) => {
    //       const ruleSelectorClear = rule.selector
    //         .slice(1) // Remove dot in the beginning of the selector
    //         .replace("\\/", "/"); // Replace \/ with /, so that PostCSS doesn't escape the slash twice
    //       rule.selector = `.${e(
    //         `mouse-hover${separator}${ruleSelectorClear}`
    //       )}:hover`;
    //     });
    //   });
    // }),
  ],
};
