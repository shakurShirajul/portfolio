import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectsCard from "@/components/shared/projects-card";
import { projects } from "@/lib/data";
import { Project } from "@/shared/types";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="max-w-4xl mx-auto w-full mt-10 scroll-mt-24 px-4 md:px-8 space-y-4"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h2
          id="projects-heading"
          className="font-gabarito text-2xl font-semibold"
        >
          Projects
        </h2>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          View all
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {projects.map((project: Project) => (
          <ProjectsCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
