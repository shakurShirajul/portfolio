import { socials } from "@/lib/data";
import { SITE_URL } from "@/lib/site";

export const PERSON_NAME = "Shirajul Islam Shakur";

/**
 * Person entity for the site. `sameAs` ties the profiles together so search
 * engines resolve the name to one person rather than several — which is what
 * makes a name search reliably surface this site.
 *
 * `@id` is a stable identifier other schema on the site can reference.
 */
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: PERSON_NAME,
  alternateName: "Shakur",
  url: SITE_URL,
  image: `${SITE_URL}/shakur.png`,
  jobTitle: "Full-Stack Developer",
  description:
    "Full-stack developer in Chattogram, Bangladesh, building production web applications and WordPress plugins with React, Next.js, TypeScript, Node.js, and Laravel.",
  email: "mailto:shiirajullisllam@gmail.com",
  worksFor: {
    "@type": "Organization",
    name: "Bit Code",
    url: "https://bitcode.pro",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "International Islamic University Chittagong",
    url: "https://iiuc.ac.bd",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chattogram",
    addressCountry: "BD",
  },
  knowsAbout: [
    "Full-Stack Web Development",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Laravel",
    "WordPress Plugin Development",
  ],
  // Add a wordpress.org profile URL here once one exists — it is the profile
  // most relevant to the plugin work. Only add URLs that resolve: a broken
  // sameAs weakens the entity claim instead of strengthening it.
  sameAs: socials.map((social) => social.link),
};
