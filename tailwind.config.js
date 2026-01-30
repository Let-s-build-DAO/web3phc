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
          black: "#0a0a0a",
          "black-soft": "#171717",
          yellow: "#FACC15",
          "yellow-dark": "#EAB308",
          "yellow-light": "#FEF08A",
          "yellow-bg": "#FEF9C3",
        },
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