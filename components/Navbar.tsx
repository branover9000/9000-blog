"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, label, isActive }: { href: string; label: string; isActive: boolean }) {
  return (
    <Link
      href={href}
      className={
        isActive
          ? "border-b-2 border-red-800 pb-1 text-red-800"
          : "border-b-2 border-transparent pb-1 transition-colors hover:border-red-800 hover:text-red-800"
      }
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="w-full px-12 pt-4 bg-amber-25 shadow-[0_6px_8px_-8px_rgba(0,0,0,0.4)]">
      <div className="mx-auto flex w-full max-w-6xl items-end justify-between pb-4">
        <Link href="/" className="font-cabazon text-4xl leading-none tracking-wide transition-colors hover:text-red-800">
          Branover<span className="text-red-800">9000</span>
        </Link>
        <nav className="flex items-center gap-9 font-cabazon text-3xl leading-none">
          <NavLink href="/" label="Home" isActive={pathname === "/"} />
          <NavLink href="/about" label="About" isActive={pathname === "/about"} />
          <NavLink href="/posts" label="Posts" isActive={pathname === "/posts"} />
          <NavLink href="/portfolio" label="Portfolio" isActive={pathname === "/portfolio"} />
          <NavLink href="/contact" label="Contact" isActive={pathname === "/contact"} />
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
