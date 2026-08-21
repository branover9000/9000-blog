import type { Project } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden border-2 border-border bg-surface transition-colors hover:border-accent">
      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={500}
        className="h-64 w-full border-b-2 border-border object-cover transition-transform duration-500 group-hover:scale-105 max-md:h-48"
        loading="eager"
      />
      <div className="p-6">
        <h2 className="font-display text-4xl leading-none max-md:text-2xl">
          <Link href={project.link} className="transition-colors hover:text-accent">
            {project.title}
          </Link>
        </h2>
        <p className="mt-4 leading-relaxed">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-4">
          {project.technologies.map((technology) => (
            <span key={technology} className="border border-accent px-2 py-1 text-xs text-accent">
                {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
