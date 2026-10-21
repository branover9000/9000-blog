export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
  category: "design" | "web-development" | "game-development" | "art";
};

export const projects: Project[] = [
  {
    id: 1,
    title: "My First Project",
    description: "An early web experiment built to explore component structure, responsive presentation, and a focused viewing experience.",
    image: "/images/react-movie-site.png",
    link: "https://react-movie-site-tan.vercel.app/",
    technologies: ["React", "Next.js", "TypeScript"],
    category: "web-development",
  },
  {
    id: 2,
    title: "My Second Project",
    description: "A continuing study in shaping a small interface through iteration, with attention to structure, type, and everyday use.",
    image: "/images/react-movie-site.png",
    link: "https://react-movie-site-tan.vercel.app/",
    technologies: ["React", "Next.js", "TypeScript"],
    category: "web-development",
  },
];
