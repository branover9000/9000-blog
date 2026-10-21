import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import PostImage from "./components/PostImage";

export const mdxComponents: MDXComponents = {
  PostImage,

  code: ({ children }) => (
    <code className="bg-border px-1.5 py-0.5 text-base text-surface">{children}</code>
  ),

  blockquote: ({ children }) => (
    <blockquote className="my-10 border-l-2 border-accent pl-6 text-2xl italic leading-relaxed max-md:my-6">{children}</blockquote>
  ),

  ol: ({ children }) => <ol className="mt-6 list-decimal space-y-2 pl-7 leading-relaxed">{children}</ol>,

  ul: ({ children }) => <ul className="mt-6 list-disc space-y-2 pl-7 leading-relaxed">{children}</ul>,

  h2: ({ children }) => (
    <h2 className="mt-16 border-t border-accent pt-6 font-display text-5xl leading-[0.86] sm:text-6xl">{children}</h2>
  ),

  p: ({ children }) => <p className="mt-6 leading-relaxed">{children}</p>,

  h3: ({ children }) => (
    <h3 className="mt-10 font-display text-4xl leading-[0.86]">{children}</h3>
  ),

  a: ({ children, href }) => (
    <a href={href} className="border-b border-accent pb-0.5 text-accent hover:border-border hover:text-border">
      {children}
    </a>
  ),

  img: ({ src, alt }) => (
    <Image
      src={src as string}
      alt={alt ?? ""}
      width={1200}
      height={800}
      className="mt-10 h-auto w-full border border-border"
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return mdxComponents;
}
