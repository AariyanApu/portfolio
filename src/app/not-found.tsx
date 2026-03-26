import Link from "next/link";
import { AnimatedSlice } from "@/components/animated-slice";

export default function NotFound() {
  return (
    <main className="px-6 sm:px-10 md:px-20 lg:px-32 py-16">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center min-h-[60vh] text-center">
        <AnimatedSlice delay={0}>
          <p className="text-teal font-sans text-sm font-semibold tracking-widest uppercase mb-2">
            404
          </p>
        </AnimatedSlice>
        <AnimatedSlice delay={0.08}>
          <h1 className="font-title text-5xl sm:text-6xl font-black text-foreground mb-4">
            Page not found
          </h1>
        </AnimatedSlice>
        <AnimatedSlice delay={0.16}>
          <p className="font-sans text-muted-foreground mb-8 max-w-md">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </AnimatedSlice>
        <AnimatedSlice delay={0.24}>
          <Link
            href="/"
            className="font-sans text-sm font-medium text-teal hover:underline transition-colors duration-200"
          >
            Back to homepage
          </Link>
        </AnimatedSlice>
      </div>
    </main>
  );
}
