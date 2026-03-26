import { AnimatedSlice } from "@/components/animated-slice";
import { funFacts } from "@/utils/constants";

export function FunFactsSection() {
  return (
    <section className="px-6 sm:px-10 md:px-20 lg:px-32 py-16">
      <div className="max-w-5xl mx-auto">
        <AnimatedSlice inView delay={0}>
          <p className="text-teal font-sans text-sm font-semibold tracking-widest uppercase mb-3">
            Beyond the code
          </p>
        </AnimatedSlice>
        <AnimatedSlice inView delay={0.08}>
          <h2 className="font-title text-4xl sm:text-5xl font-black text-foreground mb-8">
            Fun Facts
          </h2>
        </AnimatedSlice>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {funFacts.map((fact, i) => (
            <AnimatedSlice key={fact.text} inView delay={0.1 + i * 0.06}>
              <div className="rounded-xl border border-border bg-muted/20 hover:border-teal/30 hover:bg-muted/30 transition-all duration-200 p-5 flex items-center gap-3">
                <span className="text-2xl shrink-0">{fact.emoji}</span>
                <p className="font-sans text-sm text-muted-foreground">
                  {fact.text}
                </p>
              </div>
            </AnimatedSlice>
          ))}
        </div>
      </div>
    </section>
  );
}
