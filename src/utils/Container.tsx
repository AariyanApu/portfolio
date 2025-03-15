"use client";

import { motion } from "motion/react";

import { framerMotionContainerType } from "@/types/motion";
import { staggerContainer } from "@/libs/motion";

export default function Container({
  children,
  customStyles,
}: framerMotionContainerType) {
  return (
    <motion.div
      variants={staggerContainer(0.2, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
      className={customStyles}
    >
      {children}
    </motion.div>
  );
}
