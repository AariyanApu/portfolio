'use client';

import ProjectIconCard from '@/components/ProjectIconCard';
import CloudImage from '@/components/utility/CloudImage';
import Container from '@/components/utility/Container';
import Loading from '@/components/utility/Loading';
import TextContainer from '@/components/utility/TextContainer';
import { heroTitle } from '@/utils/fonts';
import { fetcher } from '@/utils/getData';
import { EyeIcon, GithubIconRounded } from '@/utils/icons';
import { fadeIn } from '@/utils/motion';
import { useEffect, useState } from 'react';
import useSWR, { SWRResponse } from 'swr';

export default function Archive() {
  const { data, error, isLoading }: SWRResponse<any, any> = useSWR(
    '/api/projects',
    fetcher
  );

  useEffect(() => {
    setWorks(data);
    setFilterWork(data);
  }, [data]);

  const [works, setWorks] = useState(data);
  const [filterWork, setFilterWork] = useState(data);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState([{ y: 0, opacity: 1 }]);

  const handleWorkFilter = (item: string) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work: any) => work.tags.includes(item)));
      }
    }, 500);
  };

  if (isLoading) return <Loading />;
  if (error) return <div>Failed to load user</div>;

  // if (isLoading) return <Loading />;
  return (
    <Container
      // variants={staggerContainer}
      customStyles='mx-auto max-w-7xl overflow-hidden px-8 pb-10 sm:px-6 lg:px-8 '
    >
      <h1
        className={`my-5 text-center text-4xl text-slate-color-lighter  ${heroTitle.className}`}
      >
        All Projects That I Have Built
      </h1>
      <TextContainer variants={fadeIn('up', 'tween', 0.7, 0.7)}>
        <div className='flex justify-between'>
          <div className='mx-auto my-3  flex flex-row flex-wrap items-center justify-center sm:my-4'>
            {[
              'All',
              'Next.js',
              'React.js',
              'MERN',
              'API',
              'Tailwind CSS',
              'Landing Page',
              'SCSS',
              'CSS',
              'MUI',
              'Node.js',
            ]?.map((item, index) => (
              <div
                key={index}
                onClick={() => handleWorkFilter(item)}
                className={` m-1 flex cursor-pointer  items-center justify-center rounded-lg  bg-background-color p-2 px-3 text-center text-sm font-extrabold text-slate-color-lighter transition-all duration-300 ease-in hover:bg-secondary-color hover:text-primary-color   ${
                  activeFilter === item
                    ? 'bg-secondary-color text-emerald-300'
                    : ''
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* here 2nd Part */}
        <TextContainer
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          customStyles='flex flex-wrap items-center justify-center'
        >
          {Array.isArray(data) &&
            filterWork?.map((work: any, index: string) => (
              <div
                className=' m-4 flex  w-full cursor-pointer flex-col items-center justify-center rounded-lg bg-secondary-color p-4 text-slate-color-lighter shadow-xl transition-all duration-300 ease-in sm:m-8 sm:w-[270px]  '
                key={index}
              >
                <div className=' group relative flex h-[230px] w-full items-center  justify-center brightness-75 '>
                  <CloudImage
                    height={400}
                    width={400}
                    src={work.imgUrl}
                    alt={work.title}
                    customStyles='all_animation h-[230px] w-full rounded-lg object-cover opacity-80 grayscale filter group-hover:opacity-100 group-hover:grayscale-0 '
                  />

                  <div className='  all_animation absolute inset-0 flex h-[230px] w-full items-center justify-center gap-x-3 rounded-lg bg-black  bg-opacity-50 opacity-0 group-hover:opacity-100 '>
                    <ProjectIconCard link={work.projectLink} Icon={EyeIcon} />
                    <ProjectIconCard
                      link={work.codeLink}
                      Icon={GithubIconRounded}
                    />
                  </div>
                </div>

                <div className=' relative flex w-full flex-col items-center justify-center p-2  '>
                  <h4 className='bold-text mt-4 text-left text-base font-extrabold leading-normal text-primary-color '>
                    {work.title}
                  </h4>
                  <p className='p-text mt-2 text-left text-sm text-slate-color'>
                    {work.description}
                  </p>

                  <div className=' absolute top-[-20px] flex items-center justify-center rounded-lg bg-secondary-color  px-2 py-1 '>
                    <p className='p-text  text-left text-sm text-slate-color'>
                      {work.tags[0]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </TextContainer>
      </TextContainer>
    </Container>
  );
}
