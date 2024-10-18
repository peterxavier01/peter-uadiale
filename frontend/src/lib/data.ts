// Social Icons
import Github from "../assets/icon-github.svg";
import GithubIcon from "../components/icons/github";
import TwitterXIcon from "../components/icons/twitter-x";
import LinkedinIcon from "../components/icons/linkedin";

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
import ExpoIcon from "../components/icons/expo";
import AccessibilityIcon from "../components/icons/accessibility";
import ResponsiveIcon from "../components/icons/responsive";
import PerformanceIcon from "../components/icons/performance";

// Contact
import Email from "@/components/icons/email";
import Location from "@/components/icons/location";

// Project Images
// import StyleVault from "../assets/style-vault.png";
// import StyleVault1 from "../assets/project-images/style-vault-2.png";
// import StyleVault2 from "../assets/project-images/style-vault.png";
// import StyleVault3 from "../assets/project-images/style-vault-metrics.png";

import RealHome from "../assets/realhome-4.png";
import RealHome1 from "../assets/project-images/realhome-2.png";
import RealHome2 from "../assets/project-images/realhome.png";
import RealHome3 from "../assets/project-images/realhome-3.png";
import RealHome4 from "../assets/project-images/realhome-4.png";
import RealHome5 from "../assets/project-images/realhome-5.png";
import RealHome6 from "../assets/project-images/realhome-6.png";

import Brainy from "../assets/project-images/brainy.png";
import Brainy1 from "../assets/project-images/brainy-02.png";
import Brainy2 from "../assets/project-images/brainy-03.png";
import Brainy3 from "../assets/project-images/brainy-04.png";

import Portfolio from "../assets/portfolio.png";
import Portfolio2 from "../assets/project-images/portfolio-02.png";
import Portfolio3 from "../assets/project-images/portfolio-03.png";
import Portfolio4 from "../assets/project-images/portfolio-04.jpeg";

import SoundWave from "../assets/project-images/spotify-02.png";
import SoundWave1 from "../assets/project-images/spotify-01.png";

import { fadeInLeftVariants, fadeInRightVariants } from "./animations";

export const navLinks = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "About", href: "/about" },
  { id: 3, name: "Projects", href: "/projects" },
  // { id: 4, name: "Testimonials", href: "/testimonials" },
  { id: 5, name: "Contact", href: "/contact" },
];

