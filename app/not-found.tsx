import Link from "next/link";
import PageHeading from "@/components/PageHeading";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-145px)] w-full max-w-5xl flex-col items-center justify-center px-12 pb-24 pt-8 text-center">
      <div className="w-full border-y-2 border-border py-16">
        <PageHeading>404 - Page Not Found</PageHeading>
        <Link href="/" className="mt-8 inline-block border-2 border-border px-6 py-3 font-cabazon text-3xl transition-colors hover:border-accent hover:bg-accent hover:text-inverse">
          ← Back Home
        </Link>
      </div>
    </section>
  );
}
