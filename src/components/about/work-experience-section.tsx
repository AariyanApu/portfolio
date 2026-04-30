import { AnimatedSlice } from "@/components/animated-slice";
import { experiences } from "@/utils/constants";

export function WorkExperienceSection() {
  return (
    <section className="px-6 sm:px-10 md:px-20 lg:px-32 py-16">
      <div className="max-w-5xl mx-auto">
        <AnimatedSlice inView delay={0}>
          <p className="text-teal font-sans text-sm font-semibold tracking-widest uppercase mb-3">
            Career
          </p>
        </AnimatedSlice>
        <AnimatedSlice inView delay={0.08}>
          <h2 className="font-title text-4xl sm:text-5xl font-black text-foreground mb-10">
            Work Experience
          </h2>
        </AnimatedSlice>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-teal/60 via-teal/20 to-transparent" />

          <div className="space-y-4">
            {experiences?.map((exp, i) => (
              <AnimatedSlice key={exp.company} inView delay={0.1 + i * 0.08}>
                <div className="relative pl-7 group">
                  <div className="absolute left-0 top-2 -translate-x-1/2 w-2.5 h-2.5 rounded-full border-2 border-teal bg-background group-hover:bg-teal transition-colors duration-300" />

                  <div className="rounded-xl border border-border bg-muted/20 px-5 py-4 hover:border-teal/30 hover:bg-muted/30 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 mb-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-title text-base font-black text-foreground">
                          {exp.role}
                        </h3>
                        <span className="text-muted-foreground font-sans text-xs">
                          at
                        </span>
                        <span className="text-teal font-sans text-sm font-semibold">
                          {exp.company}
                        </span>
                      </div>
                      <span className="font-sans text-xs text-muted-foreground whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    <p className="font-sans text-xs text-muted-foreground leading-relaxed mt-1.5 mb-2">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.highlights.map((point) => (
                        <span
                          key={point}
                          className="inline-flex items-center gap-1 font-sans text-xs font-medium text-teal bg-teal/10 border border-teal/20 rounded-full px-2.5 py-0.5"
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
