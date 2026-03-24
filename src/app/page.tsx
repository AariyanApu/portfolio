import { AboutSection } from "@/components/home/about-section";
import { ContactSection } from "@/components/home/contact-section";
import { HeroSection } from "@/components/home/hero-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { SkillsExperienceSection } from "@/components/home/skills-experience-section";
import Divider from "@/components/ui/divider";

export default function Home() {
  return (
    <main className="container mx-auto">
      <HeroSection />
      <Divider />
      <AboutSection />
      <Divider />
      <SkillsExperienceSection />
      <Divider />
      <ProjectsSection />
      <Divider />
      <ContactSection />
      <footer className="border-t border-border py-6 px-6 sm:px-10 md:px-20 lg:px-32">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p className="font-sans text-xs text-muted-foreground text-center sm:text-left">
              No copyright. Steal it, fork it, pretend you built it. I won't
              tell.
            </p>
            <a
              href="https://github.com/AariyanApu/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs text-teal hover:text-teal/70 transition-colors duration-200 whitespace-nowrap"
            >
              View Source →
            </a>
          </div>
          <p className="font-sans text-xs text-muted-foreground whitespace-nowrap">
            Designed & built with lots of ☕ by{" "}
            <span className="text-foreground font-medium">Aariyan Apu</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
