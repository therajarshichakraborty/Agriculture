"use client";

import { ChartSpline, type LucideIcon } from "lucide-react";
import { motion } from "motion/react";
import type { ComponentType, SVGProps } from "react";
import { Section } from "@/src/components/aceternity/section";
import {
  Highlights,
  Timeline,
  TimelineItem
} from "@/src/components/about/Timeline";
import { portfolio } from "@/src/config/portfolio";
import { DATA } from "@/src/data/resume";
import { cn } from "@/src/lib/utils";

type Icon = ComponentType<SVGProps<SVGSVGElement>> | LucideIcon;

// Brand logos come from the shared skills list; non-code skills render as text only.
const stackIcons = new Map<string, { Icon: Icon; className?: string }>([
  ...DATA.skills.map((s) => [s.name, { Icon: s.icon }] as const),
  ["Time Series Analysis", { Icon: ChartSpline, className: "text-rose-500" }]
]);

// Chips pop in one after another, then lift and tilt their icon on hover.
function StackItem({ name, index }: { name: string; index: number }) {
  const entry = stackIcons.get(name);
  return (
    <motion.li
      initial={{ opacity: 0, y: 8, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 380,
        damping: 22,
        delay: index * 0.04
      }}
      className="group/chip inline-flex items-center gap-1.5 rounded-full bg-muted/60 px-2.5 py-1 text-xs font-medium text-foreground/80 transition-[background-color,color,box-shadow] duration-200 hover:bg-muted hover:text-foreground hover:shadow-sm"
    >
      {entry && (
        <entry.Icon
          aria-hidden="true"
          className={cn(
            "size-3.5 shrink-0 transition-transform duration-300 ease-out group-hover/chip:scale-125 group-hover/chip:-rotate-12",
            entry.className
          )}
        />
      )}
      {name === "Node" ? "Node.js" : name}
    </motion.li>
  );
}

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've been building."
      description="Shipping production software, running research and leading the campus communities that taught me how teams actually work."
      align="left"
      className="max-w-4xl"
    >
      <Timeline>
        {portfolio.experience.map((job, i) => (
          <TimelineItem
            key={`${job.company}-${job.role}`}
            index={i}
            logo={job.logo}
            title={job.role}
            org={job.company}
            href={"href" in job ? job.href : undefined}
            location={job.location}
            period={job.period}
          >
            <p className="text-[15px] leading-relaxed text-foreground/85">
              {job.summary}
            </p>
            <Highlights items={job.highlights} />
            <ul aria-label="Stack" className="flex flex-wrap gap-2 pt-1">
              {job.stack.map((name, j) => (
                <StackItem key={name} name={name} index={j} />
              ))}
            </ul>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
}
