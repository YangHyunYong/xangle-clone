/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "xangle-main": {
          100: "#8000ff1a",
          200: "#8000ff",
        },
        "xangle-token": "#00c0ff",
        "xangle-gray": {
          50: "#00004066",
          75: "#878f9b",
          100: "#000040cc",
          200: "#000040",
          300: "#1c2129",
        },
        "xangle-blue": "#0060ff66",
        "xangle-red": {
          100: "#ff40801a",
          150: "#f75467",
          200: "#ff4080",
        },
        "xangle-green": {
          50: "#1ab87f1a",
          75: "#1ab87f",
          100: "#00c0601a",
          200: "#00c060",
        },
      },
    },
    fontFamily: {
      sans: ["Inter", "Noto Sans KR", "sans-serif"],
    },
  },
  plugins: [],
};
