"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/src/config/portfolio";
import { Separator } from "@/src/components/ui/separator";

export function TechStack() {
  // Duplicate the items to create a seamless infinite scroll
  const items = [...portfolio.techStack, ...portfolio.techStack];

  return (
    <section className="py-16 overflow-hidden border-y border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6 mb-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground"
        >
          Technologies I work with
        </motion.p>
      </div>

      {/* Scrolling strip */}
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <div className="animate-scroll flex gap-8 whitespace-nowrap">
          {items.map((tech, i) => (
            <TechItem key={`${tech.name}-${i}`} name={tech.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TechItem({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-border bg-background shadow-sm text-sm font-medium text-muted-foreground hover:text-foreground transition-colors shrink-0">
      <TechDot />
      {name}
    </div>
  );
}

function TechDot() {
  return <span className="h-1.5 w-1.5 rounded-full bg-foreground/30" />;
}
