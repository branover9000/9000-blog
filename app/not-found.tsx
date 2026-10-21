import Link from "next/link";
import PageHeading from "@/components/PageHeading";

export default function NotFound() {
  return (
    <section className="site-width flex min-h-[55vh] flex-col justify-center py-10 md:py-14">
      <div className="border-y border-border/35 py-8 md:py-12">
        <p className="eyebrow text-accent">404 / Not found</p>
        <PageHeading className="mt-4">This page went missing.</PageHeading>
        <Link href="/" className="mt-7 inline-flex min-h-12 items-center border border-border px-5 font-display text-2xl shadow-soft transition-colors hover:border-accent hover:bg-accent hover:text-inverse">
          <span aria-hidden="true" className="mr-2">←</span> Back Home
        </Link>
      </div>
    </section>
  );
}
