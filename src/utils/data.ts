// import images to use multiple times

//icons for skills
import postgreSql from "/public/asset/icons/postgreSql.png";
import docker from "/public/asset/icons/docker.png";
import express from "/public/asset/icons/express.png";
import mongoDB from "/public/asset/icons/mongoDB.png";
import neoVim from "/public/asset/icons/neoVim.png";
import next from "/public/asset/icons/next.png";
import node from "/public/asset/icons/node.png";
import react from "/public/asset/icons/react.png";
import redux from "/public/asset/icons/redux.png";
import tailwind from "/public/asset/icons/tailwind.png";
import typescript from "/public/asset/icons/typescript.png";
import prisma from "/public/asset/icons/prisma.png";

// images for projects
import bangladeshtime from "/public/asset/projects/bangladeshtime.webp";
import fawflix from "/public/asset/projects/fawflix.webp";
import gbdc from "/public/asset/projects/gbdc.webp";
import lranslate from "/public/asset/projects/lranslate.webp";
import birthday from "/public/asset/projects/birthday.webp";
import sumz from "/public/asset/projects/sumz.webp";

// logo for reviews
import fiverr from "/public/asset/fiverr.png";
import freelancer from "/public/asset/freelancer.jpeg";
import upwork from "/public/asset/upwork.png";

// Add your skills here. do not add more than 12 skills
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

// Add your skills here
export const myExperiences = [
  {
    year: "2024 - Present",
    work: [
      {
        name: "Senior Front-End Software Engineer",
        company: "Aahar Tech (Parent Company of Kitchen Now)",
        desc: "I work as a Senior Front-End Software Engineer,Developed and maintained frontend of all web applications using Next.js and fixing bugs.",
      },
    ],
  },
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

// Only add your best projects. Do not add more than 6 projects. You can add more on dedicated projects pages
// Here codelink is your project link and projectLink is your live project link
// First tag will be used as a project type

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

// Add your navigation links here

export const navigation = [
  { name: " ALL ABOUT ME", href: "/about-me" },
  { name: " ALL PROJECTS", href: "/archive" },
  { name: "BLOG", href: "/blog" },
  { name: "RESUME", href: "/resume.pdf" },
];

// Add your reviews here and use the images from the top
// It will be shown in the all about me page
// It won't work if custom animaton disable in tailwind.config.ts

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
