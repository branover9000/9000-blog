import Link from "next/link";
export default function Navbar() {
  return (
    <header>
      <nav className="flex justify-center gap-6 w-full max-w-6xl mx-auto px-8 py-4 font-cabazon">
        <Link href="/" className="text-red-600">Home</Link>
        <Link href="/about" className="hover:text-red-800 transistion-colors">About</Link>
        <Link href="/posts" className="hover:text-red-800 transistion-colors">Posts</Link>
        <Link href="/portfolio" className="hover:text-red-800 transistion-colors">Portfolio</Link>
        <Link href="/contact" className="hover:text-red-800 transistion-colors">Contact</Link>
      </nav>
      <div className="border-t-2 border-black w-64 mx-auto" />
    </header>
);
}