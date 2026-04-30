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

// ─── How to add a new project ───────────────────────────────────────────────
// Copy the template below, fill in your values, and paste it into the array.
// image: add your image to /public/projects/<filename>.webp and reference it.
// featured: set true on at most ONE project (shown as hero card on homepage).
//
// {
//   title: "Project Name",
//   url: "https://your-project.com",
//   period: "Jan 2026 — Present",   // or "" to hide
//   description: "One or two sentences describing the project.",
//   highlights: ["Key feature 1", "Key feature 2"],
//   tags: ["Next.js", "TypeScript"],
//   image: "/projects/your-image.webp",
//   featured: false,
// },
// ────────────────────────────────────────────────────────────────────────────
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
    image: "/projects/first-aid.png",
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
  {
    label: "Email",
    value: "hello@aariyan.info",
    href: "mailto:hello@aariyan.info",
  },
  {
    label: "WhatsApp",
    value: "+88 01712 686 075",
    href: "https://wa.me/8801712686075",
  },
  {
    label: "Telegram",
    value: "+88 01712 686 075",
    href: "https://t.me/+8801712686075",
  },
  {
    label: "GitHub",
    value: "@AariyanApu",
    href: "https://github.com/AariyanApu",
  },
  {
    label: "LinkedIn",
    value: "aariyanapu",
    href: "https://bd.linkedin.com/in/aariyanapu",
  },
  {
    label: "X / Twitter",
    value: "@aariyanapu",
    href: "https://x.com/aariyanapu",
  },
  {
    label: "Facebook",
    value: "aariyanapu",
    href: "https://www.facebook.com/aariyanapu",
  },
];

export const techStack = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python"] },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Redux", "Vite"],
  },
  { category: "Backend", items: ["Node.js", "NestJS", "Express", "Bun"] },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Firebase", "Redis"],
  },
  {
    category: "DevOps & Infra",
    items: [
      "Docker",
      "Linux",
      "Nginx",
      "Cloudflare",
      "GitHub Actions",
      "Vercel",
    ],
  },
  {
    category: "Tools",
    items: ["Git", "Figma", "Postman", "Neovim", "Drizzle", "Prisma"],
  },
];

export const services = [
  {
    icon: "Globe",
    title: "Full Stack Web Development",
    description:
      "End-to-end web applications with Next.js, React, and Node.js — from database design to pixel-perfect UI.",
  },
  {
    icon: "ShoppingCart",
    title: "E-commerce Solutions",
    description:
      "Custom online stores with payment integration, inventory management, multilingual storefronts, and courier APIs.",
  },
  {
    icon: "Smartphone",
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps with React Native — background services, push notifications, and Play Store deployment.",
  },
  {
    icon: "Server",
    title: "API & Backend Development",
    description:
      "RESTful APIs, database architecture, authentication systems, and real-time features with WebSockets.",
  },
];

export const education = [
  {
    icon: "Laptop",
    title: "Diploma in ICT",
    subtitle: "Information & Communication Technology",
  },
  {
    icon: "GraduationCap",
    title: "MBA",
    subtitle: "National University, Bangladesh",
  },
];

export const funFacts = [
  {
    emoji: "☕",
    text: "10–15 cups of coffee a day. Starts with espresso, ends with regret.",
  },
  {
    emoji: "😴",
    text: " Just pure, weaponized laziness. Leaving the house is a last resort.",
  },
  {
    emoji: "🐧",
    text: "10+ years on Linux. Arch btw — because pain is a feature, not a bug.",
  },
  {
    emoji: "🎬",
    text: "Watches movies and series while coding. Yes, during work. Productivity hack or coping mechanism — still figuring that out.",
  },
  {
    emoji: "🎧",
    text: "Music plays 24/7 — shower, walk, sleep. Built an entire radio app just so strangers could suffer through my playlists too.",
  },
  {
    emoji: "🌏",
    text: "Based in Bangladesh, mass-deployed caffeine-powered web apps worldwide. Fluent in Bengali, English, and sarcasm.",
  },
];

export const movies = [
  {
    title: "Jason Bourne Series",
    year: "2002–2016",
    genre: "Action / Thriller",
    imdb: "https://www.imdb.com/list/ls057255115/",
    rating: "7.9",
    description:
      "An amnesiac CIA assassin races across Europe to uncover who he is — while the agency that made him tries to silence him for good.",
    director: "Doug Liman · Paul Greengrass",
    cast: ["Matt Damon", "Franka Potente", "Julia Stiles"],
  },
  {
    title: "Borbaad",
    year: "2025",
    genre: "Bangladeshi Drama",
    imdb: "https://www.imdb.com/title/tt33305312/",
    rating: null,
    description:
      "A gripping 2025 Bangladeshi drama starring the iconic Shakib Khan, exploring themes of loss, identity, and redemption.",
    director: "Rahmat Ali",
    cast: ["Shakib Khan"],
  },
  {
    title: "Vikram",
    year: "2022",
    genre: "Tamil Action Thriller",
    imdb: "https://www.imdb.com/title/tt9179430/",
    rating: "7.9",
    description:
      "A retired special agent is pulled back into action to investigate a string of brutal masked murders threatening national security.",
    director: "Lokesh Kanagaraj",
    cast: ["Kamal Haasan", "Fahadh Faasil", "Vijay Sethupathi"],
  },
  {
    title: "Premam",
    year: "2015",
    genre: "Malayalam Romantic Drama",
    imdb: "https://www.imdb.com/title/tt4679210",
    rating: "8.2",
    description:
      "A young man's romantic journey across three distinct life phases — school, college, and adulthood — each defined by a different love.",
    director: "Alphonse Puthren",
    cast: ["Nivin Pauly", "Sai Pallavi", "Madonna Sebastian"],
  },
];

