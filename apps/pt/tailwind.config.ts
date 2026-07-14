import type { Config } from "tailwindcss";
import preset from "@areluna/core/tailwind-preset";

const config: Config = {
  presets: [preset],
  content: [
    "./src/**/*.{ts,tsx}",
    "../../packages/core/src/**/*.{ts,tsx}",
  ],
};

export default config;
