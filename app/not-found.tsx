import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-145px)] w-full max-w-5xl flex-col items-center justify-center px-12 pb-24 pt-8 text-center">
      <div className="w-full border-y-2 border-black py-16">
        <h1 className="font-cabazon text-7xl leading-none text-red-800">
        404 - Page Not Found
        </h1>
        <Link href="/" className="mt-8 inline-block border-2 border-black px-6 py-3 font-cabazon text-3xl transition-colors hover:border-red-800 hover:bg-red-800 hover:text-white">
          ← Back Home
        </Link>
      </div>
    </section>
  );
}
