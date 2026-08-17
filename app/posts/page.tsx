import PostCard from "@/components/PostCard";

export default function Posts() {
  const posts = [
    {
      id: 1,
      slug: "my-first-post",
      title: "My first post",
      date: "August, 17, 2026",
      excerpt: "This is my first post on the new site.",
    },
    {
      id: 2,
      slug: "my-second-post",
      title: "My Second Post",
      date: "August 18, 2026",
      excerpt: "Another post on my site.",
    },
  ];

  return (
    <section className="w-full max-w-3xl mx-auto px-8 py-16">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}

      <h1 className="font-cabazon text-5xl text-red-800">Posts</h1>
    </section>
  );
}
