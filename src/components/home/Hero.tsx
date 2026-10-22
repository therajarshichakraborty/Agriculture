"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import { BackgroundBeamsWithCollision } from "@/src/components/aceternity/background-beams-collision";
import { FlipWords } from "@/src/components/aceternity/flip-words";
import MultilingualGreeting from "@/src/components/multilingual-greeting";
import HeroAvatarOrbit from "@/src/components/hero-avatar-orbit";
import { portfolio } from "@/src/config/portfolio";

const roles = [
  "Full-Stack Engineer",
  "AI Engineer",
  "TypeScript Developer",
  "System Designer"
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }
});

export function Hero() {
  return (
    <BackgroundBeamsWithCollision className="pt-32 pb-24 md:pt-40 md:pb-32">
      <section className="relative z-10 mx-auto grid w-full max-w-5xl items-center gap-14 px-6 md:px-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="flex min-w-0 flex-col gap-7">
          <motion.div {...fadeUp(0)}>
            <MultilingualGreeting />
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            I build as a{" "}
            <span className="block">
              <FlipWords
                words={roles}
                className="text-brand"
              />
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {portfolio.shortBio}
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="group relative inline-flex h-11 items-center gap-2 overflow-hidden rounded-xl bg-foreground px-5 text-sm font-medium text-background shadow-[0_8px_24px_-10px_var(--brand)] transition-transform active:scale-[0.98]"
            >
              <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              View my work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="/resume.pdf"
              download="rajarshi-chakraborty-resume.pdf"
              className="group inline-flex h-11 items-center gap-2 rounded-xl bg-background/70 px-5 text-sm font-medium text-foreground shadow-[0_0_0_1px_var(--border),0_2px_8px_-2px_rgba(0,0,0,0.08)] backdrop-blur transition-all hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <Download className="size-4 transition-transform group-hover:translate-y-0.5" />
              Download résumé
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center"
        >
          <HeroAvatarOrbit />
        </motion.div>
      </section>
    </BackgroundBeamsWithCollision>
  );
}
