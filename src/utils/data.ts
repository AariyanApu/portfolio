import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import postgreSql from "/public/asset/icons/postgreSql.png";
import bootstrap from "/public/asset/icons/bootstrap.png";
import docker from "/public/asset/icons/docker.png";
import express from "/public/asset/icons/express.png";
import mongoDB from "/public/asset/icons/mongoDB.png";
import neoVim from "/public/asset/icons/neoVim.png";
import next from "/public/asset/icons/next.png";
import node from "/public/asset/icons/node.png";
import react from "/public/asset/icons/react.png";
import redux from "/public/asset/icons/redux.png";
import sass from "/public/asset/icons/sass.png";
import tailwind from "/public/asset/icons/tailwind.png";
import typescript from "/public/asset/icons/typescript.png";
import vite from "/public/asset/icons/vite.png";

import fawflix from "/public/asset/projects/fawflix.png";
import gbdc from "/public/asset/projects/gbdc.png";
import LovelyMusic from "/public/asset/projects/lovelyMusic.png";
import lovelytube from "/public/asset/projects/lovelytube.png";
import lranslate from "/public/asset/projects/lranslate.png";
import sumz from "/public/asset/projects/sumz.png";

export {
  LovelyMusic,
  bootstrap,
  docker,
  express,
  fawflix,
  gbdc,
  lovelytube,
  lranslate,
  mongoDB,
  next,
  postgreSql,
  node,
  react,
  redux,
  sass,
  sumz,
  tailwind,
  typescript,
  vite,
};

export const mySkills = [
  {
    name: "Next.js",
    icon: next,
  },
  {
    name: "React.js",
    icon: react,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Node.js",
    icon: node,
  },
  {
    name: "Express.js",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongoDB,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Vite",
    icon: vite,
  },
  {
    name: "PostgreSQL",
    icon: postgreSql,
  },

  {
    name: "Docker",
    icon: docker,
  },
];

export const myExperiences = [
  {
    year: "2017 - Present",
    work: [
      {
        name: "Front-End Software Engineer",
        company: "Upwork",
        desc: "Worked on  web application using Next.js,MERN and fixing bugs",
      },
    ],
  },
  {
    year: "2015 - 2017",
    work: [
      {
        name: "Graphic Designer",
        company: "Fiverr",
        desc: "Make logo, banner, poster, business card",
      },
    ],
  },
];

export const sliderNavigation = [
  {
    name: "Dashboard",

    icon: HomeIcon,
    current: true,
  },
  {
    name: "Review",

    icon: UsersIcon,
    current: false,
  },
  {
    name: "Projects",

    icon: FolderIcon,

    current: false,
  },
  {
    name: "Skills",
    icon: CalendarIcon,

    current: false,
  },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];

export const projects = [
  {
    title: "FawFlix",
    imgUrl: fawflix,
    projectLink: "https://fawflix.vercel.app/",
    codeLink: "https://fawflix.vercel.app/",
    description: "FawFlix is a netflix clone website with  movie streaming ",
    tags: ["MERN", "React.js", "Tailwind CSS"],
  },
  {
    title: "GBDC",
    imgUrl: gbdc,
    projectLink: "https://gbdc.vercel.app/",
    codeLink: "https://github.com/AariyanApu/gbdc",
    description: "GBDC is a blood donation web App with admin panel.",
    tags: ["Next.js", "Node JS", "React.js", "Tailwind CSS", "Landing Page"],
  },
  {
    title: "Lovely Tube",
    imgUrl: lovelytube,
    projectLink: "https://lovelytube.vercel.app/",
    codeLink: "https://lovelytube.vercel.app/",
    description: "Lovely Tube is a youtube clone website",
    tags: ["API", "React.js", "Tailwind CSS"],
  },
  {
    title: "Lranslate",
    imgUrl: lranslate,
    projectLink: "https://lranslate.vercel.app/",
    codeLink: "https://lranslate.vercel.app/",
    description: "Lranslate is Google Translate clone made with Api",
    tags: ["React.js", "API", "Node JS", "MongoDB", "Redux"],
  },
  {
    title: "Lovely Music",
    imgUrl: LovelyMusic,
    projectLink: "https://lovely-music.vercel.app/",
    codeLink: "https://github.com/AariyanApu/",
    description: "Lovely Music is a music streaming website",
    tags: ["React.js", "Tailwind CSS", "Redux", "API"],
  },
  {
    name: "Sumz",
    title: "Article Summarizer",
    imgUrl: sumz,
    projectLink: "https://sum-tau.vercel.app/",
    codeLink: "https://sum-tau.vercel.app/",
    description: "Sumz is Article summarizer made with Api",
    tags: ["React.js", "API", "Redux"],
  },
];
export const navigation = [
  { name: " ALL ABOUT ME", href: "/about-me", current: false },
  { name: " ALL PROJECTS", href: "/archive", current: false },
  { name: "BLOG", href: "/blog", current: false },
  { name: "RESUME", href: "/resume.pdf", current: false },
];
