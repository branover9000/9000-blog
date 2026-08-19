import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import PostImage from "./components/PostImage";

export const mdxComponents: MDXComponents = {
  PostImage,

  code: ({ children }) => (
    <code className="px-1 py-0.5 rounded">{children}</code>
  ),

  blockquote: ({ children }) => (
    <blockquote className="border-l-2 pl-4 my-6 italic">{children}</blockquote>
  ),

  ol: ({ children }) => <ol className="list-decimal pl-6 mt-4">{children}</ol>,

  ul: ({ children }) => <ul className="list-disc pl-6 mt-4">{children}</ul>,

  h2: ({ children }) => (
    <h2 className="font-cabazon text-3xl mt-8 mb-3">{children}</h2>
  ),

  p: ({ children }) => <p className="mt-4 leading-7">{children}</p>,

  h3: ({ children }) => (
    <h3 className="font-cabazon text-2xl mt-6 mb-2">{children}</h3>
  ),

  a: ({ children, href }) => (
    <a href={href} className="underline">
      {children}
    </a>
  ),

  img: ({ src, alt }) => (
    <Image
      src={src as string}
      alt={alt ?? ""}
      width={1200}
      height={800}
      className="w-full h-auto mt-6"
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return mdxComponents;
}
