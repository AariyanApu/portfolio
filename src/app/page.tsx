import { AboutSection } from "@/components/home/about-section";
import { HeroSection } from "@/components/home/hero-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { SkillsExperienceSection } from "@/components/home/skills-experience-section";
import GlowLine from "@/components/ui/glowline";

export default function Home() {
  return (
    <main className="container mx-auto">
      <HeroSection />
      <div className="relative h-px w-full">
        <GlowLine orientation="horizontal" position="0" color="oklch(0.78 0.15 172 / 0.35)" />
      </div>
      <AboutSection />
      <div className="relative h-px w-full">
        <GlowLine orientation="horizontal" position="0" color="oklch(0.78 0.15 172 / 0.35)" />
      </div>
      <SkillsExperienceSection />
      <div className="relative h-px w-full">
        <GlowLine orientation="horizontal" position="0" color="oklch(0.78 0.15 172 / 0.35)" />
      </div>
      <ProjectsSection />
      <div className="relative h-px w-full">
        <GlowLine orientation="horizontal" position="0" color="oklch(0.78 0.15 172 / 0.35)" />
      </div>
    </main>
  );
}
