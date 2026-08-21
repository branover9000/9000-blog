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
      className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-border bg-border text-inverse transition-colors hover:border-accent hover:bg-accent"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}