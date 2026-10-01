import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Code2, ExternalLink, Github } from "lucide-react";
import { personalInfo, projectsData } from "../data";

const Projects: React.FC = () => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section
            id="projects"
            aria-labelledby="projects-title"
            className="px-4 py-20 dark:bg-gray-950 sm:px-6 lg:px-8 lg:py-24"
        >
            <div className="mx-auto max-w-6xl">
                <motion.header
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.35 }}
                    className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
                >
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-700 dark:text-accent-300">
                            Selected work
                        </p>
                        <h2
                            id="projects-title"
                            className="mt-3 text-3xl font-semibold tracking-tight text-gray-950 dark:text-white sm:text-4xl"
                        >
                            Projects
                        </h2>
                        <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                            A selection of product work and applications. Open the details for the
                            fuller project description.
                        </p>
                    </div>
                    <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 w-fit items-center gap-2 text-sm font-semibold text-gray-700 transition-colors hover:text-accent-700 dark:text-gray-200 dark:hover:text-accent-300"
                    >
                        More on GitHub <ArrowUpRight aria-hidden="true" size={16} />
                    </a>
                </motion.header>

                <div className="grid gap-5 md:grid-cols-2">
                    {projectsData.map((project, index) => (
                        <motion.article
                            key={project.id}
                            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.12 }}
                            transition={{
                                duration: shouldReduceMotion ? 0 : 0.3,
                                delay: shouldReduceMotion ? 0 : (index % 2) * 0.06,
                            }}
                            className="overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-lg hover:shadow-gray-900/5 dark:border-gray-800 dark:bg-gray-900 dark:hover:shadow-black/20"
                        >
                            {project.imageUrl ? (
                                <img
                                    src={project.imageUrl}
                                    alt={`${project.title} project preview`}
                                    loading="lazy"
                                    decoding="async"
                                    className="aspect-[16/8] w-full border-b border-gray-100 object-cover dark:border-gray-800"
                                />
                            ) : (
                                <div
                                    aria-hidden="true"
                                    className="flex aspect-[16/8] items-center justify-center border-b border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-950"
                                >
                                    <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-500 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400">
                                        <Code2
                                            aria-hidden="true"
                                            size={18}
                                            className="text-accent-700 dark:text-accent-300"
                                        />
                                        <span>Project overview</span>
                                    </div>
                                </div>
                            )}

                            <div className="p-5 sm:p-6">
                                <div className="flex flex-wrap items-start justify-between gap-3">
                                    <h3 className="text-xl font-semibold tracking-tight text-gray-950 dark:text-white">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center gap-1">
                                        {project.demoLink && (
                                            <a
                                                href={project.demoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`Open ${project.title} live demo (opens in a new tab)`}
                                                className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-accent-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-accent-300"
                                            >
                                                <ExternalLink aria-hidden="true" size={17} />
                                            </a>
                                        )}
                                        {project.githubLink && (
                                            <a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`View ${project.title} source code (opens in a new tab)`}
                                                className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-accent-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-accent-300"
                                            >
                                                <Github aria-hidden="true" size={17} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                                    {project.description}
                                </p>

                                {project.longDescription && (
                                    <details className="group mt-4 border-t border-gray-100 pt-3 dark:border-gray-800">
                                        <summary className="min-h-10 cursor-pointer list-none py-2 text-sm font-semibold text-accent-700 marker:hidden hover:text-accent-800 focus-visible:rounded-sm dark:text-accent-300 dark:hover:text-accent-200">
                                            <span className="group-open:hidden">
                                                Project details <span aria-hidden="true">+</span>
                                            </span>
                                            <span className="hidden group-open:inline">
                                                Hide details <span aria-hidden="true">−</span>
                                            </span>
                                        </summary>
                                        <p className="pb-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                                            {project.longDescription}
                                        </p>
                                    </details>
                                )}

                                <ul
                                    aria-label={`Technologies used for ${project.title}`}
                                    className="mt-4 flex flex-wrap gap-2"
                                >
                                    {project.tags.map((tag) => (
                                        <li
                                            key={tag}
                                            className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                                        >
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
