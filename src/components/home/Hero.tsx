"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { Spotlight } from "@/src/components/aceternity/spotlight";
import { FlipWords } from "@/src/components/aceternity/flip-words";
import { TextGenerateEffect } from "@/src/components/aceternity/text-generate-effect";
import { MovingBorderButton } from "@/src/components/aceternity/moving-border";
import MultilingualGreeting from "@/src/components/multilingual-greeting";
import HeroAvatarOrbit from "@/src/components/hero-avatar-orbit";
import { portfolio } from "@/src/config/portfolio";

const roles = [
  "Full-Stack Engineer",
  "AI Engineer",
  "TypeScript Developer",
  "System Designer"
];

const stats = [
  { value: "Brand Voy", label: "Software Engineer" },
  { value: "IEEE", label: "Published researcher" },
  { value: "10+", label: "Production projects" },
  { value: "8.13", label: "CGPA · CSE" }
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }
});

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Backdrop */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid mask-radial-fade opacity-70" />
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -z-10 h-130 w-225 -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklch,var(--brand)_22%,transparent),transparent)] blur-2xl"
      />
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="var(--brand-2)" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col gap-7">
          {portfolio.available && (
            <motion.div {...fadeUp(0)}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/60 py-1 pr-3 pl-1 text-xs text-muted-foreground backdrop-blur transition-colors hover:text-foreground"
              >
                <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 font-medium text-emerald-500">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                  </span>
                  Available
                </span>
                Open to internships, freelance & full-time roles
                <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          )}

          <motion.div {...fadeUp(0.1)}>
            <MultilingualGreeting />
          </motion.div>

          <motion.h1
            {...fadeUp(0.2)}
            className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            I build as a{" "}
            <FlipWords words={roles} className="text-gradient-brand" />
          </motion.h1>

          <TextGenerateEffect
            words={portfolio.shortBio}
            highlight={["Full-Stack", "TypeScript", "AI", "Engineer", "scalable,", "production-grade"]}
            className="max-w-xl text-base text-muted-foreground md:text-lg"
          />

          <motion.div {...fadeUp(0.4)} className="flex flex-wrap items-center gap-3">
            <MovingBorderButton as={Link} href="/projects" containerClassName="h-11">
              View my work
              <ArrowRight className="size-4" />
            </MovingBorderButton>
            <a
              href="/resume.pdf"
              download="rajarshi-chakraborty-resume.pdf"
              className="inline-flex h-11 items-center gap-2 rounded-[0.875rem] bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              <Download className="size-4" />
              Download résumé
            </a>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-4" />
              {portfolio.location}
            </span>
          </motion.div>

          <motion.dl
            {...fadeUp(0.5)}
            className="mt-2 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label} className="bg-background/80 px-4 py-3 backdrop-blur">
                <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </dt>
                <dd className="mt-0.5 font-display text-lg font-semibold text-foreground">
                  {s.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center"
        >
          <HeroAvatarOrbit />
        </motion.div>
      </div>
    </section>
  );
}
