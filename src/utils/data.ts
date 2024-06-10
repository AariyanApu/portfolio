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
import prisma from "/public/asset/icons/prisma.png";
import fawflix from "/public/asset/projects/fawflix.webp";
import gbdc from "/public/asset/projects/gbdc.webp";
import LovelyMusic from "/public/asset/projects/lovelyMusic.webp";
import lovelytube from "/public/asset/projects/lovelytube.webp";
import lranslate from "/public/asset/projects/lranslate.webp";
import bangladeshtime from "/public/asset/projects/bangladeshtime.webp";
import birthday from "/public/asset/projects/birthday.webp";
import sumz from "/public/asset/projects/sumz.webp";
import fiverr from "/public/asset/fiverr.png";
import freelancer from "/public/asset/freelancer.jpeg";
import upwork from "/public/asset/upwork.png";

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
    name: "Prisma",
    icon: prisma,
  },
  {
    name: "PostgreSQL",
    icon: postgreSql,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Vim",
    icon: neoVim,
  },
];

export const myExperiences = [
  {
    year: "2019 - 2023",
    work: [
      {
        name: "Former Assistant Software Engineer",
        company: "Target Peoples for Development Organization (TPDO)",
        desc: " I Provided technical support and troubleshooting for all IT-related issues. Manage Social media, implement IT policies, procedures, and best practices",
      },
    ],
  },
  {
    year: "2017 - 2019",
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
    title: "GBDC",
    imgUrl: gbdc,
    projectLink: "https://gbdcbangladesh.com",
    codeLink: "https://github.com/AariyanApu/gbdc",
    description: "GBDC is a blood donation web App with admin panel.",
    tags: ["Next.js", "Node JS", "React.js", "Tailwind CSS", "Landing Page"],
  },
  {
    title: "Bangladesh Time",
    imgUrl: bangladeshtime,
    projectLink: "http://dailybangladeshtime.com",
    codeLink: "http://dailybangladeshtime.com",
    description: "Daily Bangladesh time is a Online news portal",
    tags: ["React.js", "Tailwind CSS"],
  },
  {
    title: "Birthday",
    imgUrl: birthday,
    projectLink: "https://allbirthday.vercel.app",
    codeLink: "https://github.com/AariyanApu/birthday",
    description: "This app remind you about your favorite persons birthday",
    tags: ["Next.js", "React.js", "Tailwind CSS", "Redux", "API"],
  },
  {
    title: "FawFlix",
    imgUrl: fawflix,
    projectLink: "https://fawflix.vercel.app/",
    codeLink: "https://fawflix.vercel.app/",
    description: "FawFlix is a netflix clone website with  movie streaming ",
    tags: ["MERN", "React.js", "Tailwind CSS"],
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
    name: "Sumz",
    title: "Article Summarizer",
    imgUrl: sumz,
    projectLink: "https://mysum.vercel.app/",
    codeLink: "https://mysum.vercel.app/",
    description: "Sumz is Article summarizer made with Api",
    tags: ["React.js", "API", "Redux"],
  },
];
export const navigation = [
  { name: " ALL ABOUT ME", href: "/about-me" },
  { name: " ALL PROJECTS", href: "/archive" },
  { name: "BLOG", href: "/blog" },
  { name: "RESUME", href: "/resume.pdf" },
];

export { fiverr, freelancer, upwork };

export const reviews = [
  {
    title: "It really works.",
    body: " It was really amazing working with  Aariyan. We look forward to working with her again on future projects.",
    author: "MAGDA DU",
    imgSrc: fiverr,
  },
  {
    title: "You need this app.",
    body: "I enjoyed working on this project and hope to have the opportunity to work with him again.",
    author: "Jarred Samuel B.",
    imgSrc: freelancer,
  },
  {
    title: "On Landing Page.",
    body: "Thanks for the experience..",
    author: " Franklin U. ",

    imgSrc: freelancer,
  },
  {
    title: "Help to fix bug.",
    body: '"Very grateful for the help. Professional content all around, very happy to work , thank you!"',
    author: "Chris D. ",
    imgSrc: upwork,
  },
  {
    title: "Figma Web Designer for Shopify/e-commerce",
    body: "Aariyan was all round excellent to work with. From the work he did for my company,",
    author: "Stanislav D. ",
    imgSrc: freelancer,
  },
  {
    title: "Landing Page.",
    body: "I enjoyed working on this project and hope to have the opportunity to work with him again.",
    author: "Jarred Samuel B.",
    imgSrc: freelancer,
  },
  {
    title: "On Landing Page.",
    body: "Thanks for the experience..",
    author: " Franklin U. ",

    imgSrc: freelancer,
  },
  {
    title: "Help to fix bug.",
    body: '"Very grateful for the help. Professional content all around, very happy to work , thank you!"',
    author: "Chris D. ",
    imgSrc: fiverr,
  },
  {
    title: "Figma Web Designer for Shopify/e-commerce",
    body: "Aariyan was all round excellent to work with. From the work he did for my company,",
    author: "Stanislav D. ",
    imgSrc: fiverr,
  },
];
