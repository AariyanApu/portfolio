"use client";

import { motion } from "framer-motion";

interface AnimatedSliceProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  inView?: boolean;
}

export function AnimatedSlice({
  children,
  delay = 0,
  className,
  inView = false,
}: AnimatedSliceProps) {
  const variants = {
    hidden: { opacity: 0, y: 36, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      {...(inView
        ? { whileInView: "visible", viewport: { once: true, amount: 0.2 } }
        : { animate: "visible" })}
      variants={variants}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
