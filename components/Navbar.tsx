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
          ? "border-b-2 border-accent pb-1 text-accent"
          : "border-b-2 border-transparent pb-1 transition-colors hover:border-accent hover:text-accent"
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
    <header className="w-full bg-amber-25 px-12 pt-4 shadow-[0_6px_8px_-8px_rgba(0,0,0,0.4)] max-md:px-6">
      <div className="mx-auto flex w-full max-w-6xl items-end justify-between pb-4 max-md:flex-row max-md:flex-wrap max-md:items-center max-md:gap-0">
        <Link href="/" className="font-cabazon text-4xl leading-none tracking-wide transition-colors hover:text-accent max-md:text-3xl">
          Branover<span className="text-accent">9000</span>
        </Link>
        <button
          type="button"
          className="hidden h-10 w-10 items-center justify-center border-2 border-border text-xl transition-colors hover:border-accent hover:text-accent max-md:inline-flex"
          aria-label="Toggle navigation menu"
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <FaBars aria-hidden="true" />
        </button>
        <nav
          id="primary-navigation"
          className={`flex items-center gap-9 font-cabazon text-3xl leading-none max-md:order-3 max-md:mt-4 max-md:w-full max-md:flex-col max-md:items-start max-md:gap-3 max-md:text-xl ${isMenuOpen ? "max-md:flex" : "max-md:hidden"}`}
        >
          <NavLink href="/" label="Home" isActive={pathname === "/"} onNavigate={() => setIsMenuOpen(false)} />
          <NavLink href="/about" label="About" isActive={pathname === "/about"} onNavigate={() => setIsMenuOpen(false)} />
          <NavLink href="/posts" label="Posts" isActive={pathname === "/posts"} onNavigate={() => setIsMenuOpen(false)} />
          <NavLink href="/portfolio" label="Portfolio" isActive={pathname === "/portfolio"} onNavigate={() => setIsMenuOpen(false)} />
          <NavLink href="/contact" label="Contact" isActive={pathname === "/contact"} onNavigate={() => setIsMenuOpen(false)} />
        </nav>
      </div>
      {/* <Image
        src="/images/dividers/navbar-divider1.svg"
        alt=""
        width={1000}
        height={17}
        className="mx-auto mt-3"
        loading="eager"
        style={{ width: "1000px", height: "40px" }}
      /> */}
    </header>
  );
}
