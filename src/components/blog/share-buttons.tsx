"use client";

import { Check, Facebook, Link2, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

export function ShareButtons({ slug, title }: { slug: string; title: string }) {
  const [copied, setCopied] = useState(false);

  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const url = `${origin}/blog/${slug}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  function copyLink() {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex items-center gap-2 pt-8 border-t border-border mt-12">
      <span className="font-sans text-sm text-muted-foreground mr-2">
        Share
      </span>
      <button
        type="button"
        onClick={copyLink}
        className="inline-flex items-center justify-center size-9 rounded-lg border border-border text-muted-foreground hover:border-teal/30 hover:text-teal transition-colors duration-200"
        aria-label="Copy link"
      >
        {copied ? <Check className="size-4" /> : <Link2 className="size-4" />}
      </button>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center size-9 rounded-lg border border-border text-muted-foreground hover:border-teal/30 hover:text-teal transition-colors duration-200"
        aria-label="Share on X"
      >
        <Twitter className="size-4" />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center size-9 rounded-lg border border-border text-muted-foreground hover:border-teal/30 hover:text-teal transition-colors duration-200"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="size-4" />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center size-9 rounded-lg border border-border text-muted-foreground hover:border-teal/30 hover:text-teal transition-colors duration-200"
        aria-label="Share on Facebook"
      >
        <Facebook className="size-4" />
      </a>
    </div>
  );
}
