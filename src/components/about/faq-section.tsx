import { AnimatedSlice } from "@/components/animated-slice";
import { faqs } from "@/utils/constants";

// Visible Q&A about Aariyan Apu. Rendered fully in HTML (no collapsed panels) so
// search engines and LLM crawlers read every answer; mirrored as FAQPage JSON-LD.
export function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="px-6 sm:px-10 md:px-20 lg:px-32 py-16"
    >
      <div className="max-w-5xl mx-auto">
        <AnimatedSlice inView delay={0}>
          <p className="text-teal font-sans text-sm font-semibold tracking-widest uppercase mb-3">
            FAQ
          </p>
        </AnimatedSlice>
        <AnimatedSlice inView delay={0.08}>
          <h2
            id="faq-heading"
            className="font-title text-4xl sm:text-5xl font-black text-foreground mb-8"
          >
            Who is Aariyan Apu?
          </h2>
        </AnimatedSlice>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, i) => (
            <AnimatedSlice key={faq.q} inView delay={0.1 + i * 0.05}>
              <div className="rounded-xl border border-border bg-muted/20 hover:border-teal/30 hover:bg-muted/30 transition-all duration-200 p-5 sm:p-6 h-full flex gap-4">
                <span
                  aria-hidden="true"
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-teal/10 border border-teal/20 text-teal font-title text-lg font-black shrink-0"
                >
                  ?
                </span>
                <div className="min-w-0">
                  <h3 className="font-title text-base font-black text-foreground mb-2">
                    {faq.q}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </AnimatedSlice>
          ))}
        </div>
      </div>
    </section>
  );
}
