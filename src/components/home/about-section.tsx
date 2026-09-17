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
                I came to engineering through finance — four and a half years at
                a garment manufacturer, most recently as <H>Assistant Accountant</H>{" "}
                handling production, sales, and cost reporting. Alongside that,
                I've been building web applications since April 2021, and today I
                work across the entire stack — from pixel-perfect frontends in{" "}
                <H>React</H> and <H>Next.js</H> to backend APIs with{" "}
                <H>Node.js</H> and <H>NestJS</H>, backed by <H>PostgreSQL</H>{" "}
                and MongoDB.
              </p>
            </AnimatedSlice>

            <AnimatedSlice inView delay={0.18}>
              <p className="font-sans text-muted-foreground leading-relaxed">
                I've built multilingual e-commerce platforms for medical
                equipment suppliers, shipped a <H>React Native</H> radio app
                from scratch, and run production deployments on <H>AWS</H>, VPS,
                and <H>Linux</H> servers — comfortable with <H>CI/CD</H>,{" "}
                <H>Docker</H>, and <H>Cloudflare</H> infrastructure.
              </p>
            </AnimatedSlice>

            <AnimatedSlice inView delay={0.24}>
              <p className="font-sans text-muted-foreground leading-relaxed">
                I've been admitted to the <H>M.Sc. European Economic Studies</H>{" "}
                at Otto-Friedrich-Universität Bamberg for the 2026/27 winter
                semester — where my finance background meets everything I've
                learned shipping software. When I'm not writing code, I'm
                managing my <H> self-hosted</H> server at home or contributing
                to <H>open-source</H> projects.
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
                  alt="Portrait of Aariyan Apu, full stack web developer from Barishal, Bangladesh"
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
