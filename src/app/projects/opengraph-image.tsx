import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = "Projects by Aariyan Apu — web and mobile apps";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Projects",
    title: "Built by Aariyan Apu",
    subtitle: "E-commerce, news, NGO, community platforms and a radio app",
    tags: ["First Aid Surgical", "NonstopGG", "GBDC", "Mellow Bangla", "Ahar"],
  });
}
