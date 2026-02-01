import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      keyframes: {
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        gradient: "gradientShift 30s ease infinite",
      },
      backgroundSize: {
        "800": "800% 800%",
      },
    },
  },
  plugins: [],
};

export default config;
