import { AboutSection } from "@/components/home/about-section";
import { ContactSection } from "@/components/home/contact-section";
import { HeroSection } from "@/components/home/hero-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { SkillsExperienceSection } from "@/components/home/skills-experience-section";
import { JsonLd } from "@/components/json-ld";
import { Footer } from "@/components/layout/footer";
import Divider from "@/components/ui/divider";
import {
  PERSON_ID,
  SITE_DESCRIPTION,
  SITE_TITLE,
  webPageJsonLd,
} from "@/lib/seo";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    webPageJsonLd({
      path: "/",
      name: SITE_TITLE,
      description: SITE_DESCRIPTION,
      extra: { mainEntity: { "@id": PERSON_ID } },
    }),
  ],
};

export default function Home() {
  return (
    <main className="container mx-auto">
      <JsonLd data={jsonLd} />
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
