"use client";

import { motion, stagger, useAnimate, useInView } from "motion/react";
import { useEffect } from "react";
import { cn } from "@/src/lib/utils";

type TextGenerateEffectProps = {
  words: string;
  className?: string;
  /** Words to render with the brand gradient. */
  highlight?: string[];
};

/** Reveals a sentence word-by-word with a soft blur, once it scrolls into view. */
export function TextGenerateEffect({
  words,
  className,
  highlight = []
}: TextGenerateEffectProps) {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, { once: true });
  const tokens = words.split(" ");

  useEffect(() => {
    if (!inView) return;
    animate(
      "span",
      { opacity: 1, filter: "blur(0px)", y: 0 },
      { duration: 0.5, delay: stagger(0.04) }
    );
  }, [inView, animate]);

  return (
    <motion.p ref={scope} className={cn("leading-relaxed", className)}>
      {tokens.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, filter: "blur(8px)", y: 4 }}
          className={cn(
            "inline-block",
            highlight.includes(word.replace(/[^\w&+.-]/g, "")) &&
              "font-semibold text-foreground"
          )}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.p>
  );
}
