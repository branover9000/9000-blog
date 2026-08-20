import type { ReactNode } from "react";

export default function PageHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <h1 className={`font-cabazon text-7xl leading-none text-red-800 ${className}`}>{children}</h1>;
}