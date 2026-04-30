import type { Metadata } from "next";
import { AboutContactSection } from "@/components/about/about-contact-section";
import { AboutHeroSection } from "@/components/about/about-hero-section";
import { BeyondCodeSection } from "@/components/about/beyond-code-section";
import { CurrentlyLearningSection } from "@/components/about/currently-learning-section";
import { EducationSection } from "@/components/about/education-section";
import { FunFactsSection } from "@/components/about/fun-facts-section";
import { GitHubStatsSection } from "@/components/about/github-stats-section";
import { ServicesSection } from "@/components/about/services-section";
import { TechStackSection } from "@/components/about/tech-stack-section";
import { WorkExperienceSection } from "@/components/about/work-experience-section";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Aariyan Apu — Full Stack Developer from Bangladesh. Education, services, tech stack, and more.",
};

export default function AboutPage() {
  return (
    <main className="container mx-auto">
      <AboutHeroSection />
      <WorkExperienceSection />
      <EducationSection />
      <ServicesSection />
      <TechStackSection />
      <CurrentlyLearningSection />
      <GitHubStatsSection />
      <BeyondCodeSection />
      <FunFactsSection />
      <AboutContactSection />
      <Footer />
    </main>
  );
}
