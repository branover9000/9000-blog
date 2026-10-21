import PageHeading from "@/components/PageHeading";

const skills = ["JavaScript", "React", "Next.js", "Node.js", "Tailwind CSS", "C++"];
const tools = ["Blender", "ZBrush", "Unreal Engine", "Character Creator", "Marvelous Designer"];

export const metadata = {
  title: "About Me",
  description: "Learn more about my background, interests, and the creative work I enjoy building.",
};

export default function About() {
  return (
    <section className="site-width py-10 md:py-14">
      <header className="grid grid-cols-1 gap-6 border-b border-border/35 py-5 md:grid-cols-12 md:gap-8 md:pb-10">
        <div className="md:col-span-5">
          <p className="eyebrow mb-4 text-accent">About / Brandon Marshall</p>
          <PageHeading>A creative practice in progress.</PageHeading>
        </div>
        <p className="max-w-3xl text-xl leading-relaxed md:col-span-7 md:pt-2 md:text-2xl">
          I work where visual experimentation, programming, and play meet—learning through projects that make each discipline inform the next.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <section className="border-b border-border/35 py-7 md:border-r md:pr-8 md:py-9">
          <p className="eyebrow text-accent">01 / Building for the web</p>
          <h2 className="mt-3 font-display text-5xl leading-[0.9]">Development</h2>
          <p className="mt-3 text-lg leading-relaxed">Tools I return to while learning and building:</p>
          <ul className="mt-4 grid grid-cols-1 gap-x-6 text-base leading-relaxed md:grid-cols-2">
            {skills.map((skill) => <li key={skill} className="border-t border-border/30 py-2">{skill}</li>)}
          </ul>
        </section>
        <section className="border-b border-border/35 py-7 md:pl-8 md:py-9">
          <p className="eyebrow text-accent">02 / Interactive worlds</p>
          <h2 className="mt-3 font-display text-5xl leading-[0.9]">Game Development</h2>
          <p className="mt-3 text-lg leading-relaxed">
            I&apos;m exploring 3D games and interactive work with Unreal Engine, where systems and atmosphere have room to speak to one another.
          </p>
          <p className="mt-3 text-lg leading-relaxed">
            Current experiments move between gameplay systems, environments, characters, and the small details that give a game its texture.
          </p>
        </section>
        <section className="border-b border-border/35 py-7 md:border-r md:pr-8 md:py-9">
          <p className="eyebrow text-accent">03 / Form &amp; texture</p>
          <h2 className="mt-3 font-display text-5xl leading-[0.9]">3D Art</h2>
          <p className="mt-3 text-lg leading-relaxed">I also make 3D characters and assets with tools including:</p>
          <ul className="mt-4 grid grid-cols-1 gap-x-6 text-base leading-relaxed md:grid-cols-2">
            {tools.map((tool) => <li key={tool} className="border-t border-border/30 py-2">{tool}</li>)}
          </ul>
        </section>
        <section className="border-b border-border/35 py-7 md:pl-8 md:py-9">
          <p className="eyebrow text-accent">04 / Always in progress</p>
          <h2 className="mt-3 font-display text-5xl leading-[0.9]">What I&apos;m Working On</h2>
          <p className="mt-3 text-lg leading-relaxed">
            The work is deliberately unfinished: new projects make room for unfamiliar tools, techniques, and better questions.
          </p>
          <p className="mt-3 text-lg leading-relaxed">
            The repository is an evolving cross-section of web work, game development, and 3D art.
          </p>
        </section>
      </div>
    </section>
  );
}
