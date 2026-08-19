import Image from "next/image";
import { FaGithub, FaYoutube, FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center py-4">
      <Image
        src="/images/skull.png"
        alt="Skull illustration"
        width={256}
        height={274}
        loading="eager"
        style={{ width: "200px", height: "auto" }}
      />
      <h1 className="text-7xl font-cabazon text-red-800">Brandon Marshall</h1>
      <p className="text-6xl font-cabazon">Creative Developer</p>
      <Image
        src="/images/dividers/navbar-divider2.svg"
        alt=""
        width={206}
        height={17}
        className="my-4"
        style={{ width: "350px", height: "auto" }}
      />
      <p className="mt-2 text-2xl italic">
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
