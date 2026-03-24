export const navLinks = [
  { label: "All About Me", href: "/about" },
  { label: "All Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume.pdf" },
];

export const SKILL_ICONS_URL =
  "https://skillicons.dev/icons?i=ts,js,py,react,nextjs,tailwind,redux,css,vite,babel,nodejs,nestjs,express,prisma,bun,postgres,mongodb,firebase,redis,docker,git,github,linux,bash,nginx,cloudflare,githubactions,figma,postman,neovim,vercel,netlify,md&theme=dark&perline=5";

export const SKILL_ICONS_WIDE_URL =
  "https://skillicons.dev/icons?i=ts,js,py,react,nextjs,tailwind,redux,css,vite,babel,nodejs,nestjs,express,prisma,bun,postgres,mongodb,firebase,redis,docker,git,github,linux,bash,nginx,cloudflare,githubactions,figma,postman,neovim,vercel,netlify,md&theme=dark&perline=10";

// export const skillGroups = [
//   {
//     category: "Languages",
//     iconIds: "ts,js,py",
//   },
//   {
//     category: "Frontend",
//     iconIds: "react,nextjs,tailwind,redux,css,vite,babel",
//   },
//   {
//     category: "Backend",
//     iconIds: "nodejs,nestjs,express,prisma,bun",
//   },
//   {
//     category: "Databases",
//     iconIds: "postgres,mongodb,firebase,redis",
//   },
//   {
//     category: "DevOps & Infra",
//     iconIds: "docker,git,github,linux,bash,nginx,cloudflare,githubactions",
//   },
//   {
//     category: "Other",
//     iconIds: "figma,postman,neovim,vercel,netlify,md",
//   },
// ];

export const projects = [
  {
    title: "First Aid Surgical",
    url: "https://firstaidsurgical.com",
    period: "Aug 2025 — Jan 2026",
    description:
      "A full-stack e-commerce platform for Bangladesh's leading medical equipment supplier. Supports multilingual storefronts (English/Bengali), automated payments, real-time inventory, and Steadfast courier integration — all managed through a role-based admin dashboard.",
    highlights: [
      "Multilingual",
      "Automated Payments",
      "Steadfast Integration",
      "PWA",
      "Real-time Inventory",
      "Multi-role Auth",
    ],
    tags: ["Next.js", "Drizzle", "PostgreSQL", "Better Auth", "PWA"],
    image: "/projects/first-aid.webp",
    featured: true,
  },
  {
    title: "NonstopGG",
    url: "https://nonstopgg.com",
    period: "Jan 2025 — May 2025",
    description:
      "B2B digital gift card marketplace where retailers browse, purchase, and instantly receive game currencies and entertainment subscriptions. Automated delivery cut fulfillment from hours to seconds.",
    highlights: ["500+ Products", "Automated Delivery", "Real-time Dashboard"],
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    image: "/projects/nonstopgg.webp",
    featured: false,
  },
  {
    title: "Daily Bangladesh Time",
    url: "https://en.dailybangladeshtime.com",
    period: "",
    description:
      "English-language news portal serving thousands of daily readers. Built with SSR for SEO performance, real-time push notifications, PWA support, and a role-based editorial workflow.",
    highlights: ["SSR/SEO", "PWA", "Push Notifications", "Multi-role"],
    tags: ["Next.js", "Drizzle", "PostgreSQL"],
    image: "/projects/daily-bd.webp",
    featured: false,
  },
  {
    title: "TPDO",
    url: "https://tpdobd.org",
    period: "",
    description:
      "Digital home for a Bangladeshi NGO — multilingual, donation-enabled, and PWA-ready. Features automated payment processing, a photo gallery, and a clean CMS for managing content.",
    highlights: ["Multilingual", "Donation Automation", "PWA", "Photo Gallery"],
    tags: ["Next.js"],
    image: "/projects/tpdo.webp",
    featured: false,
  },
  {
    title: "GBDC",
    url: "https://gbdcbd.org",
    period: "",
    description:
      "Community platform connecting blood donors with recipients across Bangladesh. Real-time notifications, live chat, donor profiles, and a blog keep 3,000+ users engaged.",
    highlights: ["3,000+ Users", "Real-time Chat", "Role-based Admin"],
    tags: ["Next.js", "PostgreSQL"],
    image: "/projects/gbdc.webp",
    featured: false,
  },

  {
    title: "Ahar",
    url: "https://ahar.com.bd",
    period: "",
    description:
      "Location-based food ordering platform for Bangladesh. Users browse restaurants and meals by area, place orders in seconds, and receive real-time push notifications at every step of delivery.",
    highlights: [
      "Location-based Orders",
      "Push Notifications",
      "Real-time Tracking",
    ],
    tags: ["Next.js"],
    image: "/projects/ahar.webp",
    featured: false,
  },
  {
    title: "Mellow Bangla",
    url: "https://mellowbangla.com",
    period: "",
    description:
      "A native Android radio app for Bangla music and talk stations. Background playback, song requests, real-time feedback, and Google login — paired with a Next.js marketing site.",
    highlights: [
      "Background Playback",
      "Song Requests",
      "Google Login",
      "Play Store",
    ],
    tags: ["React Native", "NestJS", "Next.js"],
    image: "/projects/mellow-bangla.webp",
    featured: false,
  },
];

