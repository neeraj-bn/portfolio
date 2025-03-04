import React, { useState } from "react";
import { motion } from "framer-motion";
import { skillsData } from "../data";
import * as LucideIcons from "lucide-react";

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = Array.from(
    new Set(skillsData.map((skill) => skill.category))
  );

  // Filter skills by category
  const filteredSkills = activeCategory
    ? skillsData.filter((skill) => skill.category === activeCategory)
    : skillsData;

  // Function to dynamically get Lucide icons
  // const getIcon = (iconName: string) => {
  //   const Icon = (LucideIcons as any)[iconName.charAt(0).toUpperCase() + iconName.slice(1)];
  //   return Icon ? <Icon size={24} /> : null;
  // };

  const getIcon = (iconClass: string) => (
    <i
      className={`${iconClass} text-4xl text-purple-600 dark:text-purple-400`}
    ></i>
  );

  return (
    <section id="skills" className="py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Skills
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === null
                ? "bg-purple-600 text-white"
                : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            All
          </motion.button>

          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              transition={{
                duration: 0.3,
                delay: index * 0.03,
                layout: { type: "spring", stiffness: 200, damping: 20 },
              }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md flex flex-col items-center justify-center text-center transform transition-all duration-300"
            >
              {/* <div className="w-16 h-16 flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                {getIcon(skill.icon)}
              </div> */}
              <div className="w-16 h-16 flex items-center justify-center mb-4 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                {getIcon(skill.icon)}
              </div>

              <h3 className="text-gray-900 dark:text-white font-medium">
                {skill.name}
              </h3>
              <span className="mt-2 text-xs text-purple-600 dark:text-purple-400 font-medium">
                {skill.category}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
