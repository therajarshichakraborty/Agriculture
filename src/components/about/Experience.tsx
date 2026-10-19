"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { portfolio } from "@/src/config/portfolio";
import { Badge } from "@/src/components/ui/badge";

export function Experience() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Career
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Work Experience
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative space-y-8">
        {/* Vertical line */}
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border hidden sm:block" />

        {portfolio.experience.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex gap-6"
          >
            {/* Dot */}
            <div className="relative hidden sm:flex shrink-0 flex-col items-center">
              <div className="mt-1.5 h-4 w-4 rounded-full border-2 border-foreground bg-background" />
            </div>

            {/* Card */}
            <div className="flex-1 rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">{exp.role}</h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <Briefcase className="h-3.5 w-3.5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {exp.company}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-1 sm:items-end mt-1 sm:mt-0">
                  <span className="text-xs font-medium text-muted-foreground border border-border rounded-full px-2.5 py-0.5">
                    {exp.period}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {exp.location}
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {exp.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
