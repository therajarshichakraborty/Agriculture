import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/src/config/portfolio";
import { DATA } from "@/src/data/resume";

const columns = [
  {
    title: "Navigate",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/projects", label: "Projects" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" }
    ]
  },
  {
    title: "Resources",
    links: [
      { href: "/resume.pdf", label: "Résumé" },
      { href: "/pdfs/research-paper.pdf", label: "IEEE Paper" },
      { href: portfolio.blog, label: "Hashnode" },
      { href: "/#dsa", label: "DSA Journey" }
    ]
  }
];

export function Footer() {
  const socials = Object.values(DATA.contact.social);

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand/60 to-transparent"
      />
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-[calc(14vw+5rem)]">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="space-y-5">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-lg bg-foreground text-sm font-bold text-background">
                {portfolio.initials}
              </span>
              <span className="font-semibold tracking-tight">
                {portfolio.name}
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              {portfolio.shortBio}
            </p>
            <div className="flex items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex size-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-foreground"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => {
                  const external = link.href.startsWith("http");
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="group inline-flex items-center gap-1 text-sm text-foreground/80 transition-colors hover:text-foreground"
                      >
                        {link.label}
                        {external && (
                          <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <p
        aria-hidden
        className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 select-none whitespace-nowrap bg-linear-to-b from-foreground/10 to-transparent bg-clip-text font-display text-[18vw] font-bold leading-none tracking-tighter text-transparent md:-bottom-10"
      >
        RAJARSHI
      </p>
    </footer>
  );
}
