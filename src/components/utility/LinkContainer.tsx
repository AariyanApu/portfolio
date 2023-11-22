'use client';
import { framerMotionType } from '@/types/utilityTypes';
import { motion } from 'framer-motion';
export default function LinkContainer({
  children,
  whileTap,
  transition,
  variants,
  key,
  href,
  customStyles,
  aria,
}: framerMotionType) {
  return (
    <motion.a
      whileTap={whileTap}
      transition={transition}
      variants={variants}
      key={key}
      href={href}
      className={customStyles}
      aria-current={aria}
    >
      {children}
    </motion.a>
  );
}
