import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import PostImage from "./components/PostImage";

export const mdxComponents: MDXComponents = {
  PostImage,

  code: ({ children }) => (
    <code className="bg-border px-1.5 py-0.5 text-sm text-surface">{children}</code>
  ),

  blockquote: ({ children }) => (
    <blockquote className="my-8 border-l-4 border-accent pl-5 text-xl italic leading-relaxed max-md:my-4 max-md:text-base">{children}</blockquote>
  ),

  ol: ({ children }) => <ol className="mt-5 list-decimal space-y-2 pl-6 leading-relaxed max-md:mt-3">{children}</ol>,

  ul: ({ children }) => <ul className="mt-5 list-disc space-y-2 pl-6 leading-relaxed max-md:mt-3">{children}</ul>,

  h2: ({ children }) => (
    <h2 className="mt-12 border-t-2 border-accent pt-5 font-cabazon text-4xl leading-none max-md:mt-6 max-md:text-2xl">{children}</h2>
  ),

  p: ({ children }) => <p className="mt-5 leading-relaxed max-md:mt-3">{children}</p>,

  h3: ({ children }) => (
    <h3 className="mt-8 font-cabazon text-3xl leading-none max-md:mt-4 max-md:text-xl">{children}</h3>
  ),

  a: ({ children, href }) => (
    <a href={href} className="border-b-2 border-accent pb-0.5 text-accent transition-colors hover:border-border hover:text-border">
      {children}
    </a>
  ),

  img: ({ src, alt }) => (
    <Image
      src={src as string}
      alt={alt ?? ""}
      width={1200}
      height={800}
      className="mt-8 h-auto w-full border-2 border-border max-md:mt-4"
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return mdxComponents;
}
