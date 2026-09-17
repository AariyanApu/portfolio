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
    highlights: ["Location-based Orders", "Push Notifications", "Real-time Tracking"],
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
    highlights: ["Background Playback", "Song Requests", "Google Login", "Play Store"],
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
    items: ["Docker", "Linux", "Nginx", "Cloudflare", "GitHub Actions", "Vercel"],
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
    title: "EES ",
    subtitle: "Otto-Friedrich-Universität Bamberg, Germany",
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
    goodreads: "https://www.goodreads.com/book/show/3869.A_Brief_History_of_Time",
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
  // {
  //   role: "Career Break — Master's Preparation",
  //   company: "",
  //   period: "1 Jul 2026 — Present",
  //   location: "Barishal, Bangladesh",
  //   description:
  //     "Left employment to prepare for the M.Sc. in Bamberg, Germany: IELTS Academic (7 Jul 2026), admission, blocked account, health insurance and visa application. Part-time web development continues alongside.",
  //   highlights: [
  //     "IELTS Academic",
  //     "M.Sc. Bamberg admission",
  //     "Blocked account & visa",
  //   ],
  // },
  {
    role: "Assistant Accountant (Finance)",
    company: "New Green Fashion",
    period: "1 Feb 2022 — 30 Jun 2026",
    location: "Ashulia, Dhaka, Bangladesh",
    description:
      "Full-time finance role at a garment and apparel manufacturer. Prepared the daily production report and the daily and yearly order, production and delivery reports, plus monthly sales and performance reports for management. Analyzed income statements and cost and income figures monthly, quarterly and yearly, prepared comparative statements, and advised management on export and import decisions.",
    highlights: [
      "Daily production reporting",
      "Monthly sales & performance reports",
      "Export/import decision support",
    ],
  },
  {
    role: "Intern, MIS Department",
    company: "New Green Fashion",
    period: "1 May 2021 — 31 Jan 2022",
    location: "Ashulia, Dhaka, Bangladesh",
    description:
      "Collected and compiled production, order and delivery data for daily and monthly management reports at a garment and apparel manufacturer. Moved to the finance department as Assistant Accountant in February 2022.",
    highlights: ["Production & order data", "Daily/monthly MIS reports", "Promoted to Finance"],
  },
  {
    role: "Web Application Developer (Self-Employed)",
    company: "Self-employed",
    period: "1 Apr 2021 — Present",
    location: "Barishal, Bangladesh",
    description:
      "Part-time on days off (Friday and Saturday). Built e-commerce and web projects for businesses and NGOs from requirements to deployment. Designed and maintained relational databases for transactional, inventory and financial records, and built reporting and admin dashboards. Deployed and managed applications on AWS, VPS and Linux servers.",
    highlights: [
      "Requirements to deployment",
      "Relational DBs & admin dashboards",
      "AWS, VPS & Linux",
    ],
  },
  {
    role: "IT Support & Social Media Officer",
    company: "Target Peoples for Development Organization (TPDO)",
    period: "1 Jun 2019 — 28 Feb 2021",
    location: "Barishal, Bangladesh",
    description:
      "Provided technical support for all IT infrastructure across the organization. Implemented IT policies and digital communication workflows for NGO operations, and managed the organization's digital presence and social media outreach.",
    highlights: ["Org-wide IT support", "IT policy & workflows", "Digital presence & outreach"],
  },
  // {
  //   role: "Career Break — Job Search After Graduation",
  //   company: "",
  //   period: "1 Oct 2018 — 31 May 2019",
  //   location: "Barishal, Bangladesh",
  //   description:
  //     "Job search and preparation for employment after completing the BBA.",
  //   highlights: ["Post-BBA job search"],
  // },
];

// ─── SEO / identity (single source of truth for metadata, JSON-LD, llms.txt) ─
// SITE_URL must match the host Vercel serves as primary (apex 308s to www).
export const SITE_URL = "https://www.aariyan.info";
export const SITE_NAME = "Aariyan Apu";

// Every spelling people use for the name — fed to keywords, JSON-LD alternateName,
// llms.txt and the FAQ so misspelled searches still resolve to this site.
export const nameVariants = [
  "Aariyan Apu",
  "Ariyan Apu",
  "Aariyan Opu",
  "Ariyan Opu",
  "Arian Apu",
  "Arian Opu",
  "Aryan Apu",
  "Aryan Opu",
  "Aarian Apu",
  "Aariyan Apoo",
  "Apu Aariyan",
  "Aariyanapu",
  "AariyanApu",
  "আরিয়ান অপু",
  "আরিয়ান",
  "অপু",
];

