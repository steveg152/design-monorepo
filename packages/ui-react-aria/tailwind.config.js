/** @type {import('tailwindcss').Config} */

import { zeusPlugin } from "@repo/tailwind-utils";

module.exports = {
  content: ["./src/**/*.{tsx,ts,js,jsx}"],
  darkMode: ["selector", '[data-mode="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [zeusPlugin],
};
