'use client';

import { motion } from 'framer-motion';
import { fadeIn, textContainer, textVariant2 } from '@/utils/motion';

export const TypingTitle = ({ title }: { title: string | string[] }) => (
  <motion.div
    variants={textContainer}
    className='flex flex-row text-center text-2xl  text-primary-color sm:text-left '
  >
    <div className='mx-auto sm:mx-0 '>
      {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </div>
    <motion.div
      variants={fadeIn('left', 'tween', 0.6, 1.2)}
      className=' ml-4 mt-4 hidden h-0.5 w-[452px] rounded border border-navy-color sm:block'
    />
  </motion.div>
);

// export const TypingText = ({ title, textStyles }) => (
//   <motion.p variants={textContainer2} className={` ${textStyles}`}>
//     {Array.from(title).map((letter, index) => (
//       <motion.span variants={textVariant2} key={index}>
//         {letter === ' ' ? '\u00A0' : letter}
//       </motion.span>
//     ))}
//   </motion.p>
// );
