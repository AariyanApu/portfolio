import { AnimatedSlice } from "@/components/animated-slice";
import { ProgressBar } from "@/components/ui/progress-bar";
import { currentlyLearning } from "@/utils/constants";

function ItemIcon({ emoji }: { emoji: string }) {
  if (emoji === "flag-de") {
    return (
      <div className="w-12 h-8 rounded-md overflow-hidden flex flex-col shrink-0">
        <div className="flex-1" style={{ backgroundColor: "#000000" }} />
        <div className="flex-1" style={{ backgroundColor: "#DD0000" }} />
        <div className="flex-1" style={{ backgroundColor: "#FFCE00" }} />
      </div>
    );
  }
  return <span className="text-4xl shrink-0">{emoji}</span>;
}

export function CurrentlyLearningSection() {
  return (
    <section className="px-6 sm:px-10 md:px-20 lg:px-32 py-16">
      <div className="max-w-5xl mx-auto">
        <AnimatedSlice inView delay={0}>
          <p className="text-teal font-sans text-sm font-semibold tracking-widest uppercase mb-3">
            Growth
          </p>
        </AnimatedSlice>
        <AnimatedSlice inView delay={0.08}>
          <h2 className="font-title text-4xl sm:text-5xl font-black text-foreground mb-8">
            Currently Learning
          </h2>
        </AnimatedSlice>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {currentlyLearning.map((item, i) => (
            <AnimatedSlice key={item.title} inView delay={0.1 + i * 0.1}>
              <div className="rounded-xl border border-border bg-muted/20 hover:border-teal/30 hover:bg-muted/30 transition-all duration-200 p-5 sm:p-6">
                <div className="flex items-start gap-4 mb-4">
                  <ItemIcon emoji={item.emoji} />
                  <div>
                    <h3 className="font-title text-xl font-black text-foreground leading-tight">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-muted-foreground mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-sans text-xs text-muted-foreground">
                      Progress
                    </span>
                    <span className="font-sans text-xs font-semibold text-teal">
                      {item.progress}%
                    </span>
                  </div>
                  <ProgressBar progress={item.progress} delay={0.3 + i * 0.1} />
                </div>
              </div>
            </AnimatedSlice>
          ))}
        </div>
      </div>
    </section>
  );
}
