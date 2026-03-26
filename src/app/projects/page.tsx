import type { Metadata } from "next";
import { AnimatedSlice } from "@/components/animated-slice";
import { Footer } from "@/components/layout/footer";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { projects } from "@/utils/constants";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of full-stack web and mobile projects built with Next.js, React, TypeScript, and more.",
};

export default function ProjectsPage() {
  return (
    <main className="px-6 sm:px-10 md:px-20 lg:px-32 py-16">
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
