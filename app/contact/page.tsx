import type { Metadata } from "next";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { ContactForm } from "@/src/components/contact/ContactForm";
import { PageHeader } from "@/src/components/layout/PageHeader";
import { GlowCard } from "@/src/components/aceternity/glow-card";
import { Meteors } from "@/src/components/aceternity/meteors";
import { Reveal } from "@/src/components/aceternity/section";
import { Icons } from "@/src/components/icons";
import { portfolio } from "@/src/config/portfolio";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${portfolio.name} for internships, freelance work and collaborations.`
};

const channels = [
  { href: `mailto:${portfolio.email}`, icon: Mail, label: "Email", handle: portfolio.email },
  { href: `tel:${portfolio.phone.replace(/\s/g, "")}`, icon: Phone, label: "Phone", handle: portfolio.phone },
  { href: `https://wa.me/${portfolio.phone.replace(/\D/g, "")}`, icon: Icons.whatsapp, label: "WhatsApp", handle: "Chat instantly" },
  { href: portfolio.linkedin, icon: Icons.linkedin, label: "LinkedIn", handle: portfolio.linkedinHandle },
  { href: portfolio.github, icon: Icons.github, label: "GitHub", handle: portfolio.githubHandle },
  { href: portfolio.twitter, icon: Icons.x, label: "X / Twitter", handle: portfolio.twitterHandle }
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something impactful."
        description="Open to internships, freelance projects and full-time roles. I usually reply within 24 hours."
      />

      <div className="mx-auto grid max-w-6xl gap-6 px-6 pb-16 lg:grid-cols-[1fr_1.2fr]">
        <Reveal className="grid content-start gap-3 sm:grid-cols-2">
          {channels.map(({ href, icon: Icon, label, handle }) => {
            const external = href.startsWith("http");
            return (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
              >
                <GlowCard className="h-full">
                  <div className="flex items-center gap-3 p-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary">
                      <Icon className="size-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-medium">{label}</span>
                      <span className="block truncate text-xs text-muted-foreground">{handle}</span>
                    </span>
                    <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover/glow:-translate-y-0.5 group-hover/glow:translate-x-0.5" />
                  </div>
                </GlowCard>
              </a>
            );
          })}
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-2xl md:p-8">
            <Meteors number={14} />
            <div className="relative">
              <h2 className="mb-1 text-lg font-semibold tracking-tight">Send a message</h2>
              <p className="mb-6 text-sm text-muted-foreground">
                Tell me about your project, timeline and goals.
              </p>
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </>
  );
}
