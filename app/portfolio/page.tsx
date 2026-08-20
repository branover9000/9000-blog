import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Portfolio",
  description: "View selected projects and creative work spanning development, design, and 3D art.",
};

export default function Portfolio() {
  return (
    <section className="max-w-3xl mx-auto px-8 py-16">
      <h1 className="font-cabazon text-5xl text-red-800">Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
}
