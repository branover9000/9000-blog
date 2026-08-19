import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h2: ({ children }) => (
    <h2 className="font-cabazon text-3xl mt-8 mb-3">
      {children}
    </h2>
  ),
};

export function useMDXComponents(): MDXComponents {
  return mdxComponents;
}