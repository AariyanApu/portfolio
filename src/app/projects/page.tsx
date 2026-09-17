import type { Metadata } from "next";
import { AnimatedSlice } from "@/components/animated-slice";
import { JsonLd } from "@/components/json-ld";
import { Footer } from "@/components/layout/footer";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { breadcrumbJsonLd, projectsJsonLd, webPageJsonLd } from "@/lib/seo";
import { projects, SITE_URL } from "@/utils/constants";

const TITLE = "Projects by Aariyan Apu";
const DESCRIPTION =
  "Web and mobile projects by Aariyan Apu: First Aid Surgical, NonstopGG, Daily Bangladesh Time, GBDC, Ahar and the Mellow Bangla radio app. Next.js and React.";

export const metadata: Metadata = {
  title: "Projects",
  description: DESCRIPTION,
  alternates: { canonical: "/projects" },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: "/projects",
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
      path: "/projects",
      name: TITLE,
      description: DESCRIPTION,
      type: "CollectionPage",
      extra: {
        mainEntity: { "@id": `${SITE_URL}/projects#list` },
      },
    }),
    projectsJsonLd(),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Projects", path: "/projects" },
    ]),
  ],
};

export default function ProjectsPage() {
  return (
    <main className="px-6 sm:px-10 md:px-20 lg:px-32 py-16">
      <JsonLd data={jsonLd} />
      <div className="max-w-5xl mx-auto py-16">
        <AnimatedSlice inView delay={0}>
          <p className="text-teal font-sans text-sm font-semibold tracking-widest uppercase mb-2">
            My work
          </p>
        </AnimatedSlice>
        <AnimatedSlice inView delay={0.08}>
          <h1 className="font-title text-4xl sm:text-5xl font-black text-foreground mb-8">
            All Projects
          </h1>
        </AnimatedSlice>

        <ProjectsGrid projects={projects} />
      </div>
      <Footer />
    </main>
  );
}
