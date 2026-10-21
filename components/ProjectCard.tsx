import type { Project } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden border border-border bg-surface transition-colors hover:border-accent">
      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={500}
        className="h-72 w-full border-b border-border object-cover transition-transform duration-500 group-hover:scale-[1.03] max-md:h-52"
        loading="eager"
      />
      <div className="p-6 sm:p-8">
        <h2 className="font-display text-5xl leading-[0.9] max-md:text-4xl">
          <Link href={project.link} className="transition-colors hover:text-accent">
            {project.title}
          </Link>
        </h2>
        <p className="mt-5 text-xl leading-relaxed">{project.description}</p>
        <div className="mt-7 flex flex-wrap gap-2 border-t border-border pt-5">
          {project.technologies.map((technology) => (
            <span key={technology} className="border border-accent px-2.5 py-1 text-sm text-accent">
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
