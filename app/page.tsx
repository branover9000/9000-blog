import Image from "next/image";
import { FaGithub, FaYoutube, FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-145px)] w-full max-w-6xl flex-col items-center justify-center px-12 pb-24 pt-8 text-center">
      <div className="w-full border-y-2 border-black py-10">
        <Image
          src="/images/skull.png"
          alt="Skull illustration"
          width={256}
          height={274}
          loading="eager"
          className="mx-auto mb-4"
          style={{ width: "230px", height: "auto" }}
        />
        <h1 className="font-cabazon text-8xl leading-none text-red-800">Brandon Marshall</h1>
        <p className="mt-2 font-cabazon text-6xl leading-none">Creative Developer</p>
        <Image
          src="/images/dividers/navbar-divider2.svg"
          alt=""
          width={206}
          height={17}
          className="mx-auto my-6"
          style={{ width: "370px", height: "auto" }}
        />
        <p className="font-change text-2xl italic leading-relaxed">
          Learning, building, and turning{" "}
          <span className="text-red-800">ideas</span> into{" "}
          <span className="text-red-800">experiences.</span>
        </p>
      </div>
      <div className="mt-8 flex gap-3">
        <a
          href="https://x.com/branover9000"
          className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-black bg-black text-white transition-colors hover:border-red-800 hover:bg-red-800"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Brandon Marshall on X"
        >
          <FaXTwitter size={20} />
        </a>

        <a
          href="https://github.com/branover9000"
          className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-black bg-black text-white transition-colors hover:border-red-800 hover:bg-red-800"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Brandon Marshall on GitHub"
        >
          <FaGithub size={20} />
        </a>

        <a
          href="https://www.youtube.com/@branover9000"
          className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-black bg-black text-white transition-colors hover:border-red-800 hover:bg-red-800"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Brandon Marshall on YouTube"
        >
          <FaYoutube size={20} />
        </a>
      </div>
    </section>
  );
}
