"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AnimatedSlice } from "@/components/animated-slice";
import { ProjectCard } from "@/components/projects/project-card";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  url: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
  image: string;
  featured: boolean;
}

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = [...new Set(projects.flatMap((p) => p.tags))].sort();
  const filtered = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag))
    : projects;

  return (
    <div>
      {/* Tag filter */}
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

      {/* Animated grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground font-sans py-12">
          No projects found for this tag.
        </p>
      )}
    </div>
  );
}
