import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Braces, Cloud, Database, PanelsTopLeft, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { skillsData } from "../data";

const categoryIcons: Record<string, LucideIcon> = {
    Languages: Braces,
    Frontend: PanelsTopLeft,
    Backend: Database,
    Cloud: Cloud,
    Tools: Wrench,
};

const Skills: React.FC = () => {
    const shouldReduceMotion = useReducedMotion();
    const categories = Array.from(new Set(skillsData.map((skill) => skill.category)));

    return (
        <section
            id="skills"
            aria-labelledby="skills-title"
            className="bg-gray-50 px-4 py-20 dark:bg-gray-900/50 sm:px-6 lg:px-8 lg:py-24"
        >
            <div className="mx-auto max-w-6xl">
                <motion.header
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.35 }}
                    className="mb-12 max-w-2xl"
                >
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-700 dark:text-accent-300">
                        Toolkit
                    </p>
                    <h2
                        id="skills-title"
                        className="mt-3 text-3xl font-semibold tracking-tight text-gray-950 dark:text-white sm:text-4xl"
                    >
                        Technologies I use
                    </h2>
                    <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                        A practical mix of frontend, backend, and delivery tools from my project and
                        work experience.
                    </p>
                </motion.header>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {categories.map((category, index) => {
                        const Icon = categoryIcons[category] ?? Braces;
                        const skills = skillsData.filter((skill) => skill.category === category);

                        return (
                            <motion.section
                                key={category}
                                aria-labelledby={`skill-category-${index}`}
                                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{
                                    duration: shouldReduceMotion ? 0 : 0.3,
                                    delay: shouldReduceMotion ? 0 : index * 0.04,
                                }}
                                className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950 sm:p-6"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent-50 text-accent-700 dark:bg-accent-900/40 dark:text-accent-300">
                                        <Icon aria-hidden="true" size={18} />
                                    </span>
                                    <h3
                                        id={`skill-category-${index}`}
                                        className="font-semibold text-gray-950 dark:text-white"
                                    >
                                        {category}
                                    </h3>
                                </div>
                                <ul className="mt-5 flex flex-wrap gap-2">
                                    {skills.map((skill) => (
                                        <li
                                            key={skill.id}
                                            className="rounded-md border border-gray-200 px-2.5 py-1.5 text-sm text-gray-700 dark:border-gray-800 dark:text-gray-200"
                                        >
                                            {skill.name}
                                        </li>
                                    ))}
                                </ul>
                            </motion.section>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
