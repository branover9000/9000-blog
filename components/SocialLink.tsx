import type { ReactNode } from "react";

export default function SocialLink({
  href,
  ariaLabel,
  children,
}: {
  href: string;
  ariaLabel: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="flex h-12 w-12 items-center justify-center border border-border bg-transparent text-foreground hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-inverse"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}