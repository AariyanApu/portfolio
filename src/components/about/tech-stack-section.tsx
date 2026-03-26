import { Code } from "lucide-react";
import { AnimatedSlice } from "@/components/animated-slice";
import { Badge } from "@/components/ui/badge";
import { techStack } from "@/utils/constants";

export function TechStackSection() {
  return (
    <section className="px-6 sm:px-10 md:px-20 lg:px-32 py-16">
      <div className="max-w-5xl mx-auto">
        <AnimatedSlice inView delay={0}>
          <p className="text-teal font-sans text-sm font-semibold tracking-widest uppercase mb-3">
            Tools & technologies
          </p>
        </AnimatedSlice>
        <AnimatedSlice inView delay={0.08}>
          <h2 className="font-title text-4xl sm:text-5xl font-black text-foreground mb-8">
            Tech Stack
          </h2>
        </AnimatedSlice>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {techStack.map((group, i) => (
            <AnimatedSlice key={group.category} inView delay={0.1 + i * 0.06}>
              <div className="rounded-xl border border-border bg-muted/20 p-5 h-full">
                <div className="flex items-center gap-2 mb-3">
                  <Code className="size-4 text-teal" />
                  <h3 className="font-sans text-xs font-semibold text-teal uppercase tracking-wider">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <Badge
                      key={item}
                      variant="secondary"
                      className="font-sans text-xs"
                    >
                      {item}
                    </Badge>
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
