import type { BlogPost, BlogPostMeta } from "@/types/blog";
import {
  educationDetails,
  experiences,
  extraSkills,
  faqs,
  nameVariants,
  profile,
  projects,
  SITE_NAME,
  SITE_URL,
  services,
  socialProfiles,
  techStack,
} from "@/utils/constants";

type JsonLd = Record<string, unknown>;

export const SITE_TITLE =
  "Aariyan Apu — Full Stack Web Developer from Bangladesh";
export const SITE_DESCRIPTION =
  "Aariyan Apu is a Full Stack Web Developer from Barishal, Bangladesh. Builds web and mobile apps with Next.js, React, TypeScript and Node.js. Open to freelance.";

export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const PHOTO_ID = `${SITE_URL}/#photo`;
export const BLOG_ID = `${SITE_URL}/blog#blog`;

/** Absolute URL on the canonical host. Leaves already-absolute URLs untouched. */
export function abs(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export const allSkills: string[] = Array.from(
  new Set([...techStack.flatMap((g) => g.items), ...extraSkills]),
);

export const sameAsUrls: string[] = Array.from(
  new Set([
    ...socialProfiles.map((s) => s.url),
    "https://twitter.com/aariyanapu",
    "https://bd.linkedin.com/in/aariyanapu",
    ...profile.previousSites,
  ]),
);

const alternateNames = nameVariants.filter((n) => n !== profile.name);

export function photoJsonLd(): JsonLd {
  return {
    "@type": "ImageObject",
    "@id": PHOTO_ID,
    url: abs(profile.image),
    contentUrl: abs(profile.image),
    width: profile.imageWidth,
    height: profile.imageHeight,
    caption: `${profile.name} — ${profile.headline}`,
  };
}

export function personJsonLd(): JsonLd {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: profile.name,
    givenName: profile.givenName,
    familyName: profile.familyName,
    alternateName: alternateNames,
    description: profile.bio,
    disambiguatingDescription: profile.disambiguation,
    url: SITE_URL,
    mainEntityOfPage: `${SITE_URL}/about`,
    image: { "@id": PHOTO_ID },
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    jobTitle: profile.jobTitles,
    hasOccupation: profile.jobTitles.map((title) => ({
      "@type": "Occupation",
      name: title,
      occupationLocation: {
        "@type": "Country",
        name: profile.location.country,
      },
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location.city,
      addressRegion: profile.location.region,
      addressCountry: profile.location.countryCode,
    },
    homeLocation: {
      "@type": "Place",
      name: `${profile.location.city}, ${profile.location.country}`,
    },
    nationality: { "@type": "Country", name: profile.location.country },
    knowsLanguage: profile.languages.map((l) => ({
      "@type": "Language",
      name: l.name,
      alternateName: l.code,
    })),
    knowsAbout: allSkills,
    alumniOf: educationDetails
      .filter(
        (e, i, arr) =>
          e.institution &&
          arr.findIndex((x) => x.institution === e.institution) === i,
      )
      .map((e) => ({
        "@type": "CollegeOrUniversity",
        name: e.institution,
        ...(e.institutionUrl ? { sameAs: e.institutionUrl } : {}),
      })),
    sameAs: sameAsUrls,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web development services by Aariyan Apu",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
          provider: { "@id": PERSON_ID },
          areaServed: "Worldwide",
        },
      })),
    },
    subjectOf: {
      "@type": "DigitalDocument",
      name: "Aariyan Apu — Resume (PDF)",
      url: abs(profile.resume),
      encodingFormat: "application/pdf",
    },
  };
}

export function websiteJsonLd(): JsonLd {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    alternateName: ["aariyan.info", "Aariyan Apu Portfolio", ...alternateNames],
    description: SITE_DESCRIPTION,
    inLanguage: "en",
    about: { "@id": PERSON_ID },
    author: { "@id": PERSON_ID },
    publisher: { "@id": PERSON_ID },
    copyrightHolder: { "@id": PERSON_ID },
  };
}

export function webPageJsonLd(opts: {
  path: string;
  name: string;
  description: string;
  type?: string;
  extra?: JsonLd;
}): JsonLd {
  const url = abs(opts.path);
  return {
    "@type": opts.type ?? "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: opts.name,
    description: opts.description,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": PERSON_ID },
    primaryImageOfPage: { "@id": PHOTO_ID },
    ...opts.extra,
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
): JsonLd {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

export function faqJsonLd(): JsonLd {
  return {
    "@type": "FAQPage",
    "@id": `${SITE_URL}/about#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function projectsJsonLd(): JsonLd {
  return {
    "@type": "ItemList",
    "@id": `${SITE_URL}/projects#list`,
    name: "Projects by Aariyan Apu",
    numberOfItems: projects.length,
    itemListElement: projects.map((p, i) => {
      const isMobile = p.tags.includes("React Native");
      return {
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "SoftwareApplication",
          name: p.title,
          url: p.url,
          description: p.description,
          applicationCategory: isMobile
            ? "MultimediaApplication"
            : "WebApplication",
          operatingSystem: isMobile ? "Android" : "Web",
          image: abs(p.image),
          keywords: [...p.tags, ...p.highlights].join(", "),
          author: { "@id": PERSON_ID },
          creator: { "@id": PERSON_ID },
        },
      };
    }),
  };
}

export function blogJsonLd(posts: BlogPostMeta[]): JsonLd {
  return {
    "@type": "Blog",
    "@id": BLOG_ID,
    url: `${SITE_URL}/blog`,
    name: "Aariyan Apu's Blog",
    description:
      "Posts by Aariyan Apu on web development, Next.js, React, TypeScript, Linux, tools and building products in Bangladesh.",
    inLanguage: "en",
    author: { "@id": PERSON_ID },
    publisher: { "@id": PERSON_ID },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      "@id": `${SITE_URL}/blog/${p.slug}#post`,
      headline: p.title,
      url: `${SITE_URL}/blog/${p.slug}`,
      datePublished: p.date,
      image: abs(p.image),
      keywords: p.tags.join(", "),
      author: { "@id": PERSON_ID },
    })),
  };
}

export function blogPostingJsonLd(post: BlogPost): JsonLd {
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    "@type": "BlogPosting",
    "@id": `${url}#post`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    headline: post.title,
    description: post.excerpt,
    image: abs(post.image),
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "en",
    isPartOf: { "@id": BLOG_ID },
    author: { "@id": PERSON_ID },
    publisher: { "@id": PERSON_ID },
    keywords: post.tags.join(", "),
    wordCount: post.content.split(/\s+/).length,
    timeRequired: `PT${post.readingTime}M`,
  };
}

/** Full graph for /profile.json and any page that wants the whole identity. */
export function identityGraph(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": [personJsonLd(), photoJsonLd(), websiteJsonLd()],
  };
}

/** Plain-text experience lines used by llms.txt. */
export function experienceLines(): string[] {
  return experiences.map((e) => {
    const where = e.company ? ` at ${e.company}` : "";
    return `- ${e.role}${where} (${e.period}; ${e.location}): ${e.description} Highlights: ${e.highlights.join(", ")}.`;
  });
}
