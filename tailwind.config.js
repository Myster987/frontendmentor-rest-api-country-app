/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-mode-text": "#111517",
        "light-mode-input": "#858585",
        "light-mode-background": "#ffffff",
        "dark-mode-elements": "#3a4857",
        "dark-mode-background": "#27363f",
        "dark-mode-text": "#ffffff",
      },
    },
  },
  plugins: [],
};
