"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useSpring, useTransform } from "motion/react";

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

interface LeetCodeRadialProps {
  easy: number;
  medium: number;
  hard: number;
}

export default function LeetCodeRadial({
  easy = 0,
  medium = 0,
  hard = 0
}: LeetCodeRadialProps) {
  const total = easy + medium + hard;
  const safeTotal = total || 1;

  const radius = 52;
  const stroke = 9;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;

  const easyLen = (easy / safeTotal) * circumference;
  const mediumLen = (medium / safeTotal) * circumference;
  const hardLen = (hard / safeTotal) * circumference;

  return (
    <motion.div
      className="relative group cursor-pointer p-1"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
    >
      {/* Background ambient glow */}

      <svg height={radius * 2} width={radius * 2}>
        <defs>
          <linearGradient id="easyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          <linearGradient
            id="mediumGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#7e22ce" />
          </linearGradient>
          <linearGradient id="hardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7e22ce" />
            <stop offset="100%" stopColor="#581c87" />
          </linearGradient>
        </defs>

        {/* TRACK */}
        <circle
          stroke="currentColor"
          className="text-zinc-200 dark:text-zinc-800"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        {/* EASY */}
        <motion.circle
          stroke="url(#easyGradient)"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          transform={`rotate(-90 ${radius} ${radius})`}
          initial={{ strokeDasharray: `0 ${circumference}` }}
          animate={{ strokeDasharray: `${easyLen} ${circumference}` }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          className="transition-all duration-300 hover:brightness-125"
        />

        {/* MEDIUM */}
        <motion.circle
          stroke="url(#mediumGradient)"
          fill="transparent"
          strokeWidth={stroke}
          strokeDashoffset={-easyLen}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          transform={`rotate(-90 ${radius} ${radius})`}
          initial={{ strokeDasharray: `0 ${circumference}` }}
          animate={{ strokeDasharray: `${mediumLen} ${circumference}` }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
          className="transition-all duration-300 hover:brightness-125"
        />

        {/* HARD */}
        <motion.circle
          stroke="url(#hardGradient)"
          fill="transparent"
          strokeWidth={stroke}
          strokeDashoffset={-(easyLen + mediumLen)}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          transform={`rotate(-90 ${radius} ${radius})`}
          initial={{ strokeDasharray: `0 ${circumference}` }}
          animate={{ strokeDasharray: `${hardLen} ${circumference}` }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="transition-all duration-300 hover:brightness-125"
        />
      </svg>

      {/* center text */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center select-none z-20"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, delay: 0.2 }}
      >
        <motion.span
          className="text-base font-extrabold tracking-tight text-zinc-900 dark:text-white drop-shadow-sm"
          whileHover={{ scale: 1.12 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <AnimatedNumber value={total} />
        </motion.span>
        <span className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400 flex items-center gap-0.5 tracking-wider uppercase">
          solved
          <motion.div
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 400, delay: 0.35 }}
            whileHover={{ rotate: [0, -12, 12, 0], scale: 1.2 }}
            className="inline-block"
          >
            <Image src="/icons8-tick.svg" alt="Tick" width={14} height={14} />
          </motion.div>
        </span>
      </motion.div>
    </motion.div>
  );
}
