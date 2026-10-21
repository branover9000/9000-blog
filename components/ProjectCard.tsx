import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

const categoryLabels: Record<Project["category"], string> = {
  art: "Art",
  design: "Design",
  "web-development": "Web Development",
  "game-development": "Game Development",
};

export default function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <article
      className={`group grid grid-cols-1 py-5 md:gap-7 ${
        featured ? "md:grid-cols-[1.15fr_0.85fr] md:items-center" : "md:grid-cols-[0.65fr_1.35fr] md:items-center"
      }`}
    >
      <Image
        src={project.image}
        alt={`${project.title} project preview`}
        width={800}
        height={500}
        className={`w-full border border-border/15 object-cover shadow-soft transition-shadow group-hover:shadow-md ${
          featured ? "aspect-[16/10]" : "aspect-[16/9]"
        }`}
        loading={featured ? "eager" : "lazy"}
      />
      <div className="pt-5 md:py-2">
        <p className="eyebrow text-accent">{categoryLabels[project.category]}</p>
        <h2 className={`mt-2 font-display leading-[0.92] ${featured ? "text-5xl max-md:text-4xl" : "text-4xl max-md:text-3xl"}`}>
          <Link href={project.link} className="transition-colors group-hover:text-accent">
            {project.title}
          </Link>
        </h2>
        <p className="mt-3 text-lg leading-relaxed">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
          {project.technologies.map((technology) => (
            <span key={technology} className="text-sm font-semibold text-accent">
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
