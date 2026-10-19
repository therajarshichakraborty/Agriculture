"use client";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { Terminal } from "lucide-react";

export default function Navbar() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-30">
      <Dock className="z-50 pointer-events-auto relative h-12 sm:h-14 p-1 sm:p-2 w-fit mx-auto flex gap-1 sm:gap-2 border bg-transparent dark:bg-transparent backdrop-blur-3xl shadow-[0_0_10px_3px] shadow-primary/5">
        {/* 🔹 MAIN NAV ITEMS */}
        {DATA.navbar.map((item) => {
          const isExternal =
            item.href.startsWith("http") || item.href.startsWith("mailto:");

          return (
            <Tooltip key={item.href}>
              <TooltipTrigger
                render={
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  />
                }
              >
                <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
                  <item.icon className="size-full rounded-sm overflow-hidden object-contain" />
                </DockIcon>
              </TooltipTrigger>

              <TooltipContent
                side="top"
                sideOffset={8}
                className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm **:data-[slot=tooltip-arrow]:bg-primary **:data-[slot=tooltip-arrow]:fill-primary shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
              >
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}

        {/* 🔹 SEARCH / COMMAND PALETTE TRIGGER */}
        <Tooltip>
          <TooltipTrigger
            onClick={() =>
              window.dispatchEvent(new CustomEvent("open-command-palette"))
            }
            className="flex items-center justify-center size-8 sm:size-10 rounded-full focus:outline-none"
          >
            <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
              <Terminal className="size-full rounded-sm overflow-hidden object-contain" />
            </DockIcon>
          </TooltipTrigger>

          <TooltipContent
            side="top"
            sideOffset={8}
            className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm **:data-[slot=tooltip-arrow]:bg-primary **:data-[slot=tooltip-arrow]:fill-primary shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
          >
            <p>Command Palette (Ctrl + K)</p>
          </TooltipContent>
        </Tooltip>

        <Separator
          orientation="vertical"
          className="h-2/3 m-auto w-px bg-border"
        />

        {/* 🔹 SOCIAL LINKS */}
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social], index) => {
            const isExternal =
              social.url.startsWith("http") || social.url.startsWith("mailto:");

            const IconComponent = social.icon;

            return (
              <Tooltip key={`social-${name}-${index}`}>
                <TooltipTrigger
                  render={
                    <a
                      href={social.url}
                      target={
                        social.url.startsWith("http") ? "_blank" : "_self"
                      }
                      rel={
                        social.url.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    />
                  }
                >
                  <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
                    <IconComponent className="size-full rounded-sm overflow-hidden object-contain" />
                  </DockIcon>
                </TooltipTrigger>

                <TooltipContent
                  side="top"
                  sideOffset={8}
                  className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm **:data-[slot=tooltip-arrow]:bg-primary **:data-[slot=tooltip-arrow]:fill-primary shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
                >
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
      </Dock>
    </div>
  );
}
