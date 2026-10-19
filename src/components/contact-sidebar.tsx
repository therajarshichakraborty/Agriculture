"use client";

import React, { useState } from "react";
import {
  Phone,
  Github,
  User,
  Copy,
  Check,
  Mail,
  Linkedin,
  MessageCircle
} from "lucide-react";
import { Icons } from "@/components/icons";

export default function ContactSidebar() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="flex flex-col gap-5 w-full text-foreground select-none mt-0">
      {/* Header matching MyJourney style */}
      <div className="flex flex-col gap-1 pl-2 pb-3 border-b border-neutral-200 dark:border-neutral-800/60">
        <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
          Contact Me
        </h2>
        <p className="text-[10px] text-muted-foreground/60 tracking-normal">
          Get in touch or check socials
        </p>
      </div>

      {/* Info List */}
      <div className="flex flex-col gap-3 w-full px-1">
        {/* Name */}
        <div className="group flex items-center gap-3 p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800/60 bg-card/20 transition-all duration-300 hover:bg-card/45 hover:border-neutral-300 dark:hover:border-neutral-800 hover:translate-x-1 hover:shadow-2xs">
          <div className="h-7 w-7 rounded-lg border border-neutral-200 dark:border-neutral-800/60 bg-background flex items-center justify-center text-muted-foreground/60 transition-colors group-hover:border-primary/20 dark:group-hover:border-white/10">
            <User className="h-4 w-4 stroke-[1.8] text-foreground group-hover:scale-110 transition-transform duration-300" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[9px] uppercase tracking-wider text-muted-foreground/60 font-bold">
              Name
            </span>
            <span className="text-[11px] font-semibold text-foreground leading-tight">
              Rajarshi Chakraborty
            </span>
          </div>
        </div>

        {/* Email 1 */}
        <div className="group/email group relative flex flex-col p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800/60 bg-card/20 transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-card/45 hover:translate-x-1 hover:shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-lg border border-neutral-200 dark:border-neutral-800/60 bg-background flex items-center justify-center text-muted-foreground/60 transition-colors group-hover:border-primary/20 dark:group-hover:border-white/10">
              <Mail className="h-4 w-4 stroke-[1.8] text-foreground group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
            </div>
            <div className="flex flex-col text-left flex-1 min-w-0">
              <span className="text-[9px] uppercase tracking-wider text-muted-foreground/60 font-bold">
                Primary Email
              </span>
              <a
                href="mailto:rajarshichakraborty2005@gmail.com"
                className="text-[11px] font-semibold text-foreground truncate hover:text-primary transition-colors leading-tight block"
              >
                rajarshichakraborty2005@gmail.com
              </a>
            </div>
          </div>
          {/* Copy Button */}
          <button
            onClick={() =>
              copyToClipboard("rajarshichakraborty2005@gmail.com", "primary")
            }
            className="absolute right-2.5 top-2.5 opacity-0 group-hover/email:opacity-100 p-1 rounded-md hover:bg-muted text-muted-foreground hover:scale-110 transition-all duration-250 cursor-pointer"
            title="Copy Email"
          >
            {copiedText === "primary" ? (
              <Check className="h-3 w-3 text-emerald-500" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
          </button>
        </div>

        {/* Email 2 */}
        <div className="group/email2 group relative flex flex-col p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800/60 bg-card/20 transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-card/45 hover:translate-x-1 hover:shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-lg border border-neutral-200 dark:border-neutral-800/60 bg-background flex items-center justify-center text-muted-foreground/60 transition-colors group-hover:border-primary/20 dark:group-hover:border-white/10">
              <Mail className="h-4 w-4 stroke-[1.8] text-foreground group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300" />
            </div>
            <div className="flex flex-col text-left flex-1 min-w-0">
              <span className="text-[9px] uppercase tracking-wider text-muted-foreground/60 font-bold">
                Secondary Email
              </span>
              <a
                href="mailto:rajarshi29032005@gmail.com"
                className="text-[11px] font-semibold text-foreground truncate hover:text-primary transition-colors leading-tight block"
              >
                rajarshi29032005@gmail.com
              </a>
            </div>
          </div>
          {/* Copy Button */}
          <button
            onClick={() =>
              copyToClipboard("rajarshi29032005@gmail.com", "secondary")
            }
            className="absolute right-2.5 top-2.5 opacity-0 group-hover/email2:opacity-100 p-1 rounded-md hover:bg-muted text-muted-foreground hover:scale-110 transition-all duration-250 cursor-pointer"
            title="Copy Email"
          >
            {copiedText === "secondary" ? (
              <Check className="h-3 w-3 text-emerald-500" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
          </button>
        </div>

        {/* Phone / WhatsApp */}
        <div className="group flex items-center gap-3 p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800/60 bg-card/20 transition-all duration-300 hover:bg-card/45 hover:border-neutral-300 dark:hover:border-neutral-800 hover:translate-x-1 hover:shadow-2xs">
          <div className="h-7 w-7 rounded-lg border border-neutral-200 dark:border-neutral-800/60 bg-background flex items-center justify-center text-muted-foreground/60 transition-colors group-hover:border-primary/20 dark:group-hover:border-white/10">
            <MessageCircle className="h-4 w-4 stroke-[1.8] text-foreground group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300" />
          </div>
          <div className="flex flex-col text-left flex-1">
            <span className="text-[9px] uppercase tracking-wider text-muted-foreground/60 font-bold">
              Phone & WhatsApp
            </span>
            <a
              href="https://wa.me/918001950250"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-semibold text-foreground hover:text-primary transition-colors leading-tight block text-left"
            >
              +91 8001950250
            </a>
          </div>
        </div>

        {/* Socials Grid */}
        <div className="flex flex-col gap-2 mt-1">
          <span className="text-[9px] uppercase tracking-wider text-muted-foreground/60 font-bold block pl-1 text-left">
            Social Channels
          </span>
          <div className="grid grid-cols-4 gap-2">
            <a
              href="https://github.com/therajarshichakraborty"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-2 rounded-xl bg-card/20 transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700 hover:text-primary hover:bg-card/45 group cursor-pointer hover:-translate-y-1 hover:shadow-xs"
              title="GitHub"
            >
              <div className="h-7 w-7 rounded-full bg-neutral-100 dark:bg-neutral-800/50 flex items-center justify-center transition-colors group-hover:bg-primary/5 dark:group-hover:bg-white/5">
                <Github className="h-4 w-4 stroke-[1.8] text-foreground group-hover:text-primary dark:group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 fill-current" />
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/rajarshi-c-06a3402b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-2 rounded-xl bg-card/20 transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700 hover:text-primary hover:bg-card/45 group cursor-pointer hover:-translate-y-1 hover:shadow-xs"
              title="LinkedIn"
            >
              <div className="h-7 w-7 rounded-full bg-neutral-100 dark:bg-neutral-800/50 flex items-center justify-center transition-colors group-hover:bg-primary/5 dark:group-hover:bg-white/5">
                <Linkedin className="h-4 w-4 stroke-[1.8] text-foreground group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 fill-current" />
              </div>
            </a>

            <a
              href="https://x.com/IamRajarshi_Dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-2 rounded-xl bg-card/20 transition-all duration-300 hover:text-primary hover:bg-card/45 group cursor-pointer hover:-translate-y-1 hover:shadow-xs"
              title="X (Twitter)"
            >
              <div className="h-7 w-7 rounded-full bg-neutral-100 dark:bg-neutral-800/50 flex items-center justify-center transition-colors group-hover:bg-primary/5 dark:group-hover:bg-white/5">
                <Icons.x className="size-3.5 text-foreground group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 fill-current" />
              </div>
            </a>

            <a
              href="https://wa.me/918001950250"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-2 rounded-xl bg-card/20 transition-all duration-300 hover:text-primary hover:bg-card/45 group cursor-pointer hover:-translate-y-1 hover:shadow-xs"
              title="WhatsApp"
            >
              <div className="h-7 w-7 rounded-full bg-neutral-100 dark:bg-neutral-800/50 flex items-center justify-center transition-colors group-hover:bg-primary/5 dark:group-hover:bg-white/5">
                <Icons.whatsapp className="size-4 text-foreground group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
