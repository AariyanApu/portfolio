import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import type { BlogPost, BlogPostMeta, Heading } from "@/types/blog";

const BLOG_DIR = path.join(process.cwd(), "content/blog");
const PUBLIC_DIR = path.join(process.cwd(), "public");

function resolveCoverImage(slug: string, frontmatterImage?: string): string {
  if (frontmatterImage) return frontmatterImage;
  for (const ext of ["webp", "jpg", "png", "svg"]) {
    const conventionPath = `/blog/${slug}/cover.${ext}`;
    if (fs.existsSync(path.join(PUBLIC_DIR, conventionPath)))
      return conventionPath;
  }
  return "/blog/default-cover.svg";
}

function calculateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

function extractHeadings(html: string): Heading[] {
  const headings: Heading[] = [];
  const regex = /<h([23])\s+id="([^"]*)"[^>]*>(.*?)<\/h[23]>/g;
  let match = regex.exec(html);
  while (match) {
    const text = match[3].replace(/<[^>]*>/g, "").trim();
    headings.push({ level: Number(match[1]), id: match[2], text });
    match = regex.exec(html);
  }
  return headings;
}

async function markdownToHtml(markdown: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: "wrap" })
    .use(rehypePrettyCode, { theme: "one-dark-pro", keepBackground: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown);
  return String(result);
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((name) => {
    const fullPath = path.join(BLOG_DIR, name, "index.md");
    return fs.existsSync(fullPath);
  });
}

export async function getPostBySlug(slug: string): Promise<BlogPost> {
  const filePath = path.join(BLOG_DIR, slug, "index.md");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContents);

  const html = await markdownToHtml(content);
  const headings = extractHeadings(html);

  return {
    slug,
    title: data.title ?? "Untitled",
    excerpt: data.excerpt ?? "",
    date: data.date ?? new Date().toISOString().split("T")[0],
    image: resolveCoverImage(slug, data.image),
    tags: data.tags ?? [],
    readingTime: calculateReadingTime(content),
    content,
    html,
    headings,
  };
}

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  const slugs = getPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getPostBySlug(slug);
      const { content: _, html: _h, headings: _hd, ...meta } = post;
      return meta;
    }),
  );
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}
