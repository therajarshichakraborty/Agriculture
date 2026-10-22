"use client";

import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import { PROJECTS } from "@/src/data/projects";
import { FilterBar } from "@/src/components/projects/FilterBar";
import { ProjectCard } from "@/src/components/projects/ProjectCard";

const categories = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

export function ProjectsClient() {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filtered = PROJECTS.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <div className="mx-auto max-w-6xl px-6 pb-16">
      <div className="mb-10 flex justify-center">
        <FilterBar
          categories={categories}
          active={activeCategory}
          onChange={setActiveCategory}
        />
      </div>

      <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="py-24 text-center text-muted-foreground">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}
