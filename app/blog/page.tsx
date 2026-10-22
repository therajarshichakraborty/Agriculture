import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/src/components/layout/PageHeader";
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

const PAGE_SIZE = 8;

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });

const pad = (n: number) => String(n).padStart(2, "0");

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
  const offset = (pagination.page - 1) * PAGE_SIZE;

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

  const controls = [
    {
      label: "Previous",
      icon: ArrowLeft,
      enabled: pagination.hasPreviousPage,
      page: pagination.page - 1
    },
    {
      label: "Next",
      icon: ArrowRight,
      enabled: pagination.hasNextPage,
      page: pagination.page + 1
    }
  ];

  return (
    <>
      <PageHeader
        plain
        title="Things I learned the hard way."
        description={`${allArticles.length} posts on JavaScript, Node.js, networking, Git and AI, written the way I wish someone had explained them to me.`}
      />

      <section id="blog" className="mx-auto max-w-3xl px-6 pb-24">
        {/* Publication filter: plain text tabs, the active one in black */}
        <Reveal>
          <nav
            aria-label="Filter by publication"
            className="mb-10 flex items-end gap-4 border-b border-border text-sm"
          >
            {/* One row that scrolls sideways on narrow screens */}
            <div className="flex min-w-0 flex-1 gap-6 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {filters.map((filter) => {
                const active = pub === filter.value;
                return (
                  <Link
                    key={filter.label}
                    href={hrefFor({ pub: filter.value })}
                    scroll={false}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "border-b-2 pb-3 font-medium transition-colors",
                      active
                        ? "border-foreground text-foreground"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {filter.label}
                  </Link>
                );
              })}
            </div>
            <span className="shrink-0 pb-3.5 text-xs font-semibold text-muted-foreground tabular-nums">
              {articles.length} {articles.length === 1 ? "post" : "posts"}
            </span>
          </nav>
        </Reveal>

        {items.length > 0 ? (
          <ol className="flex flex-col">
            {items.map((post, i) => (
              <li key={post.url}>
                <Reveal delay={i * 0.04}>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex gap-4 py-5 sm:gap-6"
                  >
                    <span className="pt-1 font-mono text-sm font-semibold text-muted-foreground tabular-nums transition-colors group-hover:text-foreground">
                      {pad(offset + i + 1)}.
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-start gap-2">
                        <span className="text-lg font-semibold leading-snug tracking-tight text-foreground decoration-foreground/30 underline-offset-4 group-hover:underline sm:text-xl">
                          {post.title}
                        </span>
                        <ArrowUpRight
                          aria-hidden="true"
                          className="mt-1.5 size-4 shrink-0 -translate-x-1 text-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                        />
                      </span>
                      <span className="mt-2 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm text-muted-foreground">
                        <time
                          dateTime={new Date(post.publishedAt).toISOString()}
                        >
                          {formatDate(post.publishedAt)}
                        </time>
                        <span
                          aria-hidden="true"
                          className="size-1 rounded-full bg-foreground"
                        />
                        <span>{post.publication}</span>
                      </span>
                    </span>
                  </a>
                </Reveal>
              </li>
            ))}
          </ol>
        ) : (
          <p className="py-16 text-center text-muted-foreground">
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
          </p>
        )}

        {pagination.totalPages > 1 && (
          <div className="mt-10 flex items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              Page{" "}
              <span className="font-semibold text-foreground">
                {pagination.page}
              </span>{" "}
              of {pagination.totalPages}
            </p>
            <div className="flex gap-2">
              {controls.map((control) => {
                const Icon = control.icon;
                const body = (
                  <>
                    {control.label === "Previous" && (
                      <Icon aria-hidden="true" className="size-4" />
                    )}
                    {control.label}
                    {control.label === "Next" && (
                      <Icon aria-hidden="true" className="size-4" />
                    )}
                  </>
                );
                return control.enabled ? (
                  <Link
                    key={control.label}
                    href={hrefFor({ pub, page: control.page })}
                    className="inline-flex h-10 items-center gap-1.5 rounded-xl border border-border bg-background px-4 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-foreground/25 hover:shadow-sm active:scale-[0.98]"
                  >
                    {body}
                  </Link>
                ) : (
                  <span
                    key={control.label}
                    aria-disabled="true"
                    className="inline-flex h-10 items-center gap-1.5 rounded-xl border border-border px-4 text-sm font-medium opacity-40"
                  >
                    {body}
                  </span>
                );
              })}
            </div>
          </div>
        )}

        <Reveal className="mt-14 flex justify-center">
          <a
            href={portfolio.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-10 items-center gap-2 rounded-xl bg-foreground px-5 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:bg-foreground/85 hover:shadow-lg hover:shadow-foreground/15"
          >
            Follow on Hashnode
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </Reveal>
      </section>
    </>
  );
}
