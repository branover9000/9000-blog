import PageHeading from "@/components/PageHeading";

export const metadata = {
  title: "About Me",
  description:
    "Learn more about my background, interests, and the creative work I enjoy building.",
};

export default function About() {
  return (
    <section className="mx-auto w-full max-w-5xl px-12 py-20 max-md:px-6 max-md:py-12">
      <header>
        <PageHeading>About Me</PageHeading>
        <p className="mt-6 max-w-3xl text-xl leading-relaxed max-md:text-base">
        I&apos;m a developer, 3D artist/designer, and game development
        enthusiast who enjoys learning by building things.
      </p>
      </header>
      <div className="grid grid-cols-2 gap-x-16 gap-y-12 pt-12 max-md:grid-cols-1 max-md:gap-x-4 max-md:gap-y-6">
        <section className="border-t-2 border-red-800 pt-5">
          <h2 className="font-cabazon text-4xl leading-none max-md:text-2xl">Development</h2>
          <p className="mt-4 leading-relaxed">Currently learning and working with:</p>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 text-sm leading-relaxed max-md:grid-cols-1 max-md:gap-x-3 max-md:gap-y-1 max-md:text-xs">
            <li className="border border-black px-3 py-1">JavaScript</li>
            <li className="border border-black px-3 py-1">React</li>
            <li className="border border-black px-3 py-1">Next.js</li>
            <li className="border border-black px-3 py-1">Node.js</li>
            <li className="border border-black px-3 py-1">Tailwind CSS</li>
            <li className="border border-black px-3 py-1">C++</li>
          </ul>
        </section>
        <section className="border-t-2 border-red-800 pt-5">
          <h2 className="font-cabazon text-4xl leading-none max-md:text-2xl">Game Development</h2>
          <p className="mt-4 leading-relaxed">
            I&apos;m interested in building 3D games and interactive experiences
            with Unreal Engine.
          </p>
          <p className="mt-4 leading-relaxed">
            I enjoy experimenting with gameplay systems, environments, characters,
            and different game ideas.
          </p>
        </section>
        <section className="border-t-2 border-red-800 pt-5">
          <h2 className="font-cabazon text-4xl leading-none max-md:text-2xl">3D Art</h2>
          <p className="mt-4 leading-relaxed">
            I also create 3D characters and assets, using tools such as:
          </p>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 text-sm leading-relaxed max-md:grid-cols-1 max-md:gap-x-3 max-md:gap-y-1 max-md:text-xs">
            <li className="border border-black px-3 py-1">Blender</li>
            <li className="border border-black px-3 py-1">ZBrush</li>
            <li className="border border-black px-3 py-1">Unreal Engine</li>
            <li className="border border-black px-3 py-1">Character Creator</li>
            <li className="border border-black px-3 py-1">Marvelous Designer</li>
          </ul>
        </section>
        <section className="border-t-2 border-red-800 pt-5">
          <h2 className="font-cabazon text-4xl leading-none max-md:text-2xl">What I&apos;m Working On</h2>
          <p className="mt-4 leading-relaxed">
            I&apos;m constantly experimenting with new projects and learning new
            technologies along the way.
          </p>
          <p className="mt-4 leading-relaxed">
            Most of my repositories are a mix of web development, game development,
            3D art.
          </p>
        </section>
      </div>
    </section>
  );
}
