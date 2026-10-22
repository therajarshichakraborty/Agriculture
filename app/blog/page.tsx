import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { allPosts } from "content-collections";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { PageHeader } from "@/src/components/layout/PageHeader";
import { GlowCard } from "@/src/components/aceternity/glow-card";
import { Reveal } from "@/src/components/aceternity/section";
import { getHashnodePosts, HASHNODE_PUBLICATIONS } from "@/src/lib/hashnode";
import { paginate, normalizePage } from "@/src/lib/pagination";
import { portfolio } from "@/src/config/portfolio";
import { cn } from "@/src/lib/utils";

const description =
  "Articles on AI engineering, Node.js, Git and system design by Rajarshi Chakraborty.";

export const metadata: Metadata = {
  title: "Blog",
  description,
  openGraph: { title: "Blog", description },
  twitter: { card: "summary_large_image", title: "Blog", description }
};

export const revalidate = 3600;

const PAGE_SIZE = 9;

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });

export default async function BlogPage({
  searchParams
}: {
  searchParams: Promise<{ page?: string; pub?: string }>;
}) {
  const { page: pageParam, pub } = await searchParams;

  const allArticles = await getHashnodePosts();
  const articles = pub
    ? allArticles.filter((post) => post.publication === pub)
    : allArticles;

  const totalPages = Math.max(1, Math.ceil(articles.length / PAGE_SIZE));
  const { items, pagination } = paginate(articles, {
    page: normalizePage(pageParam, totalPages),
    pageSize: PAGE_SIZE
  });

  const localPosts = [...allPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const hrefFor = (params: { page?: number; pub?: string }) => {
    const query = new URLSearchParams();
    if (params.pub) query.set("pub", params.pub);
    if (params.page && params.page > 1) query.set("page", String(params.page));
    const qs = query.toString();
    return qs ? `/blog?${qs}` : "/blog";
  };

  const filters = [
    { label: "All", value: undefined },
    ...HASHNODE_PUBLICATIONS.map((p) => ({ label: p.name, value: p.name }))
  ];

  return (
    <>
      <PageHeader
        eyebrow={`${allArticles.length + localPosts.length} articles`}
        title="Notes on building software."
        description="Writing on AI engineering, Node.js internals, Git and system design, published across my Hashnode blogs."
      >
        <a
          href={portfolio.blog}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-card px-4 text-sm font-medium transition-colors hover:border-foreground/20"
        >
          Follow on Hashnode <ArrowUpRight className="size-4" />
        </a>
      </PageHeader>

      <section id="blog" className="mx-auto max-w-6xl px-6 pb-16">
        {localPosts.length > 0 && (
          <Reveal className="mb-14">
            <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              On this site
            </h2>
            <ul className="divide-y divide-border rounded-2xl border border-border bg-card">
              {localPosts.map((post) => {
                const slug = post._meta.path.replace(/\.mdx$/, "");
                return (
                  <li key={slug}>
                    <Link
                      href={`/blog/${slug}`}
                      className="group flex items-center justify-between gap-4 px-5 py-4"
                    >
                      <span className="font-medium">{post.title}</span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        {formatDate(post.publishedAt)}
                        <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        )}

        <nav
          aria-label="Filter by publication"
          className="mb-10 flex justify-center"
        >
          <div className="glass inline-flex max-w-full flex-wrap justify-center gap-1 rounded-2xl border border-border p-1">
            {filters.map((filter) => (
              <Link
                key={filter.label}
                href={hrefFor({ pub: filter.value })}
                scroll={false}
                className={cn(
                  "rounded-xl px-4 py-1.5 text-sm font-medium transition-colors",
                  pub === filter.value
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {filter.label}
              </Link>
            ))}
          </div>
        </nav>

        {items.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((post, i) => (
              <Reveal key={post.url} delay={(i % 3) * 0.05}>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <GlowCard className="h-full">
                    <article className="flex h-full flex-col">
                      <div className="relative aspect-video overflow-hidden rounded-t-[calc(var(--radius-2xl)-1px)] border-b border-border bg-secondary">
                        {post.cover && (
                          <Image
                            src={post.cover}
                            alt=""
                            fill
                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                            className="object-cover transition-transform duration-700 group-hover/glow:scale-105"
                          />
                        )}
                        <span className="glass absolute top-3 left-3 rounded-full border border-border px-2.5 py-0.5 text-[11px] font-medium">
                          {post.publication}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col gap-2 p-5">
                        <time className="text-xs text-muted-foreground">
                          {formatDate(post.publishedAt)}
                        </time>
                        <h3 className="line-clamp-2 font-semibold leading-snug tracking-tight">
                          {post.title}
                        </h3>
                        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                          {post.description}
                        </p>
                        <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-medium">
                          Read article
                          <ArrowUpRight className="size-4 transition-transform group-hover/glow:-translate-y-0.5 group-hover/glow:translate-x-0.5" />
                        </span>
                      </div>
                    </article>
                  </GlowCard>
                </a>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-border px-4 py-16 text-center text-muted-foreground">
            Articles are loading from Hashnode.{" "}
            <a
              href={portfolio.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-4"
            >
              Read them there
            </a>{" "}
            in the meantime.
          </div>
        )}

        {pagination.totalPages > 1 && (
          <div className="mt-10 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Page {pagination.page} of {pagination.totalPages}
            </p>
            <div className="flex gap-2">
              {[
                {
                  label: "Previous",
                  enabled: pagination.hasPreviousPage,
                  page: pagination.page - 1
                },
                {
                  label: "Next",
                  enabled: pagination.hasNextPage,
                  page: pagination.page + 1
                }
              ].map((control) =>
                control.enabled ? (
                  <Link
                    key={control.label}
                    href={hrefFor({ pub, page: control.page })}
                    className="flex h-9 items-center rounded-lg border border-border px-3 text-sm transition-colors hover:bg-accent"
                  >
                    {control.label}
                  </Link>
                ) : (
                  <span
                    key={control.label}
                    className="flex h-9 cursor-not-allowed items-center rounded-lg border border-border px-3 text-sm opacity-50"
                  >
                    {control.label}
                  </span>
                )
              )}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
