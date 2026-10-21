"use client";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import type { Project } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default function SelectedWorkCarousel({ projects }: { projects: Project[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const activeProject = projects[activeIndex];

  if (projects.length === 0) {
    return null;
  }

  function showProject(index: number) {
    setActiveIndex((index + projects.length) % projects.length);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showProject(activeIndex - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      showProject(activeIndex + 1);
    }
  }

  function handlePointerDown(event: PointerEvent<HTMLElement>) {
    if (event.pointerType === "mouse") {
      return;
    }

    touchStartX.current = event.clientX;
  }

  function handlePointerUp(event: PointerEvent<HTMLElement>) {
    if (touchStartX.current === null) {
      return;
    }

    const horizontalDistance = event.clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(horizontalDistance) < 40) {
      return;
    }

    showProject(activeIndex + (horizontalDistance < 0 ? 1 : -1));
  }

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Selected work"
      tabIndex={0}
      className="min-w-0 md:col-span-8"
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      <div className="overflow-hidden">
        <ProjectCard project={activeProject} featured />
      </div>
      <div className="flex items-center justify-between gap-4 border-t border-border/30 pt-4">
        <p className="font-interface text-sm font-medium text-muted" aria-live="polite">
          <span className="text-foreground">{activeIndex + 1}</span> / {projects.length}
          <span className="sr-only">: {activeProject.title}</span>
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => showProject(activeIndex - 1)}
            className="flex h-11 w-11 items-center justify-center border border-border/50 text-sm text-foreground transition-colors hover:border-accent hover:bg-accent hover:text-inverse"
            aria-label="Show previous project"
          >
            <FaArrowLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => showProject(activeIndex + 1)}
            className="flex h-11 w-11 items-center justify-center border border-border/50 text-sm text-foreground transition-colors hover:border-accent hover:bg-accent hover:text-inverse"
            aria-label="Show next project"
          >
            <FaArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
