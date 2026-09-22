import { LucideIcon } from "lucide-react";

export interface Experience {
  company: string;
  designation: string;
  duration: string;
  logo: string;
  link: string;
}

export interface Education {
  logo: string;
  degree: string;
  institution: string;
  link: string;
  duration: string;
}

export interface ProfileInfo {
  title: string;
  icon: LucideIcon;
}

export interface Project {
  id: number
  /** URL segment for /projects/[slug]. Stable: never change a published slug. */
  slug: string;
  image: string;
  name: string;
  description: string;
  /** Meta description, kept under ~160 chars. Falls back to description. */
  seoDescription?: string;
  /** 1200x630 social card. Needed when `image` is not close to 1.91:1. */
  ogImage?: string;
  liveLink: string;
  /** Label for the liveLink button. Defaults to "Live Demo" when omitted. */
  liveLinkLabel?: string;
  github_client: string;
  techStack: string[];
  /** What I personally built. Renders as a bulleted section on the detail page. */
  contributions?: string[];
  challenges: string;
  futurePlans: string;
  /** Full-page screenshot: the card scrolls it on hover instead of cropping. */
  isLongScreenshot?: boolean;
}

export interface NavLink {
    name: string
    href: string
}

export interface Social{
    name: string
    link: string
    logo: string
}