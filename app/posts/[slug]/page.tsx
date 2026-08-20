import { posts } from "@/lib/posts";
import path from "path";
import fs from "fs";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/mdx-components";
import Link from "next/link";
import { notFound } from "next/navigation";

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
    <article>
      <Link href="/posts" className="inline-block text-sm underline mb-8">
        ← Back to Posts
      </Link>

      <header>
        <h1 className="font-cabazon text-5xl text-red-800">{post.title}</h1>
        <p className="text-sm mt-2">{post.date}</p>
      </header>

      <div className="mt-8 text-lg">
        <MDXRemote source={fileContent} components={mdxComponents} />
      </div>
    </article>
  );
}
