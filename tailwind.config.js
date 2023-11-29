const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      body: ['var(--font-inter)']
    },
    container: {
      padding: "1.5rem"
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      dark: {
        colors: {
          primary: {
            DEFAULT: "#FFFFFF",
            foreground: "#000000",
          },
          foreground: "#888888"
        }
      },
      light: {
        colors: {
          primary: {
            DEFAULT: "#000000",
            foreground: "#FFFFFF",
          },
          foreground: "#888888"
        }
      }
    }
  })],
}