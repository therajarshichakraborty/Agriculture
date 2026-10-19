// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import remarkGfm from "remark-gfm";
import { z } from "zod";

// src/lib/remark-code-meta.ts
function remarkCodeMeta() {
  return (tree) => {
    const walk = (node) => {
      if (!node || typeof node !== "object") return;
      if (node.type === "code") {
        const meta = node.meta;
        if (meta) {
          node.data ||= {};
          node.data.hProperties ||= {};
          node.data.hProperties["data-meta"] = meta;
          const titleMatch = meta.match(/title="([^"]+)"/);
          if (titleMatch?.[1]) {
            node.data.hProperties["data-title"] = titleMatch[1];
          }
        }
      }
      const children = node.children;
      if (Array.isArray(children)) {
        for (const child of children) walk(child);
      }
    };
    walk(tree);
  };
}

// content-collections.ts
var posts = defineCollection({
  name: "posts",
  directory: "content",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    publishedAt: z.string(),
    updatedAt: z.string().optional(),
    author: z.string().optional(),
    summary: z.string(),
    image: z.string().optional(),
    content: z.string()
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm, remarkCodeMeta]
    });
    return {
      ...document,
      mdx
    };
  }
});
var content_collections_default = defineConfig({
  collections: [posts]
});
export {
  content_collections_default as default
};
