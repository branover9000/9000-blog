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
    <article className="mx-auto max-w-[1280px] px-5 py-12 sm:px-8 lg:px-12 lg:py-20">
      <div className="grid grid-cols-12">
        <aside className="col-span-12 mb-10 lg:col-span-3 lg:mb-0 lg:pr-12">
          <Link href="/posts" className="inline-block border-b border-accent pb-1 text-base font-semibold text-accent hover:border-border hover:text-foreground">← All writing</Link>
        </aside>
        <div className="col-span-12 lg:col-span-9">
          <header className="border-b border-border pb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{post.date}</p>
            <h1 className="mt-6 max-w-4xl font-display text-7xl leading-[0.82] tracking-tight sm:text-8xl lg:text-9xl">{post.title}</h1>
            <p className="mt-8 max-w-2xl text-2xl leading-relaxed text-muted">{post.excerpt}</p>
          </header>
          <div className="post-content mt-12 max-w-3xl text-xl leading-relaxed sm:text-2xl">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>
        </div>
      </div>
    </article>
  );
}
