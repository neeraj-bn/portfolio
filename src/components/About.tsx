import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Braces, Gauge, Workflow } from "lucide-react";

const highlights = [
    {
        icon: Workflow,
        title: "Product-minded interfaces",
        description:
            "Builds responsive product experiences in collaboration with backend, UX, and product teams.",
    },
    {
        icon: Braces,
        title: "Reusable frontend systems",
        description:
            "Works on shared React component libraries and consistent patterns across applications.",
    },
    {
        icon: Gauge,
        title: "Performance-conscious delivery",
        description:
            "Uses code-splitting, server-state caching, and focused client state to keep applications responsive.",
    },
];

const About: React.FC = () => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section
            id="about"
            aria-labelledby="about-title"
            className="bg-gray-50 px-4 py-20 dark:bg-gray-900/50 sm:px-6 lg:px-8 lg:py-24"
        >
            <div className="mx-auto max-w-6xl">
                <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.35 }}
                    className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"
                >
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-700 dark:text-accent-300">
                            About
                        </p>
                        <h2
                            id="about-title"
                            className="mt-3 text-3xl font-semibold tracking-tight text-gray-950 dark:text-white sm:text-4xl"
                        >
                            Thoughtful engineering, from interface to implementation.
                        </h2>
                    </div>
                    <div>
                        <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
                            I’m a frontend-focused Software Engineer who enjoys turning product
                            requirements into clear, dependable web experiences. My work spans React
                            and TypeScript interfaces, shared UI systems, data-rich visualizations,
                            and the integrations that connect them to real services.
                        </p>
                        <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                            I care about making software easier to use and easier to
                            maintain—whether that means collaborating on API patterns, improving a
                            component library, or keeping application state and rendering focused.
                        </p>
                    </div>
                </motion.div>

                <div className="mt-12 grid gap-4 md:grid-cols-3">
                    {highlights.map(({ icon: Icon, title, description }, index) => (
                        <motion.article
                            key={title}
                            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: shouldReduceMotion ? 0 : 0.3,
                                delay: shouldReduceMotion ? 0 : index * 0.06,
                            }}
                            className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950 sm:p-6"
                        >
                            <Icon
                                aria-hidden="true"
                                size={20}
                                className="text-accent-700 dark:text-accent-300"
                            />
                            <h3 className="mt-4 text-base font-semibold text-gray-950 dark:text-white">
                                {title}
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                                {description}
                            </p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
