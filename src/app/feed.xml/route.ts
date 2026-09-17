import { getAllPosts } from "@/lib/blog";
import { abs } from "@/lib/seo";
import { profile, SITE_NAME, SITE_URL } from "@/utils/constants";

export const dynamic = "force-static";

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function GET() {
  const posts = await getAllPosts();
  const latest = posts[0]?.date ?? new Date().toISOString();

  const items = posts
    .map((p) => {
      const url = abs(`/blog/${p.slug}`);
      return `    <item>
      <title>${esc(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description>${esc(p.excerpt)}</description>
      <author>${profile.email} (${SITE_NAME})</author>
      <enclosure url="${abs(p.image)}" type="image/${p.image.endsWith(".png") ? "png" : "webp"}" length="0" />
${p.tags.map((t) => `      <category>${esc(t)}</category>`).join("\n")}
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(SITE_NAME)} — Blog</title>
    <link>${SITE_URL}/blog</link>
    <atom:link href="${abs("/feed.xml")}" rel="self" type="application/rss+xml" />
    <description>${esc(`Posts by ${SITE_NAME}, full stack web developer from Barishal, Bangladesh.`)}</description>
    <language>en</language>
    <managingEditor>${profile.email} (${SITE_NAME})</managingEditor>
    <webMaster>${profile.email} (${SITE_NAME})</webMaster>
    <lastBuildDate>${new Date(latest).toUTCString()}</lastBuildDate>
    <image>
      <url>${abs("/icons/icon.png")}</url>
      <title>${esc(SITE_NAME)}</title>
      <link>${SITE_URL}</link>
    </image>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
