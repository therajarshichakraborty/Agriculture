"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Download, Eye } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { FlipWords } from "@/src/components/aceternity/flip-words";
import MultilingualGreeting from "@/src/components/multilingual-greeting";
import HeroAvatarOrbit from "@/src/components/hero-avatar-orbit";
import { portfolio } from "@/src/config/portfolio";

const roles = [
  "Full-Stack Engineer",
  "AI Engineer",
  "System Architect"
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }
});

export function Hero() {
  return (
    <section className="relative pt-20 pb-8 md:pt-28 md:pb-10">
      <div className="relative z-10 mx-auto grid w-full max-w-5xl items-center gap-14 px-6 md:px-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="flex min-w-0 flex-col gap-7">
          <motion.div {...fadeUp(0)}>
            <MultilingualGreeting />
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="font-display text-[1.75rem] font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            <FlipWords
              words={roles}
              gradient="linear-gradient(90deg, #ef4444, #ec4899, #8b5cf6)"
            />
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {portfolio.shortBio}
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center gap-3">
            <Button
              className="group relative gap-2 overflow-hidden font-semibold transition-all duration-300 ease-out hover:scale-[1.04] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-pink-500/25 active:scale-[0.98]"
              nativeButton={false}
              render={<Link href="/projects" />}
            >
              {/* Periodic light sweep across the button */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 w-1/3 animate-[btn-shine_3.6s_ease-in-out_infinite] bg-linear-to-r from-transparent via-white/45 to-transparent dark:via-black/20 motion-reduce:hidden"
              />
              {/* Brand gradient underline that grows in on hover */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-3 bottom-0 h-0.5 origin-left scale-x-0 rounded-full bg-linear-to-r from-red-500 via-pink-500 to-violet-500 transition-transform duration-500 ease-out group-hover:scale-x-100"
              />
              <Eye className="relative size-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
              <span className="relative">View my work</span>
              <ArrowRight className="relative -ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              className="gap-2 group font-semibold bg-background text-foreground border border-input transition-all duration-300 ease-out hover:scale-[1.04] hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/5 dark:hover:shadow-white/5 active:scale-[0.98]"
              nativeButton={false}
              render={<a href="/resume.pdf" download="rajarshi-chakraborty-resume.pdf" />}
            >
              <Download className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              <span>Download résumé</span>
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="-mt-2 lg:-mt-10">
            <HeroAvatarOrbit />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
