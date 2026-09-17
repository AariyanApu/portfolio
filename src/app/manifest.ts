import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Aariyan Apu — Full Stack Web Developer",
    short_name: "Aariyan Apu",
    description: SITE_DESCRIPTION,
    lang: "en",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0a192f",
    theme_color: "#0a192f",
    categories: ["business", "productivity", "technology"],
    icons: [
      {
        src: "/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/android-chrome-384x384.png",
        sizes: "384x384",
        type: "image/png",
      },
      { src: "/icons/icon.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
