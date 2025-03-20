/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard", "sans-serif"],
      },
      colors: {
        mainnavy: "#171523",
        mainmint: "#04D9D9",
        secondmint: "#04D9C4",
      },
    },
  },
  plugins: [],
};
