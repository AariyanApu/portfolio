"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { projects } from "@/utils/data";
import { fadeIn } from "@/utils/motion";
import Container from "@/components/utility/Container";
import TextContainer from "@/components/utility/TextContainer";
import { TypingTitle } from "@/components/utility/CustomTexts";
import ProjectButton from "@/components/ProjectButton";
import ProjectIconCard from "@/components/ProjectIconCard";
import { EyeIcon, GithubIconRounded } from "@/utils/icons";

export default function Project() {
  useEffect(() => {
    setWorks(projects);
    setFilterWork(projects);
  }, []);

  const [works, setWorks] = useState(projects);
  const [filterWork, setFilterWork] = useState(projects);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState([{ y: 0, opacity: 1 }]);

  const handleWorkFilter = (item: string) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  if (!works) return <div>Loading...</div>;

  return (
    <Container customStyles="mx-auto mt-16 max-w-7xl overflow-hidden px-8 pb-10 sm:mt-32 sm:px-6 lg:px-8 ">
      <TypingTitle title="Somethings I'v Built " />
      {/* Here old project */}
      <TextContainer variants={fadeIn("up", "tween", 0.7, 0.7)}>
        <div className="flex justify-between">
          <div className="my-3 mr-0 flex flex-row flex-wrap items-center justify-start sm:my-4">
            {["Landing Page", "API", "Next.js", "React.js", "MERN", "All"]?.map(
              (item, index) => (
                <div
                  key={index}
                  onClick={() => handleWorkFilter(item)}
                  className={`bg-background-color text-slate-color-lighter hover:bg-secondary-color hover:text-primary-color m-1 flex cursor-pointer items-center justify-center rounded-lg p-2 text-left text-sm font-extrabold transition-all duration-300 ease-in sm:m-2 ${
                    activeFilter === item
                      ? "bg-secondary-color text-emerald-300"
                      : ""
                  }`}
                >
                  {item}
                </div>
              ),
            )}
          </div>
          <ProjectButton styles=" hidden sm:block" />
        </div>

        {/* here 2nd Part */}
        <TextContainer
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          customStyles="flex flex-wrap items-center justify-center"
        >
          {filterWork?.map((work, index) => (
            <div
              className="bg-secondary-color text-slate-color-lighter m-4 flex w-full cursor-pointer flex-col items-center justify-center rounded-lg p-4 shadow-xl transition-all duration-300 ease-in sm:m-8 sm:w-[270px]"
              key={index}
            >
              <div className="group relative flex h-[230px] w-full items-center justify-center brightness-75">
                <Image
                  height={400}
                  width={400}
                  src={work.imgUrl}
                  alt={work.title}
                  className="all_animation h-[230px] w-full rounded-lg object-cover opacity-80 grayscale filter group-hover:opacity-100 group-hover:grayscale-0"
                />

                <div className="all_animation bg-opacity-50 absolute inset-0 flex h-[230px] w-full items-center justify-center gap-x-3 rounded-lg bg-black opacity-0 group-hover:opacity-100">
                  <ProjectIconCard link={work.projectLink} Icon={EyeIcon} />
                  <ProjectIconCard
                    link={work.codeLink}
                    Icon={GithubIconRounded}
                  />
                </div>
              </div>

              <div className="relative flex w-full flex-col items-center justify-center p-2">
                <h4 className="bold-text text-primary-color mt-4 text-left text-base leading-normal font-extrabold">
                  {work.title}
                </h4>
                <p className="p-text text-slate-color mt-2 text-left text-sm">
                  {work.description}
                </p>

                <div className="bg-secondary-color absolute top-[-20px] flex items-center justify-center rounded-lg px-2 py-1">
                  <p className="p-text text-slate-color text-left text-sm">
                    {work.tags[0]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </TextContainer>
        <ProjectButton styles="mt-2 mx-auto block sm:hidden" />
      </TextContainer>
    </Container>
  );
}
