import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Code2 } from "lucide-react";
import { projects } from "@/lib/data";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SITE_URL } from "@/lib/site";
import type { Metadata } from "next";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
      robots: { index: false, follow: false },
    };
  }

  const description = project.seoDescription ?? project.description;
  const socialImage = project.ogImage ?? project.image;
  const imageAlt = project.imageAlt ?? `${project.name} screenshot`;

  return {
    title: project.seoTitle ?? project.name,
    description,
    keywords: project.techStack,
    authors: [{ name: "Shirajul Islam Shakur", url: SITE_URL }],
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      type: "website",
      url: `/projects/${project.slug}`,
      title: project.name,
      description,
      images: [{ url: socialImage, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.name,
      description,
      images: [socialImage],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const projectUrl = `${SITE_URL}/projects/${project.slug}`;
  const socialImage = project.ogImage ?? project.image;
  // Reference the homepage Person by @id so the project resolves to the same
  // entity rather than looking like a second, unrelated person.
  const author = {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Shirajul Islam Shakur",
    url: SITE_URL,
  };

  // CreativeWork rather than SoftwareApplication: these are portfolio entries,
  // and software rich results need offers/ratings/reviews we do not have. The
  // live site and the source/listing are `url` and `codeRepository` on the
  // work itself — `sameAs` is for profiles identifying the same entity.
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: project.name,
      ...(project.fullName ? { alternateName: project.fullName } : {}),
      headline: project.seoTitle ?? project.name,
      abstract: project.seoDescription ?? project.description,
      description: project.description,
      url: projectUrl,
      mainEntityOfPage: projectUrl,
      image: socialImage.startsWith("http")
        ? socialImage
        : `${SITE_URL}${socialImage}`,
      author,
      creator: author,
      ...(project.updatedAt ? { dateModified: project.updatedAt } : {}),
      keywords: project.techStack.join(", "),
      ...(project.liveLink ? { sameAs: [project.liveLink] } : {}),
      ...(project.github_client
        ? { codeRepository: project.github_client }
        : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Projects",
          item: `${SITE_URL}/projects`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: project.name,
          item: projectUrl,
        },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto w-full px-4 md:px-8 pt-30 pb-16 space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
          <li>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <ArrowLeft aria-hidden="true" className="size-4" />
              Projects
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-foreground" aria-current="page">
            {project.name}
          </li>
        </ol>
      </nav>

      <header className="space-y-4">
        <div className="space-y-1">
          <h1 className="font-gabarito text-3xl font-semibold">
            {project.name}
          </h1>
          {project.fullName && project.fullName !== project.name && (
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground text-pretty">
              Published as{" "}
              <span className="text-foreground/80">{project.fullName}</span>
            </p>
          )}
        </div>
        <div className="relative aspect-[16/9] overflow-hidden rounded-lg border">
          <Image
            src={project.image}
            alt={project.imageAlt ?? `${project.name} screenshot`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover object-top"
          />
        </div>
      </header>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Overview</h2>
        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </section>

      {project.contributions && project.contributions.length > 0 && (
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">What I Built</h2>
          <ul className="grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
            {project.contributions.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-muted-foreground"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-[#FF6A1C]"
                />
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border px-3 py-1 text-sm text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Links</h2>
        <div className="flex flex-wrap gap-3">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "sm" }), "rounded-full")}
            >
              <ExternalLink />
              {project.liveLinkLabel ?? "Live Demo"}
            </a>
          )}
          {project.github_client && (
            <a
              href={project.github_client}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "rounded-full",
              )}
            >
              <Code2 />
              {project.github_client.includes("github.com")
                ? "GitHub Repository"
                : "View Plugin"}
            </a>
          )}
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Challenges Faced</h2>
        <p className="text-muted-foreground leading-relaxed">
          {project.challenges}
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Future Plans &amp; Improvements</h2>
        <p className="text-muted-foreground leading-relaxed">
          {project.futurePlans}
        </p>
      </section>
    </div>
  );
}
