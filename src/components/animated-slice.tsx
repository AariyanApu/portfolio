"use client";

import { motion } from "framer-motion";

interface AnimatedSliceProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function AnimatedSlice({
  children,
  delay = 0,
  className,
}: AnimatedSliceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
