import { AnimatedSlice } from "@/components/animated-slice";
import { skillGroups } from "@/utils/constants";

export function SkillsSection() {
  return (
    <section className="px-6 sm:px-10 md:px-20 lg:px-32 py-24">
      <div className="max-w-5xl mx-auto">

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

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, i) => (
            <AnimatedSlice key={group.category} inView delay={0.08 + i * 0.07}>
              <div className="group h-full rounded-2xl border border-border bg-muted/20 p-6 hover:border-teal/40 hover:bg-muted/40 transition-all duration-300">
                {/* Category label */}
                <p className="text-teal font-sans text-xs font-semibold tracking-widest uppercase mb-4">
                  {group.category}
                </p>
                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-sans text-xs font-medium text-muted-foreground bg-background/60 border border-border rounded-full px-3 py-1 group-hover:border-border/80 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSlice>
          ))}
        </div>

      </div>
    </section>
  );
}
