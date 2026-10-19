"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { JOURNEY_DATA, JourneyItem } from "@/data/journey";
import { ChevronDown, MapPin, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MyJourney() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(8); // Last item expanded by default

  return (
    <div className="flex flex-col gap-5 w-full text-foreground select-none">
      {/* Sleek, professional header with a divider */}
      <div className="flex flex-col gap-1 pl-2 pb-3 border-b border-neutral-200 dark:border-neutral-800/60">
        <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
          My Journey
        </h2>
        <p className="text-[10px] text-muted-foreground/60 tracking-normal">
          Academic milestones & startup logs
        </p>
      </div>

      <div className="relative pl-3 flex flex-col w-full max-h-[65vh] overflow-y-auto custom-scrollbar pr-3">
        {JOURNEY_DATA.map((item, idx) => {
          const isExpanded = expandedIndex === idx;
          const isLast = idx === JOURNEY_DATA.length - 1;

          return (
            <div key={idx} className="relative pl-7 pb-6 group/item last:pb-0">
              {/* Vertical timeline line and node dot matching professional design */}
              <div className="absolute left-0 top-1 h-full w-[1px] bg-zinc-200 dark:bg-zinc-800/80 group-last/item:h-1">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border border-zinc-200 dark:border-zinc-800/80 bg-background flex items-center justify-center group-hover/item:border-primary transition-all duration-300">
                  <div
                    className={cn(
                      "w-1.5 h-1.5 rounded-full transition-colors duration-300",
                      isExpanded
                        ? "bg-primary"
                        : "bg-zinc-400 dark:bg-zinc-600 group-hover/item:bg-primary"
                    )}
                  />
                </div>
              </div>

              {/* Title & Info */}
              <div className="flex flex-col gap-1 text-left">
                <div
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  className="cursor-pointer flex items-start justify-between gap-2"
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[9px] font-bold text-muted-foreground/60 uppercase tracking-widest">
                      {item.year}
                    </span>
                    <h3 className="text-xs font-semibold leading-snug group-hover/item:text-primary transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-[10px] text-muted-foreground/80 font-medium flex items-center gap-1">
                      <Building2 className="w-3 h-3 text-muted-foreground/40" />
                      <span>{item.organization}</span>
                    </p>
                  </div>
                  <ChevronDown
                    className={cn(
                      "w-3.5 h-3.5 text-muted-foreground/40 transition-transform duration-300 shrink-0 mt-0.5 group-hover/item:text-foreground",
                      isExpanded ? "rotate-180" : ""
                    )}
                  />
                </div>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: { duration: 0.2 },
                          opacity: { duration: 0.15 }
                        }
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.15 },
                          opacity: { duration: 0.1 }
                        }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pt-2 flex flex-col gap-2.5 text-left">
                        <p className="text-[10.5px] text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>

                        {/* Location */}
                        {item.location && (
                          <div className="flex items-center gap-1 text-[9px] text-muted-foreground/60">
                            <MapPin className="w-2.5 h-2.5 text-muted-foreground/40" />
                            <span>{item.location}</span>
                          </div>
                        )}

                        {/* Stats if available */}
                        {item.stats && (
                          <div className="flex gap-1.5 mt-0.5">
                            <span className="bg-transparent text-foreground border border-neutral-200 dark:border-neutral-800 text-[8px] font-medium px-2 py-0.5 rounded-sm">
                              LeetCode: {item.stats.leetcode}
                            </span>
                            <span className="bg-transparent text-foreground border border-neutral-200 dark:border-neutral-800 text-[8px] font-medium px-2 py-0.5 rounded-sm">
                              GFG: {item.stats.gfg}
                            </span>
                          </div>
                        )}

                        {/* Projects if available */}
                        {item.projects && (
                          <div className="flex flex-col gap-1 mt-0.5">
                            <span className="text-[9px] font-bold text-muted-foreground/70">
                              Key Projects:
                            </span>
                            <div className="flex flex-wrap gap-1">
                              {item.projects.map((proj) => (
                                <span
                                  key={proj}
                                  className="bg-transparent text-foreground border border-neutral-200 dark:border-neutral-800 text-[8px] font-medium px-1.5 py-0.5 rounded-sm"
                                >
                                  {proj}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Skills badges matching button style */}
                        <div className="flex flex-wrap gap-1 mt-1">
                          {item.skills.map((skill) => (
                            <span
                              key={skill}
                              className="bg-transparent text-foreground/80 border border-neutral-200 dark:border-neutral-800 text-[8px] font-medium px-1.5 py-0.5 rounded-sm hover:border-primary hover:text-primary transition-colors duration-200 cursor-default"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
