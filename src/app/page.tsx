import { AboutSection } from "@/components/home/about-section";
import { ContactSection } from "@/components/home/contact-section";
import { HeroSection } from "@/components/home/hero-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { SkillsExperienceSection } from "@/components/home/skills-experience-section";
import { Footer } from "@/components/layout/footer";
import Divider from "@/components/ui/divider";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Aariyan Apu",
      alternateName: [
        "Ariyan Apu",
        "Ariyan Opu",
        "Aariyan Opu",
        "Arian Opu",
        "Aariyanapu",
        "আরিয়ান অপু",
      ],
      url: "https://aariyan.info",
      jobTitle: "Full Stack Web Developer",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Barishal",
        addressCountry: "BD",
      },
      sameAs: [
        "https://github.com/AariyanApu",
        "https://bd.linkedin.com/in/aariyanapu",
        "https://x.com/aariyanapu",
        "https://www.facebook.com/aariyanapu",
      ],
    },
    {
      "@type": "WebSite",
      name: "Aariyan Apu",
      url: "https://aariyan.info",
    },
  ],
};

export default function Home() {
  return (
    <main className="container mx-auto">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
