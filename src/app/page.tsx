import { AboutSection } from "@/components/home/about-section";
import { ContactSection } from "@/components/home/contact-section";
import { HeroSection } from "@/components/home/hero-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { SkillsExperienceSection } from "@/components/home/skills-experience-section";
import { Footer } from "@/components/layout/footer";
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
      <Footer />
    </main>
  );
}
