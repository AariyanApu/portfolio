import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = "Blog by Aariyan Apu — web development, tools and products";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Blog",
    title: "Posts & Thoughts",
    subtitle:
      "Web development, Linux, tools and building things — by Aariyan Apu",
    tags: ["Next.js", "React", "Linux", "Productivity"],
  });
}
