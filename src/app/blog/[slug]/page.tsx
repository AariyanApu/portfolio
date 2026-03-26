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
      title: `${post.title} — Aariyan Apu`,
      description: post.excerpt,
      openGraph: { images: [post.image] },
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

  return (
    <>
      <ScrollProgress />
      <main className="px-6 sm:px-10 md:px-20 lg:px-32 py-16">
        <div className="max-w-5xl mx-auto">
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

            <AnimatedSlice delay={0.2}>
              <ShareButtons slug={post.slug} title={post.title} />
            </AnimatedSlice>
          </article>
        </div>
        <Footer />
      </main>
    </>
  );
}
