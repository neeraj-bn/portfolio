import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, Github, Linkedin } from "lucide-react";
import { personalInfo, timelineExperienceData } from "../data";
import profileImage from "../assets/Neeraj-Profile.jpeg";
import resume from "../assets/Neeraj_Resume.pdf";

const Hero: React.FC = () => {
    const shouldReduceMotion = useReducedMotion();
    const currentRole = timelineExperienceData[0];
    const technologies = ["React", "TypeScript", "React Query", "Zustand"];

    return (
        <section
            id="home"
            aria-labelledby="hero-title"
            className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-28 lg:pt-36"
        >
            <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
                <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.45 }}
                >
                    <p className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-accent-700 dark:text-accent-300">
                        <span aria-hidden="true" className="h-px w-8 bg-current" />
                        Frontend-focused software engineer
                    </p>
                    <h1
                        id="hero-title"
                        className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-gray-950 dark:text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]"
                    >
                        I build thoughtful,
                        <br className="hidden sm:block" />
                        <span className="text-accent-700 dark:text-accent-300">
                            {" "}
                            reliable web experiences.
                        </span>
                    </h1>
                    <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg sm:leading-8">
                        I’m {personalInfo.name}, a Software Engineer with 2+ years of experience
                        building responsive applications and interactive product interfaces with
                        React and TypeScript.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                        <a
                            href="#projects"
                            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-accent-700 px-5 text-sm font-semibold text-white transition-colors hover:bg-accent-800 dark:bg-accent-500 dark:text-gray-950 dark:hover:bg-accent-400"
                        >
                            View projects
                            <ArrowRight
                                aria-hidden="true"
                                size={17}
                                className="transition-transform group-hover:translate-x-0.5"
                            />
                        </a>
                        <a
                            href={resume}
                            download="Neeraj_Resume.pdf"
                            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-gray-300 px-5 text-sm font-semibold text-gray-800 transition-colors hover:border-gray-400 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-100 dark:hover:border-gray-600 dark:hover:bg-gray-900"
                        >
                            Download résumé
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex min-h-12 items-center justify-center rounded-lg px-5 text-sm font-semibold text-gray-600 transition-colors hover:text-accent-700 dark:text-gray-300 dark:hover:text-accent-300"
                        >
                            Contact me
                        </a>
                    </div>

                    <div className="mt-9 flex flex-col gap-4 border-t border-gray-200 pt-5 dark:border-gray-800 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-xs font-medium uppercase tracking-[0.12em] text-gray-500 dark:text-gray-400">
                                Core technologies
                            </p>
                            <ul
                                className="mt-2 flex flex-wrap gap-2"
                                aria-label="Core technologies"
                            >
                                {technologies.map((technology) => (
                                    <li
                                        key={technology}
                                        className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 dark:bg-gray-900 dark:text-gray-200"
                                    >
                                        {technology}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex items-center gap-3">
                            <a
                                href={personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub profile (opens in a new tab)"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-700 transition-colors hover:border-accent-500 hover:text-accent-700 dark:border-gray-700 dark:text-gray-200 dark:hover:text-accent-300"
                            >
                                <Github aria-hidden="true" size={18} />
                            </a>
                            <a
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn profile (opens in a new tab)"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-700 transition-colors hover:border-accent-500 hover:text-accent-700 dark:border-gray-700 dark:text-gray-200 dark:hover:text-accent-300"
                            >
                                <Linkedin aria-hidden="true" size={18} />
                            </a>
                            <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">
                                {personalInfo.location}
                            </span>
                        </div>
                    </div>
                </motion.div>

                <motion.aside
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: shouldReduceMotion ? 0 : 0.45,
                        delay: shouldReduceMotion ? 0 : 0.12,
                    }}
                    className="mx-auto w-full max-w-sm lg:max-w-none"
                    aria-label="Profile and current role"
                >
                    <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-3 shadow-xl shadow-gray-900/5 dark:border-gray-800 dark:bg-gray-900 dark:shadow-black/20">
                        <img
                            src={profileImage}
                            alt={`Portrait of ${personalInfo.name}`}
                            width="1280"
                            height="1280"
                            fetchPriority="high"
                            className="aspect-[4/4.2] w-full rounded-xl object-cover object-center"
                        />
                        <div className="p-4 sm:p-5">
                            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-accent-700 dark:text-accent-300">
                                Currently
                            </p>
                            <h2 className="mt-1 text-lg font-semibold text-gray-950 dark:text-white">
                                {currentRole.title}
                            </h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-300">
                                {currentRole.role}
                            </p>
                            <p className="mt-3 text-xs font-medium text-gray-500 dark:text-gray-400">
                                {currentRole.date}
                            </p>
                        </div>
                    </div>
                </motion.aside>
            </div>

            <a
                href="#about"
                className="mx-auto mt-12 hidden w-fit items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-accent-700 dark:text-gray-400 dark:hover:text-accent-300 sm:flex"
            >
                More about me
                <ArrowDown aria-hidden="true" size={15} />
            </a>
        </section>
    );
};

export default Hero;
