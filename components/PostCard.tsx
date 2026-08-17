type Post = {
  id: number;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="mt-8 pb-8 border-b">
      <h2 className="font-cabazon text-3xl">{post.title}</h2>
      <p className="text-sm mt-1">{post.date}</p>
      <p className="mt-3">{post.excerpt}</p>
    </article>
  );
}