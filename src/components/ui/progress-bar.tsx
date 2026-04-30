"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  progress: number;
  delay?: number;
}

export function ProgressBar({ progress, delay = 0 }: ProgressBarProps) {
  return (
    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
      <motion.div
        className="h-full rounded-full bg-teal"
        initial={{ width: 0 }}
        whileInView={{ width: `${progress}%` }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