export const tvSeries = [
  {
    title: "Game of Thrones",
    year: "2011–2019",
    genre: "Fantasy / Drama",
    imdb: "https://www.imdb.com/title/tt0944947",
    rating: "9.2",
    description:
      "Nine noble families wage war for control of Westeros, while an ancient, long-forgotten enemy awakens beyond the northern wall.",
    creator: "David Benioff · D.B. Weiss",
    cast: ["Emilia Clarke", "Kit Harington", "Peter Dinklage"],
    network: "HBO",
    seasons: 8,
  },
  {
    title: "Mouse",
    year: "2021",
    genre: "Korean Thriller",
    imdb: "https://www.imdb.com/title/tt13634792",
    rating: "8.2",
    description:
      "What if a psychopath could be identified before birth? A deeply twisted Korean thriller that questions the very nature of good and evil.",
    creator: "Choi Ran",
    cast: ["Lee Seung-gi", "Lee Hee-jun", "Park Ju-hyun"],
    network: "tvN",
    seasons: 1,
  },
  {
    title: "Dark",
    year: "2017–2020",
    genre: "German Sci-Fi Thriller",
    imdb: "https://www.imdb.com/title/tt5753856",
    rating: "8.8",
    description:
      "Four interconnected families unravel a time travel conspiracy spanning four centuries in a small German town. Beautifully mind-bending.",
    creator: "Baran bo Odar · Jantje Friese",
    cast: ["Louis Hofmann", "Oliver Masucci", "Lisa Vicari"],
    network: "Netflix",
    seasons: 3,
  },
];

export const books = [
  {
    title: "Moyurakkhi",
    author: "Humayun Ahmed",
    year: "1990",
    genre: "Bengali Fiction",
    goodreads: "https://www.goodreads.com/en/book/show/12359912",
    rating: "4.4",
    description:
      "A poignant Bengali novel by Bangladesh's most beloved author — blending melancholy, wit, and love in his signature effortless style.",
    pages: 160,
  },
  {
    title: "Amazonia",
    author: "James Rollins",
    year: "2002",
    genre: "Adventure Thriller",
    goodreads: "https://www.goodreads.com/book/show/294047.Amazonia",
    rating: "3.8",
    description:
      "A deadly expedition deep into the Amazon to find a miraculous cure unearths an ancient secret guarded at all costs by a hidden tribe.",
    pages: 480,
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    year: "2011",
    genre: "Non-fiction / History",
    goodreads: "https://www.goodreads.com/book/show/23692271-sapiens",
    rating: "4.4",
    description:
      "A sweeping account of how Homo sapiens dominated Earth — tracing the cognitive, agricultural, and scientific revolutions that shaped us.",
    pages: 443,
  },
  {
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    year: "1988",
    genre: "Science / Physics",
    goodreads:
      "https://www.goodreads.com/book/show/3869.A_Brief_History_of_Time",
    rating: "4.3",
    description:
      "Hawking's landmark work on cosmology — covering the Big Bang, black holes, and the quest for a unified theory of everything.",
    pages: 212,
  },
];

export const favSongs: Array<{
  title: string;
  artist: string;
  vibe: string;
  from?: string;
  spotifyId: string;
}> = [
  {
    title: "Closer",
    artist: "The Chainsmokers",
    vibe: "Indie Pop",
    spotifyId: "7BKLCZ1jbUBVqRi2FVlTVw",
  },
  {
    title: "Didha",
    artist: "Pritom Hasan",
    vibe: "Bangla Folk",
    spotifyId: "31MNFbWzsIZvf3ED5kHYsr",
  },
  {
    title: "Tomake",
    artist: "Arindom",
    vibe: "Bengali Romantic",
    from: "Fidaa (Film)",
    spotifyId: "6HY2bYlI7vKKhodn2d5ha9",
  },
];

export const personalInterests = [
  { emoji: "🎬", label: "Watching thriller movies & series" },
  { emoji: "📚", label: "Reading thriller novels" },
  { emoji: "🤫", label: "Spending time alone in a quiet place" },
  { emoji: "🎧", label: "Listening to music" },
];

export const currentlyLearning = [
  {
    title: "Python",
    description: "Expanding into scripting, automation, and data workflows",
    progress: 60,
    emoji: "🐍",
  },
  {
    title: "German (Deutsch)",
    description: "Learning Deutsch day by day — currently navigating A2",
    progress: 25,
    emoji: "flag-de",
  },
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
