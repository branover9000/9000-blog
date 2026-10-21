import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/mdx-components";
import { getPostBySlug } from "@/lib/posts";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="site-width max-w-6xl py-10 md:py-14">
      <Link href="/posts" className="inline-flex min-h-11 items-center border-b border-accent font-semibold text-accent transition-colors hover:border-border hover:text-border">
        <span aria-hidden="true" className="mr-2">←</span> Back to Posts
      </Link>
      <header className="mt-5 border-y border-border/35 py-7 md:py-10">
        <p className="eyebrow text-accent">{post.date}</p>
        <h1 className="mt-4 max-w-5xl font-display text-[clamp(2.5rem,7.5vw,7rem)] leading-[0.9] text-accent">{post.title}</h1>
        <p className="mt-5 max-w-3xl text-xl leading-relaxed text-muted">{post.excerpt}</p>
      </header>
      <div className="article-body max-w-3xl py-7 text-xl leading-relaxed md:py-10">
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>
    </article>
  );
}
