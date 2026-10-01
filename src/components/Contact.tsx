import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { personalInfo } from "../data";

type ContactFormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

const initialFormData: ContactFormData = { name: "", email: "", subject: "", message: "" };

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormData>(initialFormData);
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const shouldReduceMotion = useReducedMotion();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.currentTarget;
        setFormData((current) => ({ ...current, [name]: value }));
        setStatusMessage("");
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (loading) return;

        const form = event.currentTarget;
        if (!form.reportValidity()) return;
        if (!formData.name.trim() || !formData.subject.trim() || !formData.message.trim()) {
            setStatusMessage("Please complete each field before sending your message.");
            toast.error("Please complete each field before sending.");
            return;
        }

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        if (!serviceId || !templateId || !publicKey) {
            setStatusMessage(
                "The contact form is temporarily unavailable. Please email me directly instead.",
            );
            toast.error("Contact form is not configured. Please use the email link.");
            return;
        }

        setLoading(true);
        setStatusMessage("Sending your message…");
        try {
            await emailjs.send(
                serviceId,
                templateId,
                {
                    name: formData.name.trim(),
                    email: formData.email.trim(),
                    subject: formData.subject.trim(),
                    message: formData.message.trim(),
                },
                publicKey,
            );
            setFormData(initialFormData);
            setStatusMessage("Message sent. Thank you for reaching out.");
            toast.success("Message sent. Thank you for reaching out.");
        } catch {
            setStatusMessage(
                "Your message could not be sent. Please try again or email me directly.",
            );
            toast.error("Message could not be sent. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const contactMethods = [
        {
            label: "Email",
            value: personalInfo.email,
            href: `mailto:${personalInfo.email}`,
            icon: Mail,
        },
        {
            label: "Phone",
            value: `+91 ${personalInfo.phone}`,
            href: `tel:${personalInfo.phone}`,
            icon: Phone,
        },
        {
            label: "LinkedIn",
            value: "Connect on LinkedIn",
            href: personalInfo.linkedin,
            icon: Linkedin,
            external: true,
        },
        {
            label: "GitHub",
            value: "View GitHub profile",
            href: personalInfo.github,
            icon: Github,
            external: true,
        },
    ];

    return (
        <section
            id="contact"
            aria-labelledby="contact-title"
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
                        Contact
                    </p>
                    <h2
                        id="contact-title"
                        className="mt-3 text-3xl font-semibold tracking-tight text-gray-950 dark:text-white sm:text-4xl"
                    >
                        Let’s talk about what you’re building.
                    </h2>
                    <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                        Reach out by email or send a short message using the form.
                    </p>
                </motion.header>

                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
                    <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950 sm:p-7">
                        <h3 className="text-lg font-semibold text-gray-950 dark:text-white">
                            Contact details
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                            Based in {personalInfo.location}.
                        </p>
                        <ul className="mt-6 space-y-2">
                            {contactMethods.map(({ label, value, href, icon: Icon, external }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        target={external ? "_blank" : undefined}
                                        rel={external ? "noopener noreferrer" : undefined}
                                        className="flex min-h-12 items-center gap-3 rounded-lg px-3 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-accent-700 dark:text-gray-200 dark:hover:bg-gray-900 dark:hover:text-accent-300"
                                    >
                                        <Icon
                                            aria-hidden="true"
                                            size={18}
                                            className="shrink-0 text-accent-700 dark:text-accent-300"
                                        />
                                        <span className="min-w-0">
                                            <span className="block text-xs text-gray-500 dark:text-gray-400">
                                                {label}
                                            </span>
                                            <span className="break-words">{value}</span>
                                        </span>
                                    </a>
                                </li>
                            ))}
                            <li className="flex min-h-12 items-center gap-3 px-3 text-sm text-gray-700 dark:text-gray-200">
                                <MapPin
                                    aria-hidden="true"
                                    size={18}
                                    className="shrink-0 text-accent-700 dark:text-accent-300"
                                />
                                <span>
                                    <span className="block text-xs text-gray-500 dark:text-gray-400">
                                        Location
                                    </span>
                                    {personalInfo.location}
                                </span>
                            </li>
                        </ul>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        noValidate={false}
                        className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950 sm:p-7"
                    >
                        <div className="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="contact-name"
                                    className="mb-2 block text-sm font-medium text-gray-800 dark:text-gray-200"
                                >
                                    Name
                                </label>
                                <input
                                    id="contact-name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    minLength={2}
                                    maxLength={100}
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="min-h-11 w-full rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-600/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="contact-email"
                                    className="mb-2 block text-sm font-medium text-gray-800 dark:text-gray-200"
                                >
                                    Email
                                </label>
                                <input
                                    id="contact-email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    maxLength={254}
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="min-h-11 w-full rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-600/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="contact-subject"
                                    className="mb-2 block text-sm font-medium text-gray-800 dark:text-gray-200"
                                >
                                    Subject
                                </label>
                                <input
                                    id="contact-subject"
                                    name="subject"
                                    type="text"
                                    required
                                    minLength={2}
                                    maxLength={150}
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="min-h-11 w-full rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-900 focus:border-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-600/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="contact-message"
                                    className="mb-2 block text-sm font-medium text-gray-800 dark:text-gray-200"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    required
                                    minLength={10}
                                    maxLength={2000}
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full resize-y rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm leading-6 text-gray-900 focus:border-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-600/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                                />
                            </div>
                        </div>
                        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                            <button
                                type="submit"
                                disabled={loading}
                                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-accent-700 px-5 text-sm font-semibold text-white transition-colors hover:bg-accent-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-accent-500 dark:text-gray-950 dark:hover:bg-accent-400"
                            >
                                <Send aria-hidden="true" size={16} />
                                {loading ? "Sending…" : "Send message"}
                            </button>
                            <p
                                role="status"
                                aria-live="polite"
                                className="text-sm text-gray-600 dark:text-gray-300"
                            >
                                {statusMessage}
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
