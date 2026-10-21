import PageHeading from "@/components/PageHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Portfolio",
  description: "View selected projects and creative work spanning development, design, and 3D art.",
};

const categories = [
  { key: "art", label: "Art" },
  { key: "design", label: "Design" },
  { key: "web-development", label: "Web Development" },
  { key: "game-development", label: "Game Development" },
] as const;

export default function Portfolio() {
  return (
    <section className="site-width py-10 md:py-14">
      <header className="grid grid-cols-1 gap-6 border-b border-border/35 py-5 md:grid-cols-12 md:items-end md:gap-8 md:pb-10">
        <div className="md:col-span-7">
          <p className="eyebrow mb-4 text-accent">Work / Selected projects</p>
          <PageHeading>Portfolio</PageHeading>
        </div>
        <p className="max-w-lg text-xl leading-relaxed md:col-span-5 md:justify-self-end">
          A growing collection of development, design, and 3D work.
        </p>
      </header>
      <div className="space-y-12 py-8 md:space-y-16 md:py-10">
        {categories.map(({ key, label }, index) => {
          const categoryProjects = projects.filter((project) => project.category === key);

          return (
            <section key={key} className="grid grid-cols-1 gap-y-5 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-3">
                <p className="eyebrow text-accent">0{index + 1} / Archive</p>
                <h2 className="mt-2 font-display text-5xl leading-[0.88]">{label}</h2>
              </div>
              <div className="md:col-span-9">
                {categoryProjects.length > 0 ? (
                  <div className="divide-y divide-border/30 border-t border-border/30">
                    {categoryProjects.map((project, projectIndex) => (
                      <ProjectCard project={project} featured={projectIndex === 0} key={project.id} />
                    ))}
                  </div>
                ) : (
                  <p className="border-y border-border/30 py-6 text-lg italic text-muted">Work in progress.</p>
                )}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
