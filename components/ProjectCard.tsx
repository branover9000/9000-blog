import type { Project } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="mt-10">
      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={500}
        className="w-100 h-auto"
        loading="eager"
      />
      <h2 className="font-cabazon text-3xl mt-4">
        <Link href={project.link} className="hover:underline">
          {project.title}
        </Link>
      </h2>
      <p className="mt-2">{project.description}</p>
      <div className="mt-3">
        {project.technologies.map((technology) => (
            <span key={technology} className="mr-3 text-sm">
                {technology}
            </span>
        ))}
      </div>
    </article>
  );
}
