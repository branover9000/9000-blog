"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa6";
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
      className={
        isActive
          ? "border-b border-accent text-accent"
          : "border-b border-transparent transition-colors hover:border-accent hover:text-accent"
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
    <header className="w-full border-b border-border px-5 sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-[1440px] items-end justify-between py-5 max-md:flex-row max-md:flex-wrap max-md:items-center max-md:gap-0">
        <Link href="/" className="font-display text-4xl leading-none tracking-tight transition-colors hover:text-accent sm:text-5xl">
          Branover<span className="text-accent">9000</span>
        </Link>
        <button
          type="button"
          className="hidden h-11 w-11 items-center justify-center border border-border text-lg hover:border-accent hover:text-accent max-md:inline-flex"
          aria-label="Toggle navigation menu"
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <FaBars aria-hidden="true" />
        </button>
        <nav
          id="primary-navigation"
          className={`flex items-center gap-6 font-body text-lg font-semibold leading-none lg:gap-8 lg:text-xl max-md:order-3 max-md:mt-6 max-md:w-full max-md:border-t max-md:border-border max-md:pt-5 max-md:flex-col max-md:items-start max-md:gap-4 ${isMenuOpen ? "max-md:flex" : "max-md:hidden"}`}
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
