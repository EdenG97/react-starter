/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xsm: {
        max: "370px",
      },
      sm: {
        max: "640px",
      },
    },
    extend: {
      maxWidth: {
        primary: "1440px",
      },
      padding: {
        primary: "1rem",
      },
      backgroundImage: {
        primary:
          "linear-gradient(to right, rgb(228, 42, 42) 40%, rgb(150, 30, 150))",
      },
      backgroundColor: {
        "primary-red": "red",
      },
      textColor: {
        primary: "red",
        secondary: "rgb(222 219 219)",
      },
    },
  },
  plugins: [],
};
