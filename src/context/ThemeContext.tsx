import React, { useEffect, useState } from "react";
import { ThemeContext, type Theme } from "./theme";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window === "undefined") return "dark";
        const savedTheme = window.localStorage.getItem("theme");
        if (savedTheme === "dark" || savedTheme === "light") return savedTheme;
        return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        document.documentElement.style.colorScheme = theme;
        window.localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () =>
        setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
