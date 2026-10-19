"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { portfolio } from "@/src/config/portfolio";

export function Education() {
  return (
    <section className="border-t border-border bg-secondary/20">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Background
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Education
          </h2>
        </motion.div>

        <div className="space-y-4">
          {portfolio.education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex gap-5 rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              {/* Icon */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                <GraduationCap className="h-5 w-5 text-muted-foreground" />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-semibold text-foreground">
                    {edu.degree}
                  </h3>
                  <span className="text-xs font-medium text-muted-foreground border border-border rounded-full px-2.5 py-0.5 w-fit">
                    {edu.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {edu.institution}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
