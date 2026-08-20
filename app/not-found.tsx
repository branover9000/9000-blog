import Link from "next/link";

export default function NotFound() {
  return (
    <section className="max-w-3xl mx-auto px-8 py-16 text-center">
      <h1 className="font-cabazon text-5xl text-red-800">
        404 - Page Not Found
      </h1>
      <Link href="/" className="inline-block mt-6 underline">
        ← Back Home
      </Link>
    </section>
  );
}
