import type { MetadataRoute } from "next";
import { allPosts } from "content-collections";
import { SITE_URL } from "@/src/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Hashnode articles live on their own domains, so only on-site posts belong here.
  const posts = allPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post._meta.path.replace(/\.mdx$/, "")}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6
  }));

  const routes: MetadataRoute.Sitemap = [
    { path: "", changeFrequency: "weekly", priority: 1.0 },
    { path: "/about", changeFrequency: "monthly", priority: 0.9 },
    { path: "/projects", changeFrequency: "weekly", priority: 0.9 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
    { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
    {
      path: "/projects/case-studies",
      changeFrequency: "monthly",
      priority: 0.6
    }
  ].map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency:
      changeFrequency as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority
  }));

  return [...routes, ...posts];
}
