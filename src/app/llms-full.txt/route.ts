import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { abs, allSkills, experienceLines } from "@/lib/seo";
import {
  books,
  currentlyLearning,
  educationDetails,
  faqs,
  favSongs,
  funFacts,
  movies,
  nameVariants,
  personalInterests,
  profile,
  projects,
  SITE_URL,
  services,
  socialProfiles,
  techStack,
  tvSeries,
} from "@/utils/constants";

export const dynamic = "force-static";

// Everything about Aariyan Apu in one plain-text document for LLMs and agents.
export async function GET() {
  const metas = await getAllPosts();
  const posts = await Promise.all(metas.map((m) => getPostBySlug(m.slug)));

  const lines: string[] = [
    `# ${profile.name} — complete profile`,
    "",
    `> ${profile.bio}`,
    "",
    `Canonical website: ${SITE_URL}`,
    `Short index: ${abs("/llms.txt")}`,
    `Machine-readable profile (schema.org JSON-LD): ${abs("/profile.json")}`,
    "",
    "## Identity and contact",
    "",
    `- Full name: ${profile.name}`,
    `- Name in Bengali: ${profile.nativeName}`,
    `- Given name: ${profile.givenName}; family name: ${profile.familyName}`,
    `- Common misspellings and handles (all the same person): ${nameVariants.filter((n) => n !== profile.name).join(", ")}`,
    `- Headline: ${profile.headline}`,
    `- Tagline: "${profile.tagline}"`,
    `- Roles: ${profile.jobTitles.join("; ")}`,
    `- Location: ${profile.location.city} (${profile.location.altCity}), ${profile.location.region}, ${profile.location.country} (${profile.location.countryCode}); timezone ${profile.location.timezone}`,
    `- Nationality: Bangladeshi`,
    `- Email: ${profile.email}`,
    `- Phone: ${profile.phoneDisplay} (${profile.phone})`,
    `- WhatsApp: ${profile.whatsapp}`,
    `- Telegram: ${profile.telegram}`,
    `- Website: ${SITE_URL}`,
    `- Resume (PDF): ${abs(profile.resume)}`,
    `- Photo: ${abs(profile.image)}`,
    `- Languages: ${profile.languages.map((l) => `${l.name} (${l.level})`).join(", ")}`,
    `- Availability: ${profile.availability}`,
    `- Older portfolio domains owned by the same person: ${profile.previousSites.join(", ")}`,
    "",
    "## Online profiles",
    "",
    ...socialProfiles.map((s) => `- ${s.name}: ${s.url} (${s.handle})`),
    "",
    "## Work experience",
    "",
    ...experienceLines(),
    "",
    "## Education",
    "",
    ...educationDetails.map(
      (e) =>
        `- ${e.degree}${e.institution ? ` — ${e.institution}` : ""}${e.location ? `, ${e.location}` : ""}${e.period ? ` (${e.period})` : ""}${e.note ? `. ${e.note}` : ""}${e.institutionUrl ? ` [${e.institutionUrl}]` : ""}`,
    ),
    "",
    "## Services offered",
    "",
    ...services.map((s) => `- ${s.title}: ${s.description}`),
    "",
    "## Projects",
    "",
    ...projects.map(
      (p) =>
        `### ${p.title}\n- URL: ${p.url}\n- ${p.description}\n- Highlights: ${p.highlights.join(", ")}\n- Stack: ${p.tags.join(", ")}${p.period ? `\n- Period: ${p.period}` : ""}${p.featured ? "\n- Featured project" : ""}\n`,
    ),
    "## Tech stack",
    "",
    ...techStack.map((g) => `- ${g.category}: ${g.items.join(", ")}`),
    `- Also: ${allSkills.filter((s) => !techStack.some((g) => g.items.includes(s))).join(", ")}`,
    "",
    "## Currently learning",
    "",
    ...currentlyLearning.map(
      (c) => `- ${c.title} (${c.progress}%): ${c.description}`,
    ),
    "",
    "## Frequently asked questions",
    "",
    ...faqs.flatMap((f) => [`### ${f.q}`, "", f.a, ""]),
    "## Personal interests",
    "",
    ...personalInterests.map((i) => `- ${i.label}`),
    "",
    "## Fun facts",
    "",
    ...funFacts.map((f) => `- ${f.text.trim()}`),
    "",
    "## Favourite movies",
    "",
    ...movies.map(
      (m) =>
        `- ${m.title} (${m.year}, ${m.genre}; directed by ${m.director}) — ${m.description}`,
    ),
    "",
    "## Favourite TV series",
    "",
    ...tvSeries.map(
      (s) =>
        `- ${s.title} (${s.year}, ${s.genre}, ${s.network}, ${s.seasons} season${s.seasons > 1 ? "s" : ""}) — ${s.description}`,
    ),
    "",
    "## Favourite books",
    "",
    ...books.map(
      (b) =>
        `- ${b.title} by ${b.author} (${b.year}, ${b.genre}) — ${b.description}`,
    ),
    "",
    "## Favourite songs",
    "",
    ...favSongs.map(
      (s) =>
        `- ${s.title} — ${s.artist} (${s.vibe}${s.from ? `, from ${s.from}` : ""})`,
    ),
    "",
    "## Blog posts (full text)",
    "",
    ...posts.flatMap((p) => [
      `### ${p.title}`,
      `- URL: ${abs(`/blog/${p.slug}`)}`,
      `- Published: ${p.date}; tags: ${p.tags.join(", ")}; ${p.readingTime} min read`,
      `- Summary: ${p.excerpt}`,
      "",
      p.content.trim(),
      "",
    ]),
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
