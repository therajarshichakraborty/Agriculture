import { cn } from "@/src/lib/utils";

/**
 * Falling meteor streaks. Positions use a deterministic spread so server and
 * client markup match without a post-mount effect.
 */
export function Meteors({ number = 18, className }: { number?: number; className?: string }) {
  const meteors = Array.from({ length: number }, (_, i) => ({
    left: `${((i * 37) % 120) - 10}%`,
    delay: `${((i * 0.73) % 6).toFixed(2)}s`,
    duration: `${(4 + ((i * 1.7) % 6)).toFixed(0)}s`
  }));

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {meteors.map((m, i) => (
        <span
          key={i}
          style={{ left: m.left, animationDelay: m.delay, animationDuration: m.duration }}
          className={cn(
            "absolute top-0 size-0.5 rotate-[215deg] animate-[meteor_linear_infinite] rounded-full bg-foreground/60 shadow-[0_0_0_1px_#ffffff10]",
            "before:absolute before:top-1/2 before:h-px before:w-12 before:-translate-y-1/2 before:bg-linear-to-r before:from-foreground/50 before:to-transparent before:content-['']",
            className
          )}
        />
      ))}
    </div>
  );
}
