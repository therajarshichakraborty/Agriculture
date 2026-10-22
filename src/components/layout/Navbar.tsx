"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Command, Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { portfolio } from "@/src/config/portfolio";
import { cn } from "@/src/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

const openPalette = () =>
  window.dispatchEvent(new CustomEvent("open-command-palette"));

export function Navbar() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [hovered, setHovered] = React.useState<string | null>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  // Close the mobile menu on navigation (state adjusted during render).
  const [lastPath, setLastPath] = React.useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
  }

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "flex w-full items-center justify-between gap-4 rounded-2xl border px-3 py-2 transition-all duration-500",
          scrolled
            ? "glass max-w-4xl border-border shadow-[0_8px_32px_-12px_rgba(0,0,0,0.35)]"
            : "max-w-6xl border-transparent bg-transparent"
        )}
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-lg pr-2 font-semibold text-foreground"
        >
          <span className="relative flex size-8 items-center justify-center overflow-hidden rounded-lg bg-foreground text-xs font-bold text-background">
            <span className="absolute inset-0 bg-linear-to-br from-brand/40 to-brand-2/30" />
            <span className="relative">{portfolio.initials}</span>
          </span>
          <span className="hidden text-sm tracking-tight sm:inline">
            {portfolio.name}
          </span>
        </Link>

        <ul
          className="hidden items-center md:flex"
          onMouseLeave={() => setHovered(null)}
        >
          {navLinks.map((link) => (
            <li key={link.href} className="relative">
              <Link
                href={link.href}
                onMouseEnter={() => setHovered(link.href)}
                className={cn(
                  "relative z-10 block px-3.5 py-1.5 text-sm transition-colors",
                  isActive(link.href)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
              {(hovered ?? navLinks.find((l) => isActive(l.href))?.href) ===
                link.href && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-lg bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <button
            onClick={openPalette}
            aria-label="Open command palette"
            className="hidden h-9 items-center gap-2 rounded-lg border border-border bg-card/50 px-2.5 text-xs text-muted-foreground transition-colors hover:text-foreground lg:flex"
          >
            <Command className="size-3.5" />
            <span>Search</span>
            <kbd className="rounded border border-border bg-background px-1.5 font-mono text-[10px]">
              Ctrl K
            </kbd>
          </button>

          <button
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            aria-label="Toggle theme"
            className="relative flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <Sun className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </button>

          <Link
            href="/contact"
            className="group relative hidden h-9 items-center overflow-hidden rounded-lg bg-foreground px-4 text-sm font-medium text-background md:inline-flex"
          >
            <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            Hire me
          </Link>

          <button
            className="flex size-9 items-center justify-center rounded-lg text-foreground hover:bg-accent md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="glass absolute inset-x-4 top-20 rounded-2xl border border-border p-2 shadow-2xl md:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                      isActive(link.href)
                        ? "bg-accent text-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2 grid grid-cols-2 gap-2 p-1">
                <button
                  onClick={openPalette}
                  className="flex h-10 items-center justify-center gap-2 rounded-xl border border-border text-sm"
                >
                  <Command className="size-4" /> Search
                </button>
                <Link
                  href="/contact"
                  className="flex h-10 items-center justify-center rounded-xl bg-foreground text-sm font-medium text-background"
                >
                  Hire me
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
