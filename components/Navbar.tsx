"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="px-12 pt-8">
      <div className="mx-auto flex w-full max-w-6xl items-end justify-between border-b-2 border-black pb-4">
        <Link href="/" className="font-cabazon text-4xl leading-none tracking-wide transition-colors hover:text-red-800">
          Branover<span className="text-red-800">9000</span>
        </Link>
        <nav className="flex items-center gap-9 font-cabazon text-3xl leading-none">
          <Link
            href="/"
            className={
              pathname === "/"
                ? "border-b-2 border-red-800 pb-1 text-red-800"
                : "border-b-2 border-transparent pb-1 transition-colors hover:border-red-800 hover:text-red-800"
            }
          >
            Home
          </Link>
          <Link
            href="/about"
            className={
              pathname === "/about"
                ? "border-b-2 border-red-800 pb-1 text-red-800"
                : "border-b-2 border-transparent pb-1 transition-colors hover:border-red-800 hover:text-red-800"
            }
          >
            About
          </Link>
          <Link
            href="/posts"
            className={
              pathname === "/posts"
                ? "border-b-2 border-red-800 pb-1 text-red-800"
                : "border-b-2 border-transparent pb-1 transition-colors hover:border-red-800 hover:text-red-800"
            }
          >
            Posts
          </Link>
          <Link
            href="/portfolio"
            className={
              pathname === "/portfolio"
                ? "border-b-2 border-red-800 pb-1 text-red-800"
                : "border-b-2 border-transparent pb-1 transition-colors hover:border-red-800 hover:text-red-800"
            }
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className={
              pathname === "/contact"
                ? "border-b-2 border-red-800 pb-1 text-red-800"
                : "border-b-2 border-transparent pb-1 transition-colors hover:border-red-800 hover:text-red-800"
            }
          >
            Contact
          </Link>
        </nav>
      </div>
      <Image
        src="/images/dividers/navbar-divider1.svg"
        alt=""
        width={193}
        height={17}
        className="mx-auto mt-3"
        loading="eager"
        style={{ width: "330px", height: "auto" }}
      />
    </header>
  );
}
