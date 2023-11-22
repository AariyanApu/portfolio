'use client';
import { framerMotionContainerType } from '@/types/utilityTypes';
import { staggerContainer } from '@/utils/motion';
import { motion } from 'framer-motion';

export default function Container({
  children,
  customStyles,
}: framerMotionContainerType) {
  return (
    <motion.div
      variants={staggerContainer(0.2, 0.5)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.05 }}
      className={customStyles}
    >
      {children}
    </motion.div>
  );
}
