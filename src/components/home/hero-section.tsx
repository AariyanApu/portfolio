import { AnimatedSlice } from "@/components/animated-slice";
import ShimmerButton from "@/components/ui/shimmer-button";

export function HeroSection() {
  return (
    <section className="min-h-screen bg-background flex items-center px-6 sm:px-10 md:px-20 lg:px-32">
      <div className="w-full max-w-5xl">
        <AnimatedSlice delay={0}>
          <p className="text-teal font-sans text-base sm:text-lg mb-4 sm:mb-5">
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
            I turn ideas into products people actually use
          </h2>
        </AnimatedSlice>

        <AnimatedSlice delay={0.32}>
          <p className="text-muted-foreground font-sans text-sm sm:text-base max-w-lg text-justify leading-relaxed mb-8 sm:mb-10">
            Designing, building, and shipping web and mobile apps that people
            actually want to use.
          </p>
        </AnimatedSlice>

        <AnimatedSlice delay={0.42}>
          <ShimmerButton
            text="Download Resume"
            href="/resume.pdf"
            shimmerColor="oklch(0.78 0.15 172)"
            className="justify-start"
          />
        </AnimatedSlice>
      </div>
    </section>
  );
}
