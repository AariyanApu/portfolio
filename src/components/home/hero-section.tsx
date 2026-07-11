import Link from "next/link";
import { AnimatedSlice } from "@/components/animated-slice";
import ShimmerButton from "@/components/ui/shimmer-button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-background flex items-center px-6 sm:px-10 md:px-20 lg:px-32 overflow-hidden">
      {/* Ambient teal glow */}
      <div
        aria-hidden
        className="absolute -top-32 right-0 sm:right-20 size-[28rem] sm:size-[36rem] rounded-full bg-teal/10 blur-3xl pointer-events-none"
      />
      <div className="relative w-full max-w-5xl">
        <AnimatedSlice delay={0}>
          <p className="text-teal font-mono text-sm sm:text-base mb-4 sm:mb-5">
            Hi, I'm
          </p>
        </AnimatedSlice>

        <AnimatedSlice delay={0.12}>
          <h1 className="font-title text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black text-foreground leading-none mb-1">
            Aariyan Apu
          </h1>
        </AnimatedSlice>

        <AnimatedSlice delay={0.22}>
          <h2 className="font-title text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-muted-foreground leading-tight mb-6 sm:mb-8">
            I turn ideas into products people{" "}
            <span className="text-teal">actually use</span>
          </h2>
        </AnimatedSlice>

        <AnimatedSlice delay={0.32}>
          <p className="text-muted-foreground font-sans text-sm sm:text-base max-w-xl leading-relaxed mb-8 sm:mb-10">
            Full-stack engineer with 6+ years shipping e-commerce platforms,
            news portals, and mobile apps — React, Next.js, Node.js, and
            PostgreSQL. Based in Bangladesh, building for users everywhere.
          </p>
        </AnimatedSlice>

        <AnimatedSlice delay={0.42}>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
            <ShimmerButton
              text="Download Resume"
              href="/resume.pdf"
              shimmerColor="oklch(0.78 0.15 172)"
              className="justify-start"
            />
            <Link
              href="/projects"
              className="inline-flex items-center justify-center w-fit rounded-full border border-border px-8 py-3 font-sans text-sm sm:text-base text-foreground hover:border-teal/50 hover:text-teal transition-colors duration-300"
            >
              View projects
            </Link>
          </div>
        </AnimatedSlice>

        <AnimatedSlice delay={0.52}>
          <p className="flex items-center gap-2 font-mono text-xs text-muted-foreground mt-8">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-teal" />
            </span>
            Available for freelance & contract work
          </p>
        </AnimatedSlice>
      </div>
    </section>
  );
}
