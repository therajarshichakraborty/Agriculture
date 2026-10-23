"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "motion/react";
import { LeetCodeStats } from "@/types/leetcode";
import LeetCodeRadial from "./LeetCodeRadial";

function AnimatedNumber({ value }: { value: number }) {
  const spring = useSpring(0, { mass: 0.5, stiffness: 100, damping: 15 });
  const display = useTransform(spring, (current) => Math.round(current));
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  useEffect(() => {
    return display.on("change", (latest) => {
      setCurrentValue(latest);
    });
  }, [display]);

  return <span>{currentValue}</span>;
}

interface StatProps {
  color: string;
  gradientClass: string;
  label: string;
  value: number;
  max: number;
  delay: number;
}

function Stat({ color, gradientClass, label, value, max, delay }: StatProps) {
  const percentage =
    max > 0 ? Math.min(100, Math.round((value / max) * 100)) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay }}
      className="flex flex-col gap-1"
    >
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className={`w-2.5 h-2.5 rounded-full ${color}`} />
          <span className="text-zinc-600 dark:text-zinc-300 font-medium">
            {label}
          </span>
        </div>
        <span className="font-semibold text-zinc-800 dark:text-white ml-2">
          <AnimatedNumber value={value} />
        </span>
      </div>

      {/* Mini Gradient Progress Bar */}
      <div className="w-full h-1.5 bg-transparent rounded-full overflow-hidden p-[1px]">
        <motion.div
          className={`h-full rounded-full ${gradientClass}`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: delay + 0.1
          }}
        />
      </div>
    </motion.div>
  );
}

export default function LeetCodeCardUI({ data }: { data: LeetCodeStats }) {
  return (
    <div className="w-full flex justify-center mt-2 sm:mt-4">
      <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="
          relative
          w-full max-w-[320px] sm:max-w-[290px]
          p-4 sm:p-5 rounded-2xl
          bg-transparent
          overflow-hidden
        "
      >
        {/* Glow corner flare */}

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-bold text-zinc-800 dark:text-zinc-100 flex items-center gap-2 tracking-tight">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            LeetCode Progress
          </h2>
        </div>

        <div className="flex items-center gap-5">
          <LeetCodeRadial {...data} />

          <div className="space-y-2.5 text-xs flex-1">
            <Stat
              color="bg-violet-400"
              gradientClass="bg-gradient-to-r from-violet-400 to-purple-400"
              label="Easy"
              value={data.easy}
              max={800}
              delay={0.1}
            />

            <Stat
              color="bg-violet-500"
              gradientClass="bg-gradient-to-r from-purple-500 to-fuchsia-500"
              label="Medium"
              value={data.medium}
              max={1600}
              delay={0.2}
            />

            <Stat
              color="bg-violet-700"
              gradientClass="bg-gradient-to-r from-purple-700 to-indigo-700"
              label="Hard"
              value={data.hard}
              max={700}
              delay={0.3}
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="pt-2 flex items-center justify-between text-zinc-500 dark:text-zinc-400 border-t border-zinc-100 dark:border-zinc-800/80 font-medium"
            >
              <span>Total:</span>
              <span className="font-bold text-zinc-800 dark:text-white">
                <AnimatedNumber value={data.total} />
                <span className="text-zinc-400 dark:text-zinc-500 text-[11px] font-normal">
                  /4003
                </span>
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
