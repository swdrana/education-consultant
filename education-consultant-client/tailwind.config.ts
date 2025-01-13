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
      // {
      //   dark: {
      //     primary: "#4300ff",
      //     "primary-content": "#d0daff",
      //     secondary: "#00ceff",
      //     "secondary-content": "#000f16",
      //     accent: "#67b400",
      //     "accent-content": "#040c00",
      //     neutral: "#0f0101",
      //     "neutral-content": "#cac3c2",
      //     "base-100": "#1b3331",
      //     "base-200": "#162b29",
      //     "base-300": "#112322",
      //     "base-content": "#cdd2d2",
      //     info: "#00b7ff",
      //     "info-content": "#000c16",
      //     success: "#7de400",
      //     "success-content": "#051200",
      //     warning: "#ffac49",
      //     "warning-content": "#160b02",
      //     error: "#ff6b7f",
      //     "error-content": "#160406",
      //   },
      // },
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
