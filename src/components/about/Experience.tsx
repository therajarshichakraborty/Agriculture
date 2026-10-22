"use client";

import { ChartSpline } from "lucide-react";
import { Section } from "@/src/components/aceternity/section";
import {
  Highlights,
  Timeline,
  TimelineItem
} from "@/src/components/about/Timeline";
import { StackChip, type StackIcon } from "@/src/components/ui/stack-chip";
import { portfolio } from "@/src/config/portfolio";
import { DATA } from "@/src/data/resume";

// Brand logos come from the shared skills list; non-code skills render as text only.
const stackIcons = new Map<string, { icon: StackIcon; className?: string }>([
  ...DATA.skills.map((s) => [s.name, { icon: s.icon as StackIcon }] as const),
  ["Time Series Analysis", { icon: ChartSpline, className: "text-rose-500" }]
]);

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
                <StackChip
                  key={name}
                  label={name === "Node" ? "Node.js" : name}
                  icon={stackIcons.get(name)?.icon}
                  iconClassName={stackIcons.get(name)?.className}
                  index={j}
                />
              ))}
            </ul>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
}
