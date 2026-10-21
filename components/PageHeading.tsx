import type { ReactNode } from "react";

export default function PageHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <h1 className={`font-display text-7xl leading-[0.86] tracking-tight text-accent sm:text-8xl lg:text-9xl ${className}`}>{children}</h1>;
}