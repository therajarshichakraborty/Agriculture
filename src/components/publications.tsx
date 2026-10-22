"use client";

import { DATA } from "@/data/resume";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, BookOpen, Calendar, Eye, Users } from "lucide-react";

export function Publications() {
  // Safe fallback check if publications array exists
  const publications = (DATA as any).publications || [];

  if (publications.length === 0) return null;

  const IEEE_XPLORE_URL = "https://ieeexplore.ieee.org/document/11688352";

  return (
    <section id="publications-section" className="relative py-2">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center w-full">
          <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
          <div className="z-10 rounded-full border border-border bg-card/70 px-3.5 py-1 shadow-sm backdrop-blur">
            <span className="text-xs font-medium tracking-wide text-muted-foreground">
              Publications
            </span>
          </div>
          <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
        </div>
        <br />
        <div className="flex flex-col gap-y-3 items-center justify-center">
          <h2 className="text-gradient font-display text-3xl font-semibold tracking-normal sm:text-4xl md:text-5xl inline-block text-center">
            Checkout My Latest Publications
          </h2>
          <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
            Committed to advancing technology through research, technical
            publications, and innovative engineering contributions across
            multiple domains.
          </p>
        </div>

        <div className="flex flex-col mt-2">
          {publications.map((pub: any, index: number) => {
            const pdfHref = pub.pdfUrl || "/pdfs/research-paper.pdf";
            const ieeeHref = IEEE_XPLORE_URL;

            return (
              <div
                key={index}
                className="py-6 flex flex-col gap-y-2 group transition-all duration-300"
              >
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <span className="font-extrabold bg-gradient-to-r from-red-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
                    {pub.status}
                  </span>
                  <span>•</span>
                  <span>Paper ID: {pub.paperId}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="size-3.5 shrink-0" />
                    {pub.date}
                  </span>
                </div>

                {/* Title with Arrow Link on Hover redirecting to IEEE Xplore */}
                <a
                  href={ieeeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-1 group/title w-fit"
                >
                  <h3 className="text-lg font-semibold text-foreground group-hover/title:text-primary transition-colors duration-200 leading-snug">
                    {pub.title}
                  </h3>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground group-hover/title:text-primary group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-all duration-200 mt-1" />
                </a>

                {/* Authors list with dynamic owner highlight */}
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Users className="size-4 shrink-0 mt-0.5 text-muted-foreground/70" />
                  <div className="flex flex-wrap gap-x-1">
                    {pub.authors.map((author: string, authIdx: number) => {
                      const isOwner = author.toLowerCase().includes("rajarshi");
                      return (
                        <span key={authIdx}>
                          <span
                            className={
                              isOwner
                                ? "font-semibold text-foreground underline decoration-primary/30 decoration-2"
                                : "text-muted-foreground/80"
                            }
                          >
                            {author}
                          </span>
                          {authIdx < pub.authors.length - 1 && ","}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Venue / Citation source */}
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <BookOpen className="size-4 shrink-0 mt-0.5 text-muted-foreground/70" />
                  <span className="leading-normal">
                    Published in{" "}
                    <span className="font-semibold text-foreground">
                      {pub.conference}
                    </span>{" "}
                    -{" "}
                    <span className="text-muted-foreground/90">
                      {pub.conferenceFullName}
                    </span>{" "}
                    (IEEE Xplore, Forthcoming)
                  </span>
                </div>

                {/* Summary / Description */}
                <p className="text-sm leading-relaxed text-muted-foreground/90 mt-1 font-sans">
                  {pub.description}
                </p>

                {/* Simple bold text ISBN Details */}
                {(pub.isbn?.electronic || pub.isbn?.pod) && (
                  <div className="flex flex-col sm:flex-row sm:items-center gap-x-4 gap-y-1 text-xs text-muted-foreground mt-1 font-sans">
                    {pub.isbn?.electronic && (
                      <p>
                        <strong className="font-bold text-foreground">
                          Electronic ISBN:
                        </strong>{" "}
                        <span>{pub.isbn.electronic}</span>
                      </p>
                    )}
                    {pub.isbn?.pod && (
                      <p>
                        <strong className="font-bold text-foreground">
                          Print on Demand(PoD) ISBN:
                        </strong>{" "}
                        <span>{pub.isbn.pod}</span>
                      </p>
                    )}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 mt-3">
                  <Button
                    variant="default"
                    size="default"
                    className="gap-2 group font-semibold"
                    nativeButton={false}
                    render={
                      <a
                        href={pdfHref}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                  >
                    <Eye className="size-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                    <span>View Paper</span>
                  </Button>

                  <Button
                    variant="outline"
                    size="default"
                    className="gap-2 group font-semibold bg-background text-foreground border border-input transition-all duration-300 ease-out hover:scale-[1.04] hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/5 dark:hover:shadow-white/5 active:scale-[0.98]"
                    nativeButton={false}
                    render={
                      <a
                        href={ieeeHref}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                  >
                    <span>IEEE Xplore</span>
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Publications;
