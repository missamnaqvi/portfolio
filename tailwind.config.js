export default {
  darkMode: "class", // Enables class-based dark mode
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: "var(--textColor)", // Use textColor variable
        bgColor: "var(--bgColor)", // Use bgColor variable
      },
    },
  },
  plugins: [],
};
