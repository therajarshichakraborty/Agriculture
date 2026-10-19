"use client";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export function ModeToggle({ className }: { className?: string }) {
  return (
    <AnimatedThemeToggler
      className={className}
      duration={600}
      variant="circle"
    />
  );
}
