import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "../context/useTheme";
import { personalInfo } from "../data";
import resume from "../assets/Neeraj_Resume.pdf";

const navLinks = [
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 16);
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsOpen(false);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const closeMenu = () => setIsOpen(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <nav
                aria-label="Main navigation"
                className={`border-b transition-colors duration-200 ${
                    scrolled || isOpen
                        ? "border-gray-200/80 bg-white/95 shadow-sm backdrop-blur-md dark:border-gray-800/80 dark:bg-gray-950/95"
                        : "border-transparent bg-white/80 backdrop-blur-sm dark:bg-gray-950/75"
                }`}
            >
                <div className="mx-auto flex min-h-[4.25rem] max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <a
                        href="#home"
                        onClick={closeMenu}
                        className="rounded-sm text-lg font-semibold tracking-tight text-gray-950 dark:text-white"
                    >
                        {personalInfo.name}
                        <span className="text-accent-600 dark:text-accent-400">.</span>
                    </a>

                    <div className="hidden items-center gap-7 md:flex">
                        <ul className="flex items-center gap-6">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-sm font-medium text-gray-600 transition-colors hover:text-accent-700 dark:text-gray-300 dark:hover:text-accent-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <a
                            href={resume}
                            download="Neeraj_Resume.pdf"
                            className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-accent-700 px-4 text-sm font-semibold text-white transition-colors hover:bg-accent-800 dark:bg-accent-500 dark:text-gray-950 dark:hover:bg-accent-400"
                        >
                            <Download aria-hidden="true" size={16} />
                            Resume
                        </a>
                        <button
                            type="button"
                            onClick={toggleTheme}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
                        >
                            {theme === "dark" ? (
                                <Sun aria-hidden="true" size={18} />
                            ) : (
                                <Moon aria-hidden="true" size={18} />
                            )}
                        </button>
                    </div>

                    <div className="flex items-center gap-2 md:hidden">
                        <button
                            type="button"
                            onClick={toggleTheme}
                            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
                        >
                            {theme === "dark" ? (
                                <Sun aria-hidden="true" size={19} />
                            ) : (
                                <Moon aria-hidden="true" size={19} />
                            )}
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsOpen((open) => !open)}
                            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                            aria-expanded={isOpen}
                            aria-controls="mobile-navigation"
                        >
                            {isOpen ? (
                                <X aria-hidden="true" size={21} />
                            ) : (
                                <Menu aria-hidden="true" size={21} />
                            )}
                        </button>
                    </div>
                </div>

                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div
                            id="mobile-navigation"
                            initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={shouldReduceMotion ? undefined : { opacity: 0, height: 0 }}
                            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
                            className="overflow-hidden border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 md:hidden"
                        >
                            <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-1 px-4 py-3 sm:px-6">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            onClick={closeMenu}
                                            className="flex min-h-11 items-center rounded-lg px-3 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-accent-700 dark:text-gray-200 dark:hover:bg-gray-900 dark:hover:text-accent-300"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                                <li className="col-span-2 pt-1">
                                    <a
                                        href={resume}
                                        download="Neeraj_Resume.pdf"
                                        onClick={closeMenu}
                                        className="flex min-h-11 items-center justify-center gap-2 rounded-lg bg-accent-700 px-4 text-sm font-semibold text-white dark:bg-accent-500 dark:text-gray-950"
                                    >
                                        <Download aria-hidden="true" size={16} />
                                        Download résumé
                                    </a>
                                </li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
};

export default Navbar;
