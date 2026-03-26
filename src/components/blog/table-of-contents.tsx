"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { Heading } from "@/types/blog";

export function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "0px 0px -80% 0px", threshold: 0 },
    );

    for (const heading of headings) {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="hidden lg:block sticky top-24 w-56 shrink-0 self-start">
      <p className="font-sans text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
        On this page
      </p>
      <ul className="flex flex-col gap-1 border-l border-border">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(heading.id)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className={cn(
                "block font-sans text-sm py-1 transition-colors duration-200 border-l-2 -ml-px",
                heading.level === 3 ? "pl-6" : "pl-3",
                activeId === heading.id
                  ? "border-teal text-teal"
                  : "border-transparent text-muted-foreground hover:text-foreground",
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
