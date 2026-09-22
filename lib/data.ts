import {
  Education,
  Experience,
  Project,
  NavLink,
  Social,
} from "@/shared/types";
import { Mail, Phone, MapPin } from "lucide-react";

export const navLinks: NavLink[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
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
    link: "https://firebase.google.com/",
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

export const projects: Project[] = [
  {
    id: 1,
    slug: "bit-crm",
    image: "/bit-crm-landing-page.webp",
    imageAlt:
      "Bit CRM landing page showing the sales pipeline, deals, and invoicing modules that run inside the WordPress admin",
    ogImage: "/bit-crm-og.webp",
    isLongScreenshot: true,
    name: "Bit CRM",
    fullName:
      "Bit CRM: Sales CRM Manage Lead, Contact, Deal, Invoice, Client Portal & Collect Payment",
    tagline:
      "A full sales pipeline — leads, deals, invoices, and automation — running inside the WordPress admin.",
    seoTitle: "Bit CRM — Sales & Marketing Automation for WordPress",
    updatedAt: "2026-09-22",
    description:
      "Bit CRM is a WordPress plugin that runs an entire sales pipeline inside the WordPress admin — leads, contacts, deals, invoices, and client management, with a visual workflow builder for automation and native WooCommerce sync. It ships an MCP server and a built-in AI assistant, so the CRM can be driven directly from tools like Claude and ChatGPT.",
    seoDescription:
      "A WordPress CRM plugin with leads, deals, invoices, a visual workflow builder, WooCommerce sync, an MCP server, and a built-in AI assistant.",
    liveLink: "https://bit-crm.com",
    liveLinkLabel: "Visit Website",
    github_client:
      "https://wordpress.org/plugins/bit-crm-sales-marketing-automation/",
    techStack: [
      "React",
      "TypeScript",
      "WordPress",
      "Tailwind CSS",
      "Zustand",
      "TanStack Query",
      "Ant Design",
    ],
    contributions: [
      "Plugin dashboard",
      "Client portal",
      "Invoice module",
      "Calendar view",
      "Activities — tasks, meetings, and calls",
      "Onboarding flow",
      "General settings",
      "Part of the visual workflow builder",
      "Part of the MCP server and AI assistant",
      "Integration with Bit Form, Bit Flows, and Bit Integrations",
    ],
    challenges:
      "Building a React application inside the WordPress admin meant working around a host environment we do not control — global styles, enqueued scripts, and an admin shell that expects to own the page. Integrating with Bit Form, Bit Flows, and Bit Integrations meant matching conventions set by plugins that were already shipping, so the CRM had to fit their data flow rather than impose its own. Across the dashboard, calendar, and activity views, keeping server state in TanStack Query separate from local UI state in Zustand was what kept the interface predictable as the module count grew.",
    futurePlans:
      "Bit CRM is actively maintained, and we ship improvements regularly based on what users tell us they need. Every release is shaped by real feedback from the people running their business on it — and there is still plenty we want to build.",
  },
  // Placeholder projects, hidden until replaced with real work.
  // Uncomment to restore; their redirects in next.config.ts still point here.
  // {
  //   id: 2,
  //   slug: "urban-dwell",
  //   seoDescription:
  //     "A building management system for apartment listings, rental agreements, and payments, built with React, Node.js, and MongoDB.",
  //   image: "https://placehold.co/600x400.png",
  //   name: "Urban Dwell",
  //   description:
  //     "UrbanDwell is a Building Management System (BMS) web application designed to simplify apartment management processes. It provides a seamless experience for users to explore apartments, manage agreements, and handle payments effectively.",
  //   liveLink: "https://urbandwell.vercel.app",
  //   github_client: "https://github.com/shakurShirajul/urban-dwell-client",
  //   techStack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
  //   challenges:
  //     "Handling role-based access for admins, members, and unauthorized users while keeping the UI intuitive was complex. Synchronizing agreement and payment states so they never drift out of sync required careful state management, and optimizing MongoDB queries to keep apartment listings fast as data grew took several iterations.",
  //   futurePlans:
  //     "Add an automated rent reminder via email/SMS, introduce an admin analytics dashboard for occupancy and revenue, and refactor the frontend to Next.js for better SEO and SSR performance.",
  // },
  // {
  //   id: 3,
  //   slug: "devnotes",
  //   seoDescription:
  //     "A markdown-first note-taking app for developers with syntax-highlighted code blocks, tag organization, and full-text search.",
  //   image: "https://placehold.co/600x400.png",
  //   name: "DevNotes",
  //   description:
  //     "DevNotes is a markdown-first note-taking app built for developers. It supports syntax-highlighted code blocks, tag-based organization, full-text search, and a distraction-free writing mode with live preview.",
  //   liveLink: "https://devnotes.vercel.app",
  //   github_client: "https://github.com/shakurShirajul/devnotes-client",
  //   techStack: [
  //     "Next.js",
  //     "TypeScript",
  //     "Prisma",
  //     "PostgreSQL",
  //     "Tailwind CSS",
  //   ],
  //   challenges:
  //     "Building a reliable full-text search that handled code snippets without breaking on special characters was tricky. Caching markdown parses while keeping the preview in sync with the editor required a careful memoization strategy, and designing a tag system that scaled without duplicate or orphan tags took more iteration than expected.",
  //   futurePlans:
  //     "Add real-time collaborative editing via WebSockets, introduce per-note version history, and ship a browser extension for clipping code snippets from any page.",
  // },
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