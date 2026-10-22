"use client";

import { ArrowUpRight } from "lucide-react";

const SHEETS = [
  {
    title: "Grind 169 Study Plan",
    href: "https://www.techinterviewhandbook.org/grind75/?weeks=28&hours=6",
    description:
      "Personalized study roadmap covering key coding patterns and Blind 169 variations on a 28-week schedule.",
    tags: ["28 WEEKS", "6 HRS/WEEK"]
  },
  {
    title: "ChaiCode DSA Sheet",
    href: "https://dsa.chaicode.com/",
    description:
      "Structured problems, learning paths, and progress sheets provided by Hitesh Choudhary's dsa.chaicode.in.",
    tags: ["INTERACTIVE", "COMPREHENSIVE"]
  },
  {
    title: "NeetCode 250",
    href: "https://neetcode.io/practice/practice/neetcode250",
    description:
      "Collection of algorithmic problems designed to practice competitive programming and algorithm implementation.",
    tags: ["250 PROBLEMS", "PATTERN"]
  },
  {
    title: "Striver A-Z Sheet",
    href: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2",
    description:
      "Striver's step-by-step A to Z DSA course on takeUforward, taking you from the basics to advanced patterns.",
    tags: ["BEGINNER TO ADVANCED"]
  }
];

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

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
        {SHEETS.map((sheet) => (
          <a
            key={sheet.title}
            href={sheet.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between p-5 rounded-2xl bg-card transition-all duration-300 group cursor-pointer hover:-translate-y-1 shadow-[0_0_0_1px_color-mix(in_oklch,var(--foreground)_6%,transparent),0_2px_4px_rgba(0,0,0,0.03),0_12px_32px_-12px_rgba(0,0,0,0.12)] hover:shadow-[0_0_0_1px_color-mix(in_oklch,var(--brand)_25%,transparent),0_24px_48px_-16px_color-mix(in_oklch,var(--brand)_30%,transparent)]"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  {sheet.title}
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
              </div>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                {sheet.description}
              </p>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {sheet.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider bg-muted/50 px-2 py-0.5 rounded-md border border-border/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
