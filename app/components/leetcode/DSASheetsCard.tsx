"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function DSASheetsCard() {
  return (
    <div className="w-full mt-8">
      <h2 className="text-base font-bold mb-4 flex items-center gap-2">
        <span
          className="inline-block"
          style={{
            background:
              "linear-gradient(90deg, #ef4444 0%, #d946ef 50%, #8b5cf6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          DSA Practice Sheets
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {/* Card 1: Grind 169 */}
        <a
          href="https://www.techinterviewhandbook.org/grind75/?weeks=28&hours=6"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col justify-between p-5 rounded-2xl border border-border/40 bg-card/20 hover:bg-muted/20 transition-all duration-300 group cursor-pointer hover:border-border/80 hover:-translate-y-0.5 shadow-2xs"
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                Grind 169 Study Plan
              </span>
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
            </div>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              Personalized study roadmap covering key coding patterns and Blind
              169 variations on a 28-week schedule.
            </p>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider bg-muted/50 px-2 py-0.5 rounded-md border border-border/40">
              28 WEEKS
            </span>
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider bg-muted/50 px-2 py-0.5 rounded-md border border-border/40">
              6 HRS/WEEK
            </span>
          </div>
        </a>

        {/* Card 2: ChaiCode DSA Sheet */}
        <a
          href="https://dsa.chaicode.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col justify-between p-5 rounded-2xl border border-border/40 bg-card/20 hover:bg-muted/20 transition-all duration-300 group cursor-pointer hover:border-border/80 hover:-translate-y-0.5 shadow-2xs"
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                ChaiCode DSA Sheet
              </span>
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
            </div>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              Structured problems, learning paths, and progress sheets provided
              by Hitesh Choudhary's dsa.chaicode.in.
            </p>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider bg-muted/50 px-2 py-0.5 rounded-md border border-border/40">
              INTERACTIVE
            </span>
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider bg-muted/50 px-2 py-0.5 rounded-md border border-border/40">
              COMPREHENSIVE
            </span>
          </div>
        </a>

        {/* Card 3: NeetCode 250 */}
        <a
          href="https://neetcode.io/practice/practice/neetcode250"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col justify-between p-5 rounded-2xl border border-border/40 bg-card/20 hover:bg-muted/20 transition-all duration-300 group cursor-pointer hover:border-border/80 hover:-translate-y-0.5 shadow-2xs"
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                NeetCode 250
              </span>
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
            </div>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              Collection of algorithmic problems designed to practice
              competitive programming and algorithm implementation.
            </p>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider bg-muted/50 px-2 py-0.5 rounded-md border border-border/40">
              250 PROBLEMS
            </span>
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider bg-muted/50 px-2 py-0.5 rounded-md border border-border/40">
              PATTERN
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
