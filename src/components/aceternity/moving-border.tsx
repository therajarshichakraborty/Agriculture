"use client";

import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform
} from "motion/react";
import { useRef, type ComponentPropsWithoutRef, type ElementType } from "react";
import { cn } from "@/src/lib/utils";

type MovingBorderButtonProps<T extends ElementType> = {
  as?: T;
  duration?: number;
  borderRadius?: string;
  className?: string;
  containerClassName?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

/** Button/link with a glowing comet that travels around its border. */
export function MovingBorderButton<T extends ElementType = "button">({
  as,
  duration = 3000,
  borderRadius = "0.875rem",
  className,
  containerClassName,
  children,
  ...props
}: MovingBorderButtonProps<T>) {
  const Component = (as ?? "button") as ElementType;

  return (
    <Component
      className={cn(
        "relative inline-flex h-11 overflow-hidden bg-transparent p-px text-sm font-medium",
        containerClassName
      )}
      style={{ borderRadius }}
      {...props}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div className="h-16 w-16 bg-[radial-gradient(var(--brand)_40%,transparent_60%)] opacity-90" />
        </MovingBorder>
      </div>
      <div
        className={cn(
          "glass relative flex h-full w-full items-center justify-center gap-2 border border-border px-5 text-foreground antialiased",
          className
        )}
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        {children}
      </div>
    </Component>
  );
}

function MovingBorder({
  children,
  duration = 3000,
  rx,
  ry
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
}) {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) progress.set((time * (length / duration)) % length);
  });

  const x = useTransform(
    progress,
    (v) => pathRef.current?.getPointAtLength(v).x ?? 0
  );
  const y = useTransform(
    progress,
    (v) => pathRef.current?.getPointAtLength(v).y ?? 0
  );
  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        aria-hidden
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
