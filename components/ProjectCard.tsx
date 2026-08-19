import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return <h2>{project.title}</h2>;
}