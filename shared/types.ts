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

export interface Project {
  id: number
  /** URL segment for /projects/[slug]. Stable: never change a published slug. */
  slug: string;
  image: string;
  /** Alt text for `image`. Describe what the screenshot shows, not just the name. */
  imageAlt?: string;
  /** Short display name. Used for headings, cards, and breadcrumbs. */
  name: string;
  /**
   * The name as published elsewhere (a marketplace or directory listing title),
   * when it differs from `name`. Feeds schema `alternateName` and renders once
   * under the h1, so the published form is matchable. Deliberately kept out of
   * the page title, headings, and breadcrumbs: listing titles are keyword-packed
   * for that directory's search and read as stuffing anywhere else.
   */
  fullName?: string;
  /** One-line positioning used on the /projects index. Falls back to seoDescription. */
  tagline?: string;
  description: string;
  /**
   * Page <title>, kept under ~60 chars. `name` alone rarely matches a search;
   * lead with what the project is. Falls back to `name`.
   */
  seoTitle?: string;
  /** Meta description, kept under ~160 chars. Falls back to description. */
  seoDescription?: string;
  /** ISO date of the last substantive change. Feeds sitemap lastModified. */
  updatedAt?: string;
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