import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt =
  "About Aariyan Apu — Full Stack Web Developer from Bangladesh";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "About",
    title: "Aariyan Apu",
    subtitle: "Experience, education, services, tech stack and FAQ",
    tags: ["Barishal, Bangladesh", "Full Stack", "Finance", "Uni Bamberg"],
  });
}
