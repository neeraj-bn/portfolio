// import React from "react";
// import { motion } from "framer-motion";
// import { timelineData } from "../data";
// import { Briefcase } from "lucide-react";

// const Experience: React.FC = () => {
//   return (
//     <section id="experience" className="py-20 px-4 md:px-6">
//       <div className="container mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
//             Experience
//           </h2>
//           <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
//           <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             My professional journey and career milestones.
//           </p>
//         </motion.div>

//         <div className="relative">
//           {/* Timeline line */}
//           <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>

//           {/* Timeline items */}
//           <div className="space-y-12">
//             {timelineData.map((item, index) => (
//               <motion.div
//                 key={item.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className={`relative flex flex-col md:flex-row ${
//                   index % 2 === 0 ? "md:flex-row-reverse" : ""
//                 }`}
//               >
//                 {/* Timeline dot */}
//                 <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center z-10">
//                   <Briefcase size={16} className="text-white" />
//                 </div>

//                 {/* Content */}
//                 <div
//                   className={`md:w-1/2 ${
//                     index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
//                   } pl-12 md:pl-0`}
//                 >
//                   <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
//                     <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-800 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-3">
//                       {item.date}
//                     </span>
//                     <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
//                       {item.title}
//                     </h3>
//                     <h4 className="text-lg font-medium text-purple-600 dark:text-purple-400 mb-3">
//                       {item.role}
//                     </h4>
//                     <p className="text-gray-600 dark:text-gray-400 mb-4">
//                       {item.description}
//                     </p>
//                     <div className="flex flex-wrap gap-2">
//                       {item.skills.map((skill, skillIndex) => (
//                         <span
//                           key={skillIndex}
//                           className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
//                         >
//                           {skill}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;

// import React from "react";
// import { motion } from "framer-motion";
// import { timelineData } from "../data";
// import { Briefcase } from "lucide-react";

// const Experience: React.FC = () => {
//   return (
//     <section id="experience" className="py-20 px-4 md:px-6">
//       <div className="container mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
//             Experience
//           </h2>
//           <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
//           <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             My professional journey and career milestones.
//           </p>
//         </motion.div>

//         <div className="relative">
//           {/* Timeline Line */}
//           <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-300 dark:bg-gray-700"></div>

//           {/* Timeline Items */}
//           <div className="space-y-16">
//             {timelineData.map((item, index) => (
//               <motion.div
//                 key={item.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className={`relative flex flex-col md:flex-row ${
//                   index % 2 === 0 ? "md:flex-row-reverse" : ""
//                 }`}
//               >
//                 {/* Timeline Dot */}
//                 <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center z-10">
//                   <Briefcase size={16} className="text-white" />
//                 </div>

//                 {/* Content */}
//                 <div
//                   className={`md:w-[48%] ${
//                     index % 2 === 0 ? "md:pl-16 md:pr-6" : "md:pr-16 md:pl-6"
//                   } pl-20 md:pl-6`}
//                 >
//                   <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
//                     <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-900 dark:text-purple-200 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-3">
//                       {item.date}
//                     </span>
//                     <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
//                       {item.title}
//                     </h3>
//                     <h4 className="text-lg font-medium text-purple-600 dark:text-purple-400 mb-3">
//                       {item.role}
//                     </h4>
//                     <p className="text-gray-600 dark:text-gray-400 mb-4">
//                       {item.description}
//                     </p>
//                     <div className="flex flex-wrap gap-2">
//                       {item.skills.map((skill, skillIndex) => (
//                         <span
//                           key={skillIndex}
//                           className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
//                         >
//                           {skill}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;

import React from "react";
import { motion } from "framer-motion";
import { timelineExperienceData } from "../data";
import { Briefcase } from "lucide-react";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Experience
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and career milestones.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line (Centered) */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-300 dark:bg-gray-700"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {timelineExperienceData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center z-10 border-2 border-white dark:border-gray-800">
                  <Briefcase size={16} className="text-white" />
                </div>

                {/* Content */}
                <div
                  className={`md:w-[45%] ${
                    index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                  } pl-20 md:pl-0`}
                >
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-900 dark:text-purple-200 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-3">
                      {item.date}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <h4 className="text-lg font-medium text-purple-600 dark:text-purple-400 mb-3">
                      {item.role}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
