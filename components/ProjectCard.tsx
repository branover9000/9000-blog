import type { Project } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden border-2 border-black bg-[#fffdf7] transition-colors hover:border-red-800">
      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={500}
        className="h-64 w-full border-b-2 border-black object-cover transition-transform duration-500 group-hover:scale-105 max-md:h-48"
        loading="eager"
      />
      <div className="p-6">
        <h2 className="font-cabazon text-4xl leading-none max-md:text-2xl">
          <Link href={project.link} className="transition-colors hover:text-red-800">
            {project.title}
          </Link>
        </h2>
        <p className="mt-4 leading-relaxed">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2 border-t border-black pt-4">
          {project.technologies.map((technology) => (
            <span key={technology} className="border border-red-800 px-2 py-1 text-xs text-red-800">
                {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
