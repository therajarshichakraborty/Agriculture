"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { portfolio } from "@/src/config/portfolio";
import { Button } from "@/src/components/ui/button";
import { ProjectCard } from "@/src/components/projects/ProjectCard";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" as const }
  })
};

export function FeaturedProjects() {
  const featured = portfolio.projects.filter((p) => p.featured);

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      {/* Section header */}
      <div className="mb-12 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Featured Work
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Projects I&apos;ve built
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button asChild variant="ghost" size="sm">
            <Link href="/projects">
              View all projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Project grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, i) => (
          <motion.div
            key={project.id}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
