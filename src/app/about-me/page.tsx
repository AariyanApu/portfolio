/* eslint-disable @next/next/no-img-element */

import Container from "@/components/utility/Container";
import { TypingTitle } from "@/components/utility/CustomTexts";
import GithubCalendarComponent from "@/components/utility/GithubCalendar";
import About from "@/sections/About";
import Testimonial from "@/sections/Testimonials";

export default function AboutMe() {
  return (
    <>
      <Container customStyles="mx-auto mb-0 mt-5 max-w-7xl px-2 sm:mt-20 sm:px-6 lg:px-8">
        <About />
        <div>
          {/* My Skills */}
          <TypingTitle title="My Skills" />
          <p className="my-8 flex w-full flex-wrap items-center justify-between sm:my-14 sm:px-36">
            {/* Just Add skill name, Icon Will be automatically added  */}
            <img
              src="https://skillicons.dev/icons?i=nextjs,vite,react,redux,tailwind,materialui,sass,bootstrap,ts,js,express,nodejs,mongodb,postgres,prisma,redis,html,css,jquery,md,linux,git,docker,github,babel,bash,neovim,vim,ps,postman"
              alt="My skills"
            />
          </p>
        </div>
        <div>
          {/* Coding Time and Lines */}
          <TypingTitle title="How Active I am!" />
          {/* Add your Github Username after = , and remove aariyanapu */}
          <img
            src="https://github-widgetbox.vercel.app/api/profile?username=aariyanapu&data=followers,repositories,stars,commits&theme=nautilus"
            alt="github stats"
            className="mx-0 sm:mx-auto"
          />
          <div className="my-5 flex flex-col items-center justify-between gap-5 sm:mx-36 sm:gap-0 lg:flex-row  ">
            {/* Add your Github Username after = , and remove aariyanapu */}
            <img
              src="https://github-readme-stats.vercel.app/api?username=aariyanapu&show_icons=true&theme=transparent"
              alt="github stats"
              className="mb-5 sm:mb-0"
            />
            {/* Top Language */}

            {/* Add your Github Username after = , and remove aariyanapu */}
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=aariyanapu&theme=transparent&layout=compact"
              alt="github stats"
            />
          </div>
          <div className="mt-8 flex flex-col items-center justify-between gap-5 sm:mx-36 sm:mt-14 sm:gap-0">
            {/* Lines of code */}
            <div className="my-4 flex flex-row items-center justify-between gap-x-5">
              <img
                className="mb-5 h-9 w-full sm:mb-0 sm:w-[500px] "
                src="https://img.shields.io/badge/From%20Hello%20World%20I%27ve%20Written-1.3%20million%20lines%20of%20code-blue"
                alt="Lines of code image"
              />
              {/* Coding time */}

              <a href="https://wakatime.com/@06e2a330-5ed7-4bd7-a10d-a94296f5fc61">
                <img
                  className="h-9 w-full sm:w-80 "
                  src="https://wakatime.com/badge/user/06e2a330-5ed7-4bd7-a10d-a94296f5fc61.svg"
                  alt="Total time coded since Aug 28 2022"
                />
              </a>
            </div>

            {/* WakaTime */}

            {/* Add your Github Username after = , and remove aariyanapu */}
            <img
              className="w-full sm:w-[500px]"
              src="https://github-readme-stats.vercel.app/api/wakatime?username=aariyanapu&show_icons=true&theme=material-palenight&hide_border=false"
              alt="WakaTime Stats"
            />
          </div>
          {/* Github Contribution Calender */}
          <GithubCalendarComponent />
        </div>

        {/* Testimonial components */}
        <Testimonial />

        {/* Spotify Data */}

        <div className="mx-auto my-10 w-full items-center justify-center">
          <TypingTitle title="What I'm Listening to" />
          <a href="https://data-card-for-spotify.herokuapp.com/card?user_id=31tn6riohy27abhahkklkxmaigbu">
            <img
              src="https://data-card-for-spotify.herokuapp.com/api/card?user_id=31tn6riohy27abhahkklkxmaigbu"
              alt="Data Card for Spotify"
              className="mx-auto mt-10"
            />
          </a>
        </div>
      </Container>
    </>
  );
}
