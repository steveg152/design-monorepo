/** @type {import('tailwindcss').Config} */

import { zeus } from "./src/theme/plugin";

module.exports = {
  content: ["./src/**/*.{tsx,ts,js,jsx}"],
  darkMode: ["selector", '[data-mode="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [zeus],
};
