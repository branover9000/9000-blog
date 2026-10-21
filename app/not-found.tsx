import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-105px)] max-w-[1440px] items-center px-5 sm:px-8 lg:px-12">
      <div className="grid w-full grid-cols-12 border-y border-border py-16 lg:py-24">
        <p className="col-span-12 font-display text-[9rem] leading-[0.65] text-accent sm:text-[14rem] lg:col-span-4">404</p>
        <div className="col-span-12 mt-10 lg:col-span-7 lg:col-start-6 lg:mt-0">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Lost in the archive</p>
          <h1 className="mt-5 font-display text-6xl leading-[0.82] sm:text-8xl">This page went missing.</h1>
          <Link href="/" className="mt-10 inline-block border border-border bg-border px-6 py-3 text-lg font-semibold text-inverse hover:-translate-y-1 hover:border-accent hover:bg-accent">Return home →</Link>
        </div>
      </div>
    </section>
  );
}
