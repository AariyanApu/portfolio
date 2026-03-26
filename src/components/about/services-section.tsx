import { Globe, Server, ShoppingCart, Smartphone } from "lucide-react";
import { AnimatedSlice } from "@/components/animated-slice";
import { services } from "@/utils/constants";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  ShoppingCart,
  Smartphone,
  Server,
};

export function ServicesSection() {
  return (
    <section className="px-6 sm:px-10 md:px-20 lg:px-32 py-16">
      <div className="max-w-5xl mx-auto">
        <AnimatedSlice inView delay={0}>
          <p className="text-teal font-sans text-sm font-semibold tracking-widest uppercase mb-3">
            What I do
          </p>
        </AnimatedSlice>
        <AnimatedSlice inView delay={0.08}>
          <h2 className="font-title text-4xl sm:text-5xl font-black text-foreground mb-8">
            Services
          </h2>
        </AnimatedSlice>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <AnimatedSlice key={service.title} inView delay={0.1 + i * 0.07}>
                <div className="rounded-xl border border-border bg-muted/20 hover:border-teal/30 hover:bg-muted/30 transition-all duration-200 p-6 h-full">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-teal/10 border border-teal/20 mb-4">
                    {Icon && <Icon className="size-5 text-teal" />}
                  </div>
                  <h3 className="font-title text-base font-black text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </AnimatedSlice>
            );
          })}
        </div>
      </div>
    </section>
  );
}
