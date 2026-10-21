import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import PostImage from "./components/PostImage";

export const mdxComponents: MDXComponents = {
  PostImage,

  code: ({ children }) => (
    <code className="break-words bg-border px-1.5 py-0.5 text-base text-surface">{children}</code>
  ),

  blockquote: ({ children }) => (
    <blockquote className="my-8 border-l-4 border-accent pl-5 text-2xl italic leading-relaxed max-md:my-5 max-md:text-xl">{children}</blockquote>
  ),

  ol: ({ children }) => <ol className="mt-5 list-decimal space-y-2 pl-7 leading-relaxed">{children}</ol>,

  ul: ({ children }) => <ul className="mt-5 list-disc space-y-2 pl-7 leading-relaxed">{children}</ul>,

  h2: ({ children }) => (
    <h2 className="mt-12 border-t border-accent/40 pt-5 font-display text-5xl leading-[0.9] max-md:mt-9 max-md:text-4xl">{children}</h2>
  ),

  p: ({ children }) => <p className="mt-5 leading-relaxed">{children}</p>,

  h3: ({ children }) => (
    <h3 className="mt-8 font-display text-4xl leading-[0.92]">{children}</h3>
  ),

  a: ({ children, href }) => (
    <a href={href} className="border-b border-accent pb-0.5 text-accent transition-colors hover:border-border hover:text-border">
      {children}
    </a>
  ),

  img: ({ src, alt }) => (
    <Image
      src={src as string}
      alt={alt ?? ""}
      width={1200}
      height={800}
      className="my-8 h-auto w-full border border-border/20"
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return mdxComponents;
}
