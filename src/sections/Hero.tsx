'use client';
import { motion } from 'framer-motion';
import { heroTitle } from '@/utils/fonts';
import { textContainer, textVariant } from '@/utils/motion';
import Container from '@/components/utility/Container';
import TextContainer from '@/components/utility/TextContainer';

export default function Hero() {
  return (
    <Container customStyles='mx-6 my-24 sm:mx-12 md:ml-16 md:mt-32 lg:ml-40  lg:mt-44 '>
      <TextContainer variants={textContainer}>
        <motion.div
          variants={textVariant(0.7)}
          className='text-primary-color lg:text-lg '
        >
          {' '}
          Hi, my name is{' '}
        </motion.div>
        <motion.div
          variants={textVariant(0.8)}
          className={`mt-2 text-5xl font-medium  tracking-wide text-slate-color-lighter  sm:mt-1 lg:text-7xl 2xl:text-8xl ${heroTitle.className}`}
        >
          Aariyan Apu.
        </motion.div>
        <motion.div
          variants={textVariant(0.9)}
          className={` ${heroTitle.className}  mt-3 text-2xl font-medium tracking-wide text-slate-color-light sm:text-4xl md:pt-2 md:text-5xl  lg:text-6xl 2xl:text-7xl `}
        >
          I build things for the web,
        </motion.div>
        <motion.p
          variants={textVariant(1)}
          className=' mt-2 w-full pr-3 text-justify text-base tracking-normal text-slate-color sm:w-4/6 md:w-3/4  lg:mt-6 lg:w-[500px] lg:text-lg 2xl:w-[580px]'
        >
          crafting engaging and accessible front-end web solutions for a
          seamless digital experience.
        </motion.p>
      </TextContainer>
    </Container>
  );
}
