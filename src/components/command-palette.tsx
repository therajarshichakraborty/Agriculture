"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Github,
  FileDown,
  Mail,
  BookOpen,
  FolderCode,
  Laptop,
  Command,
  ChevronRight,
  ArrowRight,
  Award
} from "lucide-react";
import { DATA } from "@/data/resume";
import { PROJECTS, type ProjectData } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ActionItem {
  id: string;
  title: string;
  description: string;
  shortcut: string;
  category: "Actions" | "Navigation";
  icon: React.ComponentType<any>;
  onTrigger: () => void;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  // Define the core actions
  const actions: ActionItem[] = [
    {
      id: "search-projects",
      title: "Search Projects",
      description: "Search and filter through portfolio projects",
      shortcut: "/",
      category: "Actions",
      icon: Search,
      onTrigger: () => {
        // Already open, focus input
        inputRef.current?.focus();
      }
    },
    {
      id: "github",
      title: "Open GitHub",
      description: "View my open source contributions on GitHub",
      shortcut: "G",
      category: "Navigation",
      icon: Github,
      onTrigger: () => {
        window.open(
          DATA.contact.social.GitHub.url,
          "_blank",
          "noopener,noreferrer"
        );
      }
    },
    {
      id: "resume",
      title: "Download Résumé",
      description: "Download my latest PDF résumé",
      shortcut: "R",
      category: "Actions",
      icon: FileDown,
      onTrigger: () => {
        const a = document.createElement("a");
        a.href = "/resume.pdf";
        a.download = "rajarshi-chakraborty-resume.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    },
    {
      id: "view-paper",
      title: "View Research Paper",
      description:
        "Read IEEE CIACON 2026 publication on fruit quality assessment (PDF)",
      shortcut: "",
      category: "Actions",
      icon: BookOpen,
      onTrigger: () => {
        window.open(
          "/pdfs/research-paper.pdf",
          "_blank",
          "noopener,noreferrer"
        );
      }
    },
    {
      id: "download-paper",
      title: "Download Research Paper",
      description: "Download IEEE CIACON 2026 research paper PDF",
      shortcut: "",
      category: "Actions",
      icon: FileDown,
      onTrigger: () => {
        const a = document.createElement("a");
        a.href = "/pdfs/research-paper.pdf";
        a.download = "research-paper.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    },
    {
      id: "ieee-paper",
      title: "IEEE Xplore Publication",
      description: "Open IEEE Xplore document (Doc #11688352)",
      shortcut: "",
      category: "Navigation",
      icon: BookOpen,
      onTrigger: () => {
        window.open(
          "https://ieeexplore.ieee.org/document/11688352",
          "_blank",
          "noopener,noreferrer"
        );
      }
    },
    {
      id: "contact",
      title: "Contact me",
      description: "Reach out via email or mail client",
      shortcut: "M",
      category: "Navigation",
      icon: Mail,
      onTrigger: () => {
        window.open(
          "https://mail.google.com/mail/?view=cm&fs=1&to=rajarshi29032005@gmail.com",
          "_blank",
          "noopener,noreferrer"
        );
      }
    },
    {
      id: "blog",
      title: "View Blogs",
      description: "Read my technical articles and blog posts on Hashnode",
      shortcut: "B",
      category: "Navigation",
      icon: BookOpen,
      onTrigger: () => {
        window.open(
          "https://hashnode.com/@Rajarshi2005",
          "_blank",
          "noopener,noreferrer"
        );
      }
    },
    {
      id: "test-scores",
      title: "View Test Scores",
      description:
        "Standardized test scores & competitive examinations (GATE-DA, CAT, GMAT, GRE, XAT, TOEFL, WBJEE)",
      shortcut: "T",
      category: "Navigation",
      icon: Award,
      onTrigger: () => {
        setIsOpen(false);
        const element = document.getElementById("test-scores");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  ];

  // Filtering actions and projects
  const filteredActions = actions.filter((action) => {
    if (action.id === "search-projects" && searchQuery) return false; // Hide "Search Projects" action once search is active
    return (
      action.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      action.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const filteredProjects = searchQuery
    ? PROJECTS.filter(
        (project) =>
          project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          project.technologies.some((tech) =>
            tech.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
      )
    : [];

  const combinedItems = [
    ...filteredActions.map((action) => ({
      type: "action" as const,
      item: action
    })),
    ...filteredProjects.map((project) => ({
      type: "project" as const,
      item: project
    }))
  ];

  const totalItemsCount = combinedItems.length;

  // Handle selected index bounds when search results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  // Focus input when palette is opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Listen for global open command event
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-command-palette", handleOpen);
    return () => window.removeEventListener("open-command-palette", handleOpen);
  }, []);

  // Keyboard layout shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeEl = document.activeElement;
      const isInput =
        activeEl &&
        (activeEl.tagName === "INPUT" ||
          activeEl.tagName === "TEXTAREA" ||
          activeEl.getAttribute("contenteditable") === "true");

      console.log("CommandPalette: Keydown detected:", {
        key: e.key,
        code: e.code,
        ctrlKey: e.ctrlKey,
        metaKey: e.metaKey,
        isInput,
        isOpen
      });

      // Ctrl + K or Cmd + K toggles the palette
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        console.log("CommandPalette: Match Ctrl+K, toggling open state.");
        e.preventDefault();
        setIsOpen((prev) => !prev);
        return;
      }

      if (isOpen) {
        if (e.key === "Escape") {
          e.preventDefault();
          setIsOpen(false);
          setSearchQuery("");
        } else if (e.key === "ArrowDown") {
          e.preventDefault();
          setSelectedIndex((prev) =>
            totalItemsCount > 0 ? (prev + 1) % totalItemsCount : 0
          );
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          setSelectedIndex((prev) =>
            totalItemsCount > 0
              ? (prev - 1 + totalItemsCount) % totalItemsCount
              : 0
          );
        } else if (e.key === "Enter") {
          e.preventDefault();
          triggerItem(selectedIndex);
        }
        return;
      }

      // Global single-key shortcuts when closed and NOT typing in input
      if (!isInput && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const key = e.key.toLowerCase();
        console.log(
          "CommandPalette: Processing global single-key shortcut:",
          key
        );
        if (key === "g") {
          e.preventDefault();
          window.open(
            DATA.contact.social.GitHub.url,
            "_blank",
            "noopener,noreferrer"
          );
        } else if (key === "r") {
          e.preventDefault();
          const a = document.createElement("a");
          a.href = "/resume.pdf";
          a.download = "rajarshi-chakraborty-resume.pdf";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        } else if (key === "b") {
          e.preventDefault();
          window.open(
            "https://hashnode.com/@Rajarshi2005",
            "_blank",
            "noopener,noreferrer"
          );
        } else if (key === "p") {
          e.preventDefault();
          router.push("/projects");
        } else if (key === "m") {
          e.preventDefault();
          window.open(
            "https://mail.google.com/mail/?view=cm&fs=1&to=rajarshi29032005@gmail.com",
            "_blank",
            "noopener,noreferrer"
          );
        } else if (key === "/") {
          console.log("CommandPalette: Match Slash, opening palette.");
          e.preventDefault();
          setIsOpen(true);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, totalItemsCount, selectedIndex, router]);

  // Scroll active item into view
  useEffect(() => {
    if (!listRef.current) return;
    const activeItem = listRef.current.querySelector("[data-active='true']");
    if (activeItem) {
      activeItem.scrollIntoView({ block: "nearest" });
    }
  }, [selectedIndex]);

  const triggerItem = (index: number) => {
    const selected = combinedItems[index];
    if (!selected) return;

    if (selected.type === "action") {
      selected.item.onTrigger();
    } else if (selected.type === "project") {
      const link = selected.item.links?.find((l) => l.href)?.href;
      if (link) {
        window.open(link, "_blank", "noopener,noreferrer");
      } else {
        router.push("/projects");
      }
    }
    setIsOpen(false);
    setSearchQuery("");
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4"
      onClick={() => {
        setIsOpen(false);
        setSearchQuery("");
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/40 dark:bg-black/60 backdrop-blur-md transition-opacity duration-300" />

      {/* Dialog box */}
      <div
        className={cn(
          "relative w-full max-w-xl overflow-hidden rounded-2xl border border-border/60",
          "bg-card/90 dark:bg-card/80 backdrop-blur-2xl shadow-2xl",
          "transition-all duration-300 animate-in fade-in-0 zoom-in-95"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search header */}
        <div className="relative flex items-center border-b border-border/50">
          <Search className="absolute left-4 size-4 text-muted-foreground" />
          <input
            ref={inputRef}
            type="text"
            className="w-full bg-transparent py-4 pl-12 pr-16 text-sm text-foreground placeholder-muted-foreground outline-none"
            placeholder="Type a command or search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute right-4 flex items-center gap-1">
            <kbd className="inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted/50 px-1.5 font-mono text-[10px] font-medium text-muted-foreground shadow-sm">
              ESC
            </kbd>
          </div>
        </div>

        {/* Scrollable list */}
        <div
          ref={listRef}
          className="max-h-[350px] overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-muted-foreground/20"
        >
          {totalItemsCount === 0 ? (
            <div className="py-6 text-center text-sm text-muted-foreground">
              No results found for &ldquo;{searchQuery}&rdquo;
            </div>
          ) : (
            <div className="space-y-1.5">
              {/* Actions group */}
              {filteredActions.length > 0 && (
                <div>
                  <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60">
                    Commands
                  </div>
                  {combinedItems
                    .map((item, index) => ({ item, index }))
                    .filter(({ item }) => item.type === "action")
                    .map(({ item, index }) => {
                      const action = item.item as ActionItem;
                      const Icon = action.icon;
                      const isActive = index === selectedIndex;
                      return (
                        <button
                          key={action.id}
                          data-active={isActive}
                          className={cn(
                            "w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-all duration-200 outline-none",
                            isActive
                              ? "bg-primary/10 dark:bg-primary/20 text-foreground"
                              : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                          )}
                          onClick={() => triggerItem(index)}
                          onMouseEnter={() => setSelectedIndex(index)}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={cn(
                                "flex size-8 items-center justify-center rounded-lg border border-border/40 transition-colors",
                                isActive
                                  ? "bg-background text-primary"
                                  : "bg-muted/30"
                              )}
                            >
                              <Icon className="size-4" />
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-foreground">
                                {action.title}
                              </div>
                              <div className="text-[11px] text-muted-foreground line-clamp-1">
                                {action.description}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <kbd className="inline-flex h-5 select-none items-center gap-1 rounded border border-border/50 bg-background/50 px-1.5 font-mono text-[9px] font-medium text-muted-foreground/80 shadow-xs">
                              {action.shortcut}
                            </kbd>
                          </div>
                        </button>
                      );
                    })}
                </div>
              )}

              {/* Projects group */}
              {filteredProjects.length > 0 && (
                <div className="pt-2">
                  <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60">
                    Projects
                  </div>
                  {combinedItems
                    .map((item, index) => ({ item, index }))
                    .filter(({ item }) => item.type === "project")
                    .map(({ item, index }) => {
                      const project = item.item as ProjectData;
                      const isActive = index === selectedIndex;
                      return (
                        <button
                          key={project.title}
                          data-active={isActive}
                          className={cn(
                            "w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-all duration-200 outline-none",
                            isActive
                              ? "bg-primary/10 dark:bg-primary/20 text-foreground"
                              : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                          )}
                          onClick={() => triggerItem(index)}
                          onMouseEnter={() => setSelectedIndex(index)}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={cn(
                                "flex size-8 items-center justify-center rounded-lg border border-border/40 transition-colors",
                                isActive
                                  ? "bg-background text-primary"
                                  : "bg-muted/30"
                              )}
                            >
                              <FolderCode className="size-4" />
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-foreground">
                                {project.title}
                              </div>
                              <div className="text-[11px] text-muted-foreground line-clamp-1">
                                {project.description}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                            {isActive && (
                              <span className="flex items-center gap-0.5 animate-pulse text-primary font-medium">
                                Open <ArrowRight className="size-3" />
                              </span>
                            )}
                          </div>
                        </button>
                      );
                    })}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between border-t border-border/40 bg-muted/20 px-4 py-2.5 text-[10px] text-muted-foreground select-none">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="font-mono bg-muted border border-border/60 rounded px-1">
                ↑↓
              </kbd>{" "}
              to navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="font-mono bg-muted border border-border/60 rounded px-1">
                ↵
              </kbd>{" "}
              to select
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Command className="size-3" />
            <span>Search or command shortcuts</span>
          </div>
        </div>
      </div>
    </div>
  );
}
