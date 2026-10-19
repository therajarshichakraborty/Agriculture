"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function CoverImage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="w-full -mt-6 mb-8 flex items-center justify-center">
      <div
        className="
          w-full max-w-3xl
          h-[200px] sm:h-[200px] md:h-[250px]
          rounded-2xl overflow-hidden
          relative
        "
      >
        {/* BACKGROUND IMAGE */}
        <div
          className={`
            absolute inset-0 bg-cover bg-center
            ${isDark ? "opacity-100" : "opacity-100"}
          `}
          style={{
            backgroundImage: `url('${
              isDark
                ? "/background/bg-nature.jpeg"
                : "/background/bg-nature.jpeg"
            }')`
          }}
        />

        {/* GRADIENT OVERLAY (CRITICAL FIX) */}
        {/* <div
          className={`
            absolute inset-0
            ${
              isDark
                ? "bg-gradient-to-b from-black/70 via-black/60 to-black/80"
                : "bg-black/20"
            }
          `}
        /> */}

        {/* OPTIONAL: subtle vignette */}
        {isDark && (
          <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,black_90%)] opacity-60" />
        )}
      </div>
    </div>
  );
}
