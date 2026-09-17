"use client";

import { useEffect, useRef, useState } from "react";

import FlameWrap from "@/components/canvasui/FlameWrap";
import { Button } from "@/components/ui/button";

/** Fallback matching --teal in globals.css, used before the token resolves. */
const FALLBACK_FLAME: [number, number, number] = [0.05, 0.84, 0.68];

/** Long enough to outlast the AnimatedSlice entrance (0.42s delay + 0.7s). */
const IGNITE_MS = 1600;
const PEAK_INTENSITY = 0.55;

/**
 * Resolves the computed color of an element to 0-1 RGB by letting the canvas do
 * the oklch() -> sRGB conversion, so the flame keeps using the --teal token
 * instead of a hardcoded value.
 */
function readFlameColor(element: HTMLElement): [number, number, number] | null {
  const ctx = document.createElement("canvas").getContext("2d");
  if (!ctx) return null;
  ctx.fillStyle = getComputedStyle(element).color;
  ctx.fillRect(0, 0, 1, 1);
  const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
  return [r / 255, g / 255, b / 255];
}

export function ResumeFlameButton() {
  const tokenRef = useRef<HTMLSpanElement>(null);
  const [color, setColor] = useState<[number, number, number]>(FALLBACK_FLAME);
  const [intensity, setIntensity] = useState(0);

  useEffect(() => {
    if (!tokenRef.current) return;
    const resolved = readFlameColor(tokenRef.current);
    if (resolved) setColor(resolved);
  }, []);

  // Ramping the intensity also re-measures the flame rect on every frame, which
  // keeps it aligned while the parent entrance transform is still moving.
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min((now - start) / IGNITE_MS, 1);
      setIntensity(PEAK_INTENSITY * t * t);
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      <span ref={tokenRef} aria-hidden className="hidden text-teal" />
      <FlameWrap
        className="inline-block mb-10"
        color={color}
        intensity={intensity}
        height={80}
        spread={8}
        radius={20}
        speed={0.3}
        scale={0.8}
        turbulence={0.45}
        turbulenceScale={0.6}
        turbulenceReach={12}
        sparks={1.2}
        sparkSize={0.3}
        sparkDensity={0.9}
        rim={1}
        melt={1.5}
        distortion={3}
        smoke={0.7}
        ember={1.2}
        scorch={0}
      >
        <Button
          asChild
          size="lg"
          className="rounded-full px-8 font-sans bg-background text-foreground border border-teal/40 hover:bg-background/80"
        >
          <a href="/resume.pdf" download>
            Download Resume
          </a>
        </Button>
      </FlameWrap>
    </>
  );
}

export default ResumeFlameButton;
