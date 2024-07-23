import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",

    // pkgs
    // only other way to do this is to build and process with tailwindcss cli
    // https://github.com/vercel/turbo/tree/main/examples/with-tailwind
    // but that's overkill for this
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        pixel: ["var(--font-pixel)"],
      },
    },
  },
  plugins: [],
};
export default config;
