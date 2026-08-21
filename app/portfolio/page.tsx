import { projects } from "@/lib/projects";
import PageHeading from "@/components/PageHeading";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Portfolio",
  description: "View selected projects and creative work spanning development, design, and 3D art.",
};

export default function Portfolio() {
  const artProjects = projects.filter((project) => project.category === "art");
  const designProjects = projects.filter((project) => project.category === "design");
  const webDevelopmentProjects = projects.filter((project) => project.category === "web-development");
  const gameDevelopmentProjects = projects.filter((project) => project.category === "game-development");

  return (
    <section className="mx-auto w-full max-w-6xl px-12 py-20 max-md:px-6 max-md:py-12">
      <header className="flex items-end justify-between border-b-2 border-border pb-8 max-md:flex-col max-md:items-start max-md:gap-4">
        <PageHeading>Portfolio</PageHeading>
        <p className="max-w-sm text-right text-sm leading-relaxed max-md:max-w-full max-md:text-left max-md:text-xs">A growing collection of development, design, and 3D work.</p>
      </header>
      <div className="mt-12 grid grid-cols-2 gap-x-12 gap-y-16 max-md:grid-cols-1 max-md:gap-y-12">
        <section>
          <h2 className="border-b-2 border-accent pb-3 font-display text-5xl leading-none max-md:text-3xl">Art</h2>
          <div className="mt-8 space-y-8 max-md:space-y-4">
            {artProjects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="border-b-2 border-accent pb-3 font-display text-5xl leading-none max-md:text-3xl">Design</h2>
          <div className="mt-8 space-y-8 max-md:space-y-4">
            {designProjects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="border-b-2 border-accent pb-3 font-display text-5xl leading-none max-md:text-3xl">Web Development</h2>
          <div className="mt-8 space-y-8 max-md:space-y-4">
            {webDevelopmentProjects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="border-b-2 border-accent pb-3 font-display text-5xl leading-none max-md:text-3xl">Game Development</h2>
          <div className="mt-8 space-y-8 max-md:space-y-4">
            {gameDevelopmentProjects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
