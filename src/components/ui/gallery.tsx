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
    <section className="w-full bg-transparent py-2 sm:py-5">
      <div className="w-full mx-auto">
        <div className="columns-3 gap-2 sm:gap-4 md:gap-6 [column-fill:_balance]">
          {images.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative break-inside-avoid mb-2 sm:mb-4 md:mb-6 rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer border border-border/50 hover:border-cyan-500/40 dark:hover:border-cyan-400/40 shadow-xs hover:shadow-2xl hover:shadow-cyan-500/10 dark:hover:shadow-blue-500/15 transition-colors duration-500"
            >
              {/* Image with smooth zoom and subtle contrast enhancement */}
              <div className="overflow-hidden rounded-xl sm:rounded-2xl">
                <Image
                  src={src}
                  alt={`Portfolio showcase ${i + 1}`}
                  width={500}
                  height={500}
                  className="
                    w-full h-auto object-cover rounded-xl sm:rounded-2xl
                    transition-all duration-700 ease-out
                    group-hover:scale-110 group-hover:contrast-[1.03]
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
