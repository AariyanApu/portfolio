import { identityGraph } from "@/lib/seo";

export const dynamic = "force-static";

// schema.org Person graph for agents and tools that prefer JSON over HTML.
export function GET() {
  return Response.json(identityGraph(), {
    headers: {
      "Content-Type": "application/ld+json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
