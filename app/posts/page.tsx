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
    <section className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <header className="grid grid-cols-12 border-b border-border pb-12">
        <div className="col-span-12 lg:col-span-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Notebook / archive</p>
          <PageHeading className="mt-6">Writing</PageHeading>
        </div>
        <p className="col-span-12 mt-8 max-w-sm self-end text-xl leading-relaxed lg:col-span-3 lg:col-start-10 lg:mt-0">Notes on development, design, and creative experimentation.</p>
      </header>
      <div>{posts.map((post) => <PostCard key={post.slug} post={post} />)}</div>
    </section>
  );
}
