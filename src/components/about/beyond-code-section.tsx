import { AnimatedSlice } from "@/components/animated-slice";
import { BeyondCodeTabs } from "@/components/about/beyond-code-tabs";
import {
  books,
  favSongs,
  movies,
  personalInterests,
  tvSeries,
} from "@/utils/constants";

export function BeyondCodeSection() {
  return (
    <section className="px-6 sm:px-10 md:px-20 lg:px-32 py-16">
      <div className="max-w-5xl mx-auto">
        <AnimatedSlice inView delay={0}>
          <p className="text-teal font-sans text-sm font-semibold tracking-widest uppercase mb-3">
            Off the clock
          </p>
        </AnimatedSlice>
        <AnimatedSlice inView delay={0.08}>
          <h2 className="font-title text-4xl sm:text-5xl font-black text-foreground mb-8">
            Beyond the Code
          </h2>
        </AnimatedSlice>

        <AnimatedSlice inView delay={0.14}>
          <BeyondCodeTabs
            movies={movies}
            series={tvSeries}
            books={books}
            songs={favSongs}
            interests={personalInterests}
          />
        </AnimatedSlice>
      </div>
    </section>
  );
}
