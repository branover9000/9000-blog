import PostCard from "@/components/PostCard";
import PageHeading from "@/components/PageHeading";
import { posts } from "@/lib/posts";

export const metadata = {
  title: "Posts",
  description: "Browse my latest posts about development, design, and creative experimentation.",
};

export default function Posts() {
  return (
    <section className="mx-auto w-full max-w-5xl px-12 py-20">
      <header className="flex items-end justify-between border-b-2 border-black pb-8">
        <PageHeading>Posts</PageHeading>
        <p className="max-w-sm text-right text-sm leading-relaxed">Notes on development, design, and creative experimentation.</p>
      </header>
      <div className="mt-2">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
