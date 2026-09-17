import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt =
  "Aariyan Apu — Full Stack Web Developer from Barishal, Bangladesh";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Full Stack Web Developer",
    title: "Aariyan Apu",
    subtitle:
      "Web & mobile apps from Barishal, Bangladesh — available for freelance",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "React Native",
    ],
  });
}
