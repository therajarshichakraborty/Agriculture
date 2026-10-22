// Reads Rajarshi's Hashnode publications through their public RSS feeds.
// (Hashnode's GraphQL API no longer serves anonymous requests.)

export const HASHNODE_PUBLICATIONS = [
  { name: "The Debug Monk", host: "the-debug-monk.hashnode.dev" },
  { name: "WebDev Cohort 2026", host: "webdev-cohort-2026.hashnode.dev" },
  { name: "Git For All", host: "git-for-all.hashnode.dev" }
] as const;

export type HashnodePost = {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  cover: string | null;
  publication: string;
};

const tag = (xml: string, name: string) => {
  const match = xml.match(new RegExp(`<${name}>([\\s\\S]*?)</${name}>`));
  if (!match) return "";
  return match[1]
    .replace(/^<!\[CDATA\[/, "")
    .replace(/\]\]>$/, "")
    .trim();
};

async function fetchFeed(
  publication: (typeof HASHNODE_PUBLICATIONS)[number]
): Promise<HashnodePost[]> {
  try {
    const res = await fetch(`https://${publication.host}/rss.xml`, {
      next: { revalidate: 3600 }
    });
    if (!res.ok) return [];
    const xml = await res.text();

    return Array.from(xml.matchAll(/<item>([\s\S]*?)<\/item>/g), ([, item]) => ({
      title: tag(item, "title"),
      description: tag(item, "description"),
      url: tag(item, "link"),
      publishedAt: tag(item, "pubDate"),
      cover: item.match(/<enclosure url="([^"]+)"/)?.[1] ?? null,
      publication: publication.name
    })).filter((post) => post.title && post.url);
  } catch {
    return [];
  }
}

/** All posts across publications, newest first. Never throws. */
export async function getHashnodePosts(): Promise<HashnodePost[]> {
  const feeds = await Promise.all(HASHNODE_PUBLICATIONS.map(fetchFeed));
  return feeds
    .flat()
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}
