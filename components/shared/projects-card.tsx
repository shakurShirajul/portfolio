import { Project } from "@/shared/types";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "../ui/button";

interface ProjectCardProps {
  project: Project;
}
export default function ProjectsCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-lg border bg-card text-card-foreground transition-colors hover:border-foreground/20"
    >
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-gabarito text-lg font-semibold leading-tight">
            {project.name}
          </h3>
          <ArrowUpRight aria-hidden="true" className="size-4 text-[#FF6A1C] shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>
        <div className="mt-auto flex justify-start pt-2">
          <span className={buttonVariants({ size: "sm" })}>
            View Details
            <ArrowUpRight aria-hidden="true" className="size-4 text-[#FF6A1C] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
