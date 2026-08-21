import { projects } from "@/lib/projects";
import PageHeading from "@/components/PageHeading";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Portfolio",
  description: "View selected projects and creative work spanning development, design, and 3D art.",
};

export default function Portfolio() {
  return (
    <section className="mx-auto w-full max-w-6xl px-12 py-20 max-md:px-6 max-md:py-12">
      <header className="flex items-end justify-between border-b-2 border-border pb-8 max-md:flex-col max-md:items-start max-md:gap-4">
        <PageHeading>Portfolio</PageHeading>
        <p className="max-w-sm text-right text-sm leading-relaxed max-md:max-w-full max-md:text-left max-md:text-xs">A growing collection of development, design, and 3D work.</p>
      </header>
      <div className="mt-10 grid grid-cols-2 gap-8 max-md:grid-cols-1 max-md:gap-4">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
}
