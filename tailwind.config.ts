import plugin from "tailwindcss/plugin";
import formsPlugin from "@tailwindcss/forms";
import typographyPlugin from "@tailwindcss/typography";
import withRadixThemesPlugin from "./plugins/tailwindcss"

const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-sf)", "system-ui", "sans-serif"],
        default: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        // Fade up and down
        "fade-up": "fade-up 0.5s",
        "fade-down": "fade-down 0.5s",
        // Tooltip
        "slide-up-fade": "slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade": "slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        // Fade up and down
        "fade-up": {
          "0%": {
            opacity: 0,
            transform: "translateY(10px)",
          },
          "80%": {
            opacity: 0.6,
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
        "fade-down": {
          "0%": {
            opacity: 0,
            transform: "translateY(-10px)",
          },
          "80%": {
            opacity: 0.6,
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
        // Tooltip
        "slide-up-fade": {
          "0%": { opacity: 0, transform: "translateY(6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-down-fade": {
          "0%": { opacity: 0, transform: "translateY(-6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      boxShadow: {
        1: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 1px 2px rgba(91, 104, 113, 0.32)',
        2: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 4px 8px rgba(91, 104, 113, 0.24)',
        3: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 8px 16px rgba(91, 104, 113, 0.24)',
        4: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 12px 24px rgba(91, 104, 113, 0.24)',
        5: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 24px 32px rgba(91, 104, 113, 0.24)',
        6: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 40px 64px rgba(91, 104, 113, 0.24)'
      },
    },
  },
  plugins: [
    formsPlugin,
    typographyPlugin,
    withRadixThemesPlugin({}),
    plugin(({ addVariant }) => {
      addVariant("radix-side-top", '&[data-side="top"]');
      addVariant("radix-side-bottom", '&[data-side="bottom"]');
    }),
  ],
};

export default config
