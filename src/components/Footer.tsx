import React from "react";
import { ArrowUp, Github, Instagram, Linkedin } from "lucide-react";
import { personalInfo } from "../data";

const Footer: React.FC = () => (
    <footer className="border-t border-gray-200 bg-white px-4 py-8 dark:border-gray-800 dark:bg-gray-950 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <p className="font-semibold tracking-tight text-gray-950 dark:text-white">
                    {personalInfo.name}
                    <span className="text-accent-600 dark:text-accent-400">.</span>
                </p>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    © {new Date().getFullYear()} {personalInfo.name}
                </p>
            </div>
            <div className="flex items-center gap-2">
                <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile (opens in a new tab)"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100 hover:text-accent-700 dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-accent-300"
                >
                    <Github aria-hidden="true" size={18} />
                </a>
                <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile (opens in a new tab)"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100 hover:text-accent-700 dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-accent-300"
                >
                    <Linkedin aria-hidden="true" size={18} />
                </a>
                <a
                    href={personalInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram profile (opens in a new tab)"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100 hover:text-accent-700 dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-accent-300"
                >
                    <Instagram aria-hidden="true" size={18} />
                </a>
                <a
                    href="#home"
                    aria-label="Back to top"
                    className="ml-2 inline-flex h-10 items-center gap-2 rounded-lg border border-gray-200 px-3 text-sm font-medium text-gray-700 transition-colors hover:border-accent-500 hover:text-accent-700 dark:border-gray-700 dark:text-gray-200 dark:hover:text-accent-300"
                >
                    Top <ArrowUp aria-hidden="true" size={15} />
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;
