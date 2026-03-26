import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/types/blog";

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function PostHeader({ post }: { post: BlogPost }) {
  return (
    <header className="mb-8">
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 font-sans text-sm text-muted-foreground hover:text-teal transition-colors duration-200 mb-6"
      >
        <ArrowLeft className="size-4" />
        Back to blog
      </Link>

      {/* Title */}
      <h1 className="font-title text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4">
        {post.title}
      </h1>

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground font-sans mb-6">
        <span className="inline-flex items-center gap-1.5">
          <Calendar className="size-4" />
          {formatDate(post.date)}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock className="size-4" />
          {post.readingTime} min read
        </span>
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
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

      {/* Cover image */}
      {!post.image.includes("default-cover") && (
        <div className="relative aspect-video w-full rounded-lg overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
        </div>
      )}
    </header>
  );
}
