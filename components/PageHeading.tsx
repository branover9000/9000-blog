import type { ReactNode } from "react";

export default function PageHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <h1 className={`font-cabazon text-7xl leading-none text-red-800 max-md:text-4xl ${className}`}>{children}</h1>;
}