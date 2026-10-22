// Reads Rajarshi's Hashnode publications without the GraphQL API, which no
// longer serves anonymous requests. Each publication's sitemap is the full
// post list; the RSS feed (newest 20 only) supplies most details, and any
// older post is filled in from its own page's meta tags.

export const HASHNODE_PUBLICATIONS = [
  { name: "The Debug Monk", host: "the-debug-monk.hashnode.dev" },
  { name: "WebDev Cohort 2026", host: "webdev-cohort-2026.hashnode.dev" },
  { name: "Git For All", host: "git-for-all.hashnode.dev" }
] as const;

type Publication = (typeof HASHNODE_PUBLICATIONS)[number];

export type HashnodePost = {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  cover: string | null;
  publication: string;
};

const REVALIDATE = { next: { revalidate: 3600 } };

const tag = (xml: string, name: string) => {
  const match = xml.match(new RegExp(`<${name}>([\\s\\S]*?)</${name}>`));
  if (!match) return "";
  return match[1]
    .replace(/^<!\[CDATA\[/, "")
    .replace(/\]\]>$/, "")
    .trim();
};

const decode = (text: string) =>
  text
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .trim();

const normalizeUrl = (url: string) => url.replace(/\/+$/, "");

async function fetchText(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, REVALIDATE);
    return res.ok ? await res.text() : null;
  } catch {
    return null;
  }
}

async function fetchFeed(publication: Publication): Promise<HashnodePost[]> {
  const xml = await fetchText(`https://${publication.host}/rss.xml`);
  if (!xml) return [];
  return Array.from(xml.matchAll(/<item>([\s\S]*?)<\/item>/g), ([, item]) => ({
    title: tag(item, "title"),
    description: tag(item, "description"),
    url: normalizeUrl(tag(item, "link")),
    publishedAt: tag(item, "pubDate"),
    cover: item.match(/<enclosure url="([^"]+)"/)?.[1] ?? null,
    publication: publication.name
  })).filter((post) => post.title && post.url);
}

/** Every post URL in the publication, skipping the home and archive pages. */
async function fetchSitemap(publication: Publication): Promise<string[]> {
  const xml = await fetchText(`https://${publication.host}/sitemap.xml`);
  if (!xml) return [];
  const home = `https://${publication.host}`;
  return Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g), ([, loc]) =>
    normalizeUrl(loc.trim())
  ).filter((url) => url !== home && !url.endsWith("/archive"));
}

/** Builds a post from the meta tags on its own page. */
async function fetchPostPage(
  url: string,
  publication: Publication
): Promise<HashnodePost | null> {
  const html = await fetchText(url);
  if (!html) return null;
  const meta = (attr: string) =>
    decode(
      html.match(
        new RegExp(`<meta (?:property|name)="${attr}" content="([^"]*)"`)
      )?.[1] ?? ""
    );
  const title = meta("og:title");
  if (!title) return null;
  return {
    title,
    description: meta("og:description") || meta("description"),
    url,
    publishedAt:
      meta("article:published_time") ||
      (html.match(/"datePublished":"([^"]+)"/)?.[1] ?? ""),
    cover: meta("og:image") || null,
    publication: publication.name
  };
}

async function fetchPublication(
  publication: Publication
): Promise<HashnodePost[]> {
  const [feed, urls] = await Promise.all([
    fetchFeed(publication),
    fetchSitemap(publication)
  ]);
  const known = new Set(feed.map((post) => post.url));
  const missing = await Promise.all(
    urls
      .filter((url) => !known.has(url))
      .map((url) => fetchPostPage(url, publication))
  );
  return [...feed, ...missing.filter((post) => post !== null)];
}

/** All posts across publications, newest first. Never throws. */
export async function getHashnodePosts(): Promise<HashnodePost[]> {
  const posts = await Promise.all(HASHNODE_PUBLICATIONS.map(fetchPublication));
  return posts
    .flat()
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}
