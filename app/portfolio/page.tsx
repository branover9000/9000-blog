import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Portfolio() {
  return (
    <section className="max-w-3xl mx-auto px-8 py-16">
      {projects.map((project) => (
        <ProjectCard project={project} key={project.id}/>
      ))}
      <h1 className="font-cabazon text-5xl text-red-800">Portfolio</h1>
    </section>
  );
}
