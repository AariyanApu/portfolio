"use client";

import { useState } from "react";
import { AnimatedSlice } from "@/components/animated-slice";
import { BlogCard } from "@/components/blog/blog-card";
import { cn } from "@/lib/utils";
import type { BlogPostMeta } from "@/types/blog";

export function BlogGrid({ posts }: { posts: BlogPostMeta[] }) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = [...new Set(posts.flatMap((p) => p.tags))].sort();
  const filtered = activeTag
    ? posts.filter((p) => p.tags.includes(activeTag))
    : posts;

  return (
    <div>
      {/* Tag filter */}
      {allTags.length > 0 && (
        <AnimatedSlice inView delay={0.12}>
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              type="button"
              onClick={() => setActiveTag(null)}
              className={cn(
                "font-sans text-xs font-medium rounded-full px-3 py-1 border transition-colors duration-200",
                !activeTag
                  ? "bg-teal/10 border-teal/20 text-teal"
                  : "border-border text-muted-foreground hover:border-teal/30 hover:text-teal",
              )}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                className={cn(
                  "font-sans text-xs font-medium rounded-full px-3 py-1 border transition-colors duration-200",
                  activeTag === tag
                    ? "bg-teal/10 border-teal/20 text-teal"
                    : "border-border text-muted-foreground hover:border-teal/30 hover:text-teal",
                )}
              >
                {tag}
              </button>
            ))}
          </div>
        </AnimatedSlice>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((post, i) => (
          <AnimatedSlice key={post.slug} inView delay={0.1 + i * 0.07}>
            <BlogCard post={post} />
          </AnimatedSlice>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground font-sans py-12">
          No posts found for this tag.
        </p>
      )}
    </div>
  );
}
