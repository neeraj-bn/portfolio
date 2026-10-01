/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
            },
            colors: {
                accent: {
                    50: "#effaf8",
                    100: "#d8f3ee",
                    200: "#b2e7dd",
                    300: "#83d5c7",
                    400: "#55c9b5",
                    500: "#17a695",
                    600: "#087e75",
                    700: "#086760",
                    800: "#0a534f",
                    900: "#0b4542",
                },
            },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "6rem",
            },
        },
    },
    plugins: [],
};
