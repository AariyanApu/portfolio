import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AnimatedSlice } from "@/components/animated-slice";
import { PostBody } from "@/components/blog/post-body";
import { PostHeader } from "@/components/blog/post-header";
import { ScrollProgress } from "@/components/blog/scroll-progress";
import { ShareButtons } from "@/components/blog/share-buttons";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { Footer } from "@/components/layout/footer";
import { getPostBySlug, getPostSlugs } from "@/lib/blog";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPostBySlug(slug);
    return {
      title: post.title,
      description: post.excerpt,
      keywords: post.tags,
      openGraph: {
        type: "article",
        title: post.title,
        description: post.excerpt,
        url: `https://aariyan.info/blog/${slug}`,
        images: [{ url: post.image, width: 1200, height: 630 }],
        publishedTime: post.date,
        authors: ["Aariyan Apu"],
        tags: post.tags,
      },
      alternates: {
        canonical: `https://aariyan.info/blog/${slug}`,
      },
    };
  } catch {
    return { title: "Post not found" };
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post: Awaited<ReturnType<typeof getPostBySlug>>;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Aariyan Apu",
      url: "https://aariyan.info",
    },
    publisher: { "@type": "Person", name: "Aariyan Apu" },
    url: `https://aariyan.info/blog/${slug}`,
    keywords: post.tags.join(", "),
    wordCount: post.content.split(/\s+/).length,
  };

  return (
    <>
      <ScrollProgress />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <main className="px-6 sm:px-10 md:px-20 lg:px-32 ">
        <div className=" pb-8 max-w-5xl mx-auto mt-32">
          <article>
            <AnimatedSlice delay={0}>
              <PostHeader post={post} />
            </AnimatedSlice>

            <AnimatedSlice delay={0.15}>
              <div className="flex gap-10">
                <div className="min-w-0 flex-1">
                  <PostBody html={post.html} />
                </div>
                <TableOfContents headings={post.headings} />
              </div>
            </AnimatedSlice>

            <AnimatedSlice delay={0.2} className=" ">
              <ShareButtons slug={post.slug} title={post.title} />
            </AnimatedSlice>
          </article>
        </div>
        <Footer />
      </main>
    </>
  );
}
