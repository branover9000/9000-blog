import PostCard from "@/components/PostCard";
import { posts } from "@/lib/posts";

export const metadata = {
  title: "Posts",
  description: "Browse my latest posts about development, design, and creative experimentation.",
};

export default function Posts() {
  return (
    <section className="w-full max-w-3xl mx-auto px-8 py-16">
      <h1 className="font-cabazon text-5xl text-red-800">Posts</h1>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
}
