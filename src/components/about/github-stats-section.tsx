import { AnimatedSlice } from "@/components/animated-slice";

const BASE = "https://github-readme-stats.vercel.app/api";
const PARAMS =
  "hide_border=true&theme=transparent&title_color=2dd4bf&icon_color=2dd4bf&text_color=9ca3af&bg_color=00000000";

const statsUrl = `${BASE}?username=aariyanapu&show_icons=true&${PARAMS}`;
const langsUrl = `${BASE}/top-langs/?username=aariyanapu&layout=compact&${PARAMS}`;

export function GitHubStatsSection() {
  return (
    <section className="px-6 sm:px-10 md:px-20 lg:px-32 py-16">
      <div className="max-w-5xl mx-auto">
        <AnimatedSlice inView delay={0}>
          <p className="text-teal font-sans text-sm font-semibold tracking-widest uppercase mb-3">
            Open Source
          </p>
        </AnimatedSlice>
        <AnimatedSlice inView delay={0.08}>
          <h2 className="font-title text-4xl sm:text-5xl font-black text-foreground mb-8">
            GitHub Stats
          </h2>
        </AnimatedSlice>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <AnimatedSlice inView delay={0.12} className="h-full">
            <a
              href="https://github.com/aariyanapu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-full rounded-xl border border-border bg-muted/20 hover:border-teal/30 hover:bg-muted/30 transition-all duration-200 p-4 sm:p-6"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={statsUrl}
                alt="Aariyan's GitHub stats"
                className="w-full h-auto"
                loading="lazy"
              />
            </a>
          </AnimatedSlice>

          <AnimatedSlice inView delay={0.18} className="h-full">
            <a
              href="https://github.com/aariyanapu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-full rounded-xl border border-border bg-muted/20 hover:border-teal/30 hover:bg-muted/30 transition-all duration-200 p-4 sm:p-6"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={langsUrl}
                alt="Aariyan's top languages"
                className="w-full h-auto"
                loading="lazy"
              />
            </a>
          </AnimatedSlice>
        </div>
      </div>
    </section>
  );
}
