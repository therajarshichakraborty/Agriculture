"use client";

import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Card3D } from "@/src/components/aceternity/card-3d";
import { Reveal } from "@/src/components/aceternity/section";
import { portfolio } from "@/src/config/portfolio";
import { DATA } from "@/src/data/resume";

export function Bio() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-12">
      <div className="grid items-start gap-12 md:grid-cols-[320px_1fr] md:gap-16">
        <Reveal>
          <Card3D className="mx-auto w-full max-w-xs">
            <div className="relative aspect-4/5 overflow-hidden rounded-3xl border border-border bg-secondary shadow-2xl">
              <Image
                src={`/${DATA.avatarUrl}`}
                alt={portfolio.name}
                fill
                sizes="320px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/30 to-transparent p-5 text-white">
                <p className="font-display text-xl font-semibold">{portfolio.name}</p>
                <p className="text-sm text-white/70">{portfolio.role}</p>
              </div>
            </div>
          </Card3D>
        </Reveal>

        <Reveal delay={0.1} className="space-y-6">
          <div className="prose prose-neutral max-w-none leading-relaxed dark:prose-invert prose-p:text-muted-foreground prose-strong:text-foreground">
            <ReactMarkdown>{DATA.summary}</ReactMarkdown>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <MapPin className="size-4" /> {portfolio.location}
            </span>
            <a href={`mailto:${portfolio.email}`} className="flex items-center gap-2 hover:text-foreground">
              <Mail className="size-4" /> {portfolio.email}
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Get in touch
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-card px-5 text-sm font-medium transition-colors hover:border-foreground/20"
            >
              View résumé <ArrowUpRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
