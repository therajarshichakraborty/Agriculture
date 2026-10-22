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
    <footer className="relative mt-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-[calc(14vw+5rem)]">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="space-y-5">
            <Link href="/" className="group inline-flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-lg bg-foreground text-sm font-bold text-background transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
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
                  className="group flex size-9 items-center justify-center rounded-lg bg-secondary/70 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-foreground hover:text-background hover:shadow-[0_10px_20px_-10px_var(--brand)] active:scale-95"
                >
                  <social.icon className="size-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
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
                        className="group relative inline-flex items-center gap-1 text-sm text-foreground/80 transition-all duration-300 hover:translate-x-1 hover:text-foreground"
                      >
                        <span className="relative">
                          {link.label}
                          <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-linear-to-r from-brand to-brand-2 transition-transform duration-300 group-hover:scale-x-100" />
                        </span>
                        {external && (
                          <ArrowUpRight className="size-3 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
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
