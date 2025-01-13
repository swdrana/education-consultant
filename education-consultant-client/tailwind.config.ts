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
        // light: {
        //   primary: "#7e04ff",
        //   "primary-content": "#e1d9ff",
        //   secondary: "#00b900",
        //   "secondary-content": "#000d00",
        //   accent: "#2ac300",
        //   "accent-content": "#010e00",
        //   neutral: "#1e0708",
        //   "neutral-content": "#cec6c6",
        //   "base-100": "#e6ffff",
        //   "base-200": "#c8dede",
        //   "base-300": "#abbebe",
        //   "base-content": "#043840",
        //   info: "#008dff",
        //   "info-content": "#000716",
        //   success: "#00b18b",
        //   "success-content": "#000c07",
        //   warning: "#dab200",
        //   "warning-content": "#110c00",
        //   error: "#cc001c",
        //   "error-content": "#fcd6d1",
        // },
        light: {
          primary: "#e70905", // Updated primary color (reddish-brown)
          "primary-content": "#ffffff", // White content for readability on primary color
          secondary: "#5F9B41", // A complementary secondary color (Greenish)
          "secondary-content": "#ffffff", // White content for readability
          accent: "#F4A300", // A warm accent color (Golden yellow)
          "accent-content": "#ffffff", // White content for accent color readability
          neutral: "#2D2D2D", // A darker neutral color for background and contrasts
          "neutral-content": "#D1D1D1", // Light content for neutral color
          "base-100": "#F9F9F9", // Light background color (Very light gray)
          "base-200": "#F5F5F5", // Slightly darker background color (light gray)
          "base-300": "#D1D1D1", // Even darker background shade
          "base-content": "#2A2A2A", // Dark text color on base background
          info: "#2196F3", // Blue for info (standard blue)
          "info-content": "#ffffff", // White content for info
          success: "#4CAF50", // Green for success
          "success-content": "#ffffff", // White content for success
          warning: "#FF9800", // Orange for warning
          "warning-content": "#ffffff", // White content for warning
          error: "#F44336", // Red for error (slightly darker red for distinction)
          "error-content": "#ffffff", // White content for error
        },
        
      },
      // "dark", // Default dark theme
      {
        dark: {
          primary: "#e70905",
          "primary-content": "#d0daff",
          secondary: "#00ceff",
          "secondary-content": "#000f16",
          accent: "#67b400",
          "accent-content": "#040c00",
          neutral: "#0f0101",
          "neutral-content": "#cac3c2",
          "base-100": "#1b3331",
          "base-200": "#162b29",
          "base-300": "#112322",
          "base-content": "#cdd2d2",
          info: "#00b7ff",
          "info-content": "#000c16",
          success: "#7de400",
          "success-content": "#051200",
          warning: "#ffac49",
          "warning-content": "#160b02",
          error: "#ff6b7f",
          "error-content": "#160406",
        },
      },
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
