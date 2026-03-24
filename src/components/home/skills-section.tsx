import Image from "next/image";
import { AnimatedSlice } from "@/components/animated-slice";
import { SKILL_ICONS_WIDE_URL } from "@/utils/constants";

export function SkillsSection() {
  return (
    <section className="px-6 sm:px-10 md:px-20 lg:px-32 py-24">
      <div className="max-w-3xl mx-auto text-center">

        {/* Heading */}
        <AnimatedSlice inView delay={0}>
          <p className="text-teal font-sans text-sm font-semibold tracking-widest uppercase mb-3">
            My toolkit
          </p>
        </AnimatedSlice>
        <AnimatedSlice inView delay={0.08}>
          <h2 className="font-title text-5xl sm:text-6xl font-black text-foreground mb-12">
            Things I Work With
          </h2>
        </AnimatedSlice>

        {/* All icons in one grid */}
        <AnimatedSlice inView delay={0.16}>
          <Image
            src={SKILL_ICONS_WIDE_URL}
            alt="Tech stack icons"
            width={550}
            height={250}
            className="mx-auto w-full max-w-2xl"
            unoptimized
          />
        </AnimatedSlice>

      </div>
    </section>
  );
}
