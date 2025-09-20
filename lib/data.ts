
import wordanalyticsImg from "@/public/wordanalytics.png";
import marnon_web from "@/public/marnon_web.png";
import marnon_admin_panel from "@/public/marnon_admin_panel.png";
import marnon_backend from "@/public/marnon_backend.jpg";
import { TbBrandFramerMotion } from "react-icons/tb";
import { BiLogoTypescript, BiLogoJavascript } from "react-icons/bi";
import { FaReact, FaNodeJs, FaGithub, FaJava, FaPython, FaDocker, FaAws, FaAngular } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMysql, SiPostgresql, SiMongodb, SiRedux, SiGraphql, SiExpress, SiNestjs, SiDjango, SiFlask, SiJsonwebtokens, SiSpring } from "react-icons/si";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const projectsData = [
  {
    title: "Marnon E-commerce Web App",
    description:
      "A E-commerce web app for selling clothes online. User can perform product search, filtering, sorting, user authentication and payment integration.",
    tags: ["React", "Shad cn", "Hero UI", "Tailwind", "JWT", "Stripe"],
    imageUrl: marnon_web,
    githubUrl: 'https://github.com/ChamodDulanjana/MARNON-FE',
    liveUrl: '',
  },
  {
    title: "Marnon Admin Panel",
    description:
      "Admin panel for managing the MARNON E-commerce platform. Admin can perform management tasks.",
    tags: ["React", "Shad cn", "Hero UI", "Tailwind", "JWT"],
    imageUrl: marnon_admin_panel,
    githubUrl: 'https://github.com/ChamodDulanjana/MARNON-ADMIN-PANEL',
    liveUrl: '',
  },
  {
    title: "Marnon E-commerce Backend",
    description:
      "A backend service for the MARNON E-commerce platform. It handles user authentication, product management and order processing.",
    tags: ["Nest js", "MySQL", "JWT"],
    imageUrl: marnon_backend,
    githubUrl: 'https://github.com/ChamodDulanjana/MARNON-BE',
    liveUrl: '',
  },
  {
    title: "Term Deposit Prediction Model",
    description:
      "A machine learning model for predicting term deposit subscriptions. It uses historical data to identify potential customers.",
    tags: ["Python", "Flask", "Pandas", "Scikit-learn", "AWS", "Machine Learning"],
    imageUrl: wordanalyticsImg,
    githubUrl: 'https://github.com/ChamodDulanjana/Bank-Prediction-System',
    liveUrl: '',
  },
  {
    title: "Highway ticket management system",
    description:
      "A Spring Boot application with Microservices architecture for managing highway tickets. It includes user service, vehicle service, ticket generation and payment processing.",
    tags: ["Java", "Spring Boot", "MySQL", "Microservices", "REST API"],
    imageUrl: '',
    githubUrl: 'https://github.com/ChamodDulanjana/Highway-Ticket-Management-System',
    liveUrl: '',
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my projects, skills and experience. It is built with Next.js and Tailwind CSS.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "HeroUI", "TypeScript", "Resend"],
    imageUrl: '',
    githubUrl: 'https://github.com/ChamodDulanjana/Portfolio-Website',
    liveUrl: '',
  },
  {
    title: "Shoe Management System Frontend",
    description:
      "A frontend application for managing shoe inventory and sales. It includes features for product listing, user authentication, and shopping cart functionality.",
    tags: ["HTML", "CSS", "JQuery", "Tailwind CSS"],
    imageUrl: '',
    githubUrl: 'https://github.com/ChamodDulanjana/Hello-Shoe-Management-System-Frontend',
    liveUrl: '',
  },
  {
    title: "Shoe Management System Backend",
    description:
      "A backend service for managing shoe inventory and sales. It includes features for user authentication, product management, and order processing.",
    tags: ["Spring Boot", "JWT", "MySQL", "REST API"],
    imageUrl: '',
    githubUrl: 'https://github.com/ChamodDulanjana/Hello-Shoe-Management-System-Backend',
    liveUrl: '',
  },
] as const;


export const skillsData = [
  { name: "JavaScript", icon: BiLogoJavascript },
  { name: "TypeScript", icon: BiLogoTypescript },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: RiNextjsFill },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Git", icon: FaGithub },
  { name: "Tailwind CSS", icon: RiTailwindCssFill },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Redux", icon: SiRedux },
  { name: "GraphQL", icon: SiGraphql },
  { name: "Express", icon: SiExpress },
  { name: "Nest.js", icon: SiNestjs },
  { name: "Java", icon: FaJava },
  { name: "Spring Boot", icon: SiSpring },
  { name: "Python", icon: FaPython },
  { name: "Django", icon: SiDjango },
  { name: "Flask", icon: SiFlask },
  { name: "Docker", icon: FaDocker },
  { name: "AWS", icon: FaAws },
  { name: "Angular", icon: FaAngular },
  { name: "Framer Motion", icon: TbBrandFramerMotion },
  { name: "JWT", icon: SiJsonwebtokens },

];


export const experienceData = [
  {
    role: "Full Stack Developer Intern",
    company: "HCode Solutions Ltd.",
    duration: "September 2024 - March 2025",
    responsibilities: [
      "Contributing to both frontend and backend development, ensuring smooth integration.",
      "Collaborating with the team to meet project goals and follow best practices.",
      "Troubleshooting and optimizing code, ensuring high quality and efficient performance.",
      "Learning and adapting quickly, rapidly improving skills from a foundational level to an advanced understanding of the development process.",
    ],
  },
] as const;