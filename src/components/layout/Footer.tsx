import Link from "next/link";
import { GitBranch, Link2, X, Coffee } from "lucide-react";
import { portfolio } from "@/src/config/portfolio";
import { Separator } from "@/src/components/ui/separator";

const socialLinks = [
  { href: portfolio.github, icon: GitBranch, label: "GitHub" },
  { href: portfolio.linkedin, icon: Link2, label: "LinkedIn" },
  { href: portfolio.twitter, icon: X, label: "Twitter" },
  { href: portfolio.kofi, icon: Coffee, label: "Ko-fi" }
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Left — name + tagline */}
          <div className="space-y-1">
            <p className="font-semibold text-foreground">{portfolio.name}</p>
            <p className="text-sm text-muted-foreground">{portfolio.role}</p>
          </div>

          {/* Right — social links */}
          <div className="flex items-center gap-1">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>

        <Separator className="my-6" />

        <p className="text-center text-xs text-muted-foreground">
          © {year} {portfolio.name}. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
