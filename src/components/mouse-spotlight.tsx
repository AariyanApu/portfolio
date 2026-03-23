"use client";

import { useEffect, useState } from "react";

export function MouseSpotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[999] transition-opacity duration-300"
      style={{
        background: `radial-gradient(700px at ${position.x}px ${position.y}px, oklch(0.78 0.15 172 / 0.12), transparent 80%)`,
      }}
    />
  );
}
