"use client";

import Image from "next/image";
import { MapPin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { portfolio } from "@/src/config/portfolio";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";

export function Bio() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-20">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="shrink-0"
        >
          <div className="relative mx-auto h-56 w-56 sm:h-64 sm:w-64 overflow-hidden rounded-2xl bg-secondary shadow-md">
            <Image
              src={portfolio.avatar}
              alt={portfolio.name}
              fill
              className="object-cover"
              priority
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            {/* Initials fallback */}
            <div className="flex h-full w-full items-center justify-center text-5xl font-bold text-muted-foreground/40">
              {portfolio.initials}
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              About me
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {portfolio.name}
            </h1>
            <p className="mt-1 text-lg text-muted-foreground">
              {portfolio.role}
            </p>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            {portfolio.bio}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When I&apos;m not coding, you&apos;ll find me exploring new design
            trends, contributing to open-source projects, or sharing knowledge
            with the developer community.
          </p>

          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {portfolio.location}
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              {portfolio.email}
            </div>
          </div>

          <Button asChild>
            <Link href="/contact">Get in touch</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
