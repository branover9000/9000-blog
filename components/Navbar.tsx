"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header>
      <nav className="flex justify-center gap-6 w-full max-w-6xl mx-auto px-8 py-4 font-cabazon text-3xl">
        <Link
          href="/"
          className={
            pathname === "/"
              ? "text-red-800"
              : "hover:text-red-800 transition-colors"
          }
        >
          Home
        </Link>
        <Link
          href="/about"
          className={
            pathname === "/about"
              ? "text-red-800"
              : "hover:text-red-800 transition-colors"
          }
        >
          About
        </Link>
        <Link
          href="/posts"
          className={
            pathname === "/posts"
              ? "text-red-800"
              : "hover:text-red-800 transition-colors"
          }
        >
          Posts
        </Link>
        <Link
          href="/portfolio"
          className={
            pathname === "/portfolio"
              ? "text-red-800"
              : "hover:text-red-800 transition-colors"
          }
        >
          Portfolio
        </Link>
        <Link
          href="/contact"
          className={
            pathname === "/contact"
              ? "text-red-800"
              : "hover:text-red-800 transition-colors"
          }
        >
          Contact
        </Link>
      </nav>
      <Image
        src="/images/dividers/navbar-divider1.svg"
        alt=""
        width={193}
        height={17}
        className="mx-auto"
        loading="eager"
        style={{ width: "450px", height: "auto" }}
      />
    </header>
  );
}