export const profile = {
  name: "Aariyan Apu",
  givenName: "Aariyan",
  familyName: "Apu",
  nativeName: "আরিয়ান অপু ",
  headline: "Full Stack Web Developer from Barishal, Bangladesh",
  jobTitles: ["Full Stack Web Developer", "Assistant Accountant (Finance)"],
  tagline: "I turn ideas into products people actually use",
  shortBio:
    "Aariyan Apu is a full stack web developer from Barishal, Bangladesh, building web and mobile apps with Next.js, React, TypeScript, Node.js, NestJS, PostgreSQL and React Native.",
  bio: "Aariyan Apu is a full stack web developer from Barishal, Bangladesh. Aariyan builds production web and mobile applications with Next.js, React, TypeScript, Tailwind CSS, Node.js, NestJS, Express, PostgreSQL, MongoDB and React Native, and deploys them with Docker, Linux, Nginx, Cloudflare and Vercel. Since April 2021 Aariyan has shipped e-commerce stores, news portals, NGO websites and community platforms for clients in Bangladesh, including First Aid Surgical, NonstopGG, Daily Bangladesh Time, GBDC, TPDO, Ahar and the Mellow Bangla radio app. Aariyan also spent four and a half years in finance at New Green Fashion, a garment and apparel manufacturer in Ashulia, Dhaka, most recently as Assistant Accountant (Finance), holds a Bachelor of Business Administration in Finance and Banking from National University, Bangladesh, and has been admitted to the M.Sc. European Economic Studies at Otto-Friedrich-Universität Bamberg, Germany, for the 2026/27 winter semester. Aariyan is available for freelance and contract web development work.",
  disambiguation:
    "Aariyan Apu, the full stack web developer from Barishal, Bangladesh (aariyan.info, GitHub @AariyanApu). Not to be confused with other people or works named Apu.",
  email: "hello@aariyan.info",
  phone: "+8801712686075",
  phoneDisplay: "+88 01712 686 075",
  whatsapp: "https://wa.me/8801712686075",
  telegram: "https://t.me/+8801712686075",
  image: "/asset/about-me.jpg",
  imageWidth: 400,
  imageHeight: 445,
  resume: "/resume.pdf",
  location: {
    city: "Barishal",
    altCity: "Barisal",
    region: "Barisal Division",
    country: "Bangladesh",
    countryCode: "BD",
    timezone: "Asia/Dhaka",
  },
  availability:
    "Available for freelance and contract web development projects (remote, worldwide).",
  languages: [
    { code: "bn", name: "Bengali", level: "Native" },
    { code: "en", name: "English", level: "Fluent" },
    { code: "de", name: "German", level: "learning, A2" },
  ],
  // Older portfolios still online; both redirect (or will) to SITE_URL.
  previousSites: ["https://www.aariyanapu.com", "https://aaru.vercel.app"],
};

export const socialProfiles = [
  {
    name: "GitHub",
    handle: "@AariyanApu",
    url: "https://github.com/AariyanApu",
  },
  {
    name: "LinkedIn",
    handle: "aariyanapu",
    url: "https://www.linkedin.com/in/aariyanapu",
  },
  {
    name: "X (Twitter)",
    handle: "@aariyanapu",
    url: "https://x.com/aariyanapu",
  },
  {
    name: "Facebook",
    handle: "aariyanapu",
    url: "https://www.facebook.com/aariyanapu",
  },
  {
    name: "Instagram",
    handle: "@aariyan.apu",
    url: "https://www.instagram.com/aariyan.apu/",
  },
  {
    name: "Hashnode",
    handle: "@aariyanapu",
    url: "https://hashnode.com/@aariyanapu",
  },
  {
    name: "Stack Overflow",
    handle: "aariyan-apu",
    url: "https://stackoverflow.com/users/12180960/aariyan-apu",
  },
  {
    name: "Quora",
    handle: "Aariyan-Apu",
    url: "https://www.quora.com/profile/Aariyan-Apu",
  },
  {
    name: "daily.dev",
    handle: "aariyanapu",
    url: "https://app.daily.dev/aariyanapu",
  },
];

// Richer than `education` (which drives the UI cards) — used for JSON-LD and llms.txt.
export const educationDetails = [
  {
    degree: "M.Sc. European Economic Studies",
    institution: "Otto-Friedrich-Universität Bamberg",
    institutionUrl: "https://www.uni-bamberg.de",
    location: "Bamberg, Germany",
    period: "2026 — present",
    note: "Admitted for the 2026/27 winter semester; specialising in international economics and applied econometrics.",
  },
  {
    degree: "MBA",
    institution: "National University, Bangladesh",
    institutionUrl: "https://www.nu.ac.bd",
    location: "",
    period: "",
    note: "",
  },
  {
    degree: "Bachelor of Business Administration (BBA) in Finance and Banking",
    institution: "National University, Bangladesh",
    institutionUrl: "https://www.nu.ac.bd",
    location: "",
    period: "2017",
    note: "CGPA 3.22 / 4.00",
  },
  {
    degree: "Diploma in ICT (Information & Communication Technology)",
    institution: "",
    institutionUrl: "",
    location: "Bangladesh",
    period: "",
    note: "",
  },
];

