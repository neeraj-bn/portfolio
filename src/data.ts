import { TimelineItem, Project, Skill } from './types';
import smlImage from "./assets/sml.png";
import urlShortener from "./assets/url.png"
import { ins } from 'framer-motion/client';

export const timelineExperienceData: TimelineItem[] = [
  {
    id: 1,
    title: "Software Developer Intern",
    role: "Peerbrains Technologies",
    date: "Dec 2024 - Present",
    description: "Developed Sync Music Lab using ReactJS, Tailwind CSS, and Bootstrap, generating $3M revenue in a month. Built a RESTful API with Node.js & Express, ensuring seamless data flow. Implemented JWT authentication & Stripe, boosting successful transactions by 30%. Followed Agile practices and participated in code reviews to enhance development efficiency.",
    skills: ["ReactJS", "Node.js", "Express", "PostgreSQL", "Bootstrap"]
  },
  {
    id: 2,
    title: "Full Stack Developer Intern",
    role: "NGX Technologies",
    date: "March 2024 - Nov 2024",
    description: "Developed the XPOS Dashboard, optimizing billing for 1,000+ hotels, improving efficiency by 40%. Reduced page load times by 35% using React Router & lazy loading for seamless navigation. Built scalable UI components with React TypeScript & Mantine UI, enhancing consistency & development efficiency.",
    skills: ["ReactTS", "Mantine UI", "Flask", "PostgreSQL"]
  }
];


export const timelineEducationData: TimelineItem[] = [
  {
    id: 1,
    title: "Master of Computer Applications (MCA)",
    role: "Bangalore University",
    date: "2023 - 2024",
    description: "Specialized in full-stack development, software engineering, and advanced algorithms.",
    skills: ["Web Development & ReactJS", "Data Structures & Algorithms", "Software Engineering", "Database & Cloud Technologies"]
  },
  {
    id: 2,
    title: "BCA",
    role: "Mangalore University",
    date: "2019 - 2022",
    description: "Built a strong foundation in programming, database management, and computer networking.",
    skills: ["Programming with C, C++, Java, and Python", "Database Management & SQL", "Full-Stack Technologies", "Operating Systems & Computer Networks"]
  }
];

