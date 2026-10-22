"use client";

import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { Section } from "@/src/components/aceternity/section";
import { GlowCard } from "@/src/components/aceternity/glow-card";
import { TracingTimeline } from "@/src/components/aceternity/tracing-timeline";
import { portfolio } from "@/src/config/portfolio";
import { DATA } from "@/src/data/resume";

const logoFor = (institution: string) =>
  DATA.education.find((e) =>
    institution.startsWith(e.school.split(" ").slice(0, 2).join(" "))
  )?.logoUrl;

export function Education() {
  const entries = portfolio.education.map((edu) => {
    const logo = logoFor(edu.institution);
    return {
      id: edu.institution,
      label: edu.period,
      marker: logo ? (
        <Image src={logo} alt={edu.institution} width={40} height={40} className="size-full bg-white object-contain p-1" />
      ) : (
        <GraduationCap className="size-4 text-muted-foreground" />
      ),
      content: (
        <GlowCard>
          <div className="space-y-3 p-6">
            <div>
              <h3 className="text-lg font-semibold tracking-tight">{edu.degree}</h3>
              <p className="text-sm text-muted-foreground">{edu.institution}</p>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">{edu.description}</p>
          </div>
        </GlowCard>
      )
    };
  });

  return (
    <Section id="education" eyebrow="Education" title="Academic foundations." align="left">
      <TracingTimeline entries={entries} />
    </Section>
  );
}
