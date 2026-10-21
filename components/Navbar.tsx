"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useState } from "react";

function NavLink({
  href,
  label,
  isActive,
  onNavigate,
}: {
  href: string;
  label: string;
  isActive: boolean;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={isActive ? "page" : undefined}
      className={
        isActive
          ? "border-b border-accent pb-2 text-accent"
          : "border-b border-transparent pb-2 transition-colors hover:border-accent hover:text-accent"
      }
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-border/30 bg-background shadow-[0_2px_8px_rgba(23,18,15,0.04)]">
      <div className="site-width flex min-h-24 flex-wrap items-center justify-between gap-x-8 gap-y-4 py-4">
        <Link href="/" className="font-display text-[clamp(1.5rem,5vw,3rem)] leading-[0.85] tracking-wide transition-colors hover:text-accent">
          Branover<span className="text-accent">9000</span>
        </Link>
        <button
          type="button"
          className="hidden h-12 w-12 items-center justify-center border border-border/50 text-xl transition-colors hover:border-accent hover:text-accent max-md:inline-flex"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <FaXmark aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
        <nav
          id="primary-navigation"
          aria-label="Main navigation"
          className={`font-interface flex items-center gap-7 text-sm font-semibold leading-tight max-md:order-3 max-md:w-full max-md:flex-col max-md:items-stretch max-md:gap-0 max-md:border-t max-md:border-border/30 max-md:pt-2 ${isMenuOpen ? "max-md:flex" : "max-md:hidden"}`}
        >
          <NavLink href="/" label="Home" isActive={pathname === "/"} onNavigate={() => setIsMenuOpen(false)} />
          <NavLink href="/about" label="About" isActive={pathname === "/about"} onNavigate={() => setIsMenuOpen(false)} />
          <NavLink href="/posts" label="Posts" isActive={pathname === "/posts"} onNavigate={() => setIsMenuOpen(false)} />
          <NavLink href="/portfolio" label="Portfolio" isActive={pathname === "/portfolio"} onNavigate={() => setIsMenuOpen(false)} />
          <NavLink href="/contact" label="Contact" isActive={pathname === "/contact"} onNavigate={() => setIsMenuOpen(false)} />
        </nav>
      </div>
    </header>
  );
}
