import type { Metadata } from "next";
import { AnimatedSlice } from "@/components/animated-slice";
import { BlogGrid } from "@/components/blog/blog-grid";
import { Footer } from "@/components/layout/footer";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Aariyan Apu",
  description: "Thoughts on web development, tech, and building things.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="px-6 sm:px-10 md:px-20 lg:px-32 py-16">
      <div className="max-w-5xl mx-auto">
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
