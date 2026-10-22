// Single source of truth for search metadata and Schema.org structured data.
// Change SITE_URL (via portfolio.website) when the custom domain is ready and
// every canonical link, sitemap entry and schema @id follows.

import type { Metadata } from "next";
import { portfolio } from "@/src/config/portfolio";
import { CONTACT_EMAIL } from "@/src/lib/contact";
import { HASHNODE_PUBLICATIONS } from "@/src/lib/hashnode";

export const SITE_URL = portfolio.website.replace(/\/+$/, "");
export const SITE_NAME = `${portfolio.name} Portfolio`;
export const SITE_TITLE = `${portfolio.name} | Full-Stack & AI Engineer`;
export const SITE_DESCRIPTION =
  "Rajarshi Chakraborty is a Kolkata-based Full-Stack & AI Engineer at Brand Voy, building production web apps, AI agents and developer tools.";

export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

// First published on 2026-10-19; used as ProfilePage.dateCreated.
const SITE_CREATED = "2026-10-19";

export const SAME_AS = [
  portfolio.github,
  portfolio.linkedin,
  portfolio.twitter,
  "https://leetcode.com/u/rajarshi_2005/",
  portfolio.blog,
  ...HASHNODE_PUBLICATIONS.map((p) => `https://${p.host}`)
];

export const KEYWORDS = [
  "Rajarshi Chakraborty",
  "Rajarshi Chakraborty Portfolio",
  "Rajarshi Chakraborty Developer",
  "Rajarshi Chakraborty Software Engineer",
  "Rajarshi Chakraborty Brand Voy",
  "Rajarshi Chakraborty Techno Main Salt Lake",
  "Rajarshi Chakraborty GitHub",
  "Rajarshi Chakraborty LeetCode",
  "Rajarshi Chakraborty Projects",
  "Rajarshi Chakraborty Blog",
  "Software Engineer Rajarshi",
  "Full-Stack Developer Kolkata",
  "AI Engineer Kolkata",
  "Software Engineer Kolkata",
  "Full-Stack & AI Engineer",
  "Agentic AI Engineer",
  "System Architect",
  "Next.js Developer",
  "TypeScript Backend Engineer",
  "Computer Science Student"
];

/**
 * Per-page metadata: canonical URL plus Open Graph and Twitter cards that
 * inherit the site-wide share image unless the route ships its own.
 */
export function pageMetadata({
  title,
  description,
  path,
  ogImage = true
}: {
  title: string;
  description: string;
  path: `/${string}`;
  /** Set false for routes with their own opengraph-image file. */
  ogImage?: boolean;
}): Metadata {
  const fullTitle = `${title} | ${portfolio.name}`;
  const images = ogImage
    ? [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${portfolio.name}, Full-Stack & AI Engineer`
        }
      ]
    : undefined;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      ...(images && { images })
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: portfolio.twitterHandle,
      ...(images && { images: ["/opengraph-image"] })
    }
  };
}

/** The Person entity Google uses for the knowledge panel. */
export const person = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: portfolio.name,
  alternateName: ["Arghya", "Rajarshi"],
  givenName: "Rajarshi",
  familyName: "Chakraborty",
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/RajarshiImage.jpg`,
  email: `mailto:${CONTACT_EMAIL}`,
  jobTitle: "Software Engineer",
  description: SITE_DESCRIPTION,
  worksFor: {
    "@type": "Organization",
    name: "Brand Voy",
    url: "https://brandvoy.co/"
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Techno Main Salt Lake",
    url: "https://www.ticollege.ac.in/"
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    addressCountry: "IN"
  },
  nationality: { "@type": "Country", name: "India" },
  knowsAbout: [
    "Full-Stack Development",
    "Artificial Intelligence",
    "Agentic AI",
    "Generative AI",
    "System Design",
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Go",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Kubernetes",
    "AWS",
    "Machine Learning",
    "Data Structures and Algorithms"
  ],
  sameAs: SAME_AS
};

export const website = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: SITE_NAME,
  alternateName: portfolio.name,
  url: `${SITE_URL}/`,
  description: SITE_DESCRIPTION,
  inLanguage: "en",
  author: { "@id": PERSON_ID },
  publisher: { "@id": PERSON_ID }
};

/**
 * ProfilePage. Google requires the Person to be defined in full inside
 * mainEntity (a bare @id reference fails the Rich Results test).
 */
export function profilePage(path: `/${string}`) {
  return {
    "@type": "ProfilePage",
    "@id": `${SITE_URL}${path === "/" ? "/" : path}#profile`,
    url: `${SITE_URL}${path === "/" ? "/" : path}`,
    name: SITE_TITLE,
    isPartOf: { "@id": WEBSITE_ID },
    dateCreated: SITE_CREATED,
    dateModified: new Date().toISOString(),
    mainEntity: person
  };
}

export function breadcrumbs(items: { name: string; path: `/${string}` }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" as const }, ...items].map(
      (item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: `${SITE_URL}${item.path === "/" ? "/" : item.path}`
      })
    )
  };
}

/** Wraps nodes into one JSON-LD document. */
export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
