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
    <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <header className="grid grid-cols-12 border-b border-border pb-12">
        <div className="col-span-12 lg:col-span-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Selected work / archive</p>
          <PageHeading className="mt-6">Portfolio</PageHeading>
        </div>
        <p className="col-span-12 mt-8 max-w-sm self-end text-xl leading-relaxed lg:col-span-3 lg:col-start-10 lg:mt-0">A growing collection of development, design, and 3D work.</p>
      </header>
      <div className="mt-16 space-y-20 lg:mt-24">
        {categories.map(({ key, label }, index) => {
          const categoryProjects = projects.filter((project) => project.category === key);
          return (
            <section key={key} className="grid grid-cols-12 gap-y-8 lg:gap-x-12">
              <div className="col-span-12 lg:col-span-3">
                <p className="text-sm font-semibold text-accent">0{index + 1}</p>
                <h2 className="mt-2 font-display text-6xl leading-[0.82]">{label}</h2>
              </div>
              <div className="col-span-12 lg:col-span-9">
                {categoryProjects.length > 0 ? (
                  <div className="grid gap-7 sm:grid-cols-2">{categoryProjects.map((project) => <ProjectCard project={project} key={project.id} />)}</div>
                ) : (
                  <p className="border-y border-border py-8 text-xl italic text-muted">Work in progress.</p>
                )}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
