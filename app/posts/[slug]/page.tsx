import { posts } from "@/lib/posts";
import path from "path";
import fs from "fs";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/mdx-components";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((post) => post.slug === slug);
  return {
    title: post?.title,
    description: post?.excerpt,
  };
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = posts.find((post) => post.slug === slug);
  if (!post) {
    notFound();
  }

  const postsDirectory = path.join(process.cwd(), "content", "posts");
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");

  return (
    <article className="mx-auto w-full max-w-4xl px-12 py-20">
      <Link href="/posts" className="inline-block border-b-2 border-red-800 pb-1 text-sm text-red-800 transition-colors hover:border-black hover:text-black">
        ← Back to Posts
      </Link>

      <header className="mt-10 border-b-2 border-black pb-8">
        <p className="text-sm text-red-800">{post.date}</p>
        <h1 className="mt-3 font-cabazon text-7xl leading-none text-red-800">{post.title}</h1>
      </header>

      <div className="mt-10 text-lg leading-relaxed">
        <MDXRemote source={fileContent} components={mdxComponents} />
      </div>
    </article>
  );
}
