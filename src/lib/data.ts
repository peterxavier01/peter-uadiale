// Social Icons
import Github from "../assets/icon-github.svg";
import TwitterX from "../assets/icon-twitter-x.svg";
import Instagram from "../assets/icon-instgram.svg";
import Linkedin from "../assets/icon-linkedin.svg";

// Skill Icons
import React from "../assets/icon-react.svg";
import Next from "../assets/icon-next.svg";
import Appwrite from "../assets/icon-appwrite.svg";
import Typescript from "../assets/icon-typescript.svg";
import CSS from "../assets/icon-css3.svg";
import Expo from "../assets/icon-expo.svg";
import Express from "../assets/icon-express.svg";
import Figma from "../assets/icon-figma.svg";
import Firebase from "../assets/icon-firebase.svg";
import Framer from "../assets/icon-framer-motion.svg";
import Git from "../assets/icon-git.svg";
import HTML from "../assets/icon-html5.svg";
import JS from "../assets/icon-javascript.svg";
import MaterialUI from "../assets/icon-material-ui.svg";
import MongoDB from "../assets/icon-mongodb.svg";
import MySql from "../assets/icon-mysql.svg";
import Node from "../assets/icon-node.js.svg";
import Npm from "../assets/icon-npm.svg";
import Postgres from "../assets/icon-postgresSQL.svg";
import Python from "../assets/icon-python.svg";
import Redux from "../assets/icon-redux.svg";
import SocketIO from "../assets/icon-socketio.svg";
import Sass from "../assets/icon-sass.svg";
import Sanity from "../assets/icon-sanity.svg";
import Threejs from "../assets/icon-threejs.svg";
import WordPress from "../assets/icon-wordpress.svg";
import Tailwind from "../assets/icon-tailwindcss.svg";

// Services
import ResponsiveIcon from "../assets/icon-google-code.svg";
import TypescriptIcon from "../assets/icon-typescript-1.svg";
import PerformanceIcon from "../assets/icon-increase.svg";
import AccessibilityIcon from "../assets/icon-accessibility.svg";

export const navLinks = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "About", href: "/about" },
  { id: 3, name: "Projects", href: "/projects" },
  { id: 4, name: "Testimonials", href: "/testimonials" },
  { id: 5, name: "Contact", href: "/contact" },
];

export const socialIcons = [
  {
    id: 1,
    name: "GitHub",
    icon: Github,
    href: "https://github.com/peterxavier01/",
  },
  {
    id: 2,
    name: "TwitterX",
    icon: TwitterX,
    href: "https://twitter.com/peter_uadiale",
  },
  {
    id: 3,
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/peter_xavier__/",
  },
  {
    id: 4,
    name: "Linkedin",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/peter-o-uadiale-69541a19a/",
  },
];

export const skills = [
  { id: 1, icon: React, name: "React" },
  { id: 2, icon: Next, name: "Next" },
  { id: 3, icon: JS, name: "JavaScript" },
  { id: 4, icon: Typescript, name: "Typescript" },
  { id: 5, icon: Appwrite, name: "Appwrite" },
  { id: 6, icon: CSS, name: "CSS3" },
  { id: 7, icon: Expo, name: "Expo" },
  { id: 8, icon: Express, name: "Express" },
  { id: 9, icon: Figma, name: "Figma" },
  { id: 10, icon: Firebase, name: "Firebase" },
  { id: 11, icon: Framer, name: "Framer Motion" },
  { id: 12, icon: Git, name: "Git" },
  { id: 13, icon: Github, name: "Github" },
  { id: 14, icon: Sanity, name: "Sanity" },
  { id: 15, icon: HTML, name: "HTML5" },
  { id: 16, icon: MaterialUI, name: "Material UI" },
  { id: 17, icon: Node, name: "Node.js" },
  { id: 18, icon: Npm, name: "NPM" },
  { id: 19, icon: MongoDB, name: "Mongo DB" },
  { id: 20, icon: MySql, name: "MySQL" },
  { id: 21, icon: Postgres, name: "PostgreSQL" },
  { id: 22, icon: Python, name: "Python" },
  { id: 23, icon: Redux, name: "Redux" },
  { id: 24, icon: SocketIO, name: "Socket.io" },
  { id: 25, icon: Sass, name: "Sass" },
  { id: 26, icon: Threejs, name: "Three.js" },
  { id: 27, icon: WordPress, name: "WordPress" },
];

export const experiences = [
  { id: 1, company: "Smartians Ltd.", period: "2021 - Present" },
  { id: 2, company: "Andela", period: "2021 - Present" },
  { id: 3, company: "PluralSight", period: "2021 - Present" },
  { id: 4, company: "Sidehustle.NG", period: "2021 - Present" },
];

export const education = [
  {
    id: 1,
    school: "University of Benin",
    period: "September 2018 - April 2024",
    degree: "BEng",
  },
];

export const services = [
  {
    id: 1,
    icon: ResponsiveIcon,
    title: "Responsive Web Design",
    description:
      "I specialize in crafting responsive designs that ensure your site’s layout, images, and functionalities are flexible and user-friendly, no matter the screen size.",
  },
  {
    id: 2,
    icon: TypescriptIcon,
    title: "JavaScript / TypeScript Programming",
    description:
      "I bring your website to life, creating engaging features and functionalities that enhance user interaction and satisfaction.",
  },
  {
    id: 3,
    icon: PerformanceIcon,
    title: "Performance Optimization",
    description:
      "I employ a range of optimization techniques, from lazy loading to caching and minification, to ensure your website loads swiftly and runs smoothly, providing a seamless user experience.",
  },
  {
    id: 4,
    icon: AccessibilityIcon,
    title: "Accessibility and SEO Best Practices",
    description:
      "I adhere to the best practices for web accessibility, making your website user-friendly for people with disabilities. Additionally, I implement SEO strategies to improve your site’s visibility on search engines, driving more traffic to your website.",
  },
];

export const projects = [
  {
    id: 1,
    image: "",
    name: "Style Vault",
    description:
      "Style Vault is a modern, minimalistic clothing e-commerce solution. It offers sales of mens's and women's wears and accessories. It also offers a seamless payment process to get you your order(s) ASAP.",
    tools: [
      { id: 1, icon: Next, name: "Next.js" },
      { id: 2, icon: Framer, name: "Framer Motion" },
      { id: 3, icon: Typescript, name: "Typescript" },
      { id: 4, icon: Tailwind, name: "Tailwind" },
    ],
    live_preview_url: "https://style-vault.vercel.app/",
    github_repo_url: "https://github.com/peterxavier01/style-vault",
  },
];
