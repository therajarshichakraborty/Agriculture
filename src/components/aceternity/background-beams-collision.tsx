"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState, type ReactNode, type RefObject } from "react";
import { cn } from "@/src/lib/utils";

type Beam = {
  x: number;
  duration: number;
  delay: number;
  repeatDelay: number;
  height: string;
};

const BEAMS: Beam[] = [
  { x: 6, duration: 7, delay: 2, repeatDelay: 3, height: "h-6" },
  { x: 18, duration: 3, delay: 4, repeatDelay: 3, height: "h-10" },
  { x: 30, duration: 7, delay: 0, repeatDelay: 7, height: "h-6" },
  { x: 44, duration: 5, delay: 1, repeatDelay: 14, height: "h-12" },
  { x: 58, duration: 11, delay: 3, repeatDelay: 2, height: "h-20" },
  { x: 70, duration: 4, delay: 2, repeatDelay: 4, height: "h-8" },
  { x: 82, duration: 6, delay: 5, repeatDelay: 4, height: "h-6" },
  { x: 94, duration: 9, delay: 1, repeatDelay: 6, height: "h-14" }
];

/** Aceternity "Background Beams With Collision": beams fall and burst on the floor line. */
export function BackgroundBeamsWithCollision({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const floorRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex w-full flex-col overflow-hidden bg-background",
        className
      )}
    >
      {BEAMS.map((beam) => (
        <CollisionBeam
          key={beam.x}
          beam={beam}
          containerRef={containerRef}
          floorRef={floorRef}
        />
      ))}
      {children}
      <div
        ref={floorRef}
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px w-full"
      />
    </div>
  );
}

function CollisionBeam({
  beam,
  containerRef,
  floorRef
}: {
  beam: Beam;
  containerRef: RefObject<HTMLDivElement | null>;
  floorRef: RefObject<HTMLDivElement | null>;
}) {
  const beamRef = useRef<HTMLDivElement>(null);
  const [collision, setCollision] = useState<{ x: number; y: number; key: number } | null>(null);
  const [cycle, setCycle] = useState(0);
  const cooling = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      const b = beamRef.current?.getBoundingClientRect();
      const f = floorRef.current?.getBoundingClientRect();
      const c = containerRef.current?.getBoundingClientRect();
      if (!b || !f || !c || cooling.current) return;
      if (b.bottom >= f.top) {
        cooling.current = true;
        setCollision({ x: b.left - c.left + b.width / 2, y: f.top - c.top, key: Date.now() });
        setTimeout(() => {
          setCollision(null);
          setCycle((n) => n + 1);
          cooling.current = false;
        }, 2000);
      }
    }, 50);
    return () => clearInterval(id);
  }, [containerRef, floorRef]);

  return (
    <>
      <motion.div
        key={cycle}
        ref={beamRef}
        aria-hidden
        initial={{ y: "-200px" }}
        animate={{ y: "1800px" }}
        transition={{
          duration: beam.duration,
          delay: cycle === 0 ? beam.delay : beam.repeatDelay,
          ease: "linear"
        }}
        style={{ left: `${beam.x}%` }}
        className={cn(
          "pointer-events-none absolute top-0 w-px rounded-full bg-linear-to-t from-brand via-brand-2 to-transparent",
          beam.height
        )}
      />
      <AnimatePresence>
        {collision && <Explosion key={collision.key} x={collision.x} y={collision.y} />}
      </AnimatePresence>
    </>
  );
}

function Explosion({ x, y }: { x: number; y: number }) {
  const spans = Array.from({ length: 16 }, (_, i) => ({
    dx: Math.round(Math.cos((i / 16) * Math.PI * 2) * (30 + (i % 4) * 12)),
    dy: -Math.round(20 + ((i * 7) % 40))
  }));

  return (
    <div aria-hidden className="pointer-events-none absolute z-10 size-1" style={{ left: x, top: y }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-linear-to-r from-transparent via-brand to-transparent blur-sm"
      />
      {spans.map((s, i) => (
        <motion.span
          key={i}
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{ x: s.dx, y: s.dy, opacity: 0 }}
          transition={{ duration: 0.6 + (i % 5) * 0.15, ease: "easeOut" }}
          className="absolute size-1 rounded-full bg-linear-to-b from-brand to-brand-2"
        />
      ))}
    </div>
  );
}
