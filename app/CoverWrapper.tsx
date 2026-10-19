"use client";

import { usePathname } from "next/navigation";
import Cover from "@/components/Cover";

export default function CoverWrapper() {
  const pathname = usePathname();
  const hideRoutes = ["/projects"];

  if (hideRoutes.includes(pathname)) {
    return null;
  }

  return <Cover />;
}
