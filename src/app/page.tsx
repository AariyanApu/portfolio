import { AboutSection } from "@/components/home/about-section";
import { HeroSection } from "@/components/home/hero-section";
import { SkillsSection } from "@/components/home/skills-section";
import GlowLine from "@/components/ui/glowline";

export default function Home() {
  return (
    <main className="container mx-auto">
      <HeroSection />
      <div className="relative h-px w-full">
        <GlowLine orientation="horizontal" position="0" color="oklch(0.78 0.15 172 / 0.35)" />
      </div>
      <AboutSection />
      <SkillsSection />
      <div className="relative h-px w-full">
        <GlowLine orientation="horizontal" position="0" color="oklch(0.78 0.15 172 / 0.35)" />
      </div>
    </main>
  );
}
