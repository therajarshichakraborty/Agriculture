import { ArrowUpRight, Phone } from "lucide-react";
import {
  ContactForm,
  GradientText
} from "@/src/components/section/contact-form";
import { Reveal } from "@/src/components/aceternity/section";
import { Icons } from "@/src/components/icons";
import { portfolio } from "@/src/config/portfolio";
import {
  CONTACT_COMPOSE_URL,
  CONTACT_EMAIL,
  SECONDARY_EMAIL,
  composeUrl
} from "@/src/lib/contact";
import { JsonLd } from "@/src/components/seo/JsonLd";
import {
  SITE_URL,
  WEBSITE_ID,
  breadcrumbs,
  graph,
  pageMetadata,
  person
} from "@/src/lib/seo";

const description =
  "Contact Rajarshi Chakraborty, Full-Stack & AI Engineer in Kolkata, about internships, full-time roles, freelance projects or collaborations.";

export const metadata = pageMetadata({
  title: "Contact",
  description,
  path: "/contact"
});

const contactPage = {
  "@type": "ContactPage",
  "@id": `${SITE_URL}/contact#page`,
  url: `${SITE_URL}/contact`,
  name: "Contact Rajarshi Chakraborty",
  description,
  isPartOf: { "@id": WEBSITE_ID },
  mainEntity: {
    ...person,
    telephone: portfolio.phone.replace(/s/g, ""),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "professional inquiries",
      email: CONTACT_EMAIL,
      telephone: portfolio.phone.replace(/s/g, ""),
      availableLanguage: ["English", "Bengali"]
    }
  }
};

const channels = [
  {
    href: CONTACT_COMPOSE_URL,
    icon: Icons.email,
    label: "Primary email",
    handle: CONTACT_EMAIL
  },
  {
    href: composeUrl(SECONDARY_EMAIL),
    icon: Icons.email,
    label: "Secondary email",
    handle: SECONDARY_EMAIL
  },
  {
    href: `tel:${portfolio.phone.replace(/\s/g, "")}`,
    icon: Phone,
    label: "Phone",
    handle: portfolio.phone
  },
  {
    href: `https://wa.me/${portfolio.phone.replace(/\D/g, "")}`,
    icon: Icons.whatsapp,
    label: "WhatsApp",
    handle: "Message me directly"
  },
  {
    href: portfolio.linkedin,
    icon: Icons.linkedin,
    label: "LinkedIn",
    handle: portfolio.linkedinHandle
  },
  {
    href: portfolio.github,
    icon: Icons.github,
    label: "GitHub",
    handle: portfolio.githubHandle
  },
  {
    href: portfolio.twitter,
    icon: Icons.x,
    label: "X (Twitter)",
    handle: portfolio.twitterHandle
  }
];

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 pt-20 pb-24 md:pt-28">
      <JsonLd
        data={graph(
          contactPage,
          breadcrumbs([{ name: "Contact", path: "/contact" }])
        )}
      />
      <header className="max-w-3xl">
        <Reveal>
          <p className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Open to internships, freelance and full-time roles
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-5 text-4xl leading-[1.05] font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl">
            Got an idea?
            <br />
            <GradientText>Let&apos;s make it real.</GradientText>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-base leading-[1.8] text-pretty text-muted-foreground md:text-lg md:leading-[1.8]">
            Whether it&apos;s a role, a freelance project or an idea that
            won&apos;t leave you alone, tell me about it. Every message lands in
            my own inbox, and I read each one myself.
          </p>
        </Reveal>
      </header>

      <div className="mt-16 grid gap-16 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-20">
        {/* The same form as the "Contact me" popup, at a larger size and without a card */}
        <Reveal delay={0.15}>
          <ContactForm large />
        </Reveal>

        <aside aria-labelledby="channels">
          <Reveal delay={0.2}>
            <h2
              id="channels"
              className="text-lg font-bold tracking-tight text-foreground"
            >
              Or reach me directly
            </h2>
          </Reveal>
          <ul className="mt-3">
            {channels.map(({ href, icon: Icon, label, handle }, i) => {
              const external = href.startsWith("http");
              return (
                <li key={label}>
                  <Reveal delay={0.24 + i * 0.04}>
                    <a
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 border-b border-border/70 py-4"
                    >
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-foreground shadow-xs ring-1 ring-border transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:bg-foreground group-hover:text-background group-hover:shadow-md group-hover:ring-foreground">
                        <Icon aria-hidden="true" className="size-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold text-foreground">
                          {label}
                        </span>
                        <span className="block truncate text-sm text-muted-foreground">
                          {handle}
                        </span>
                      </span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                      />
                    </a>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </aside>
      </div>
    </div>
  );
}
