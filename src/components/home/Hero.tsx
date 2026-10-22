"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Download, Eye } from "lucide-react";
import { Button } from "@/src/components/ui/button";
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
                gradient="linear-gradient(90deg, #ef4444, #ec4899, #8b5cf6)"
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
            <Button
              className="gap-2 group font-semibold"
              nativeButton={false}
              render={<Link href="/projects" />}
            >
              <Eye className="size-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
              <span>View my work</span>
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
      </section>
    </BackgroundBeamsWithCollision>
  );
}
