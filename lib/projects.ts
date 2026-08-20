export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "My First Project",
    description: "A short description of my project.",
    image: "/images/react-movie-site.png",
    link: "https://react-movie-site-tan.vercel.app/",
    technologies: ["React", "Next.js", "TypeScript"],
  },
  {
    id: 2,
    title: "My Second Project",
    description: "Another project I've worked on.",
    image: "/images/react-movie-site.png",
    link: "https://react-movie-site-tan.vercel.app/",
    technologies: ["React", "Next.js", "TypeScript"],
  },
];
