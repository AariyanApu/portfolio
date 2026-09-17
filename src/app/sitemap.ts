import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { abs } from "@/lib/seo";
import { profile, projects, SITE_URL } from "@/utils/constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [abs(profile.image), abs("/opengraph-image")],
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [abs(profile.image)],
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: projects.map((p) => abs(p.image)),
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: abs(profile.resume),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const posts = await getAllPosts();
  const blogPosts: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
    images: [abs(post.image)],
  }));

  return [...staticPages, ...blogPosts];
}
