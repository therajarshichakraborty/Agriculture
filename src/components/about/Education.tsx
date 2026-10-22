"use client";

import { Section } from "@/src/components/aceternity/section";
import {
  Emphasis,
  Timeline,
  TimelineItem
} from "@/src/components/about/Timeline";
import { portfolio } from "@/src/config/portfolio";
import { Underline } from "@/src/components/ui/underline";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title={
        <>
          Academic <Underline>foundations</Underline>.
        </>
      }
      description="The fundamentals behind the work, from core sciences to computer science and research."
      align="left"
      className="max-w-4xl"
    >
      <Timeline>
        {portfolio.education.map((edu, i) => (
          <TimelineItem
            key={edu.institution}
            index={i}
            logo={edu.logo}
            title={edu.degree}
            org={edu.institution}
            href={edu.href}
            location={edu.location}
            period={edu.period}
          >
            <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[15px] font-semibold text-foreground">
              {edu.facts.map((fact, j) => (
                <span key={fact} className="inline-flex items-center gap-2.5">
                  {j > 0 && (
                    <span
                      aria-hidden="true"
                      className="size-1 rounded-full bg-foreground"
                    />
                  )}
                  {fact}
                </span>
              ))}
            </p>
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              <Emphasis text={edu.description} />
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="mr-2 font-bold text-foreground">
                Coursework:
              </span>
              {edu.coursework.join(" · ")}
            </p>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
}
