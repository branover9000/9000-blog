import PageHeading from "@/components/PageHeading";

const skills = ["JavaScript", "React", "Next.js", "Node.js", "Tailwind CSS", "C++"];
const tools = ["Blender", "ZBrush", "Unreal Engine", "Character Creator", "Marvelous Designer"];

export const metadata = {
  title: "About Me",
  description: "Learn more about my background, interests, and the creative work I enjoy building.",
};

export default function About() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <header className="grid grid-cols-12 border-b border-border pb-12">
        <div className="col-span-12 lg:col-span-7">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">About / 9000</p>
          <PageHeading className="mt-6">A creative practice in progress.</PageHeading>
        </div>
        <p className="col-span-12 mt-10 max-w-xl self-end text-2xl leading-relaxed lg:col-span-4 lg:col-start-9 lg:mt-0">
          I&apos;m a developer, 3D artist/designer, and game development enthusiast who enjoys learning by building things.
        </p>
      </header>
      <div className="grid grid-cols-12">
        <section className="col-span-12 border-b border-border py-10 lg:col-span-6 lg:border-r lg:pr-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">01 / Development</p>
          <h2 className="mt-4 font-display text-6xl leading-[0.82]">Code as a material.</h2>
          <p className="mt-6 max-w-xl text-xl leading-relaxed">Currently learning and working with:</p>
          <ul className="mt-7 grid grid-cols-2 border-l border-t border-border text-lg sm:grid-cols-3">
            {skills.map((skill) => <li key={skill} className="border-b border-r border-border px-4 py-3">{skill}</li>)}
          </ul>
        </section>
        <section className="col-span-12 border-b border-border py-10 lg:col-span-6 lg:pl-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">02 / Game development</p>
          <h2 className="mt-4 font-display text-6xl leading-[0.82]">Worlds to explore.</h2>
          <p className="mt-6 max-w-xl text-xl leading-relaxed">I&apos;m interested in building 3D games and interactive experiences with Unreal Engine.</p>
          <p className="mt-5 max-w-xl text-xl leading-relaxed">I enjoy experimenting with gameplay systems, environments, characters, and different game ideas.</p>
        </section>
        <section className="col-span-12 border-b border-border py-10 lg:col-span-6 lg:border-r lg:pr-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">03 / 3D art</p>
          <h2 className="mt-4 font-display text-6xl leading-[0.82]">Form &amp; character.</h2>
          <p className="mt-6 max-w-xl text-xl leading-relaxed">I also create 3D characters and assets, using tools such as:</p>
          <ul className="mt-7 grid grid-cols-2 border-l border-t border-border text-lg">
            {tools.map((tool) => <li key={tool} className="border-b border-r border-border px-4 py-3">{tool}</li>)}
          </ul>
        </section>
        <section className="col-span-12 border-b border-border py-10 lg:col-span-6 lg:pl-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">04 / Right now</p>
          <h2 className="mt-4 font-display text-6xl leading-[0.82]">Keep making.</h2>
          <p className="mt-6 max-w-xl text-xl leading-relaxed">I&apos;m constantly experimenting with new projects and learning new technologies along the way.</p>
          <p className="mt-5 max-w-xl text-xl leading-relaxed">Most of my repositories are a mix of web development, game development, and 3D art.</p>
        </section>
      </div>
    </section>
  );
}
