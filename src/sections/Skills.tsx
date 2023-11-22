import Image from 'next/image';
import { myExperiences, mySkills } from '@/utils/data';
import { fadeIn } from '@/utils/motion';
import Container from '@/components/utility/Container';
import TextContainer from '@/components/utility/TextContainer';
import { TypingTitle } from '@/components/utility/CustomTexts';

export default function Skills() {
  return (
    <Container customStyles='mx-auto mb-0 mt-5 max-w-7xl overflow-hidden px-2 sm:mt-32 sm:px-6 lg:px-8'>
      <TypingTitle
        title={[
          'Things',
          " I'm",
          ' Good',
          ' At',
          ' And',
          ' My',
          ' E',
          'x',
          'p',
          'e',
          'r',
          'i',
          'e',
          'n',
          'c',
          'e',
          's',
        ]}
      />

      <div className='mx-auto mt-12 flex w-full flex-col sm:w-4/5 lg:flex-row'>
        <TextContainer customStyles='mb-5 mr-0 flex flex-1 flex-wrap items-center justify-center sm:items-start sm:justify-start lg:mb-0 lg:mr-20  '>
          {mySkills.map((skill) => (
            <TextContainer
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1.9 }}
              customStyles=' group m-4 flex flex-col items-center justify-center text-center'
              key={skill.name}
            >
              <div className=' all_animation flex h-[70px] w-[70px]   items-center justify-center rounded-full  bg-secondary-color shadow-sm  group-hover:shadow-emerald-300 sm:h-[60px] sm:w-[60px]'>
                <Image
                  height={50}
                  width={50}
                  src={skill.icon}
                  alt={skill.name}
                  className=' all_animation h-[45px] w-[45px] transform rounded-full opacity-60 grayscale duration-500 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0 '
                />
              </div>
              <p className=' mt-1 text-left text-xs text-slate-color-lighter '>
                {skill.name}
              </p>
            </TextContainer>
          ))}
        </TextContainer>
        <TextContainer
          variants={fadeIn('left', 'spring', 0.9, 0.9)}
          customStyles=' flex flex-1 flex-col items-start justify-start'
        >
          {myExperiences.map((experience) => (
            <TextContainer
              customStyles=' mx-3 my-4 flex w-full flex-row items-start justify-start sm:mx-0'
              key={experience.year}
            >
              <div className=' mr-12 '>
                <p className=' text-left text-base font-extrabold text-primary-color '>
                  {experience.year}
                </p>
              </div>
              <TextContainer customStyles='flex-1'>
                {experience.work.map((work) => (
                  <TextContainer
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    customStyles=' mb-4 flex flex-col items-start justify-start  '
                    data-tip
                    data-for={work.name}
                    key={work.name}
                  >
                    <div className='  text-left text-base font-extrabold text-primary-color '>
                      {work.name}
                    </div>
                    <div className=' p-text mt-[5px] text-left text-sm leading-normal text-slate-color-lighter '>
                      {work.company}
                    </div>
                    <div className='text-left text-xs text-slate-color '>
                      {work.desc}
                    </div>
                  </TextContainer>
                ))}
              </TextContainer>
            </TextContainer>
          ))}
        </TextContainer>
      </div>
    </Container>
  );
}
