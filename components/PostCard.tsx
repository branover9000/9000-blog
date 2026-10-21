import Link from "next/link";
import type { Post } from "@/lib/posts";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="group grid grid-cols-1 gap-3 border-b border-border/30 py-6 md:grid-cols-[12rem_1fr] md:gap-8 md:py-8">
      <p className="eyebrow pt-1 text-accent">{post.date}</p>
      <div className="min-w-0">
        <h2 className="font-display text-5xl leading-[0.92] max-md:text-4xl">
          <Link href={`/posts/${post.slug}`} className="transition-colors group-hover:text-accent">
            {post.title}
          </Link>
        </h2>
        <p className="mt-3 max-w-3xl text-lg leading-relaxed">{post.excerpt}</p>
        <Link href={`/posts/${post.slug}`} className="interface-link mt-4 inline-flex min-h-11 items-center border-b border-accent pb-1 text-accent transition-colors hover:border-border hover:text-border">
          Read the note <span aria-hidden="true" className="ml-2">↗</span>
        </Link>
      </div>
    </article>
  );
}
