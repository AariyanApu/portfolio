import type { Metadata } from "next";
import { AboutContactSection } from "@/components/about/about-contact-section";
import { AboutHeroSection } from "@/components/about/about-hero-section";
import { BeyondCodeSection } from "@/components/about/beyond-code-section";
import { CurrentlyLearningSection } from "@/components/about/currently-learning-section";
import { EducationSection } from "@/components/about/education-section";
import { FaqSection } from "@/components/about/faq-section";
import { FunFactsSection } from "@/components/about/fun-facts-section";
import { ServicesSection } from "@/components/about/services-section";
import { TechStackSection } from "@/components/about/tech-stack-section";
import { WorkExperienceSection } from "@/components/about/work-experience-section";
import { JsonLd } from "@/components/json-ld";
import { Footer } from "@/components/layout/footer";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  PERSON_ID,
  webPageJsonLd,
} from "@/lib/seo";
import { SITE_URL } from "@/utils/constants";

const TITLE = "About Aariyan Apu";
const DESCRIPTION =
  "Who is Aariyan Apu? Full Stack Web Developer from Barishal, Bangladesh — work experience, education, services, tech stack, languages, fun facts and FAQ.";

export const metadata: Metadata = {
  title: "About",
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "profile",
    firstName: "Aariyan",
    lastName: "Apu",
    username: "aariyanapu",
    title: TITLE,
    description: DESCRIPTION,
    url: "/about",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    webPageJsonLd({
      path: "/about",
      name: TITLE,
      description: DESCRIPTION,
      type: "ProfilePage",
      extra: {
        mainEntity: { "@id": PERSON_ID },
        hasPart: { "@id": `${SITE_URL}/about#faq` },
      },
    }),
    faqJsonLd(),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
    ]),
  ],
};

export default function AboutPage() {
  return (
    <main className="container mx-auto">
      <JsonLd data={jsonLd} />
      <AboutHeroSection />
      <WorkExperienceSection />
      <EducationSection />
      <ServicesSection />
      <TechStackSection />
      <CurrentlyLearningSection />
      <BeyondCodeSection />
      <FunFactsSection />
      <FaqSection />
      <AboutContactSection />
      <Footer />
    </main>
  );
}
