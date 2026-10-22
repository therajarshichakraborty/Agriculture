import type { ReactNode } from "react";
import { cn } from "@/src/lib/utils";
import { GlowCard } from "./glow-card";

export function BentoGrid({
  className,
  children
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid auto-rows-[minmax(16rem,auto)] grid-cols-1 gap-4 md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoGridItem({
  className,
  title,
  description,
  header,
  icon
}: {
  className?: string;
  title?: ReactNode;
  description?: ReactNode;
  header?: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <GlowCard className={cn("row-span-1", className)}>
      <div className="flex h-full flex-col justify-between gap-4 p-5">
        {header}
        <div className="transition duration-300 group-hover/glow:translate-x-1">
          {icon}
          {title && (
            <div className="mt-2 mb-1 font-semibold tracking-tight text-foreground">
              {title}
            </div>
          )}
          {description && (
            <div className="text-sm leading-relaxed text-muted-foreground">
              {description}
            </div>
          )}
        </div>
      </div>
    </GlowCard>
  );
}
