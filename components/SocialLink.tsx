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
      className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-black bg-black text-white transition-colors hover:border-red-800 hover:bg-red-800"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}