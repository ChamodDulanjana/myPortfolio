
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
    title: "MARNON WEB",
    description:
      "A E-commerce web app for selling clothes online. User can perform product search, filtering, sorting, user authentication and payment integration.",
    tags: ["React", "Shad cn", "Hero UI", "Tailwind", "JWT", "Stripe"],
    imageUrl: marnon_web,
  },
  {
    title: "MARNON ADMIN PANEL",
    description:
      "Admin panel for managing the MARNON E-commerce platform. Admin can perform management tasks.",
    tags: ["React", "Shad cn", "Hero UI", "Tailwind", "JWT"],
    imageUrl: marnon_admin_panel,
  },
  {
    title: "MARNON BACKEND",
    description:
      "A backend service for the MARNON E-commerce platform. It handles user authentication, product management and order processing.",
    tags: ["Nest js", "MySQL", "JWT"],
    imageUrl: marnon_backend,
  },
  {
    title: "Term Deposit Prediction Model",
    description:
      "A machine learning model for predicting term deposit subscriptions. It uses historical data to identify potential customers.",
    tags: ["Python", "Flask", "Pandas", "Scikit-learn", "Machine Learning", "AWS"],
    imageUrl: wordanalyticsImg,
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