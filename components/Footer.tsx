import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-4 text-center bg-amber-25 shadow-[0_-6px_8px_-8px_rgba(0,0,0,0.4)]">
      <nav aria-label="Footer navigation" className="mb-4 flex justify-center gap-8 font-change text-sm">
        <Link href="/" className="transition-colors hover:text-red-800">Home</Link>
        <Link href="/about" className="transition-colors hover:text-red-800">About</Link>
        <Link href="/posts" className="transition-colors hover:text-red-800">Posts</Link>
        <Link href="/portfolio" className="transition-colors hover:text-red-800">Portfolio</Link>
        <Link href="/contact" className="transition-colors hover:text-red-800">Contact</Link>
      </nav>
      <p className="font-change text-sm font-bold leading-none">© 2026 Brandon Marshall — Artist, Developer, Digital Creator</p>
      <p className="mt-2 text-sm">Build → Break → Repeat</p>
    </footer>
  );
}