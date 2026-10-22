"use client";

import Image from "next/image";
import { motion } from "motion/react";

const images = [
  "/img11.jpeg",
  "/img2.png",
  "/img3.png",
  "/img4.png",
  "/img5.jpeg",
  "/img6.png",
  "/img8.png",
  "/img7.png",
  "/img9.png",
  "/img10.jpeg",
  "/img1.png",
  "/img12.jpeg"
];

export default function Gallery() {
  return (
    <section className="mx-auto w-full max-w-xl bg-transparent">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-2.5">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -4 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 24,
                delay: (i % 3) * 0.05
              }}
              className="group relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer border border-border/50 hover:border-cyan-500/40 dark:hover:border-cyan-400/40 shadow-xs hover:shadow-2xl hover:shadow-cyan-500/10 dark:hover:shadow-blue-500/15 transition-colors duration-500"
            >
              {/* Image with smooth zoom and subtle contrast enhancement */}
              <div className="absolute inset-0 overflow-hidden rounded-xl sm:rounded-2xl">
                <Image
                  src={src}
                  alt={`Portfolio showcase ${i + 1}`}
                  fill
                  sizes="(min-width: 640px) 190px, 50vw"
                  className="
                    object-cover rounded-xl sm:rounded-2xl
                    transition-all duration-700 ease-out
                    group-hover:scale-105 group-hover:contrast-[1.03]
                  "
                />
              </div>

              {/* Luminous light-sweep sheen on hover */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-[120%] group-hover:translate-x-[120%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-20"
              />

              {/* Cinematic bottom vignette on hover */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-10"
              />

              {/* Crisp inner border ring on hover */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 ring-1 ring-inset ring-white/25 dark:ring-white/15 z-20"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
