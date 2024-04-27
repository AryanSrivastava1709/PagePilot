/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "gradient-radial":
          " radial-gradient(circle, rgba(53,76,96,1) 37%, rgba(11,32,56,1) 100%)",
      }),
    },
  },
  plugins: [require("daisyui")],
};
