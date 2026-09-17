import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AnimatedSlice } from "@/components/animated-slice";
import { PostBody } from "@/components/blog/post-body";
import { PostHeader } from "@/components/blog/post-header";
import { ScrollProgress } from "@/components/blog/scroll-progress";
import { ShareButtons } from "@/components/blog/share-buttons";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { JsonLd } from "@/components/json-ld";
import { Footer } from "@/components/layout/footer";
import { getPostBySlug, getPostSlugs } from "@/lib/blog";
import { blogPostingJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { SITE_URL } from "@/utils/constants";

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
      keywords: [...post.tags, "Aariyan Apu"],
      authors: [{ name: "Aariyan Apu", url: SITE_URL }],
      alternates: { canonical: `/blog/${slug}` },
      openGraph: {
        type: "article",
        title: post.title,
        description: post.excerpt,
        url: `/blog/${slug}`,
        images: [{ url: post.image, alt: post.title }],
        publishedTime: post.date,
        modifiedTime: post.date,
        authors: [`${SITE_URL}/about`],
        section: "Blog",
        tags: post.tags,
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.excerpt,
        images: [post.image],
      },
    };
  } catch {
    return { title: "Post not found", robots: { index: false } };
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      blogPostingJsonLd(post),
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: post.title, path: `/blog/${slug}` },
      ]),
    ],
  };

  return (
    <>
      <ScrollProgress />
      <JsonLd data={jsonLd} />
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
