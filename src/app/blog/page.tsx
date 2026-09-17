import type { Metadata } from "next";
import { AnimatedSlice } from "@/components/animated-slice";
import { BlogGrid } from "@/components/blog/blog-grid";
import { JsonLd } from "@/components/json-ld";
import { Footer } from "@/components/layout/footer";
import { getAllPosts } from "@/lib/blog";
import {
  BLOG_ID,
  blogJsonLd,
  breadcrumbJsonLd,
  webPageJsonLd,
} from "@/lib/seo";

const TITLE = "Blog by Aariyan Apu";
const DESCRIPTION =
  "Posts by Aariyan Apu, full stack web developer from Bangladesh — web development, Next.js, React, Linux, tools and building products.";

export const metadata: Metadata = {
  title: "Blog",
  description: DESCRIPTION,
  alternates: {
    canonical: "/blog",
    types: {
      "application/rss+xml": [
        { url: "/feed.xml", title: "Aariyan Apu — Blog RSS" },
      ],
    },
  },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: "/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      webPageJsonLd({
        path: "/blog",
        name: TITLE,
        description: DESCRIPTION,
        type: "CollectionPage",
        extra: { mainEntity: { "@id": BLOG_ID } },
      }),
      blogJsonLd(posts),
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
      ]),
    ],
  };

  return (
    <main className="px-6 sm:px-10 md:px-20 lg:px-32 py-16">
      <JsonLd data={jsonLd} />
      <div className="max-w-5xl mx-auto py-16">
        <AnimatedSlice inView delay={0}>
          <p className="text-teal font-sans text-sm font-semibold tracking-widest uppercase mb-2">
            Blog
          </p>
        </AnimatedSlice>
        <AnimatedSlice inView delay={0.08}>
          <h1 className="font-title text-4xl sm:text-5xl font-black text-foreground mb-8">
            Posts & Thoughts
          </h1>
        </AnimatedSlice>

        <BlogGrid posts={posts} />
      </div>
      <Footer />
    </main>
  );
}
