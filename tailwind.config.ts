import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    bg: "#08090C",
                    surface: "#10131A",
                    card: "#161B26",
                    gold: "#D4AF37",
                    "gold-light": "#EED888",
                    "gold-hover": "#C5A059",
                    bronze: "#9E783D",
                    border: "rgba(255, 255, 255, 0.08)",
                    "gold-border": "rgba(212, 175, 55, 0.25)",
                },
            },
            fontFamily: {
                serif: ["var(--font-cormorant)", "serif"],
                sans: ["var(--font-jakarta)", "sans-serif"],
            },
            boxShadow: {
                "gold-glow": "0 0 30px -5px rgba(212, 175, 55, 0.2)",
            },
        },
    },
    plugins: [],
};

export default config;