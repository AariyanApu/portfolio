'use client';
import { framerMotionType } from '@/types/utilityTypes';
import { motion } from 'framer-motion';

export default function TextContainer({
  children,
  customStyles,
  variants,
  key,
  whileInView,
  transition,
  dataTip,
  dataFor,
  animate,
}: framerMotionType) {
  return (
    <motion.div
      className={customStyles}
      variants={variants}
      key={key}
      data-for={dataFor}
      data-tip={dataTip}
      whileInView={whileInView}
      transition={transition}
      animate={animate}
    >
      {children}
    </motion.div>
  );
}
