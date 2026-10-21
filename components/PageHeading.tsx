import type { ReactNode } from "react";

export default function PageHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h1 className={`font-display text-[clamp(2.5rem,7.5vw,7rem)] leading-[0.9] text-accent ${className}`}>
      {children}
    </h1>
  );
}
