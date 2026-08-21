import { getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/mdx-components";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto w-full max-w-4xl px-12 py-20 max-md:px-6 max-md:py-12">
      <Link href="/posts" className="inline-block border-b-2 border-accent pb-1 text-sm text-accent transition-colors hover:border-border hover:text-border">
        ← Back to Posts
      </Link>

      <header className="mt-10 border-b-2 border-border pb-8">
        <p className="text-sm text-accent">{post.date}</p>
        <PageHeading className="mt-3">{post.title}</PageHeading>
      </header>

      <div className="mt-10 text-lg leading-relaxed max-md:text-base">
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>
    </article>
  );
}
