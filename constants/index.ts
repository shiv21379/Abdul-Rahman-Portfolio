import { FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

// ✅ Define Skill type
export interface Skill {
  skill_name: string;
  image: string;
  width: number;
  height: number;
}


// SKILL_DATA
export const SKILL_DATA: Skill[] = [
  { skill_name: "HTML", image: "html.png", width: 80, height: 80 },
  { skill_name: "CSS", image: "css.png", width: 80, height: 80 },
  { skill_name: "JavaScript", image: "js.png", width: 65, height: 65 },
  { skill_name: "Tailwind CSS", image: "tailwind.png", width: 80, height: 80 },
  { skill_name: "React", image: "react.png", width: 80, height: 80 },
  { skill_name: "Redux", image: "redux.png", width: 80, height: 80 },
  { skill_name: "TypeScript", image: "ts.png", width: 80, height: 80 },
  { skill_name: "Next.js 14", image: "next.png", width: 80, height: 80 },
  { skill_name: "Framer Motion", image: "framer.png", width: 80, height: 80 },
  { skill_name: "Stripe", image: "stripe.png", width: 80, height: 80 },
  { skill_name: "Node.js", image: "node.png", width: 80, height: 80 },
  { skill_name: "MongoDB", image: "mongodb.png", width: 40, height: 40 },
];

// Socials
export const SOCIALS = [
  { name: "Instagram", icon: RxInstagramLogo, link: "https://instagram.com" },
  { name: "Facebook", icon: FaFacebook, link: "https://facebook.com" },
  { name: "Twitter", icon: RxTwitterLogo, link: "https://twitter.com" },
];

// Frontend skills
export const FRONTEND_SKILL: Skill[] = [
  { skill_name: "HTML", image: "html.png", width: 80, height: 80 },
  { skill_name: "CSS", image: "css.png", width: 80, height: 80 },
  { skill_name: "JavaScript", image: "js.png", width: 65, height: 65 },
  { skill_name: "Tailwind CSS", image: "tailwind.png", width: 80, height: 80 },
  { skill_name: "React", image: "react.png", width: 80, height: 80 },
  { skill_name: "Next.js 14", image: "next.png", width: 80, height: 80 },
];

// Backend skills
export const BACKEND_SKILL: Skill[] = [
  { skill_name: "Node.js", image: "node.png", width: 80, height: 80 },
  { skill_name: "Express.js", image: "express.png", width: 80, height: 80 },
  { skill_name: "MongoDB", image: "mongodb.png", width: 40, height: 40 },
];

// Fullstack skills
export const FULLSTACK_SKILL: Skill[] = [
  ...FRONTEND_SKILL,
  ...BACKEND_SKILL,
];

// Other skills (if any)
export const OTHER_SKILL: Skill[] = [];

// Projects, footer, nav links stay the same
export const PROJECTS = [
  { title: "🛒 Tekisky Mart – The Future of eCommerce", image: "/projects/project-1.webp", link: "https://tekiskymart.com/" },
  { title: "Tekisky – The Future of Tech", image: "/projects/project-2.webp", link: "https://tekisky.com/" },
  { title: "Speedline Auto Parts – The Future of Auto Parts", image: "/projects/project-3.webp", link: "https://speedlineautoparts.netlify.app/" },
];

export const FOOTER_DATA = [
  { title: "Community", data: [{ name: "GitHub", icon: RxGithubLogo, link: "https://github.com" }] },
  { title: "Social Media", data: [{ name: "Linkedin", icon: RxLinkedinLogo, link: "https://www.linkedin.com/in/abdul-raheman-389597281/" }] },
  { title: "About", data: [{ name: "Contact Me", icon: null, link: "mailto:arrahmanofficial9@gmail.com" }] },
];

export const NAV_LINKS = [
  { title: "About me", link: "#about-me" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#projects" },
];
