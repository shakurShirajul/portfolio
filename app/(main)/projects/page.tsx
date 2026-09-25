import type { Metadata } from "next";
import ProjectsCard from "@/components/shared/projects-card";
import { projects } from "@/lib/data";
import { SITE_URL } from "@/lib/site";
import { Project } from "@/shared/types";

const title = "Projects";
const description =
  "Full-stack projects by Shirajul Islam Shakur — WordPress plugins, CRM and dashboard interfaces, and web applications built with React, Next.js, TypeScript, Node.js, and Laravel.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    type: "website",
    url: "/projects",
    title,
    description,
    // Declaring openGraph replaces the root block wholesale, so the shared
    // card has to be named explicitly or this page ships with no image.
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
};

export default function ProjectsPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Projects",
      description,
      url: `${SITE_URL}/projects`,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: project.name,
          url: `${SITE_URL}/projects/${project.slug}`,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Projects",
          item: `${SITE_URL}/projects`,
        },
      ],
    },
  ];

  return (
    <div className="mx-auto w-full max-w-4xl px-4 pb-16 pt-32 md:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <header className="max-w-2xl space-y-3">
        <h1 className="font-gabarito text-4xl font-semibold tracking-tight">
          Projects
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          Software I have designed, built, and shipped — from a WordPress CRM
          plugin used by real businesses to web applications built with React,
          Next.js, and TypeScript. Each project breaks down what I built, the
          problems I ran into, and where it goes next.
        </p>
      </header>

      <section aria-labelledby="all-projects" className="mt-10">
        <h2 id="all-projects" className="sr-only">
          All projects
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project: Project, index: number) => (
            <ProjectsCard
              key={project.id}
              project={project}
              isLcpCandidate={index === 0}
              sizes="(max-width: 639px) calc(100vw - 34px), (max-width: 767px) calc(50vw - 28px), (max-width: 895px) calc(50vw - 44px), (max-width: 1023px) 404px, 262px"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
