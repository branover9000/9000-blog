import Image from "next/image";
import { FaGithub, FaYoutube, FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center py-4">
      <Image
        src="/images/skull.png"
        alt="Skull illustration"
        width={150}
        height={150}
      />
      <h1 className="text-5xl font-cabazon text-red-800">Brandon Marshall</h1>
      <p className="text-3xl font-cabazon">Creative Developer</p>
      <Image
        src="/images/dividers/navbar-divider2.svg"
        alt=""
        width={250}
        height={15}
        className="my-4"
      />
      <p className="mt-2 text-xl italic">
        Learning, building, and turning{" "}
        <span className="text-red-800">ideas</span> into{" "}
        <span className="text-red-800">experiences.</span>
      </p>
      <div className="flex gap-4 mt-4">
        <a
          href="https://x.com/branover9000"
          className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-red-800 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter size={20} />
        </a>

        <a
          href="https://github.com/branover9000"
          className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-red-800 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={20} />
        </a>

        <a
          href="https://www.youtube.com/@branover9000"
          className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-red-800 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube size={20} />
        </a>
      </div>
    </section>
  );
}
