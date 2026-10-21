import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaXTwitter, FaYoutube } from "react-icons/fa6";
import PostCard from "@/components/PostCard";
import SocialLink from "@/components/SocialLink";
import SelectedWorkCarousel from "@/components/SelectedWorkCarousel";
import { getAllPosts } from "@/lib/posts";
import { projects } from "@/lib/projects";

export default function Home() {
  const posts = getAllPosts().slice(0, 2);

  return (
    <>
      <section className="site-width grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(18rem,1fr)]">
        <div className="py-10 text-foreground md:py-16">
            <p className="eyebrow text-accent">Branover9000 / Art · Games · Code</p>
            <h1 className="mt-6 font-display text-[clamp(3.25rem,9vw,8.5rem)] leading-[0.88] tracking-[-0.035em] text-foreground">
              <span className="block">Brandon</span>
              <span className="block">Marshall</span>
            </h1>
            <p className="mt-5 font-display text-4xl leading-none md:text-5xl">Artist of systems and strange worlds.</p>
            <p className="mt-5 max-w-2xl text-xl leading-relaxed md:text-2xl">
              Learning in public, making with care, and giving <span className="text-accent">ideas</span> a{" "}
              <span className="text-accent">shape to inhabit.</span>
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/portfolio"
                className="font-interface inline-flex min-h-12 items-center border border-border bg-border px-5 text-sm font-semibold text-inverse shadow-soft transition-colors hover:border-accent hover:bg-accent"
              >
                Explore my work
              </Link>
              <Link
                href="/about"
                className="interface-link inline-flex min-h-12 items-center border-b border-border px-1 transition-colors hover:border-accent hover:text-accent"
              >
                A little about me <span aria-hidden="true" className="ml-2">↗</span>
              </Link>
          </div>
        </div>
        <aside className="mx-2 my-4 grid grid-cols-1 bg-accent px-5 py-6 text-inverse md:mx-6 md:my-6 md:px-6 md:py-8">
          <p className="eyebrow text-surface">A practice in progress</p>
          <div className="my-6 grid aspect-square w-full max-w-[19rem] place-items-center justify-self-center md:my-0 md:self-center">
            <Image
              src="/images/landing-logo.png"
              alt="Branover9000 logo illustration"
              width={768}
              height={823}
              priority
              className="h-full w-full object-contain brightness-0 invert drop-shadow-[0_4px_6px_rgba(0,0,0,0.14)]"
            />
          </div>
          <p className="self-end pt-3 text-base leading-relaxed">
            A working archive of experiments in web, game, and 3D practice.
          </p>
          <div className="mt-5 flex gap-3">
            <SocialLink href="https://x.com/branover9000" ariaLabel="Visit Brandon Marshall on X"><FaXTwitter size={19} /></SocialLink>
            <SocialLink href="https://github.com/branover9000" ariaLabel="Visit Brandon Marshall on GitHub"><FaGithub size={19} /></SocialLink>
            <SocialLink href="https://www.youtube.com/@branover9000" ariaLabel="Visit Brandon Marshall on YouTube"><FaYoutube size={19} /></SocialLink>
          </div>
        </aside>
      </section>

      <div className="site-width">
        <section className="grid grid-cols-1 gap-y-6 border-t border-border/35 py-10 md:grid-cols-12 md:gap-8 md:py-14">
          <header className="bg-accent px-5 py-6 text-inverse md:col-span-4 md:px-6 md:py-8">
            <p className="eyebrow text-surface">01 / Selected work</p>
            <h2 className="mt-3 font-display text-6xl leading-[0.86] md:text-7xl">Work, in the making.</h2>
            <p className="mt-4 max-w-sm text-lg leading-relaxed">
              Studies, prototypes, and finished pieces from an evolving creative practice.
            </p>
            <Link href="/portfolio" className="interface-link mt-5 inline-flex min-h-11 items-center border-b border-surface text-surface transition-colors hover:border-border hover:text-border">
              Explore the work <span aria-hidden="true" className="ml-2">↗</span>
            </Link>
          </header>
          <div className="md:col-span-8">
            <SelectedWorkCarousel projects={projects} />
          </div>
        </section>

        <section className="grid grid-cols-1 gap-y-6 border-t border-border/35 py-10 md:grid-cols-12 md:gap-8 md:py-14">
          <header className="bg-accent px-5 py-6 text-inverse md:order-2 md:col-span-4 md:px-6 md:py-8">
            <p className="eyebrow text-surface">02 / Notes &amp; process</p>
            <h2 className="mt-3 font-display text-6xl leading-[0.86] md:text-7xl">Notes from the workbench.</h2>
            <p className="mt-4 max-w-sm text-lg leading-relaxed">
              Observations, small discoveries, and the questions that surface while making.
            </p>
            <Link href="/posts" className="interface-link mt-5 inline-flex min-h-11 items-center border-b border-surface text-surface transition-colors hover:border-border hover:text-border">
              Read the journal <span aria-hidden="true" className="ml-2">↗</span>
            </Link>
          </header>
          <div className="md:order-1 md:col-span-8">
            {posts.map((post) => <PostCard key={post.slug} post={post} />)}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-6 border-t border-border/35 py-9 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <p className="eyebrow text-accent">Across the practice</p>
            <h2 className="mt-3 font-display text-5xl leading-[0.9] md:text-6xl">Web, games, and 3D.</h2>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed">
              An ongoing record of projects, experiments, and discoveries across code, play, and form.
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
