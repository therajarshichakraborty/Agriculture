import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/src/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_TITLE,
    short_name: "Rajarshi",
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#fdfdfe",
    theme_color: "#fdfdfe",
    categories: ["portfolio", "technology", "developer"],
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/icon.png", sizes: "120x120", type: "image/png" },
      { src: "/apple-icon.png", sizes: "120x120", type: "image/png" }
    ]
  };
}
