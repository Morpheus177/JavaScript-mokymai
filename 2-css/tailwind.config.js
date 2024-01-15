/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "primary-100": "#1289af",
        "text-paragraph": "#666",
        "text-citation-and-h2": "#333",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        button: "'Hind Madurai'",
      },
    },
    fontSize: {
      base: "16px",
      "37xl": "56px",
      lg: "18px",
      "5xl": "24px",
      xs: "12px",
      "9xl": "28px",
      "13xl": "32px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
