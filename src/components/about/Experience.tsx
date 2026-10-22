"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { Section } from "@/src/components/aceternity/section";
import { GlowCard } from "@/src/components/aceternity/glow-card";
import { TracingTimeline } from "@/src/components/aceternity/tracing-timeline";
import { portfolio } from "@/src/config/portfolio";
import { DATA } from "@/src/data/resume";

const logoFor = (company: string) =>
  DATA.work.find((w) => w.company === company)?.logoUrl;

export function Experience() {
  const entries = portfolio.experience.map((job) => {
    const logo = logoFor(job.company);
    return {
      id: job.company,
      label: job.period,
      marker: logo ? (
        <Image src={logo} alt={job.company} width={40} height={40} className="size-full object-cover" />
      ) : undefined,
      content: (
        <GlowCard>
          <div className="space-y-4 p-6">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold tracking-tight">{job.role}</h3>
                <p className="text-sm text-muted-foreground">{job.company}</p>
              </div>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="size-3" />
                {job.location}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">{job.description}</p>
            <ul className="flex flex-wrap gap-1.5">
              {job.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-md border border-border bg-secondary/60 px-2 py-0.5 text-xs text-secondary-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </GlowCard>
      )
    };
  });

  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've been building."
      align="left"
    >
      <TracingTimeline entries={entries} />
    </Section>
  );
}
