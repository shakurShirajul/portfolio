import {
  Education,
  Experience,
  ProfileInfo,
  Project,
  NavLink,
  Social,
} from "@/shared/types";
import { Clock, Code2Icon, Link, Mail, MapPinIcon, Phone, MapPin } from "lucide-react";

export const navLinks: NavLink[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Blogs",
    href: "/blogs",
  },
];

export const experiences: Experience[] = [
  {
    company: "Bitcode",
    designation: "Junior Developer",
    duration: "Aug 2025 - Present",
    logo: "https://res.cloudinary.com/djlqvqxao/image/upload/w_96,h_96,c_fill,f_auto,q_auto:good/v1769829095/bitcode_odqm56.jpg",
    link: "https://bitcode.pro",
  },
  {
    company: "IIUC Computer Club",
    designation: "Assistant Webmaster Secretary",
    duration: "Oct 2024 - July 2025",
    logo: "https://res.cloudinary.com/djlqvqxao/image/upload/w_96,h_96,c_fill,f_auto,q_auto:good/v1769829094/computerClub_ukdfvq.jpg",
    link: "https://www.facebook.com/IIUCComputerClub.Official",
  },
  {
    company: "IIUC",
    designation: "Teaching Assistant",
    duration: "Sept 2024 - July 2025",
    logo: "https://res.cloudinary.com/djlqvqxao/image/upload/w_96,h_96,c_fill,f_auto,q_auto:good/v1769829095/iiuc_tu7fpn.jpg",
    link: "https://www.facebook.com/IIUCComputerClub.Official",
  },
];

export const educations: Education[] = [
  {
    logo: "https://res.cloudinary.com/djlqvqxao/image/upload/w_96,h_96,c_fill,f_auto,q_auto:good/v1769829095/iiuc_tu7fpn.jpg",
    degree: "BSc in CSE",
    institution: "IIUC",
    link: "https://iiuc.ac.bd",
    duration: "June 2021 - July 2025",
  },
];

