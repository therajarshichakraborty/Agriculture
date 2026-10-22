"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/src/lib/utils";

type FlipWordsProps = {
  words: string[];
  duration?: number;
  className?: string;
};

/** Cycles through words with a letter-by-letter blur-in transition. */
export function FlipWords({ words, duration = 2800, className }: FlipWordsProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      duration
    );
    return () => clearInterval(id);
  }, [words.length, duration]);

  const word = words[index];

  return (
    <span className="relative inline-block">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={word}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24, filter: "blur(8px)", scale: 1.2 }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
          className={cn("inline-block whitespace-nowrap", className)}
        >
          {word.split("").map((letter, i) => (
            <motion.span
              key={`${word}-${i}`}
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: i * 0.025, duration: 0.25 }}
              className="inline-block"
            >
              {letter === " " ? " " : letter}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
