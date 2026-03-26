"use client";

import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { BlogPostMeta } from "@/types/blog";

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function BlogCard({ post }: { post: BlogPostMeta }) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
      <Link
        href={`/blog/${post.slug}`}
        className="group flex flex-col rounded-lg border border-border bg-muted/20 hover:border-teal/30 hover:bg-muted/30 transition-all duration-300 overflow-hidden h-full"
      >
        {/* Cover image */}
        <div className="relative h-40 bg-muted/40 overflow-hidden shrink-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover opacity-50 bg-black group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale-100 group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2 p-4 flex-1">
          <h3 className="font-title text-lg font-black text-foreground group-hover:text-teal transition-colors duration-300 line-clamp-2">
            {post.title}
          </h3>
          <p className="font-sans text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-2">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-3 text-xs text-muted-foreground font-sans mt-auto pt-2">
            <span className="inline-flex items-center gap-1">
              <Calendar className="size-3" />
              {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="size-3" />
              {post.readingTime} min read
            </span>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 pt-1">
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="font-sans text-xs"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