export const projectsData: Project[] = [
  {
    id: 1,
    title: "SyncMusicLab",
    description: "A platform that helps music creators connect with people who need music for movies, TV shows, ads, and video games.",
    longDescription: "SyncMusicLab is a comprehensive platform designed to bridge the gap between music creators and content producers. It provides a marketplace where musicians can showcase their work and content creators can find the perfect soundtrack for their projects. The platform includes features like profile management, music upload and categorization, licensing options, and a sophisticated search system.",
    tags: ["ReactJS", "Node.js", "Express", "PostgreSQL", "Bootstrap"],
    imageUrl: smlImage,
    demoLink: "https://www.syncmusiclab.com/",
    githubLink: "#"
  },
  {
    id: 2,
    title: "XPOS Dashboard",
    description: "A web application for managing XPOS billing machines, used by 1,000+ hotel businesses.",
    longDescription: "XPOS Dashboard is a comprehensive management system designed for hotel businesses to efficiently handle their billing operations. The dashboard provides real-time analytics, inventory management, sales tracking, and customer data management. With its intuitive interface, businesses can monitor their operations, generate reports, and make data-driven decisions. The system has been successfully implemented in over 1,000 hotel businesses, significantly improving their operational efficiency.",
    tags: ["ReactTS", "Mantine UI", "Flask", "PostgreSQL"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    demoLink: "https://xpos-dev.ngxconnect.in/auth/sign-in",
    githubLink: "#"
  },
  {
    id: 3,
    title: "ShopEase Ecommerce",
    description: "A full-featured ecommerce web application with product management, cart functionality, and payment processing.",
    longDescription: "ShopEase is a comprehensive ecommerce platform built with the MERN stack. It features a responsive design, user authentication, product catalog with search and filter capabilities, shopping cart functionality, secure checkout process with payment integration, order tracking, and an admin dashboard for inventory and order management. The application provides a seamless shopping experience for users and efficient management tools for administrators.",
    tags: ["React", "Node.js", "Express", "Tailwind", "ShadCN", "Redux-Store", "MongoDB"],
    imageUrl: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww",
    demoLink: "https://mern-ecommerce-1-6sr2.onrender.com/",
    githubLink: "https://github.com/neeraj-bn/mern-ecommerce"
  },
  {
    id: 4,
    title: "URL Shortener & Analytics",
    description: "A URL shortening service with comprehensive analytics and tracking capabilities.",
    longDescription: "This URL Shortener project is a web application that allows users to create shortened URLs for easier sharing. Beyond basic shortening functionality, it provides detailed analytics including click counts, geographic data of visitors, referral sources, and time-based activity charts. The application features user authentication, custom URL slugs, QR code generation for shortened URLs, and an intuitive dashboard to monitor and manage all shortened links. Built with modern web technologies, it offers a responsive design that works seamlessly across all devices.",
    tags: ["React", "Supabase (PostgreSQL)", "shadcn/ui"],
    imageUrl: urlShortener,
    demoLink: "https://url-shortener-rouge-alpha.vercel.app/",
    githubLink: "https://github.com/neeraj-bn/url-shortener"
  }
];

// export const skillsData: Skill[] = [
//   { id: 1, name: "React", icon: "react", category: "Frontend" },
//   { id: 2, name: "TypeScript", icon: "code", category: "Languages" },
//   { id: 3, name: "JavaScript", icon: "code-2", category: "Languages" },
//   { id: 4, name: "HTML/CSS", icon: "code-square", category: "Frontend" },
//   { id: 5, name: "Node.js", icon: "server", category: "Backend" },
//   { id: 6, name: "Next.js", icon: "frame", category: "Frontend" },
//   { id: 7, name: "Tailwind CSS", icon: "palette", category: "Frontend" },
//   { id: 8, name: "Git", icon: "git-branch", category: "Tools" },
//   { id: 9, name: "MongoDB", icon: "database", category: "Backend" },
//   { id: 10, name: "Express", icon: "webhook", category: "Backend" },
//   { id: 11, name: "Docker", icon: "container", category: "DevOps" },
//   { id: 12, name: "AWS", icon: "cloud", category: "DevOps" },
//   { id: 13, name: "Redux", icon: "layers", category: "Frontend" },
//   { id: 14, name: "PostgreSQL", icon: "database", category: "Backend" },
//   { id: 15, name: "REST API", icon: "network", category: "Backend" },
//   { id: 16, name: "GraphQL", icon: "webhook", category: "Backend" }
// ];


// export const skillsData: Skill[] = [
//   { id: 1, name: "C/C++", icon: "terminal", category: "Languages" },
//   { id: 2, name: "JavaScript", icon: "code", category: "Languages" },
//   { id: 3, name: "Python", icon: "code", category: "Languages" },
//   { id: 4, name: "Java", icon: "file-code", category: "Languages" },
//   { id: 5, name: "SQL", icon: "database", category: "Languages" },
//   { id: 6, name: "HTML/CSS", icon: "brackets", category: "Frontend" },
//   { id: 7, name: "ReactJS", icon: "react", category: "Frontend" },
//   { id: 8, name: "Redux", icon: "layers", category: "Frontend" },
//   { id: 9, name: "Node.js", icon: "server", category: "Backend" },
//   { id: 10, name: "Express.js", icon: "webhook", category: "Backend" },
//   { id: 11, name: "Tailwind CSS", icon: "palette", category: "Frontend" },
//   { id: 12, name: "Bootstrap", icon: "layout-grid", category: "Frontend" },
//   { id: 13, name: "Material UI", icon: "component", category: "Frontend" },
//   { id: 14, name: "MongoDB", icon: "database", category: "Backend" },
//   { id: 15, name: "MySQL", icon: "database", category: "Backend" },
//   { id: 16, name: "PostgreSQL", icon: "server-cog", category: "Backend" },
//   { id: 17, name: "Firebase", icon: "flame", category: "Cloud" },
//   { id: 18, name: "Git", icon: "git-branch", category: "Tools" }
// ];


export const skillsData: Skill[] = [
  { id: 1, name: "C/C++", icon: "devicon-cplusplus-plain", category: "Languages" },
  { id: 2, name: "JavaScript", icon: "devicon-javascript-plain", category: "Languages" },
  { id: 3, name: "Python", icon: "devicon-python-plain", category: "Languages" },
  { id: 4, name: "Java", icon: "devicon-java-plain", category: "Languages" },
  { id: 5, name: "SQL", icon: "devicon-mysql-plain", category: "Languages" },
  { id: 6, name: "HTML/CSS", icon: "devicon-html5-plain", category: "Frontend" },
  { id: 7, name: "ReactJS", icon: "devicon-react-original", category: "Frontend" },
  { id: 8, name: "Redux", icon: "devicon-redux-original", category: "Frontend" },
  { id: 9, name: "Node.js", icon: "devicon-nodejs-plain", category: "Backend" },
  { id: 10, name: "Express.js", icon: "devicon-express-original", category: "Backend" },
  { id: 11, name: "Tailwind CSS", icon: "devicon-tailwindcss-plain", category: "Frontend" },
  { id: 12, name: "Bootstrap", icon: "devicon-bootstrap-plain", category: "Frontend" },
  { id: 13, name: "Material UI", icon: "devicon-materialui-plain", category: "Frontend" },
  { id: 14, name: "MongoDB", icon: "devicon-mongodb-plain", category: "Backend" },
  { id: 15, name: "MySQL", icon: "devicon-mysql-plain", category: "Backend" },
  { id: 16, name: "PostgreSQL", icon: "devicon-postgresql-plain", category: "Backend" },
  { id: 17, name: "Firebase", icon: "devicon-firebase-plain", category: "Cloud" },
  { id: 18, name: "Git", icon: "devicon-git-plain", category: "Tools" }
];



export const personalInfo = {
  name: "Neeraj",
  phone: "8494946966",
  location: "Bangalore",
  email: "neerajbn26@gmail.com",
  linkedin: "https://www.linkedin.com/in/neeraj-bn/",
  github: "https://github.com/neeraj-bn",
  instagram: "https://www.instagram.com/neeraj.b_/",
};