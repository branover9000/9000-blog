import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import PostImage from "./components/PostImage";

export const mdxComponents: MDXComponents = {
  PostImage,

  code: ({ children }) => (
    <code className="bg-black px-1.5 py-0.5 text-sm text-[#fffdf7]">{children}</code>
  ),

  blockquote: ({ children }) => (
    <blockquote className="my-8 border-l-4 border-red-800 pl-5 text-xl italic leading-relaxed">{children}</blockquote>
  ),

  ol: ({ children }) => <ol className="mt-5 list-decimal space-y-2 pl-6 leading-relaxed">{children}</ol>,

  ul: ({ children }) => <ul className="mt-5 list-disc space-y-2 pl-6 leading-relaxed">{children}</ul>,

  h2: ({ children }) => (
    <h2 className="mt-12 border-t-2 border-red-800 pt-5 font-cabazon text-4xl leading-none">{children}</h2>
  ),

  p: ({ children }) => <p className="mt-5 leading-relaxed">{children}</p>,

  h3: ({ children }) => (
    <h3 className="mt-8 font-cabazon text-3xl leading-none">{children}</h3>
  ),

  a: ({ children, href }) => (
    <a href={href} className="border-b-2 border-red-800 pb-0.5 text-red-800 transition-colors hover:border-black hover:text-black">
      {children}
    </a>
  ),

  img: ({ src, alt }) => (
    <Image
      src={src as string}
      alt={alt ?? ""}
      width={1200}
      height={800}
      className="mt-8 h-auto w-full border-2 border-black"
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return mdxComponents;
}