export const contactLinks = [
  { label: "Phone", value: "+88 01712 686 075", href: "tel:+8801712686075" },
  { label: "Email", value: "hello@aariyan.info", href: "mailto:hello@aariyan.info" },
  { label: "WhatsApp", value: "+88 01712 686 075", href: "https://wa.me/8801712686075" },
  { label: "Telegram", value: "+88 01712 686 075", href: "https://t.me/+8801712686075" },
  { label: "GitHub", value: "@AariyanApu", href: "https://github.com/AariyanApu" },
  { label: "LinkedIn", value: "aariyanapu", href: "https://bd.linkedin.com/in/aariyanapu" },
  { label: "X / Twitter", value: "@aariyanapu", href: "https://x.com/aariyanapu" },
  { label: "Facebook", value: "aariyanapu", href: "https://www.facebook.com/aariyanapu" },
];

export const experiences = [
  {
    role: "Fullstack Engineer",
    company: "First Aid Surgical",
    period: "Aug 2025 — Jan 2026",
    description:
      "Directed the frontend build of a multi-language e-commerce platform for medical equipment and hospital furniture with i18n support, quote request system, and SEO optimization.",
    highlights: [
      "Multi-language i18n",
      "B2B quote system",
      "Core Web Vitals optimized",
    ],
  },
  {
    role: "Frontend Lead",
    company: "NonstopGG",
    period: "Jan 2025 — May 2025",
    description:
      "Led the frontend development of a B2B digital gift card marketplace built with Next.js. Implemented product catalog UI, secure checkout flows, and a real-time inventory dashboard.",
    highlights: [
      "500+ digital products",
      "Automated delivery",
      "Zero manual intervention",
    ],
  },

  {
    role: "Senior Front-End Engineer",
    company: "Ahar Tech",
    period: "Jul 2024 — Feb 2025",
    description:
      "Spearheaded development of Bangladesh's first meal subscription platform. Resolved critical bugs, maintained near-perfect uptime, and mentored junior developers.",
    highlights: [
      "90% bugs resolved in 48h",
      "99.9% uptime",
      "20% faster team delivery",
    ],
  },
  {
    role: "Assistant Software Engineer",
    company: "TPDO",
    period: "Jun 2019 — Mar 2023",
    description:
      "Overhauled IT infrastructure and built a custom CRM in React. Managed IT policies, procedures, and social media platforms across the organization.",
    highlights: ["50% less downtime", "25% more donations", "Custom React CRM"],
  },
];
