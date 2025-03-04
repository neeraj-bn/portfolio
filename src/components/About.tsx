// import React from "react";
// import { motion } from "framer-motion";
// import { Code, Briefcase, GraduationCap, User } from "lucide-react";
// import { personalInfo } from "../data";
// import profileImage from "../assets/Neeraj-Profile.jpeg";

// const About: React.FC = () => {
//   return (
//     <section
//       id="about"
//       className="py-20 px-4 md:px-6 bg-gray-50 dark:bg-gray-900/50"
//     >
//       <div className="container mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
//             About Me
//           </h2>
//           <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
//           <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             A glimpse into my background, skills, and passion for development.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="space-y-6"
//           >
//             <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
//               I'm a passionate Full Stack Developer with a focus on creating
//               impactful web applications
//             </h3>
//             <p className="text-gray-600 dark:text-gray-400">
//               With expertise in both frontend and backend development, I
//               specialize in building responsive, user-friendly applications that
//               deliver seamless digital experiences. My skill set includes modern
//               web frameworks and libraries to create high-performance, scalable
//               solutions.
//             </p>
//             <p className="text-gray-600 dark:text-gray-400">
//               I blend technical expertise with creative problem-solving to
//               develop solutions that not only meet but exceed expectations.
//               Passionate about continuous learning, I stay updated with the
//               latest technologies and best practices to drive innovation.
//             </p>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
//               <div className="flex items-center space-x-2">
//                 <Code size={20} className="text-purple-600" />
//                 <span className="text-gray-700 dark:text-gray-300">
//                   Full Stack Development
//                 </span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Briefcase size={20} className="text-purple-600" />
//                 <span className="text-gray-700 dark:text-gray-300">
//                   Professional Experience
//                 </span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <GraduationCap size={20} className="text-purple-600" />
//                 <span className="text-gray-700 dark:text-gray-300">
//                   MCA Graduate
//                 </span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <User size={20} className="text-purple-600" />
//                 <span className="text-gray-700 dark:text-gray-300">
//                   Freelance Available
//                 </span>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="relative"
//           >
//             <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
//               <img
//                 src={profileImage}
//                 alt="Profile"
//                 className="w-full h-auto object-cover"
//               />
//             </div>
//             <div className="absolute -bottom-6 -right-6 w-full h-full bg-purple-600 rounded-lg -z-10"></div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from "react";
import { motion } from "framer-motion";
import { Code, Briefcase, GraduationCap, User } from "lucide-react";
import profileImage from "../assets/Neeraj-Profile.jpeg";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 md:px-6 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A glimpse into my background, skills, and passion for development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              I'm a passionate Full Stack Developer with a focus on creating
              impactful web applications
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              With expertise in both frontend and backend development, I
              specialize in building responsive, user-friendly applications that
              deliver seamless digital experiences. My skill set includes modern
              web frameworks and libraries to create high-performance, scalable
              solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              I blend technical expertise with creative problem-solving to
              develop solutions that not only meet but exceed expectations.
              Passionate about continuous learning, I stay updated with the
              latest technologies and best practices to drive innovation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-2">
                <Code size={20} className="text-purple-600" />
                <span className="text-gray-700 dark:text-gray-300">
                  Full Stack Development
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Briefcase size={20} className="text-purple-600" />
                <span className="text-gray-700 dark:text-gray-300">
                  Professional Experience
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <GraduationCap size={20} className="text-purple-600" />
                <span className="text-gray-700 dark:text-gray-300">
                  MCA Graduate
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <User size={20} className="text-purple-600" />
                <span className="text-gray-700 dark:text-gray-300">
                  Freelance Available
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg h-auto">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              {/* <div className="absolute -bottom-6 -right-6 w-full h-full  rounded-lg -z-10"></div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
