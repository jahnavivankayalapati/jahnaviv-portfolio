/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // GitHub-like dark palette
        ghBg: "#0d1117",
        ghCard: "#161b22",
        ghBorder: "#30363d",
        ghText: "#c9d1d9",
        ghMuted: "#8b949e",
        ghAccent: "#58a6ff",
      },
      boxShadow: {
        gh: "0 0 0 1px #30363d",
      },
      borderRadius: {
        xl2: "1rem",
      },
    },
  },
  plugins: [],
}
