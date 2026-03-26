import type { Metadata } from "next";
import { AboutContactSection } from "@/components/about/about-contact-section";
import { AboutHeroSection } from "@/components/about/about-hero-section";
import { EducationSection } from "@/components/about/education-section";
import { FunFactsSection } from "@/components/about/fun-facts-section";
import { ServicesSection } from "@/components/about/services-section";
import { TechStackSection } from "@/components/about/tech-stack-section";
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
      <EducationSection />
      <ServicesSection />
      <TechStackSection />
      <FunFactsSection />
      <AboutContactSection />
      <Footer />
    </main>
  );
}
