"use client";

import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

interface FilterBarProps {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
}

export function FilterBar({ categories, active, onChange }: FilterBarProps) {
  return (
    <div className="glass inline-flex max-w-full flex-wrap justify-center gap-1 rounded-2xl border border-border p-1">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={cn(
            "relative rounded-xl px-4 py-1.5 text-sm font-medium transition-colors",
            active === category
              ? "text-background"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {active === category && (
            <motion.span
              layoutId="filter-pill"
              className="absolute inset-0 rounded-xl bg-foreground"
              transition={{ type: "spring", stiffness: 400, damping: 32 }}
            />
          )}
          <span className="relative">{category}</span>
        </button>
      ))}
    </div>
  );
}
