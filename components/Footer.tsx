import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 w-full border-t border-border px-5 py-10 sm:px-8 lg:mt-24 lg:px-12 lg:py-14">
      <div className="mx-auto grid max-w-[1440px] grid-cols-[1.3fr_1fr] gap-10 max-md:grid-cols-1">
        <div>
          <p className="font-display text-5xl leading-none">Branover<span className="text-accent">9000</span></p>
          <p className="mt-4 max-w-md text-xl leading-relaxed">A personal space for work, experiments, and the practice of making things.</p>
        </div>
        <div className="md:justify-self-end">
          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-12 gap-y-3 font-semibold">
            <Link href="/" className="hover:text-accent">Home</Link>
            <Link href="/about" className="hover:text-accent">About</Link>
            <Link href="/posts" className="hover:text-accent">Writing</Link>
            <Link href="/portfolio" className="hover:text-accent">Portfolio</Link>
            <Link href="/contact" className="hover:text-accent">Contact</Link>
          </nav>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-[1440px] items-center justify-between border-t border-border pt-5 text-sm max-md:flex-col max-md:items-start max-md:gap-2">
        <p>© 2026 Brandon Marshall — Artist, Developer, Digital Creator</p>
        <p className="font-semibold text-accent">Build → Break → Repeat</p>
      </div>
    </footer>
  );
}