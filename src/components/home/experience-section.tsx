import { AnimatedSlice } from "@/components/animated-slice";
import { experiences } from "@/utils/constants";
export function ExperienceSection() {
  return (
    <section className="px-6 sm:px-10 md:px-20 lg:px-32 py-24">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <AnimatedSlice inView delay={0}>
          <p className="text-teal font-sans text-sm font-semibold tracking-widest uppercase mb-3">
            My journey
          </p>
        </AnimatedSlice>
        <AnimatedSlice inView delay={0.08}>
          <h2 className="font-title text-5xl sm:text-6xl font-black text-foreground mb-16">
            Where I've Worked
          </h2>
        </AnimatedSlice>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-teal/60 via-teal/20 to-transparent" />

          <div className="space-y-12">
            {experiences?.map((exp, i) => (
              <AnimatedSlice key={exp.company} inView delay={0.1 + i * 0.1}>
                <div className="relative pl-8 group">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-teal bg-background group-hover:bg-teal transition-colors duration-300" />

                  {/* Card */}
                  <div className="rounded-2xl border border-border bg-muted/20 p-6 hover:border-teal/30 hover:bg-muted/30 transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                      <div>
                        <h3 className="font-title text-xl font-black text-foreground">
                          {exp.role}
                        </h3>
                        <span className="text-teal font-sans text-sm font-semibold">
                          {exp.company}
                        </span>
                      </div>
                      <span className="font-sans text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full self-start sm:self-auto whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((point) => (
                        <span
                          key={point}
                          className="inline-flex items-center gap-1.5 font-sans text-xs font-medium text-teal bg-teal/10 border border-teal/20 rounded-full px-3 py-1"
                        >
                          <span className="w-1 h-1 rounded-full bg-teal" />
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSlice>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
