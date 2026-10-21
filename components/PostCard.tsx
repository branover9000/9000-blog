import Link from "next/link";
import type { Post } from "@/lib/posts";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="group grid grid-cols-[11rem_minmax(0,1fr)] gap-8 border-b border-border py-10 lg:gap-12 max-md:grid-cols-1 max-md:gap-3 max-md:py-7">
      <p className="pt-2 text-sm font-semibold uppercase tracking-[0.14em] text-accent">{post.date}</p>
      <div>
        <h2 className="font-display text-5xl leading-[0.9] sm:text-6xl">
          <Link href={`/posts/${post.slug}`} className="transition-colors group-hover:text-accent focus:text-accent">
            {post.title}
          </Link>
        </h2>
        <p className="mt-5 max-w-2xl text-xl leading-relaxed">{post.excerpt}</p>
        <Link href={`/posts/${post.slug}`} className="mt-6 inline-block border-b border-accent pb-1 text-base font-semibold text-accent hover:border-border hover:text-border">
          Read essay →
        </Link>
      </div>
    </article>
  );
}
