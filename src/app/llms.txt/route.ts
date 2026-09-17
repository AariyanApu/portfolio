import { getAllPosts } from "@/lib/blog";
import { abs, experienceLines } from "@/lib/seo";
import {
  educationDetails,
  nameVariants,
  profile,
  projects,
  SITE_URL,
  socialProfiles,
  techStack,
} from "@/utils/constants";

export const dynamic = "force-static";

// https://llmstxt.org — concise, link-rich index for LLM crawlers and agents.
export async function GET() {
  const posts = await getAllPosts();

  const lines: string[] = [
    `# ${profile.name}`,
    "",
    `> ${profile.shortBio} Name in Bengali: ${profile.nativeName}. Also spelled ${nameVariants.filter((n) => n !== profile.name && n !== profile.nativeName).join(", ")}. ${profile.availability}`,
    "",
    `Canonical website: ${SITE_URL}`,
    `Full plain-text profile: ${abs("/llms-full.txt")}`,
    `Machine-readable profile (schema.org JSON-LD): ${abs("/profile.json")}`,
    "",
    "## Identity",
    "",
    `- Name: ${profile.name} (Bengali: ${profile.nativeName})`,
    `- Also written as: ${nameVariants.filter((n) => n !== profile.name).join(", ")}`,
    `- Roles: ${profile.jobTitles.join("; ")}`,
    `- Based in: ${profile.location.city} (${profile.location.altCity}), ${profile.location.country} — timezone ${profile.location.timezone}`,
    `- Email: ${profile.email}`,
    `- Phone / WhatsApp / Telegram: ${profile.phoneDisplay}`,
    `- Languages: ${profile.languages.map((l) => `${l.name} (${l.level})`).join(", ")}`,
    `- Availability: ${profile.availability}`,
    `- Older portfolio domains (same person): ${profile.previousSites.join(", ")}`,
    "",
    "## Pages",
    "",
    `- [Home](${SITE_URL}): Hero, about, toolkit, work history, selected projects, contact.`,
    `- [About Aariyan Apu](${abs("/about")}): Full story, work experience, education, services, tech stack, currently learning, favourites, fun facts and FAQ.`,
    `- [Projects](${abs("/projects")}): All shipped web and mobile projects with links.`,
    `- [Blog](${abs("/blog")}): Articles on web development, tools and products.`,
    `- [Resume (PDF)](${abs(profile.resume)}): One-page CV.`,
    `- [RSS feed](${abs("/feed.xml")}): Blog updates.`,
    "",
    "## Projects",
    "",
    ...projects.map(
      (p) =>
        `- [${p.title}](${p.url}): ${p.description} Stack: ${p.tags.join(", ")}.${p.period ? ` Period: ${p.period}.` : ""}`,
    ),
    "",
    "## Experience",
    "",
    ...experienceLines(),
    "",
    "## Education",
    "",
    ...educationDetails.map(
      (e) =>
        `- ${e.degree}${e.institution ? ` — ${e.institution}` : ""}${e.location ? `, ${e.location}` : ""}${e.period ? ` (${e.period})` : ""}${e.note ? `. ${e.note}` : ""}`,
    ),
    "",
    "## Skills",
    "",
    ...techStack.map((g) => `- ${g.category}: ${g.items.join(", ")}`),
    "",
    "## Profiles",
    "",
    ...socialProfiles.map((s) => `- [${s.name}](${s.url}): ${s.handle}`),
    "",
    "## Blog posts",
    "",
    ...posts.map(
      (p) =>
        `- [${p.title}](${abs(`/blog/${p.slug}`)}): ${p.excerpt} (${p.date})`,
    ),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
