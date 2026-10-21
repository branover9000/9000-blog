import PageHeading from "@/components/PageHeading";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Posts",
  description: "Browse my latest posts about development, design, and creative experimentation.",
};

export default function Posts() {
  const posts = getAllPosts();

  return (
    <section className="site-width py-10 md:py-14">
      <header className="grid grid-cols-1 gap-6 border-b border-border/35 py-5 md:grid-cols-12 md:items-end md:gap-8 md:pb-10">
        <div className="md:col-span-7">
          <p className="eyebrow mb-4 text-accent">Journal / Notes &amp; process</p>
          <PageHeading>Journal</PageHeading>
        </div>
        <p className="max-w-lg text-xl leading-relaxed md:col-span-5 md:justify-self-end">
          Notes, observations, and small discoveries gathered in the course of making.
        </p>
      </header>
      <div className="max-w-6xl divide-y divide-border/30">
        {posts.map((post) => <PostCard key={post.slug} post={post} />)}
      </div>
    </section>
  );
}
