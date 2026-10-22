"use client";

import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { portfolio } from "@/src/config/portfolio";
import { DATA } from "@/src/data/resume";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

const resourceLinks = [
  { href: "/resume.pdf", label: "Résumé" },
  { href: "/pdfs/research-paper.pdf", label: "IEEE Paper" },
  { href: portfolio.blog, label: "Hashnode" },
  { href: "/#dsa", label: "DSA Journey" }
];

const WORDMARK = "RAJARSHI";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
};

const rise = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 }
};

function FooterLink({ href, label }: { href: string; label: string }) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group relative inline-flex items-center gap-1 text-sm text-foreground/75 transition-colors duration-300 hover:text-foreground"
    >
      <span className="relative">
        {label}
        <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-linear-to-r from-red-500 via-pink-500 to-violet-500 transition-transform duration-300 group-hover:scale-x-100" />
      </span>
      {external && (
        <ArrowUpRight className="size-3 -translate-x-0.5 translate-y-0.5 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
      )}
    </Link>
  );
}

export function Footer() {
  const socials = Object.values(DATA.contact.social);

  return (
    <footer className="relative mt-24 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={stagger}
        className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-16 text-center"
      >
        <motion.div variants={rise}>
          <Link href="/" className="group inline-flex items-center gap-2.5">
            <span className="flex size-10 items-center justify-center rounded-xl bg-foreground text-sm font-bold text-background transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
              {portfolio.initials}
            </span>
            <span className="text-lg font-semibold tracking-tight transition-colors group-hover:text-foreground/80">
              {portfolio.name}
            </span>
          </Link>
        </motion.div>

        <motion.p
          variants={rise}
          className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground"
        >
          {portfolio.shortBio}
        </motion.p>

        <motion.ul variants={rise} className="mt-6 flex items-center justify-center gap-2.5">
          {socials.map((social, i) => (
            <motion.li
              key={social.name}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 320, damping: 18, delay: 0.25 + i * 0.07 }}
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="group flex size-10 items-center justify-center rounded-xl bg-secondary/70 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-foreground hover:text-background hover:shadow-[0_12px_24px_-12px_#ec4899] active:scale-95"
              >
                <social.icon className="size-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
              </a>
            </motion.li>
          ))}
        </motion.ul>

        <motion.nav
          variants={rise}
          aria-label="Footer"
          className="mt-10 flex flex-col items-center gap-4"
        >
          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <FooterLink {...link} />
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {resourceLinks.map((link) => (
              <li key={link.label} className="text-muted-foreground">
                <FooterLink {...link} />
              </li>
            ))}
          </ul>
        </motion.nav>

        <motion.button
          variants={rise}
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group mt-10 inline-flex items-center gap-2 rounded-full bg-secondary/70 px-4 py-2 text-xs font-medium text-muted-foreground transition-all duration-300 hover:bg-foreground hover:text-background active:scale-95"
        >
          <ArrowUp className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          Back to top
        </motion.button>
      </motion.div>

      {/* Wordmark: letters rise in on view and light up on hover */}
      <div
        aria-hidden
        className="mx-auto mt-10 flex select-none justify-center px-4 pb-28"
      >
        {WORDMARK.split("").map((letter, i) => (
          <motion.span
            key={`${letter}-${i}`}
            initial={{ opacity: 0, y: "40%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.06, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="inline-block bg-linear-to-b from-foreground/15 to-foreground/[0.03] bg-clip-text text-[clamp(4.5rem,17vw,15rem)] font-bold leading-[0.85] tracking-tighter text-transparent transition-all duration-500 hover:-translate-y-2 hover:from-red-500 hover:via-pink-500 hover:to-violet-500"
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </footer>
  );
}
