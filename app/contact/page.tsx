import type { Metadata } from "next";
import Link from "next/link";
import { GitBranch, Link2, X, Mail, Coffee } from "lucide-react";
import { ContactForm } from "@/src/components/contact/ContactForm";
import { portfolio } from "@/src/config/portfolio";
import { Separator } from "@/src/components/ui/separator";

export const metadata: Metadata = {
  title: `Contact — ${portfolio.name}`,
  description: `Get in touch with ${portfolio.name}.`,
};

const socialLinks = [
  { href: portfolio.github, icon: GitBranch, label: "GitHub", handle: portfolio.githubHandle },
  { href: portfolio.linkedin, icon: Link2, label: "LinkedIn", handle: portfolio.linkedinHandle },
  { href: portfolio.twitter, icon: X, label: "Twitter / X", handle: portfolio.twitterHandle },
  { href: `mailto:${portfolio.email}`, icon: Mail, label: "Email", handle: portfolio.email },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Left — info */}
        <div className="space-y-8">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Contact
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground">
              Let&apos;s work together
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Have a project in mind or want to discuss an opportunity? I&apos;m
              always open to new collaborations and conversations.
            </p>
          </div>

          <div className="space-y-3">
            {socialLinks.map(({ href, icon: Icon, label, handle }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 text-sm font-medium transition-colors hover:bg-secondary group"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-secondary group-hover:bg-background transition-colors">
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{label}</p>
                  <p className="text-muted-foreground text-xs">{handle}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="pt-2">
            <Separator className="mb-6" />
            <p className="text-sm text-muted-foreground">
              Prefer to support my open-source work?{" "}
              <Link
                href={portfolio.kofi}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground underline-offset-4 hover:underline inline-flex items-center gap-1"
              >
                <Coffee className="h-3.5 w-3.5" />
                Buy me a coffee
              </Link>
            </p>
          </div>
        </div>

        {/* Right — form */}
        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
          <h2 className="mb-6 text-lg font-semibold text-foreground">
            Send a message
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
