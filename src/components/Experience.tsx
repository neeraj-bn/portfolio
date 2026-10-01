import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { timelineExperienceData } from "../data";

const Experience: React.FC = () => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section
            id="experience"
            aria-labelledby="experience-title"
            className="px-4 py-20 dark:bg-gray-950 sm:px-6 lg:px-8 lg:py-24"
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
                        Career
                    </p>
                    <h2
                        id="experience-title"
                        className="mt-3 text-3xl font-semibold tracking-tight text-gray-950 dark:text-white sm:text-4xl"
                    >
                        Experience
                    </h2>
                    <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                        Recent roles, engineering contributions, and the technologies used to
                        deliver them.
                    </p>
                </motion.header>

                <div className="relative">
                    <div
                        aria-hidden="true"
                        className="absolute bottom-4 left-[0.9rem] top-4 w-px bg-gray-200 dark:bg-gray-800 sm:left-[1.05rem]"
                    />
                    <div className="space-y-6">
                        {timelineExperienceData.map((item, index) => (
                            <motion.article
                                key={item.id}
                                initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.12 }}
                                transition={{
                                    duration: shouldReduceMotion ? 0 : 0.3,
                                    delay: shouldReduceMotion ? 0 : index * 0.05,
                                }}
                                className="relative pl-10 sm:pl-12"
                            >
                                <span className="absolute left-0 top-6 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-accent-700 dark:border-gray-700 dark:bg-gray-900 dark:text-accent-300 sm:h-9 sm:w-9">
                                    <Briefcase aria-hidden="true" size={16} />
                                </span>
                                <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900 sm:p-7">
                                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-950 dark:text-white sm:text-xl">
                                                {item.title}
                                            </h3>
                                            <p className="mt-1 text-sm font-medium text-accent-700 dark:text-accent-300">
                                                {item.role}
                                            </p>
                                        </div>
                                        <span className="w-fit shrink-0 rounded-md bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                                            {item.date}
                                        </span>
                                    </div>

                                    {item.bullets && item.bullets.length > 0 ? (
                                        <ul className="mt-5 space-y-2.5 text-sm leading-6 text-gray-600 dark:text-gray-300">
                                            {item.bullets.map((bullet) => (
                                                <li key={bullet} className="flex gap-3">
                                                    <span
                                                        aria-hidden="true"
                                                        className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-600 dark:bg-accent-400"
                                                    />
                                                    {bullet}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-300">
                                            {item.description}
                                        </p>
                                    )}

                                    {item.skills.length > 0 && (
                                        <ul
                                            aria-label={`Technologies used at ${item.role}`}
                                            className="mt-5 flex flex-wrap gap-2 border-t border-gray-100 pt-4 dark:border-gray-800"
                                        >
                                            {item.skills.map((skill) => (
                                                <li
                                                    key={skill}
                                                    className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                                                >
                                                    {skill}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
