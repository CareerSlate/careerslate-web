/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        // primary: "#25265e",
        primary: "#23384e",
        // primary: "#0556f3",
        // primary: "#ddeddd",
        // primary: "#25265e",
        secondary: "#055ef3"
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"]
      }
    },
    screens: {
      xs: "380px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    }
  },
  plugins: [require("tailwind-scrollbar-hide")]
}
