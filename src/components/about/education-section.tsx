import { GraduationCap, Laptop } from "lucide-react";
import { AnimatedSlice } from "@/components/animated-slice";
import { education } from "@/utils/constants";

const iconMap: Record<string, React.ElementType> = {
  Laptop,
  GraduationCap,
};

export function EducationSection() {
  return (
    <section className="px-6 sm:px-10 md:px-20 lg:px-32 py-16">
      <div className="max-w-5xl mx-auto">
        <AnimatedSlice inView delay={0}>
          <p className="text-teal font-sans text-sm font-semibold tracking-widest uppercase mb-3">
            Education
          </p>
        </AnimatedSlice>
        <AnimatedSlice inView delay={0.08}>
          <h2 className="font-title text-4xl sm:text-5xl font-black text-foreground mb-8">
            Background
          </h2>
        </AnimatedSlice>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {education.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <AnimatedSlice key={item.title} inView delay={0.12 + i * 0.06}>
                <div className="rounded-xl border border-border bg-muted/20 p-6 flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-teal/10 border border-teal/20 shrink-0 mt-0.5">
                    {Icon && <Icon className="size-5 text-teal" />}
                  </div>
                  <div>
                    <h3 className="font-title text-lg font-black text-foreground">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground mt-1">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </AnimatedSlice>
            );
          })}
        </div>
      </div>
    </section>
  );
}
