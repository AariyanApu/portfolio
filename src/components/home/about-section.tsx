import Image from "next/image";
import { AnimatedSlice } from "@/components/animated-slice";
import { H } from "@/components/ui/highlight";

export function AboutSection() {
  return (
    <section className="px-6 sm:px-10 md:px-20 lg:px-32 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <AnimatedSlice inView delay={0}>
          <p className="text-teal font-sans text-sm font-semibold tracking-widest uppercase mb-3">
            Get to know me
          </p>
        </AnimatedSlice>
        <AnimatedSlice inView delay={0.08}>
          <h2 className="font-title text-5xl sm:text-6xl font-black text-foreground mb-12">
            About Me
          </h2>
        </AnimatedSlice>

        {/* Two-column layout */}
        <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-16 items-start">
          {/* Text */}
          <div className="flex-1 space-y-5">
            <AnimatedSlice inView delay={0.12}>
              <p className="font-sans text-muted-foreground leading-relaxed">
                I'm a full-stack engineer with 6+ years of experience building
                production-grade web and mobile applications. I work across the
                entire stack — from pixel-perfect frontends in <H>React</H> and{" "}
                <H>Next.js</H> to backend APIs with <H>Node.js</H> and{" "}
                <H>NestJS</H>, backed by <H>PostgreSQL</H> and MongoDB.
              </p>
            </AnimatedSlice>

            <AnimatedSlice inView delay={0.18}>
              <p className="font-sans text-muted-foreground leading-relaxed">
                I've led frontend teams for e-commerce platforms, built
                multi-language medical equipment websites, and shipped a{" "}
                <H>React Native</H> radio app from scratch. I'm comfortable with{" "}
                <H>CI/CD</H>, <H>Docker</H>, <H>Linux</H> server administration,
                and <H>Cloudflare</H> infrastructure.
              </p>
            </AnimatedSlice>

            <AnimatedSlice inView delay={0.24}>
              <p className="font-sans text-muted-foreground leading-relaxed">
                When I'm not writing code, I'm managing my <H> self-hosted</H>{" "}
                server at home or contributing to <H>open-source</H> projects.
              </p>
            </AnimatedSlice>

            <AnimatedSlice inView delay={0.3}>
              <p className="font-sans leading-relaxed">
                <span className="text-teal font-semibold">
                  I'm currently available for freelance and contract
                  opportunities.
                </span>
              </p>
            </AnimatedSlice>
          </div>

          {/* Image */}
          <AnimatedSlice
            inView
            delay={0.1}
            className="w-full md:w-72 lg:w-80 shrink-0"
          >
            <div className="relative mx-auto w-64 md:w-full">
              {/* Decorative offset border */}
              <div className="absolute inset-0 rounded-2xl border border-teal/40 translate-x-3 translate-y-3" />
              {/* Image card */}
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl">
                <Image
                  src="/asset/about-me.jpg"
                  alt="Aariyan Apu"
                  width={400}
                  height={500}
                  className="object-cover w-full grayscale hover:grayscale-0 transition-all duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-teal/5 hover:bg-transparent transition-colors duration-500" />
              </div>
            </div>
          </AnimatedSlice>
        </div>
      </div>
    </section>
  );
}
