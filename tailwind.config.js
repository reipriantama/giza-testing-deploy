/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(to right, #FF512F 0%, #F09819 100% )",
        "gradient-secondary":
          "linear-gradient(to right, #9D1F64 0%, #840048 100% )",
        "gradient-tertiary":
          "linear-gradient(0.4turn, #000000 0%, #353535 100% )",
        "gradient-tertiary-2":
          "linear-gradient(0.6turn, #1E1E1E 0%, #010101 100% )",
        "gradient-tertiary-2-hover":
          "linear-gradient(0.2turn, #1E1E1E 0%, #010101 100% )",
      },
      colors: {
        gradient: {
          primary: "linear-gradient(to right, #FF512F 0%, #F09819 100% )",
          secondary: "linear-gradient(to right, #9D1F64 0%, #840048 100% )",
          tertiary: "linear-gradient(0.4turn, #000000 0%, #353535 100% )",
          tertiary2: "linear-gradient(0.6turn, #1E1E1E 0%, #010101 100% )",
          tertiary2Hover: "linear-gradient(0.2turn, #1E1E1E 0%, #010101 100% )",
        },
        primary: {
          DEFAULT: "#9D1F64",
          1: "#C479A2",
          2: "#EBD2E0",
        },
        secondary: {
          DEFAULT: "#FF3737",
          1: "#FF8787",
          2: "#FF8787",
        },
        accent: {
          DEFAULT: "#FF8E4E",
          1: "#FFBB95",
          2: "#FFE8DC",
        },
        netral: {
          DEFAULT: "#191715",
          0: "#010101",
          1: "#25282B",
          2: "#43474B",
          3: "#A0A4A8",
          4: "#CACCCF",
          5: "#FFFFFF",
        },
      },
      fontFamily: {
        sourceSansPro: ["Source Sans Pro"],
        roboto: ["Roboto", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      fontSize: {
        //desktop
        //headings
        "h1-desktop": ["80px", { lineHeight: "101px", fontWeight: "bold" }],
        "h2-desktop": ["56px", { lineHeight: "72px", fontWeight: "bold" }],
        "h3-desktop": ["48px", { lineHeight: "64px", fontWeight: "bold" }],
        "h4-desktop": ["32px", { lineHeight: "40px", fontWeight: "bold" }],
        "h5-desktop": ["34px", { lineHeight: "32px", fontWeight: "bold" }],
        "h6-desktop": ["18px", { lineHeight: "24px", fontWeight: "bold" }],
        "h7-desktop": ["14px", { lineHeight: "48px", fontWeight: "bold" }],
        //body
        "body-large-desktop": [
          "18px",
          { lineHeight: "28px", fontWeight: "bold" },
        ],
        "body-standard-desktop": [
          "16px",
          { lineHeight: "24px", fontWeight: "regular" },
        ],
        "body-smasll-desktop": [
          "14px",
          { lineHeight: "22px", fontWeight: "regular" },
        ],
        //--------------------------------------------------------------//

        //tablet
        //headings
        "h1-tablet": ["56px", { lineHeight: "72px", fontWeight: "bold" }],
        "h2-tablet": ["48px", { lineHeight: "64px", fontWeight: "bold" }],
        "h3-tablet": ["40px", { lineHeight: "56px", fontWeight: "bold" }],
        "h4-tablet": ["28px", { lineHeight: "32px", fontWeight: "bold" }],
        "h5-tablet": ["18px", { lineHeight: "24px", fontWeight: "bold" }],
        "h6-tablet": ["14px", { lineHeight: "18px", fontWeight: "bold" }],
        //body
        "body-large-tablet": [
          "18px",
          { lineHeight: "28px", fontWeight: "bold" },
        ],
        "body-standard-tablet": [
          "16px",
          { lineHeight: "24px", fontWeight: "regular" },
        ],
        "body-small-tablet": [
          "14px",
          { lineHeight: "22px", fontWeight: "regular" },
        ],
        //button
        "button-tablet": ["16px", { lineHeight: "18px", fontWeight: "bold" }],
        //--------------------------------------------------------------//

        //mobile
        //headings
        "h1-mobile": ["40px", { lineHeight: "56px", fontWeight: "bold" }],
        "h2-mobile": ["36px", { lineHeight: "48px", fontWeight: "bold" }],
        "h3-mobile": ["32px", { lineHeight: "40px", fontWeight: "bold" }],
        "h4-mobile": ["24px", { lineHeight: "28px", fontWeight: "bold" }],
        "h5-mobile": ["18px", { lineHeight: "24px", fontWeight: "bold" }],
        "h6-mobile": ["14px", { lineHeight: "18px", fontWeight: "bold" }],
        //body
        "body-large-mobile": [
          "18px",
          { lineHeight: "28px", fontWeight: "bold" },
        ],
        "body-standard-mobile": [
          "16px",
          { lineHeight: "24px", fontWeight: "regular" },
        ],
        "body-small-mobile": [
          "14px",
          { lineHeight: "22px", fontWeight: "regular" },
        ],
        "body-extra-small-mobile": [
          "12px",
          { lineHeight: "20px", fontWeight: "regular" },
        ],
        //button
        "button-mobile": ["16px", { lineHeight: "18px", fontWeight: "bold" }],
      },
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
      fadeIn: {
        "0%": { opacity: 0, transform: "translateY(20px)" },
        "100%": { opacity: 1, transform: "translateY(0)" },
      },
      fadeOut: {
        "0%": { opacity: 1, transform: "translateY(0)" },
        "100%": { opacity: 0, transform: "translateY(20px)" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
      fadeIn: "fadeIn 0.5s ease-out forwards",
      fadeOut: "fadeOut 0.5s ease-out forwards",
    },
    screens: {
      xs: "360px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
