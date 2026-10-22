import BlurFade from "@/components/magicui/blur-fade";
import { allPosts } from "content-collections";
import Link from "next/link";
import type { Metadata } from "next";
import { paginate, normalizePage } from "@/lib/pagination";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { PageHeader } from "@/src/components/layout/PageHeader";
import { portfolio } from "@/src/config/portfolio";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on software development, life, and more.",
  openGraph: {
    title: "Blog",
    description: "Thoughts on software development, life, and more."
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog",
    description: "Thoughts on software development, life, and more."
  }
};

const PAGE_SIZE = 5;
const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage({
  searchParams
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;

  const posts = allPosts;
  const sortedPosts = [...posts].sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });

  const totalPages = Math.ceil(sortedPosts.length / PAGE_SIZE);
  const currentPage = normalizePage(pageParam, totalPages);
  const { items: paginatedPosts, pagination } = paginate(sortedPosts, {
    page: currentPage,
    pageSize: PAGE_SIZE
  });

  return (
    <>
      <PageHeader
        eyebrow={`${sortedPosts.length} posts`}
        title="Notes on building software."
        description="Thoughts on engineering, system design and AI. More long-form writing lives on Hashnode."
      >
        <a
          href={portfolio.blog}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-card px-4 text-sm font-medium transition-colors hover:border-foreground/20"
        >
          Read on Hashnode <ArrowUpRight className="size-4" />
        </a>
      </PageHeader>
      <section id="blog" className="mx-auto max-w-3xl px-6 pb-16">
        {paginatedPosts.length > 0 ? (
          <>
            <BlurFade delay={BLUR_FADE_DELAY * 2}>
              <div className="flex flex-col gap-5">
                {paginatedPosts.map((post, id) => {
                  const slug = post._meta.path.replace(/\.mdx$/, "");
                  const indexNumber =
                    (pagination.page - 1) * PAGE_SIZE + id + 1;
                  return (
                    <BlurFade
                      delay={BLUR_FADE_DELAY * 3 + id * 0.05}
                      key={slug}
                    >
                      <Link
                        className="flex items-start gap-x-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        href={`/blog/${slug}`}
                      >
                        <span className="text-xs font-mono tabular-nums font-medium mt-[5px]">
                          {String(indexNumber).padStart(2, "0")}.
                        </span>
                        <div className="flex flex-col gap-y-2 flex-1">
                          <p className="tracking-tight text-lg font-medium">
                            <span className="group-hover:text-foreground transition-colors">
                              {post.title}
                              <ChevronRight
                                className="ml-1 inline-block size-4 stroke-3 text-muted-foreground opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                                aria-hidden
                              />
                            </span>
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {post.publishedAt}
                          </p>
                        </div>
                      </Link>
                    </BlurFade>
                  );
                })}
              </div>
            </BlurFade>

            {/* Pagination Controls */}
            {pagination.totalPages > 1 && (
              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <div className="flex gap-3 flex-row items-center justify-between mt-8">
                  <div className="text-sm text-muted-foreground">
                    Page {pagination.page} of {pagination.totalPages}
                  </div>
                  <div className="flex gap-2 sm:justify-end">
                    {pagination.hasPreviousPage ? (
                      <Link
                        href={`/blog?page=${pagination.page - 1}`}
                        className="h-8 w-fit px-2 flex items-center justify-center text-sm border border-border rounded-lg hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        Previous
                      </Link>
                    ) : (
                      <span className="h-8 w-fit px-2 flex items-center justify-center text-sm border border-border rounded-lg opacity-50 cursor-not-allowed">
                        Previous
                      </span>
                    )}
                    {pagination.hasNextPage ? (
                      <Link
                        href={`/blog?page=${pagination.page + 1}`}
                        className="h-8 w-fit px-2 flex items-center justify-center text-sm border border-border rounded-lg hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        Next
                      </Link>
                    ) : (
                      <span className="h-8 w-fit px-2 flex items-center justify-center text-sm border border-border rounded-lg opacity-50 cursor-not-allowed">
                        Next
                      </span>
                    )}
                  </div>
                </div>
              </BlurFade>
            )}
          </>
        ) : (
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="flex flex-col items-center justify-center py-12 px-4 border border-border rounded-xl">
              <p className="text-muted-foreground text-center">
                No blog posts yet. Check back soon!
              </p>
            </div>
          </BlurFade>
        )}
      </section>
    </>
  );
}
