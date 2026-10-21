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
  const featuredProject = projects[0];

  return (
    <>
      <section className="mx-auto grid min-h-[calc(100vh-105px)] max-w-[1440px] grid-cols-12 px-5 sm:px-8 lg:px-12">
        <div className="col-span-12 flex flex-col justify-between border-l border-border py-12 pl-6 sm:pl-9 lg:col-span-8 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Artist · Developer · Digital Creator</p>
            <h1 className="mt-8 max-w-4xl font-display text-[clamp(4.75rem,10vw,10rem)] leading-[0.75] tracking-tight">
              Brandon<br />
              <span className="text-accent">Marshall</span>
            </h1>
            <p className="mt-10 max-w-2xl text-2xl leading-relaxed sm:text-3xl">
              Learning, building, and turning <span className="text-accent">ideas</span> into <span className="text-accent">experiences.</span>
            </p>
          </div>
          <div className="mt-16 flex flex-wrap items-center gap-5">
            <Link href="/portfolio" className="border border-border bg-border px-6 py-3 text-lg font-semibold text-inverse hover:-translate-y-1 hover:border-accent hover:bg-accent">
              See the work →
            </Link>
            <Link href="/about" className="border-b border-accent pb-1 text-lg font-semibold text-accent hover:border-border hover:text-foreground">
              More about me
            </Link>
          </div>
        </div>
        <aside className="col-span-12 flex flex-col justify-between border-y border-border bg-accent px-7 py-10 text-inverse sm:px-9 lg:col-span-4 lg:border-y-0 lg:border-r lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em]">Field notes / 01</p>
            <Image
              src="/images/skull-red.png"
              alt="Skull illustration"
              width={256}
              height={274}
              priority
              className="mx-auto my-10 w-48 brightness-0 invert lg:w-60"
            />
            <p className="max-w-sm text-2xl leading-relaxed">
              An evolving record of creative work, technical learning, and things worth sharing.
            </p>
          </div>
          <div className="mt-12 flex gap-3">
            <SocialLink href="https://x.com/branover9000" ariaLabel="Visit Brandon Marshall on X"><FaXTwitter size={19} /></SocialLink>
            <SocialLink href="https://github.com/branover9000" ariaLabel="Visit Brandon Marshall on GitHub"><FaGithub size={19} /></SocialLink>
            <SocialLink href="https://www.youtube.com/@branover9000" ariaLabel="Visit Brandon Marshall on YouTube"><FaYoutube size={19} /></SocialLink>
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid grid-cols-12 gap-y-10 lg:gap-x-12">
          <div className="col-span-12 lg:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Selected work</p>
            <h2 className="mt-4 font-display text-7xl leading-[0.8] sm:text-8xl">Made while learning.</h2>
          </div>
          <div className="col-span-12 lg:col-span-8">
            {featuredProject ? <ProjectCard project={featuredProject} /> : null}
            <Link href="/portfolio" className="mt-8 inline-block border-b border-accent pb-1 text-lg font-semibold text-accent hover:border-border hover:text-foreground">
              View the full portfolio →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 px-5 sm:px-8 lg:px-12">
          <div className="col-span-12 border-b border-border py-12 lg:col-span-4 lg:border-b-0 lg:border-r lg:py-20 lg:pr-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">From the notebook</p>
            <h2 className="mt-4 font-display text-7xl leading-[0.8] sm:text-8xl">Writing &amp; ideas.</h2>
            <p className="mt-8 max-w-sm text-xl leading-relaxed">Notes on development, design, and creative experimentation.</p>
          </div>
          <div className="col-span-12 lg:col-span-8 lg:py-10 lg:pl-12">
            {posts.map((post) => <PostCard key={post.slug} post={post} />)}
            <Link href="/posts" className="mt-9 inline-block border border-border px-6 py-3 text-lg font-semibold hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-inverse">
              All writing →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
