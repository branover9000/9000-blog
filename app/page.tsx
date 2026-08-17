import Image from "next/image";
import { FaGithub, FaYoutube, FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center">
      <Image
        src="/images/skull.png"
        alt="Skull illustration"
        width={150}
        height={150}
      />
      <h1 className="text-6xl font-cabazon text-red-800">Brandon Marshall</h1>
      <p className="text-4xl font-cabazon">Creative Developer</p>
      <div className="w-64 border-t-2 border-black my-4" />
      <p className="mt-4 text-xl italic">
        Learning, building, and turning{" "}
        <span className="text-red-800">ideas</span> into{" "}
        <span className="text-red-800">experiences.</span>
      </p>
      <div className="flex gap-4 mt-4">
        <a
          href="https://x.com/branover9000"
          className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-red-800 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter size={20}/>
        </a>

        <a
          href="https://github.com/branover9000"
          className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-red-800 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={20}/>
        </a>

        <a
          href="https://www.youtube.com/@branover9000"
          className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-red-800 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube size={20}/>
        </a>
      </div>
    </section>
  );
}