// Skills not in `techStack` but on the resume — merged into knowsAbout / llms.txt.
export const extraSkills = [
  "React Native",
  "Zustand",
  "shadcn/ui",
  "Framer Motion",
  "Drizzle ORM",
  "Better Auth",
  "Auth.js",
  "Socket.io",
  "WebSockets",
  "PWA",
  "i18n",
  "SEO",
  "Core Web Vitals",
  "REST APIs",
  "AWS",
  "VPS & Linux server administration",
  "CI/CD",
  "E-commerce development",
  "Payment gateway integration",
  "Steadfast courier API",
  "Push notifications",
  "Financial reporting",
  "Cost and income statement analysis",
  "MIS reporting",
  "Export/import decision support",
];

// Visible FAQ on /about (also emitted as FAQPage JSON-LD and in llms.txt).
export const faqs = [
  {
    q: "Who is Aariyan Apu?",
    a: "Aariyan Apu is a full stack web developer from Barishal, Bangladesh, who builds web and mobile apps with Next.js, React, TypeScript, Node.js, NestJS, PostgreSQL and React Native. Aariyan has shipped e-commerce, news, NGO and community platforms such as First Aid Surgical, NonstopGG, Daily Bangladesh Time, GBDC and the Mellow Bangla radio app.",
  },
  {
    q: "How is the name spelled? Ariyan Apu, Aariyan Opu or Arian Apu?",
    a: "The correct spelling is Aariyan Apu (Bengali: আরিয়ান অপু ). It is often written as Ariyan Apu, Aariyan Opu, Ariyan Opu, Arian Apu, Aryan Apu, or as one word, aariyanapu — the handle used on GitHub, LinkedIn, X and Instagram. All of these refer to the same person.",
  },
  {
    q: "Where is Aariyan Apu based?",
    a: "Barishal (also spelled Barisal), Bangladesh, working remotely with clients worldwide. Aariyan previously worked in Ashulia, Dhaka, and has been admitted to Otto-Friedrich-Universität Bamberg in Germany for the M.Sc. European Economic Studies starting in the 2026/27 winter semester.",
  },
  {
    q: "What does Aariyan Apu do?",
    a: "Full stack web development: Next.js and React frontends, Node.js, NestJS and Express APIs, PostgreSQL and MongoDB databases, React Native mobile apps, e-commerce with payment and courier integrations, PWAs, and deployment on Docker, Linux, Vercel and Cloudflare. Aariyan also has a finance background: four and a half years at New Green Fashion, a garment manufacturer, most recently as Assistant Accountant (Finance) handling production, sales and cost reporting.",
  },
  {
    q: "Which projects has Aariyan Apu built?",
    a: "First Aid Surgical (firstaidsurgical.com), NonstopGG (nonstopgg.com), Daily Bangladesh Time (en.dailybangladeshtime.com), TPDO (tpdobd.org), the GBDC blood donor platform (gbdcbd.org), Ahar food ordering (ahar.com.bd) and the Mellow Bangla radio app (mellowbangla.com), plus this open-source portfolio on GitHub.",
  },
  {
    q: "What is Aariyan Apu's education?",
    a: "A Bachelor of Business Administration in Finance and Banking from National University, Bangladesh (2017, CGPA 3.22/4.00), an MBA from National University, a Diploma in ICT, and admission to the M.Sc. European Economic Studies at Otto-Friedrich-Universität Bamberg, Germany, for 2026/27.",
  },
  {
    q: "Which languages does Aariyan Apu speak?",
    a: "Bengali (native), English (fluent) and German (learning, currently around A2). Code-wise, mostly TypeScript, JavaScript and Python.",
  },
  {
    q: "Is Aariyan Apu available for freelance work?",
    a: "Yes. Aariyan takes on freelance and contract projects for web apps, e-commerce stores, APIs and mobile apps. Email hello@aariyan.info or message +88 01712 686 075 on WhatsApp or Telegram.",
  },
  {
    q: "Where can I find Aariyan Apu online?",
    a: "The official website is aariyan.info. Aariyan is @AariyanApu on GitHub, aariyanapu on LinkedIn, X (Twitter) and Facebook, @aariyan.apu on Instagram, and also on Hashnode, Stack Overflow and Quora.",
  },
];
