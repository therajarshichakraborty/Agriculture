"use client";

import type { ComponentType, SVGProps } from "react";
import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

export type StackIcon = ComponentType<SVGProps<SVGSVGElement>>;

/** Tech chip: pops in after `index` steps, then lifts and tilts its icon on hover. */
export function StackChip({
  label,
  icon: Icon,
  iconClassName,
  index = 0,
  inView = true
}: {
  label: string;
  icon?: StackIcon;
  iconClassName?: string;
  index?: number;
  /** Animate when scrolled into view (true) or straight away on mount (false). */
  inView?: boolean;
}) {
  const shown = { opacity: 1, y: 0, scale: 1 };
  return (
    <motion.li
      initial={{ opacity: 0, y: 8, scale: 0.9 }}
      {...(inView
        ? { whileInView: shown, viewport: { once: true, margin: "-40px" } }
        : { animate: shown })}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 380,
        damping: 22,
        delay: index * 0.04
      }}
      className="group/chip inline-flex items-center gap-1.5 rounded-full bg-muted/60 px-2.5 py-1 text-xs font-medium text-foreground/80 transition-[background-color,color,box-shadow] duration-200 hover:bg-muted hover:text-foreground hover:shadow-sm"
    >
      {Icon && (
        <Icon
          aria-hidden="true"
          className={cn(
            "size-3.5 shrink-0 transition-transform duration-300 ease-out group-hover/chip:scale-125 group-hover/chip:-rotate-12",
            iconClassName
          )}
        />
      )}
      {label}
    </motion.li>
  );
}
