export default {
  darkMode: "className", // Enables dark mode using className
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          light: "#ffffff", // White background for light mode
          dark: "#0a0a0a", // Almost black background for dark mode
          primary: "#0c1222",
        },
        text: {
          light: "#0a0a0a", // Black text for light mode
          dark: "#ffffff", // White text for dark mode
        },
        primary: {
          light: "#cccccc", // Soft gray for light mode
          dark: "#222222", // Dark gray for dark mode
        },
        secondary: {
          light: "#f0f0f0", // Lighter gray
          dark: "#1a1a1a", // Darker gray for dark mode
        },
        fontFamily: {
          code: ["Fira Code", "sans-serif"],
        },
      },
    },
  },
  plugins: [],
};
