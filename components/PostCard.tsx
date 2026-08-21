import Link from "next/link";
import type { Post } from "@/lib/posts";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="group grid grid-cols-[150px_1fr] gap-8 border-b border-border py-9 max-md:grid-cols-1 max-md:gap-3 max-md:py-5">
      <p className="pt-1 text-sm leading-relaxed text-accent max-md:text-xs">{post.date}</p>
      <div>
        <h2 className="font-display text-4xl leading-none max-md:text-2xl">
          <Link href={`/posts/${post.slug}`} className="transition-colors group-hover:text-accent">
            {post.title}
          </Link>
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed">{post.excerpt}</p>
        <Link href={`/posts/${post.slug}`} className="mt-5 inline-block border-b-2 border-accent pb-1 text-sm text-accent transition-colors hover:border-border hover:text-border">
          Read post
        </Link>
      </div>
    </article>
  );
}
