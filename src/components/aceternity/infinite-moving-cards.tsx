import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/src/lib/utils";

type InfiniteMovingCardsProps = {
  children: ReactNode;
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
};

const SPEED = { fast: "25s", normal: "45s", slow: "80s" } as const;

/** Seamless, edge-faded marquee. Children are rendered twice for the loop. */
export function InfiniteMovingCards({
  children,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className
}: InfiniteMovingCardsProps) {
  const style = {
    "--animation-duration": SPEED[speed],
    "--animation-direction": direction === "left" ? "forwards" : "reverse"
  } as CSSProperties;

  return (
    <div
      style={style}
      className={cn("relative z-10 w-full overflow-hidden mask-fade-x", className)}
    >
      <ul
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-2 animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {children}
        <div aria-hidden className="contents">
          {children}
        </div>
      </ul>
    </div>
  );
}
