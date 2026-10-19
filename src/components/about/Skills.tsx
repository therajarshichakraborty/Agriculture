"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/src/config/portfolio";
import { Badge } from "@/src/components/ui/badge";
import { Separator } from "@/src/components/ui/separator";

export function Skills() {
  return (
    <section className="border-t border-border bg-secondary/20">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Expertise
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Skills & Technologies
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {portfolio.skills.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
              >
                <Badge
                  variant="outline"
                  className="px-3 py-1.5 text-sm font-medium"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
