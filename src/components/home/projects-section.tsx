import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { AnimatedSlice } from "@/components/animated-slice";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/utils/constants";

const featured = projects.find((p) => p.featured);
const grid = projects.filter((p) => !p.featured);

export function ProjectsSection() {
  return (
    <section className="px-6 sm:px-10 md:px-20 lg:px-32 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <AnimatedSlice inView delay={0}>
          <p className="text-teal font-sans text-sm font-semibold tracking-widest uppercase mb-2">
            My work
          </p>
        </AnimatedSlice>
        <AnimatedSlice inView delay={0.08}>
          <h2 className="font-title text-4xl sm:text-5xl font-black text-foreground mb-8">
            Selected Projects
          </h2>
        </AnimatedSlice>

        {/* Featured card */}
        {featured && (
          <AnimatedSlice inView delay={0.14}>
            <a
              href={featured.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-lg border border-border bg-muted/20 hover:border-teal/30 hover:bg-muted/30 transition-all duration-300 overflow-hidden mb-4"
            >
              <div className="flex flex-col md:flex-row">
                {/* Text */}
                <div className="flex flex-col justify-center gap-2.5 p-5 md:w-1/2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {featured.period && (
                      <span className="inline-flex w-fit font-sans text-xs font-medium text-teal bg-teal/10 border border-teal/20 rounded-full px-2.5 py-0.5">
                        {featured.period}
                      </span>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-title text-xl font-black text-foreground group-hover:text-teal transition-colors duration-300">
                        {featured.title}
                      </h3>
                      <ExternalLink className="size-3.5 text-muted-foreground group-hover:text-teal transition-colors duration-300 shrink-0" />
                    </div>
                    <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                      {featured.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {featured.highlights.map((h) => (
                      <span
                        key={h}
                        className="inline-flex items-center gap-1 font-sans text-xs font-medium text-teal bg-teal/10 border border-teal/20 rounded-full px-2 py-0.5"
                      >
                        <span className="w-1 h-1 rounded-full bg-teal" />
                        {h}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {featured.tags.map((tag) => (
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
                {/* Image */}
                <div className="relative md:w-1/2 aspect-video md:aspect-auto md:min-h-44 bg-muted/40 overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover  grayscale-100 opacity-50 bg-black group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent md:bg-gradient-to-r" />
                </div>
              </div>
            </a>
          </AnimatedSlice>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {grid.map((project, i) => (
            <AnimatedSlice key={project.title} inView delay={0.1 + i * 0.07}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-lg border border-border bg-muted/20 hover:border-teal/30 hover:bg-muted/30 transition-all duration-300 overflow-hidden h-full"
              >
                {/* Image */}
                <div className="relative h-28 bg-muted/40 overflow-hidden shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-50 bg-black group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale-100 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                </div>
                {/* Content */}
                <div className="flex flex-col gap-1.5 p-3 flex-1">
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-title text-sm font-black text-foreground group-hover:text-teal transition-colors duration-300">
                      {project.title}
                    </h3>
                    <ExternalLink className="size-3 text-muted-foreground group-hover:text-teal transition-colors duration-300 shrink-0" />
                    {project.period && (
                      <span className="ml-auto font-sans text-xs text-muted-foreground whitespace-nowrap">
                        {project.period}
                      </span>
                    )}
                  </div>
                  <p className="font-sans text-xs text-muted-foreground leading-relaxed flex-1 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
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
            </AnimatedSlice>
          ))}
        </div>
      </div>
    </section>
  );
}
