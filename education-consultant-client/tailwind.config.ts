import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-oval": "url('/img/bg-oval.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Custom colors if you need more customization
        "custom-primary": "#FF6347", // Example for primary color
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#7e04ff",
          "primary-content": "#e1d9ff",
          secondary: "#00b900",
          "secondary-content": "#000d00",
          accent: "#2ac300",
          "accent-content": "#010e00",
          neutral: "#1e0708",
          "neutral-content": "#cec6c6",
          "base-100": "#e6ffff",
          "base-200": "#c8dede",
          "base-300": "#abbebe",
          "base-content": "#043840",
          info: "#008dff",
          "info-content": "#000716",
          success: "#00b18b",
          "success-content": "#000c07",
          warning: "#dab200",
          "warning-content": "#110c00",
          error: "#cc001c",
          "error-content": "#fcd6d1",
        },
      },
      "dark", // Default dark theme
      {
        mytheme: {
          // Your custom theme
          primary: "#e000ff",
          secondary: "#00bf00",
          accent: "#0087e1",
          neutral: "#29242e",
          "base-100": "#332024",
          info: "#00a5ff",
          success: "#00ff65",
          warning: "#ff8c00",
          error: "#f9003c",
        },
      },
    ],
  },
};

export default config;
