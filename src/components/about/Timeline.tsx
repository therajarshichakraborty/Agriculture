"use client";

import Image from "next/image";
import { Fragment, useRef, type ReactNode } from "react";
import { motion, useInView, useScroll, useSpring } from "motion/react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Reveal } from "@/src/components/aceternity/section";

/** Renders `**text**` spans as emphasized inline text. */
export function Emphasis({ text }: { text: string }) {
  return (
    <>
      {text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
        i % 2 ? (
          <strong key={i} className="font-semibold text-foreground">
            {part}
          </strong>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  );
}

/** Bullet list with solid dots that match the text colour. */
export function Highlights({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-[15px] leading-relaxed text-foreground"
        >
          <span
            aria-hidden="true"
            className="mt-2.5 size-1.5 shrink-0 rounded-full bg-foreground"
          />
          <span>
            <Emphasis text={item} />
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Open, card-free timeline: logos sit on a thin connecting line. */
export function Timeline({ children }: { children: ReactNode }) {
  return <ol className="relative">{children}</ol>;
}

export function TimelineItem({
  index,
  logo,
  title,
  org,
  href,
  location,
  period,
  children
}: {
  index: number;
  logo: string;
  title: string;
  org: string;
  href?: string;
  location: string;
  period: string;
  children: ReactNode;
}) {
  // The connector fills in black as this entry scrolls past the middle of the screen.
  const itemRef = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start 60%", "end 60%"]
  });
  const fill = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    mass: 0.3
  });
  // Watch the whole entry: the 40px logo alone is too small to trigger
  // reliably on phones, which left it stuck invisible.
  const entered = useInView(itemRef, { once: true, margin: "-80px" });

  return (
    <li ref={itemRef} className="group/item relative pb-14 last:pb-0">
      <span
        aria-hidden="true"
        className="absolute top-13 bottom-1 left-5 w-px overflow-hidden bg-border group-last/item:hidden"
      >
        <motion.span
          style={{ scaleY: fill }}
          className="absolute inset-0 origin-top bg-foreground"
        />
      </span>

      <Reveal delay={index * 0.05} className="relative pl-14 sm:pl-16">
        <motion.span
          initial={{ scale: 0.6, opacity: 0 }}
          animate={entered ? { scale: 1, opacity: 1 } : undefined}
          transition={{ type: "spring", stiffness: 320, damping: 18 }}
          className="absolute top-0 left-0 flex size-10 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-border transition-shadow duration-300 group-hover/item:shadow-md group-hover/item:ring-foreground/30"
        >
          <Image
            src={logo}
            alt={org}
            width={40}
            height={40}
            className="size-full object-contain"
          />
        </motion.span>

        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <div className="min-w-0">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              {title}
            </h3>
            <p className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm text-muted-foreground">
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/org inline-flex items-center gap-0.5 font-medium text-foreground/80 transition-colors hover:text-foreground"
                >
                  {org}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-3 transition-transform group-hover/org:translate-x-0.5 group-hover/org:-translate-y-0.5"
                  />
                </a>
              ) : (
                <span className="font-medium text-foreground/80">{org}</span>
              )}
              <span aria-hidden="true" className="hidden sm:inline">
                ·
              </span>
              <span className="inline-flex items-center gap-1">
                <MapPin aria-hidden="true" className="size-3" />
                {location}
              </span>
            </p>
          </div>
          <span className="shrink-0 text-sm font-medium tabular-nums text-muted-foreground sm:pt-1">
            {period}
          </span>
        </div>

        <div className="mt-4 space-y-4">{children}</div>
      </Reveal>
    </li>
  );
}
