/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          default: "#1e1e2e", // Main background
          dark: "#181825", // Slightly darker variant for contrast
          card: "#2b2d42", // Card background
          gradientStart: "#1e1e2e", // Gradient start color
          gradientEnd: "#28293d", // Gradient end color
        },
        primary: {
          default: "#ff7b72", // Main accent color (vibrant coral)
          hover: "#e06666", // Darker coral for hover states
        },
        secondary: {
          default: "#3a3d5b", // Muted deep blue-gray for borders
          hover: "#505377", // Slightly lighter variant for contrast
        },
        input: {
          background: "#1e1e2e", // Input background
          border: "#3a3d5b", // Input border color
          focus: "#ff7b72", // Focus ring color
        },
        text: {
          default: "#ffffff", // Main text color
          muted: "#b4b4c6", // Soft muted text
          contrast: "#ff7b72", // Highlighted text
          secondary: "#a1a1b5", // Description text color (from gray-400 in login)
        },
      },
    },
  },
  plugins: [],
};
