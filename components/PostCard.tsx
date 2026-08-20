import Link from "next/link";
import type { Post } from "@/lib/posts";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="group grid grid-cols-[150px_1fr] gap-8 border-b border-black py-9 max-md:grid-cols-1 max-md:gap-3 max-md:py-5">
      <p className="pt-1 text-sm leading-relaxed text-red-800 max-md:text-xs">{post.date}</p>
      <div>
        <h2 className="font-cabazon text-4xl leading-none max-md:text-2xl">
          <Link href={`/posts/${post.slug}`} className="transition-colors group-hover:text-red-800">
            {post.title}
          </Link>
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed">{post.excerpt}</p>
        <Link href={`/posts/${post.slug}`} className="mt-5 inline-block border-b-2 border-red-800 pb-1 text-sm text-red-800 transition-colors hover:border-black hover:text-black">
          Read post
        </Link>
      </div>
    </article>
  );
}