export const socialIcons = [
  {
    id: 1,
    name: "GitHub",
    icon: GithubIcon,
    href: "https://github.com/peterxavier01/",
  },
  {
    id: 2,
    name: "TwitterX",
    icon: TwitterXIcon,
    href: "https://twitter.com/peter_uadiale",
  },
  {
    id: 3,
    name: "Linkedin",
    icon: LinkedinIcon,
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
  {
    id: 1,
    company: "Smartians Ltd.",
    period: "2021 - Present",
    role: "Frontend Developer (Contract)",
  },
  {
    id: 2,
    company: "Andela",
    period: "June 2022 - Dec. 2022",
    role: "Associate Android Developer (Intern)",
  },
  {
    id: 3,
    company: "Sidehustle.NG",
    period: "Feb. 2022 - May. 2022",
    role: "React Developer (Intern)",
  },
];

export const education = [
  {
    id: 1,
    school: "University of Benin",
    period: "September 2018 - April 2024",
    degree: "Electrical / Electronic Engineering (B.Eng)",
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
    icon: ExpoIcon,
    title: "Mobile App Development",
    description:
      "I develop mobile applications using React Native and Expo, enabling you to reach a wider audience and provide a seamless user experience on both iOS and Android platforms.",
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

export const contactData = [
  {
    id: 1,
    title: "Email",
    content: "uadialepeter@gmail.com",
    icon: Email,
    animationVariant: fadeInRightVariants,
  },
  {
    id: 2,
    title: "Location",
    content: "Lagos, Nigeria",
    icon: Location,
    animationVariant: fadeInLeftVariants,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Francis Xavier",
    position: "Xavion, CEO",
    content:
      "Peter was very professional, paid close attention to details to provide us with a great product that checked all our requirements.",
  },
  {
    id: 2,
    name: "Francis Xavier",
    position: "Xavion, CEO",
    content:
      "Peter was very professional, paid close attention to details to provide us with a great product that checked all our requirements.",
  },
  {
    id: 3,
    name: "Francis Xavier",
    position: "Xavion, CEO",
    content:
      "Peter was very professional, paid close attention to details to provide us with a great product that checked all our requirements.",
  },
  {
    id: 4,
    name: "Francis Xavier",
    position: "Xavion, CEO",
    content:
      "Peter was very professional, paid close attention to details to provide us with a great product that checked all our requirements.",
  },
];

export const projects = [
  // {
  //   id: 1,
  //   image: StyleVault,
  //   imageList: [StyleVault1, StyleVault2, StyleVault3],
  //   name: "Style Vault",
  //   category: "Ecommerce",
  //   description:
  //     "Style Vault is an e-commerce website project designed to offer a seamless shopping experience for clothes, shoes, and accessories for both men and women. This project leverages cutting-edge technologies to deliver a dynamic, responsive, and user-friendly platform.",
  //   project_requirements: [
  //     "Responsive website layout: The user should be able to view the optimal layout of the website depending on their device",
  //     "Product catalog: To create a dynamic product catalog that is filterable by the user.",
  //     "Shopping cart and checkout: Integrating a shopping cart and checkout system to facilitate the purchase process.",
  //     "Payment gateway integration: To enable secure and convenient payment methods for users.",
  //     "Dark mode support: To provide users the choice to use either a dark mode or light mode theme (defaults to system).",
  //     "Payment gateway integration: To enable users to make purchases using various payment methods.",
  //     "Search functionality: To allow users to search for products easily.",
  //   ],
  //   approach: [
  //     "Component-based development: I used a component-based approach to build reusable and modular components for the website with React.",
  //     "Mobile-first design: I followed a mobile-first design approach to ensure the website is optimized for mobile devices and provides a seamless experience on larger screens.",
  //     "Headless CMS integration: I integrated a headless CMS (Commerce.js) to manage the product catalog, allowing for easy updates and modifications.",
  //     "API-driven devlopment: I utilized the Commerce.js API to fetch product data, manage the shopping cart, and handle the checkout process.",
  //     "Payment gateway solution: I implemented a payment gateway solution to enable users to make purchases for products by integrating the Paystack API.",
  //   ],
  //   challenges: [
  //     "Performance optimization: I ensured the website loads quickly and efficiently. This involved optimizing images, implementing lazy loading, and using caching techniques.",
  //     "User Experience (UX) design: I focused on creating an intuitive, minimalistic and user-friendly interface, ensuring that users can easily navigate the website and find the products they need.",
  //     "Commerce.js CMS: I faced challenges in integrating the Commerce.js API into the project. This was because the latest version of Commerce.js used in this project was incompatible with Next 14 at the time of making this project, so I could not use features like server actions to reduce client JS and I also ran into other errors. To rectify this, I had to downgrade Next.js to version 13.5.3.",
  //   ],
  //   tools: [
  //     { id: 1, icon: Next, name: "Next.js" },
  //     { id: 2, icon: Framer, name: "Framer Motion" },
  //     { id: 3, icon: Typescript, name: "Typescript" },
  //     { id: 4, icon: Tailwind, name: "Tailwind" },
  //     { id: 5, name: "Paystack" },
  //     { id: 6, name: "Commerce.js" },
  //   ],
  //   live_preview_url: "https://style-vault.vercel.app/",
  //   github_repo_url: "https://github.com/peterxavier01/style-vault",
  // },
  {
    id: 2,
    image: RealHome,
    imageList: [RealHome1, RealHome2, RealHome6, RealHome3, RealHome4, RealHome5],
    name: "RealHome",
    category: "Web App",
    description:
      "RealHome is a dynamic and robust real-estate web application used to showcase a vast range of properties. The web app also features an admin panel which is used to manage the UI of the application.",
    project_requirements: [
      "Responsive website layout: To create a responsive website layout that adapts to different screen sizes and devices.",
      "Properties portfolio: To create a dynamic portfolio of properties that is filterable by the user.",
      "Blog implementation: To create a blog section where users can read articles about real estate.",
      "Admin panel integration: To create an admin panel where the admin can manage the UI of the application.",
      "Map integration: To create a map section where users can view the location of the company.",
    ],
    approach: [
      "Mobile-first design: I followed a mobile-first design approach to ensure the website is optimized for mobile devices.",
      "PSD to Code: I converted the provided PSD design files into a fully functional and responsive website using Next.js and Tailwind CSS.",
      "Database integration: I integrated a database (MongoDB) to manage the properties and blog data, allowing for easy updates and modifications. I accessed the database using Prisma ORM.",
      "Component-based development: I adopted a component-based approach to build reusable and modular components for the website with React.",
      "Map integration: I integrated the Mapbox API and Leaflet to create a map section where users can view the location of the company.",
      "Admin panel integration: I created a custom admin panel where the admin can manage the UI of the application. I used NextAuth for authentication and authorization.",
      "Advanced form validation: I implemented advanced form validation using React Hook Form and Zod to ensure data integrity and provide a better user experience.",
    ],
    challenges: [
      "Performance optimization: I optimized the website for speed and ensured it was performant, avoiding unncessary re-rendering and eliminating any parameter that made it less performant.",
      "Database integration: This was my first time using Prisma ORM and I had to learn how to use its syntax to craft complex queries to access the database",
      "Authentication and authorization: I had to implement authentication and authorization to secure the admin panel. I used NextAuth for this purpose.",
      "Role-based access: I had to implement role-based access to restrict access to certain pages and features of the admin panel based on the user's role.",
    ],
    tools: [
      { id: 1, icon: Next, name: "Next.js" },
      { id: 2, icon: Typescript, name: "Typescript" },
      { id: 3, icon: Tailwind, name: "Tailwind" },
      { id: 4, icon: Framer, name: "Framer Motion" },
      { id: 5, icon: Sass, name: "Sass" },
      { id: 6, name: "Prisma" },
      { id: 7, name: "PSD to Code" },
      { id: 8, name: "Mongo DB" },
      { id: 9, name: "Mapbox" },
      { id: 10, name: "UploadThing" },
    ],
    live_preview_url: "https://real-home-one.vercel.app/",
    github_repo_url: "https://github.com/peterxavier01/realHome/",
  },
  {
    id: 3,
    image: Brainy,
    imageList: [Brainy1, Brainy2, Brainy3],
    name: "Brainy",
    category: "AI",
    description:
      "Brainy is an AI application with a modern and minimalistic UI which incorporates the latest AI capabilites to provide tools for image generation, music generation, code generation and even video generation, to say the least.",
    project_requirements: ["Responsive web app layout", "Admin dashboard integration", "Integrate AI for image generation", "Integrate AI for music generation", "Integrate AI for code generation", "Integrate AI for video generation"],
    approach: ["Mobile-first design", "Component-based development", "Integrate OpenAI API for AI capabilities", "Integrate Replicate API for AI capabilities", "Integrate UploadThing for file upload", "Integrate LemonSqueezy for subscription management", "Integrate Clerk for authentication and authorization", "Integrate Prisma for database management"],
    challenges: [
      "Integrating multiple AI capabilities",
      "Handling subscription management: I used LemonSqueezy for the first time in this project, instead of Stripe. Since it is fairly new, there were no much resources available when bugs were encountered.",
      "Handling file upload: This was my first time working with UploadThing, so I had to go through the docs to figure out how to integrate it with Next.js",
      "Handling authentication and authorization"
    ],
    tools: [
      { id: 1, icon: Next, name: "Next.js" },
      { id: 2, icon: Typescript, name: "Typescript" },
      { id: 3, icon: Tailwind, name: "Tailwind" },
      { id: 4, name: "Lemon Squeezy" },
      { id: 5, name: "Prisma" },
      { id: 6, name: "Clerk" },
      { id: 7, name: "Supabase" },
      { id: 8, name: "React Hook Form" },
      { id: 9, name: "Replicate" },
      { id: 10, name: "OpenAI" },
      { id: 11, name: "Zod" },
      { id: 12, name: "Zustand" },
    ],
    live_preview_url: "https://brainwiseai.vercel.app",
    github_repo_url: "https://github.com/peterxavier01/next-ai-saas",
  },
  {
    id: 4,
    image: Portfolio,
    imageList: [Portfolio2, Portfolio3, Portfolio4],
    name: "Portfolio",
    category: "Web",
    description: "This portfolio integrates a clean and minimalistic UI to showcase my frontend development projects.",
    project_requirements: [
      "The website should have a responsive layout", 
      "The website should incorporate subtle animations", 
      "Potential clients should be able to send messages/emails via the contact form", 
      "The website should show a list of my projects",
      "The projects should contain links to the live preview and the respective GitHub repositories."
    ],
    approach: [
      "Mobile-first design", 
      "Component-based development", 
      "Framer Motion Integration for animations", 
      "Resend Integration for contact form", 
    ],
    challenges: [
      "Integrating Resend for contact form: This was a first working with Resend as an email soluion. I integrated Resend on the Node.js server. Resend requires an active domain which I had to purchase, and then set up the necessary SPF, DKIM, and DMARC records to ensure email deliverability.",
    ],
    tools: [
      { id: 1, icon: React, name: "React.js" },
      { id: 4, name: "Tailwind CSS" },
      { id: 2, name: "Shadcn UI" },
      { id: 3, name: "TypeScript" },
      { id: 5, name: "Axios" },
      { id: 6, name: "Zustand" },
      { id: 7, name: "Resend" },
      { id: 8, name: "Express" },
      { id: 9, name: "Figma" },
    ],
    live_preview_url: "https://www.peteruadiale.com",
    github_repo_url: "https://github.com/peterxavier01/peter-uadiale",
  },
  {
    id: 5,
    image: SoundWave,
    imageList: [SoundWave, SoundWave1],
    name: "SoundWave",
    category: "Web App",
    description: "SoundWave is a music player web app that allows users to listen to their favorite songs, create playlists, and search for songs.",
    project_requirements: [
      "Users should be able to view the optimal layout of the app depending on their device.", 
      "Users should be able to create an account to personalize experience.", 
      "Users should be able to search for songs.",
      "Users should be able to add any song to their playlist",
      "User should be able to subscribe to service and manage their subscriptions.",
    ],
    approach: ["Mobile-first design", "Component-based development", "Supabase Integration for managing songs data, authentication and authorization.", "Stripe Integration for subscription management"],
    challenges: [
      "Supabase Integration: It was quite tricky working with Supabase as I had just transitioned from Firebase (NoSql to SQL). The major struggle was dealing with errors that arose from implementing RLS (Row Level Access) to the Supabase tables.", 
      "Stripe Integration: I had to go through the Stripe docs to figure out how to integrate it with Next.js. I also had to figure out how to manage subscriptions and handle webhooks.",
    ],
    tools: [
      { id: 1, icon: Next, name: "Next.js" },
      { id: 2, name: "Supabase" },
      { id: 3, name: "TypeScript" },
      { id: 4, name: "Tailwind CSS" },
      { id: 5, name: "React Hook Form" },
      { id: 7, name: "Stripe" },
      { id: 6, name: "Zustand" },
    ],
    live_preview_url: "https://soundwave-alpha.vercel.app",
    github_repo_url: "https://github.com/peterxavier01/spotify-clone-v1",
  },
];
