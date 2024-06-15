/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        Dana: ["var(--font-dana)"],
        Morabba: [`var(--font-morabba)`],
      },
      letterSpacing: {
        tightest: "-0.065em",
      },
      boxShadow: {
        normal: "0px 1px 10px 0px rgba(0, 0, 0, 0.05)",
        medium: "0px 1px 10px 0px rgba(0, 0, 0, 0.2)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0.625rem",
        },
      },
      backgroundImage: {
        "home-mobile": "url('/images/headerBgMobile.webp')",
        "home-desktop": "url('/images/headerBgDesktop.webp')",
      },
      colors: {
        brown: {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832",
        },
      },
    },
  },

  plugins: [
    function ({ addVariant }) {
      addVariant("child", "&>*");
      addVariant("child-hover", "&>*:hover");
    },
  ],
};
