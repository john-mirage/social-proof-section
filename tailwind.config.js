/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      "very-dark-magenta": "hsl(300, 43%, 22%)",
      "soft-pink": "hsl(333, 80%, 67%)",
      "dark-grayish-magenta": "hsl(303, 10%, 53%)",
      "light-grayish-magenta": "hsl(300, 24%, 96%)",
      "white": "hsl(0, 0%, 100%)",
    },
    spacing: {
      "0": "0px",
      "1": "0.0625rem",
      "2": "0.125rem",
      "4": "0.25rem",
      "8": "0.5rem",
      "12": "0.75rem",
      "16": "1rem",
      "20": "1.25rem",
      "24": "1.5rem",
      "28": "1.75rem",
      "32": "2rem",
      "36": "2.25rem",
      "40": "2.5rem",
      "44": "2.75rem",
      "48": "3rem",
      "52": "3.25rem",
      "56": "3.5rem",
      "60": "3.75rem",
      "64": "4rem",
      "68": "4.25rem",
      "72": "4.5rem",
      "76": "4.75rem",
      "80": "5rem",
      "84": "5.25rem",
      "88": "5.5rem",
      "92": "5.75rem",
      "96": "6rem",
      "100": "6.25rem",
      "128": "8rem",
      "256": "16rem",
      "512": "32rem",
      "1024": "64rem",
    },
    fontSize: {
      "16": ["1rem", { lineHeight: "1" }],
      "16-quote": ["1rem", { lineHeight: "1.375rem" }],
      "18": ["1.125rem", { lineHeight: "1.5625rem" }],
      "40": ["2.5rem", { lineHeight: "2rem" }],
    },
    fontWeight: {
      "400": "400",
      "500": "500",
      "700": "700",
    },
    letterSpacing: {
      "12": "0.075rem",
      "06": "0.0375rem",
    },
    borderRadius: {
      "8": "0.5rem",
      "full": "9999px",
    },
    extend: {
      fontFamily: {
        sans: [
          'League Spartan',
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
}
