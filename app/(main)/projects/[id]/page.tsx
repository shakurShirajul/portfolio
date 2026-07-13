import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Code2 } from "lucide-react";
import { projects } from "@/lib/data";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((item) => String(item.id) === id);

  if (!project) {
    return {
      title: "Project Not Found",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: project.name,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.id}`,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => String(p.id) === id);

  if (!project) notFound();

  return (
    <div className="max-w-4xl mx-auto w-full px-4 md:px-8 pt-30 pb-16 space-y-8">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Back
      </Link>

      <header className="space-y-4">
        <h1 className="font-gabarito text-3xl font-semibold">{project.name}</h1>
        <div className="relative aspect-[16/9] overflow-hidden rounded-lg border">
          <Image
            src={project.image}
            alt={project.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
          />
        </div>
      </header>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Overview</h2>
        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </section>

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
              Live Demo
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
              GitHub Repository
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
