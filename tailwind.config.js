/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#000000",
          "black-soft": "#1a1a1a",
          primary: "#fe6500",
          secondary: "#f1742e",
          surface: "#2d2d2d",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "sans-serif"],
        display: ["var(--font-heading)", "sans-serif"],
      },
      borderRadius: {
        "2.5xl": "1.25rem",
      },
      boxShadow: {
        "soft": "0 4px 24px -4px rgba(0,0,0,0.08)",
        "soft-lg": "0 12px 40px -8px rgba(0,0,0,0.12)",
      },
    },
    screens: {
      sm: { max: "700px" },
      xs: { max: "320px" },
      md: "700px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
}