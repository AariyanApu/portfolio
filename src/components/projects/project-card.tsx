"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

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

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="h-72"
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col rounded-lg border border-border bg-muted/20 hover:border-teal/30 hover:bg-muted/30 transition-all duration-300 overflow-hidden h-full"
      >
        {/* Image */}
        <div className="relative h-36 bg-muted/40 overflow-hidden shrink-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-50 bg-black group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale-100 group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-1.5 p-3 flex-1 overflow-hidden">
          <div className="flex items-center gap-1.5">
            <h3 className="font-title text-sm font-black text-foreground group-hover:text-teal transition-colors duration-300 truncate">
              {project.title}
            </h3>
            <ExternalLink className="size-3 text-muted-foreground group-hover:text-teal transition-colors duration-300 shrink-0" />
            {project.period && (
              <span className="ml-auto font-sans text-xs text-muted-foreground whitespace-nowrap shrink-0">
                {project.period}
              </span>
            )}
          </div>
          <p className="font-sans text-xs text-muted-foreground leading-relaxed line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1 mt-auto pt-1">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="font-sans text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </a>
    </motion.div>
  );
}
