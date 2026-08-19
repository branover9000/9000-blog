import { posts } from "@/lib/posts";
import path from "path";
import fs from "fs";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/mdx-components";

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const postsDirectory = path.join(process.cwd(), "content", "posts");
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const post = posts.find((post) => post.slug === slug);
  if (!post) {
    return <h1>Post not found</h1>;
  }
  
  return (
  <article>
    <h1 className="font-cabazon text-5xl text-red-800">{post.title}</h1>
    <p className="text-sm mt-2">{post.date}</p>
    <div className="mt-8">
      <MDXRemote source={fileContent} components={mdxComponents} />
    </div>
  </article>
  );
}
