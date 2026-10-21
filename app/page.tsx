import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaXTwitter, FaYoutube } from "react-icons/fa6";
import PostCard from "@/components/PostCard";
import ProjectCard from "@/components/ProjectCard";
import SocialLink from "@/components/SocialLink";
import { getAllPosts } from "@/lib/posts";
import { projects } from "@/lib/projects";

export default function Home() {
  const posts = getAllPosts().slice(0, 2);

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(18rem,1fr)]">
        <div className="py-10 text-foreground md:py-16">
          <div className="site-width">
            <p className="eyebrow text-accent">Branover9000 / Art · Games · Code</p>
            <h1 className="mt-7 font-display text-[clamp(3.5rem,10.5vw,10rem)] leading-[0.88] tracking-[-0.035em] text-foreground">
              <span className="block">Brandon</span>
              <span className="block">Marshall</span>
            </h1>
            <p className="mt-6 font-display text-4xl leading-none md:text-5xl">Creative Developer</p>
            <p className="mt-5 max-w-2xl text-xl leading-relaxed md:text-2xl">
              Learning, building, and turning <span className="text-accent">ideas</span> into{" "}
              <span className="text-accent">experiences.</span>
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/portfolio"
                className="inline-flex min-h-12 items-center border border-border bg-border px-5 font-display text-2xl leading-none text-inverse shadow-soft transition-colors hover:border-accent hover:bg-accent"
              >
                Explore my work
              </Link>
              <Link
                href="/about"
                className="inline-flex min-h-12 items-center border-b border-border px-1 text-lg transition-colors hover:border-accent hover:text-accent"
              >
                A little about me <span aria-hidden="true" className="ml-2">↗</span>
              </Link>
            </div>
          </div>
        </div>
        <aside className="grid grid-cols-1 bg-accent px-5 py-6 text-inverse md:px-6 md:py-8">
          <p className="eyebrow text-surface">A practice in progress</p>
          <div className="my-6 grid aspect-square w-full max-w-[19rem] place-items-center justify-self-center md:my-0 md:self-center">
            <Image
              src="/images/skull-red.png"
              alt="White skull illustration"
              width={256}
              height={274}
              priority
              className="h-full w-full object-contain brightness-0 invert drop-shadow-[0_4px_6px_rgba(0,0,0,0.14)]"
            />
          </div>
          <p className="self-end pt-3 text-base leading-relaxed">
            Exploring web development, game development, and 3D art.
          </p>
          <div className="mt-5 flex gap-3">
            <SocialLink href="https://x.com/branover9000" ariaLabel="Visit Brandon Marshall on X"><FaXTwitter size={19} /></SocialLink>
            <SocialLink href="https://github.com/branover9000" ariaLabel="Visit Brandon Marshall on GitHub"><FaGithub size={19} /></SocialLink>
            <SocialLink href="https://www.youtube.com/@branover9000" ariaLabel="Visit Brandon Marshall on YouTube"><FaYoutube size={19} /></SocialLink>
          </div>
        </aside>
      </section>

      <div className="site-width">
        <section className="grid grid-cols-1 gap-y-6 py-10 md:grid-cols-12 md:gap-8 md:py-14">
          <header className="md:col-span-4">
            <p className="eyebrow text-accent">01 / Selected work</p>
            <h2 className="mt-3 font-display text-6xl leading-[0.86] md:text-7xl">Made while learning.</h2>
            <p className="mt-4 max-w-sm text-lg leading-relaxed">
              A growing collection of development, design, and 3D work.
            </p>
            <Link href="/portfolio" className="mt-5 inline-flex min-h-11 items-center border-b border-accent font-semibold text-accent transition-colors hover:border-border hover:text-border">
              Browse the portfolio <span aria-hidden="true" className="ml-2">↗</span>
            </Link>
          </header>
          <div className="divide-y divide-border/30 md:col-span-8">
            {projects.map((project, index) => (
              <ProjectCard project={project} featured={index === 0} key={project.id} />
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-y-6 py-10 md:grid-cols-12 md:gap-8 md:py-14">
          <header className="md:col-span-4">
            <p className="eyebrow text-accent">02 / Notes &amp; process</p>
            <h2 className="mt-3 font-display text-6xl leading-[0.86] md:text-7xl">Thinking out loud.</h2>
            <p className="mt-4 max-w-sm text-lg leading-relaxed">
              Notes on development, design, and creative experimentation.
            </p>
            <Link href="/posts" className="mt-5 inline-flex min-h-11 items-center border-b border-accent font-semibold text-accent transition-colors hover:border-border hover:text-border">
              All posts <span aria-hidden="true" className="ml-2">↗</span>
            </Link>
          </header>
          <div className="md:col-span-8">
            {posts.map((post) => <PostCard key={post.slug} post={post} />)}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-6 py-9 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <p className="eyebrow text-accent">Across the practice</p>
            <h2 className="mt-3 font-display text-5xl leading-[0.9] md:text-6xl">Web, games, and 3D.</h2>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed">
              I enjoy learning by building things—from interactive web projects to game ideas, characters, and 3D assets.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:col-span-5 md:justify-end">
            <p className="eyebrow w-full text-accent md:text-right">Elsewhere</p>
            <SocialLink href="https://x.com/branover9000" ariaLabel="Visit Brandon Marshall on X"><FaXTwitter size={20} /></SocialLink>
            <SocialLink href="https://github.com/branover9000" ariaLabel="Visit Brandon Marshall on GitHub"><FaGithub size={20} /></SocialLink>
            <SocialLink href="https://www.youtube.com/@branover9000" ariaLabel="Visit Brandon Marshall on YouTube"><FaYoutube size={20} /></SocialLink>
          </div>
        </section>
      </div>
    </>
  );
}
