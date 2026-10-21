import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 w-full border-t border-border/30 bg-surface">
      <div className="site-width grid grid-cols-1 gap-8 py-8 md:grid-cols-12 md:items-end">
        <div className="md:col-span-5">
          <Link href="/" className="font-display text-4xl leading-none transition-colors hover:text-accent">
            Branover<span className="text-accent">9000</span>
          </Link>
          <p className="font-interface mt-3 text-sm leading-relaxed text-muted">© 2026 Brandon Marshall — Art, games, and code in progress.</p>
        </div>
        <div className="md:col-span-7 md:flex md:flex-col md:items-end">
          <nav aria-label="Footer navigation" className="font-interface flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
            <Link href="/" className="transition-colors hover:text-accent">Home</Link>
            <Link href="/about" className="transition-colors hover:text-accent">About</Link>
            <Link href="/posts" className="transition-colors hover:text-accent">Posts</Link>
            <Link href="/portfolio" className="transition-colors hover:text-accent">Portfolio</Link>
            <Link href="/contact" className="transition-colors hover:text-accent">Contact</Link>
          </nav>
          <p className="mt-4 font-display text-xl">Build, Break, repeat.</p>
        </div>
      </div>
    </footer>
  );
}