export const stacks = [
  {
    name: "HTML5",
    logo: "https://res.cloudinary.com/djlqvqxao/image/upload/w_96,h_96,f_auto,q_auto/v1769942448/html_h8p3g3.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS3",
    logo: "https://res.cloudinary.com/djlqvqxao/image/upload/w_96,h_96,f_auto,q_auto/v1769942507/css_d3sdzx.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "Tailwind CSS",
    logo: "https://res.cloudinary.com/djlqvqxao/image/upload/w_96,h_96,f_auto,q_auto/v1769956553/tailwindcss_yiv14g.svg",
    link: "https://tailwindcss.com/",
  },
  {
    name: "JavaScript",
    logo: "https://res.cloudinary.com/djlqvqxao/image/upload/w_96,h_96,f_auto,q_auto/v1769942440/javascript_th1pam.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    logo: "https://res.cloudinary.com/djlqvqxao/image/upload/w_96,h_96,f_auto,q_auto/v1769942442/typescript_bzxwwv.svg",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    logo: "https://res.cloudinary.com/djlqvqxao/image/upload/w_96,h_96,f_auto,q_auto/v1769942538/react_ji5gzq.svg",
    link: "https://react.dev/",
  },
  {
    name: "React Router",
    logo: "https://res.cloudinary.com/djlqvqxao/image/upload/w_96,h_96,f_auto,q_auto/v1769956957/react-router-light_h7zoo8.svg",
    link: "https://reactrouter.com/",
  },
  {
    name: "Tanstack",
    logo: "https://res.cloudinary.com/djlqvqxao/image/upload/w_96,h_96,f_auto,q_auto/v1769956553/tanstack-light_qpe3kr.svg",
    link: "https://tanstack.com/",
  },
  {
    name: "Firebase",
    logo: "https://res.cloudinary.com/djlqvqxao/image/upload/w_96,h_96,f_auto,q_auto/v1769942529/firebase_zdr19w.svg",
    link: "https://firebase.google.com/?utm_source=google&utm_medium=cpc&utm_campaign=Cloud-SS-DR-Firebase-FY26-global-gsem-1713590&utm_content=text-ad&utm_term=KW_firebase&gclsrc=aw.ds&gad_source=1&gad_campaignid=23417478209&gbraid=0AAAAADpUDOj3Gm6nEjUIWPpWZF7HOHcNy&gclid=Cj0KCQiAkPzLBhD4ARIsAGfah8hBV2DoswCr_knUSgO3tgtka8XnJCoidzHQszRqgvEq3FhC5YAbWlkaAjkvEALw_wcB",
  },
  {
    name: "Node JS",
    logo: "https://res.cloudinary.com/djlqvqxao/image/upload/w_96,h_96,f_auto,q_auto/v1769955747/nodejs_odha1o.svg",
    link: "https://nodejs.org/en",
  },
  {
    name: "MongoDB",
    logo: "https://res.cloudinary.com/djlqvqxao/image/upload/w_96,h_96,f_auto,q_auto/v1769942519/mongodb_b7yqw4.svg",
    link: "https://www.mongodb.com/",
  },
  {
    name: "Next JS",
    logo: "https://res.cloudinary.com/djlqvqxao/image/upload/w_96,h_96,f_auto,q_auto/v1769956554/nextjs2-light_ew5iuz.svg",
    link: "https://nextjs.org/",
  },
  {
    name: "Redux",
    logo: "https://res.cloudinary.com/djlqvqxao/image/upload/w_96,h_96,f_auto,q_auto/v1769942539/redux_ca6lpv.svg",
    link: "https://redux.js.org/",
  },
  {
    name: "PHP",
    logo: "https://res.cloudinary.com/djlqvqxao/image/upload/w_96,h_96,c_fill,f_auto,q_auto/v1769942441/php_w5scwz.png",
    link: "https://www.php.net/",
  },
  {
    name: "MySQL",
    logo: "https://res.cloudinary.com/djlqvqxao/image/upload/w_96,h_96,f_auto,q_auto/v1769942523/mysql_auersw.svg",
    link: "https://www.mysql.com/",
  },
  {
    name: "Laravel",
    logo: "https://res.cloudinary.com/djlqvqxao/image/upload/w_96,h_96,f_auto,q_auto/v1769956554/laravel_bcorae.svg",
    link: "https://laravel.com/",
  },
  {
    name: "C",
    logo: "https://res.cloudinary.com/djlqvqxao/image/upload/w_96,h_96,f_auto,q_auto/v1769942440/c_qal7cp.svg",
    link: "https://devdocs.io/c/",
  },
  {
    name: "C++",
    logo: "https://res.cloudinary.com/djlqvqxao/image/upload/w_96,h_96,f_auto,q_auto/v1769942440/c_x4y2jn.svg",
    link: "https://isocpp.org/",
  },
  {
    name: "Wordpress",
    logo: "https://res.cloudinary.com/djlqvqxao/image/upload/w_96,h_96,f_auto,q_auto/v1769942714/wordpress_nncof0.svg",
    link: "https://wordpress.com/",
  },
  {
    name: "Docker",
    logo: "https://res.cloudinary.com/djlqvqxao/image/upload/w_96,h_96,f_auto,q_auto/v1769956553/docker_j0dxnh.svg",
    link: "https://www.docker.com/",
  },
  {
    name: "Git",
    logo: "https://res.cloudinary.com/djlqvqxao/image/upload/w_96,h_96,f_auto,q_auto/v1769957120/git_dfaidv.svg",
    link: "https://git-scm.com/",
  },
];

export const profileInfo: ProfileInfo[] = [
  {
    title: "FullStack Developer",
    icon: Code2Icon,
  },
  {
    title: "Chattogram, Bangladesh",
    icon: MapPinIcon,
  },
  {
    title: "+88 0174749-3837",
    icon: Phone,
  },
  {
    title: "shakurshirajul.com",
    icon: Link,
  },
  {
    title: "01:16 PM",
    icon: Clock,
  },
  {
    title: "shiirajullisllam@gmail.com",
    icon: Mail,
  },
];

