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
  image: string;
  name: string;
  description: string;
  liveLink: string;
  github_client: string;
  techStack: string[];
  challenges: string;
  futurePlans: string;
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