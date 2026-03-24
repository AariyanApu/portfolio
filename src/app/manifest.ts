import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aariyan Apu — Portfolio",
    short_name: "Aariyan Apu",
    description: "Full Stack Developer from Bangladesh",
    start_url: "/",
    display: "standalone",
    background_color: "#0a192f",
    theme_color: "#0a192f",
    icons: [
      { src: "/icons/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/android-chrome-384x384.png", sizes: "384x384", type: "image/png" },
      { src: "/icons/icon.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
