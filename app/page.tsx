import Image from "next/image";
import { FaGithub, FaYoutube, FaXTwitter } from "react-icons/fa6";
import SocialLink from "@/components/SocialLink";

export default function Home() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-145px)] w-full max-w-6xl flex-col items-center justify-center px-12 pb-24 pt-8 text-center max-md:min-h-0 max-md:px-6 max-md:pb-12 max-md:pt-8">
      <div className="w-full">
        <Image
          src="/images/skull.png"
          alt="Skull illustration"
          width={256}
          height={274}
          loading="eager"
          className="mx-auto mb-4 max-w-full"
          style={{ width: "230px", height: "auto" }}
        />
        <h1 className="font-cabazon text-8xl leading-none text-red-800 max-md:text-5xl">Brandon Marshall</h1>
        <p className="mt-2 font-cabazon text-6xl leading-none max-md:text-3xl">Creative Developer</p>
        <Image
          src="/images/dividers/navbar-divider2.svg"
          alt=""
          width={206}
          height={17}
          className="mx-auto my-6 max-w-full"
          style={{ width: "370px", height: "auto" }}
        />
        <p className="font-change text-2xl italic leading-relaxed max-md:text-lg">
          Learning, building, and turning{" "}
          <span className="text-red-800">ideas</span> into{" "}
          <span className="text-red-800">experiences.</span>
        </p>
      </div>
      <div className="mt-8 flex gap-3">
        <SocialLink href="https://x.com/branover9000" ariaLabel="Visit Brandon Marshall on X">
          <FaXTwitter size={20} />
        </SocialLink>
        <SocialLink href="https://github.com/branover9000" ariaLabel="Visit Brandon Marshall on GitHub">
          <FaGithub size={20} />
        </SocialLink>
        <SocialLink href="https://www.youtube.com/@branover9000" ariaLabel="Visit Brandon Marshall on YouTube">
          <FaYoutube size={20} />
        </SocialLink>
      </div>
    </section>
  );
}
