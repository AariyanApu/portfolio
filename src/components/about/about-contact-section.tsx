import {
  Facebook,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { AnimatedSlice } from "@/components/animated-slice";

const directLinks = [
  {
    icon: Mail,
    value: "hello@aariyan.info",
    href: "mailto:hello@aariyan.info",
  },
  { icon: Phone, value: "+88 01712 686 075", href: "tel:+8801712686075" },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/AariyanApu" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://bd.linkedin.com/in/aariyanapu",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/aariyanapu",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/8801712686075",
  },
  { icon: Send, label: "Telegram", href: "https://t.me/+8801712686075" },
  { icon: Twitter, label: "X / Twitter", href: "https://x.com/aariyanapu" },
];

export function AboutContactSection() {
  return (
    <section className="px-6 sm:px-10 md:px-20 lg:px-32 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left — CTA */}
          <div className="lg:w-3/5 flex flex-col justify-center">
            <AnimatedSlice inView delay={0}>
              <p className="text-teal font-sans text-sm font-semibold tracking-widest uppercase mb-3">
                Let's connect
              </p>
            </AnimatedSlice>
            <AnimatedSlice inView delay={0.08}>
              <h2 className="font-title text-4xl sm:text-5xl font-black text-foreground mb-5 leading-tight">
                Still awake?
                <br />
                Let's talk.
              </h2>
            </AnimatedSlice>
            <AnimatedSlice inView delay={0.16}>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                I promise I reply faster than I sleep (which, as you now know,
                can be 34 hours). Whether you need a full-stack app, a coffee
                buddy, or someone to argue about Linux distros with — hit me up.
                Worst case, I'll send you a latte art pic.
              </p>
            </AnimatedSlice>
          </div>

          {/* Right — contact cards + social grid */}
          <AnimatedSlice inView delay={0.12} className="lg:w-2/5">
            <div className="flex flex-col gap-3">
              {directLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.value}
                    href={link.href}
                    className="group flex items-center gap-4 px-6 py-4 rounded-xl border border-border bg-muted/20 hover:border-teal/30 hover:bg-muted/30 transition-all duration-200"
                  >
                    <Icon className="size-5 text-muted-foreground group-hover:text-teal transition-colors duration-200 shrink-0" />
                    <span className="font-sans text-base font-medium text-foreground">
                      {link.value}
                    </span>
                  </a>
                );
              })}

              <div className="grid grid-cols-6 gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="group flex items-center justify-center aspect-square rounded-xl border border-border bg-muted/20 hover:border-teal/30 hover:bg-muted/30 transition-all duration-200"
                    >
                      <Icon className="size-5 text-muted-foreground group-hover:text-teal transition-colors duration-200" />
                    </a>
                  );
                })}
              </div>
            </div>
          </AnimatedSlice>
        </div>
      </div>
    </section>
  );
}
