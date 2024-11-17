import AboutMeCard from "./AboutMeCard";
import Image from "next/image";
import { fadeIn } from "@/utils/motion";
import TextContainer from "./utility/TextContainer";
import { TypingTitle } from "./utility/CustomTexts";

export default function AboutMe() {
  return (
    <>
      <TypingTitle title="Who I am" />
      <TextContainer
        variants={fadeIn("up", "tween", 0.4, 0.7)}
        customStyles="mt-5"
      >
        <Image
          src={"/asset/about-me.jpg"}
          className=" mx-auto w-64 rounded-md drop-shadow-sm sm:hidden"
          width={600}
          height={400}
          alt="Image of Aariyan Apu"
        />
      </TextContainer>
      <div className="flex   flex-row justify-evenly p-5 ">
        <TextContainer variants={fadeIn("up", "tween", 0.4, 0.7)}>
          <div className="mb-10  mt-2 w-full text-left text-base text-slate-color sm:w-[380px] sm:text-justify lg:mt-5  lg:w-[580px]  lg:text-lg">
            Experienced Senior Front-End Software Engineer with expertise in
            crafting scalable and user-friendly web applications using Next.js
            and the MERN stack. Demonstrates a strong ability to debug and
            optimize software, delivering seamless digital experiences. Proven
            leadership in improving system functionality and user engagement.
          </div>
          <div className="sm: flex flex-row gap-16">
            <div>
              <AboutMeCard skill="Next.js" />
              <AboutMeCard skill="MERN" />
              <AboutMeCard skill="TypeScript" />
            </div>
            <div>
              <AboutMeCard skill="Prisma" />
              <AboutMeCard skill="Node.js" />
              <AboutMeCard skill="Tailwind css" />
            </div>
          </div>
        </TextContainer>
        <TextContainer
          variants={fadeIn("up", "tween", 0.4, 0.7)}
          customStyles=" group relative mt-5 hidden sm:block"
        >
          <Image
            src={"/asset/about-me.jpg"}
            className="all_animation absolute left-0 top-0 rounded-md drop-shadow-sm grayscale group-hover:grayscale-0 sm:w-48  lg:w-64"
            width={600}
            height={400}
            alt="Aariyan Apu"
          />
          <div className="all_animation h-[285px] cursor-pointer  rounded-md bg-[#0a192f] opacity-20 group-hover:opacity-0 sm:w-48 lg:w-64" />
        </TextContainer>
      </div>
    </>
  );
}
