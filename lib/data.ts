
import wordanalyticsImg from "@/public/wordanalytics.png";
import marnon_web from "@/public/marnon_web.png";
import marnon_admin_panel from "@/public/marnon_admin_panel.png";
import marnon_backend from "@/public/marnon_backend.jpg";

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