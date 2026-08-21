import fs from "fs";
import matter from "gray-matter";
import path from "path";

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

export type PostWithContent = Post & {
  content: string;
};

type PostFrontmatter = {
  title: string;
  date: string;
  excerpt: string;
};

const postsDirectory = path.join(process.cwd(), "content", "posts");

function getSlugFromFileName(fileName: string) {
  return fileName.replace(/\.mdx$/, "");
}

function formatPostDate(date: string) {
  const postDate = new Date(`${date}T00:00:00`);

  return postDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function readPostFromFile(fileName: string): PostWithContent {
  const slug = getSlugFromFileName(fileName);
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);
  const frontmatter = data as PostFrontmatter;

  return {
    slug,
    title: frontmatter.title,
    date: formatPostDate(frontmatter.date),
    excerpt: frontmatter.excerpt,
    content,
  };
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const postFileNames = fileNames.filter((fileName) => fileName.endsWith(".mdx"));
  const posts = postFileNames.map(readPostFromFile);

  posts.sort((firstPost, secondPost) => {
    return new Date(secondPost.date).getTime() - new Date(firstPost.date).getTime();
  });

  return posts;
}

export function getPostBySlug(slug: string): PostWithContent | undefined {
  const fileName = `${slug}.mdx`;
  const filePath = path.join(postsDirectory, fileName);

  if (!fs.existsSync(filePath)) {
    return undefined;
  }

  return readPostFromFile(fileName);
}