import type { ReactNode } from "react";
import { Spotlight } from "@/src/components/aceternity/spotlight";
import { Eyebrow, Reveal } from "@/src/components/aceternity/section";

/** Hero band shared by inner pages (About, Projects, Contact, Blog). */
export function PageHeader({
  eyebrow,
  title,
  description,
  children
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="relative isolate overflow-hidden pt-20 pb-14 md:pt-28 md:pb-20">
      <div aria-hidden className="absolute inset-0 -z-10 bg-dot mask-radial-fade opacity-80" />
      <Spotlight className="-top-40 left-0 md:-top-24 md:left-72" fill="var(--brand)" />
      <Reveal className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-6 text-center">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="text-gradient text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        )}
        {children}
      </Reveal>
    </header>
  );
}