export const projects: Project[] = [
  {
    id: 1,
    image: "https://placehold.co/600x400.png",
    name: "Urban Dwell",
    description:
      "UrbanDwell is a Building Management System (BMS) web application designed to simplify apartment management processes. It provides a seamless experience for users to explore apartments, manage agreements, and handle payments effectively.",
    liveLink: "https://urbandwell.vercel.app",
    github_client: "https://github.com/shakurShirajul/urban-dwell-client",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    challenges:
      "Handling role-based access for admins, members, and unauthorized users while keeping the UI intuitive was complex. Synchronizing agreement and payment states so they never drift out of sync required careful state management, and optimizing MongoDB queries to keep apartment listings fast as data grew took several iterations.",
    futurePlans:
      "Add an automated rent reminder via email/SMS, introduce an admin analytics dashboard for occupancy and revenue, and refactor the frontend to Next.js for better SEO and SSR performance.",
  },
  {
    id: 2,
    image: "https://placehold.co/600x400.png",
    name: "DevNotes",
    description:
      "DevNotes is a markdown-first note-taking app built for developers. It supports syntax-highlighted code blocks, tag-based organization, full-text search, and a distraction-free writing mode with live preview.",
    liveLink: "https://devnotes.vercel.app",
    github_client: "https://github.com/shakurShirajul/devnotes-client",
    techStack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    challenges:
      "Building a reliable full-text search that handled code snippets without breaking on special characters was tricky. Caching markdown parses while keeping the preview in sync with the editor required a careful memoization strategy, and designing a tag system that scaled without duplicate or orphan tags took more iteration than expected.",
    futurePlans:
      "Add real-time collaborative editing via WebSockets, introduce per-note version history, and ship a browser extension for clipping code snippets from any page.",
  },
  {
    id: 3,
    image: "https://placehold.co/600x400.png",
    name: "ShopSphere",
    description:
      "ShopSphere is a full-featured e-commerce platform with product catalog, cart, Stripe checkout, order tracking, and an admin dashboard for inventory and sales analytics.",
    liveLink: "https://shopsphere.vercel.app",
    github_client: "https://github.com/shakurShirajul/shopsphere-client",
    techStack: ["React", "Redux", "Node.js", "Express.js", "MongoDB", "Stripe"],
    challenges:
      "Keeping the cart state consistent across tabs and after page reloads needed localStorage hydration with Redux. Stripe webhook handling for asynchronous payment events had to be idempotent to avoid double-processing, and image-heavy product pages required lazy loading and responsive images to keep the LCP under control.",
    futurePlans:
      "Implement a product recommendation engine based on browsing history, add wishlist sharing, and migrate the admin dashboard to server components for faster initial load.",
  },
];

export const socials: Social[] = [
  {
    name: "GitHub",
    link: "https://www.github.com/shakurShirajul",
    logo: "https://res.cloudinary.com/djlqvqxao/image/upload/w_80,h_80,f_auto,q_auto/v1769958489/github_vyjfmj.svg",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shakur-shirajul",
    logo: "https://res.cloudinary.com/djlqvqxao/image/upload/w_80,h_80,f_auto,q_auto/v1769958489/linkedin_ncqadd.svg",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/shakurShirajul",
    logo: "https://res.cloudinary.com/djlqvqxao/image/upload/w_80,h_80,f_auto,q_auto/v1769958489/facebook_knphdk.svg",
  },
];

export const contactDetails = [
  { label: "Chattogram, Bangladesh", icon: MapPin },
  { label: "+88 0174749-3837", icon: Phone, href: "tel:+8801747493837" },
  {
    label: "shiirajullisllam@gmail.com",
    icon: Mail,
    href: "mailto:shiirajullisllam@gmail.com",
  },
];