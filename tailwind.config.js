/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0b0f17",
          card: "#111826",
          soft: "#0f1623",
          hover: "#162033",
        },
        border: {
          DEFAULT: "#1f2a3d",
        },
        accent: {
          DEFAULT: "#7c5cff",
          soft: "#a78bfa",
          green: "#34d399",
          red: "#f87171",
          amber: "#fbbf24",
          cyan: "#22d3ee",
        },
        muted: "#7c8aa3",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 0 rgba(255,255,255,0.03) inset, 0 8px 24px rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [],
};
