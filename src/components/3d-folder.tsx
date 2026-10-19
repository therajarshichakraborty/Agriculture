"use client";

import type React from "react";
import {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  useCallback,
  forwardRef
} from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import {
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Github
} from "lucide-react";

export interface FolderTag {
  name: string;
  icon?: React.ComponentType<any>;
}

export interface FolderLink {
  icon: React.ReactNode;
  type: string;
  href: string;
}

export interface FolderProject {
  id: string;
  image: string;
  title: string;
  href?: string;
  dates?: string;
  description?: string;
  tags?: FolderTag[];
  links?: FolderLink[];
  isBuilding?: boolean;
}

// ── AnimatedFolder ────────────────────────────────────────────────────────────

interface AnimatedFolderProps {
  title: string;
  projects: FolderProject[];
  className?: string;
}

export function AnimatedFolder({
  title,
  projects,
  className
}: AnimatedFolderProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [sourceRect, setSourceRect] = useState<DOMRect | null>(null);
  const [hiddenCardId, setHiddenCardId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleProjectClick = (project: FolderProject, index: number) => {
    const cardEl = cardRefs.current[index];
    if (cardEl) setSourceRect(cardEl.getBoundingClientRect());
    setSelectedIndex(index);
    setHiddenCardId(project.id);
  };

  const handleCloseLightbox = () => {
    setSelectedIndex(null);
    setSourceRect(null);
  };

  const handleCloseComplete = () => setHiddenCardId(null);

  const handleNavigate = (newIndex: number) => {
    setSelectedIndex(newIndex);
    setHiddenCardId(projects[newIndex]?.id || null);
  };

  // Show top 4 cards on hover
  const visibleProjects = projects.slice(0, 4);

  return (
    <div className="relative w-full max-w-md mx-auto pt-12 pb-2 px-4 flex justify-center items-center">
      {/* ── Single folder card ──────────────────────────────────────────── */}
      <div
        className={cn(
          "relative flex flex-col items-center justify-center",
          "px-12 pt-10 pb-8 rounded-2xl cursor-pointer select-none",
          "bg-transparent border-none",
          "transition-all duration-500 ease-out",
          "group",
          className
        )}
        style={{ perspective: "1200px", width: "300px" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsHovered(!isHovered)}
      >
        {/* ── Folder visual area ───────────────────────────────────────── */}
        <div
          className="relative flex items-center justify-center"
          style={{ height: "200px", width: "260px" }}
        >
          {/* macOS Folder back plate */}
          <div
            className="absolute rounded-2xl shadow-md"
            style={{
              width: "180px",
              height: "120px",
              background: "linear-gradient(to bottom, #4fa3e3, #1d76c9)",
              transformOrigin: "bottom center",
              transform: isHovered
                ? "rotateX(-18deg) scaleY(1.02)"
                : "rotateX(0deg)",
              transition: "transform 550ms cubic-bezier(0.34, 1.56, 0.64, 1)",
              zIndex: 10,
              boxShadow:
                "0 4px 10px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.3)"
            }}
          />

          {/* macOS Folder tab */}
          <div
            className="absolute"
            style={{
              width: "64px",
              height: "22px",
              background: "linear-gradient(to bottom, #4fa3e3, #3a8dcf)",
              top: "calc(50% - 60px - 22px + 8px)",
              left: "calc(50% - 90px + 14px)",
              borderRadius: "8px 8px 0 0",
              transformOrigin: "bottom center",
              transform: isHovered
                ? "rotateX(-28deg) translateY(-2px)"
                : "rotateX(0deg)",
              transition: "transform 550ms cubic-bezier(0.34, 1.56, 0.64, 1)",
              zIndex: 9,
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)"
            }}
          />

          {/* ── 4 fan-out thumbnail cards ─────────────────────────────── */}
          <div
            className="absolute"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 20
            }}
          >
            {visibleProjects.map((project, index) => (
              <ProjectThumbnail
                key={project.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                image={project.image}
                title={project.title}
                delay={index * 55}
                isVisible={isHovered}
                index={index}
                total={visibleProjects.length}
                onClick={() => handleProjectClick(project, index)}
                isSelected={hiddenCardId === project.id}
              />
            ))}
          </div>

          {/* Pocket shadow inside the folder */}
          <div
            className="absolute rounded-xl pointer-events-none"
            style={{
              width: "180px",
              height: "120px",
              top: "calc(50% - 60px + 6px)",
              background: "rgba(0, 0, 0, 0.15)",
              transformOrigin: "bottom center",
              transform: isHovered
                ? "rotateX(24deg) translateY(10px) scaleY(0.98)"
                : "rotateX(0deg)",
              transition: "transform 550ms cubic-bezier(0.34, 1.56, 0.64, 1)",
              zIndex: 29,
              filter: "blur(4px)"
            }}
          />

          {/* macOS Folder front plate */}
          <div
            className="absolute rounded-2xl shadow-lg overflow-hidden"
            style={{
              width: "180px",
              height: "120px",
              background: "linear-gradient(to bottom, #6bb3f2, #3590eb)",
              top: "calc(50% - 60px + 6px)",
              transformOrigin: "bottom center",
              transform: isHovered
                ? "rotateX(24deg) translateY(10px) scaleY(0.98)"
                : "rotateX(0deg)",
              transition: "transform 550ms cubic-bezier(0.34, 1.56, 0.64, 1)",
              zIndex: 30,
              boxShadow:
                "0 8px 24px rgba(0,0,0,0.15), inset 0 1.5px 0 rgba(255,255,255,0.4)"
            }}
          >
            {/* Stamp icon in the center of the folder front */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.18]">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 9l3 3-3 3m5 0h3"
                />
              </svg>
            </div>

            {/* Glossy light sheen */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10 pointer-events-none" />

            {/* Physical-style label badge */}
            <div className="absolute bottom-3 left-4 right-4 h-6 rounded-md bg-white/10 dark:bg-black/15 backdrop-blur-xs border border-white/20 dark:border-white/5 flex items-center px-2.5 justify-between">
              <span className="text-[9px] font-bold tracking-widest text-white/90 dark:text-white/70 uppercase">
                PROJECTS
              </span>
              <span className="text-[9px] font-bold text-white/75 dark:text-white/55">
                {projects.length}
              </span>
            </div>
          </div>
        </div>

        <h3
          className="text-base font-semibold text-foreground mt-4 transition-all duration-300"
          style={{ transform: isHovered ? "translateY(3px)" : "translateY(0)" }}
        >
          {title}
        </h3>
        <p
          className="text-xs text-muted-foreground mt-1 transition-all duration-300"
          style={{ opacity: isHovered ? 0.6 : 0.8 }}
        >
          {projects.length} projects · hover to explore
        </p>

        {/* Animated arrow hint */}
        <div
          className="mt-4 flex items-center gap-1.5 text-[11px] text-muted-foreground transition-all duration-500"
          style={{
            opacity: isHovered ? 0 : 0.5,
            transform: isHovered ? "translateY(6px)" : "translateY(0)"
          }}
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          <span>click a card to explore</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* ── Rich lightbox portal ────────────────────────────────────────── */}
      {mounted &&
        createPortal(
          <ProjectLightbox
            projects={projects}
            currentIndex={selectedIndex ?? 0}
            isOpen={selectedIndex !== null}
            onClose={handleCloseLightbox}
            sourceRect={sourceRect}
            onCloseComplete={handleCloseComplete}
            onNavigate={handleNavigate}
          />,
          document.body
        )}
    </div>
  );
}

// ── ProjectThumbnail ──────────────────────────────────────────────────────────

interface ProjectThumbnailProps {
  image: string;
  title: string;
  delay: number;
  isVisible: boolean;
  index: number;
  total: number;
  onClick: () => void;
  isSelected: boolean;
}

export const ProjectThumbnail = forwardRef<
  HTMLDivElement,
  ProjectThumbnailProps
>(
  (
    { image, title, delay, isVisible, index, total, onClick, isSelected },
    ref
  ) => {
    // Symmetrical 4 card layout:
    const rotations4 = [-24, -8, 8, 24];
    const xTranslations4 = [-105, -35, 35, 105];
    const yLift4 = [-12, -4, -4, -12];

    const rot = rotations4[index] ?? 0;
    const tx = xTranslations4[index] ?? 0;
    const ty = yLift4[index] ?? 0;

    return (
      <div
        ref={ref}
        className={cn(
          "absolute rounded-lg overflow-hidden",
          "border border-white/20 dark:border-neutral-800/80",
          "shadow-[0_12px_30px_-5px_rgba(0,0,0,0.3)] dark:shadow-[0_12px_30px_-5px_rgba(0,0,0,0.6)]",
          "cursor-pointer select-none",
          "ring-0 hover:ring-2 hover:ring-white/50 hover:scale-105 active:scale-95 transition-all duration-300",
          isSelected && "opacity-0 pointer-events-none"
        )}
        style={{
          width: "76px",
          height: "102px",
          transform: isVisible
            ? `translateY(${-105 + ty}px) translateX(${tx}px) rotate(${rot}deg) scale(1)`
            : "translateY(15px) translateX(0px) rotate(0deg) scale(0.35)",
          opacity: isSelected ? 0 : isVisible ? 1 : 0,
          transition: `transform 550ms cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms,
                       opacity 350ms ease ${delay}ms,
                       box-shadow 200ms ease`,
          zIndex: 10 - index,
          left: "-38px",
          top: "-51px",
          willChange: "transform, opacity"
        }}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          draggable={false}
        />
        {/* Subtle inner reflection sheen */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
      </div>
    );
  }
);
ProjectThumbnail.displayName = "ProjectThumbnail";

// ── ProjectLightbox ───────────────────────────────────────────────────────────

interface ProjectLightboxProps {
  projects: FolderProject[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  sourceRect: DOMRect | null;
  onCloseComplete?: () => void;
  onNavigate: (index: number) => void;
}

export function ProjectLightbox({
  projects,
  currentIndex,
  isOpen,
  onClose,
  sourceRect,
  onCloseComplete,
  onNavigate
}: ProjectLightboxProps) {
  const [animationPhase, setAnimationPhase] = useState<
    "initial" | "animating" | "complete"
  >("initial");
  const [isClosing, setIsClosing] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [internalIndex, setInternalIndex] = useState(currentIndex);
  const containerRef = useRef<HTMLDivElement>(null);

  const total = projects.length;
  const hasNext = internalIndex < total - 1;
  const hasPrev = internalIndex > 0;
  const current = projects[internalIndex];

  // ── Sync external index immediately ─────────────────────────────────────
  useEffect(() => {
    if (isOpen) {
      setInternalIndex(currentIndex);
    }
  }, [currentIndex, isOpen]);

  // ── Navigation ────────────────────────────────────────────────────────
  const navigateNext = useCallback(() => {
    if (internalIndex >= total - 1) return;
    onNavigate(internalIndex + 1);
  }, [internalIndex, total, onNavigate]);

  const navigatePrev = useCallback(() => {
    if (internalIndex <= 0) return;
    onNavigate(internalIndex - 1);
  }, [internalIndex, onNavigate]);

  // ── Close ─────────────────────────────────────────────────────────────
  const handleClose = useCallback(() => {
    setIsClosing(true);
    onClose();
    setTimeout(() => {
      setIsClosing(false);
      setShouldRender(false);
      setAnimationPhase("initial");
      onCloseComplete?.();
    }, 380);
  }, [onClose, onCloseComplete]);

  // ── Keyboard ──────────────────────────────────────────────────────────
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") navigateNext();
      if (e.key === "ArrowLeft") navigatePrev();
    };
    window.addEventListener("keydown", onKey);
    if (isOpen) document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleClose, navigateNext, navigatePrev]);

  // ── Open animation ────────────────────────────────────────────────────
  useLayoutEffect(() => {
    if (isOpen && sourceRect) {
      setShouldRender(true);
      setAnimationPhase("initial");
      setIsClosing(false);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setAnimationPhase("animating"))
      );
      const t = setTimeout(() => setAnimationPhase("complete"), 480);
      return () => clearTimeout(t);
    }
  }, [isOpen, sourceRect]);

  if (!shouldRender || !current) return null;

  // ── Compute open/close transform ──────────────────────────────────────
  const getOpenStyles = (): React.CSSProperties => {
    if (!sourceRect || animationPhase !== "initial" || isClosing) return {};
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const tw = Math.min(800, vw - 48);
    const th = Math.min(vh * 0.88, 640);
    const tx = (vw - tw) / 2;
    const ty = (vh - th) / 2;
    const sx = sourceRect.width / tw;
    const sy = sourceRect.height / th;
    const s = Math.max(sx, sy);
    const ox = sourceRect.left + sourceRect.width / 2 - (tx + tw / 2);
    const oy = sourceRect.top + sourceRect.height / 2 - (ty + th / 2);
    return { transform: `translate(${ox}px, ${oy}px) scale(${s})` };
  };

  const cardStyle: React.CSSProperties = isClosing
    ? { transform: "translate(0,0) scale(0.94)", opacity: 0 }
    : animationPhase === "initial"
      ? { ...getOpenStyles(), opacity: 1 }
      : { transform: "translate(0,0) scale(1)", opacity: 1 };

  const cardTransition =
    animationPhase === "initial" && !isClosing
      ? "none"
      : "transform 420ms cubic-bezier(0.16, 1, 0.3, 1), opacity 380ms ease-out";

  const panelVisible = animationPhase === "complete" && !isClosing;

  // Get action links for top-right placement
  const websiteUrl =
    current.href ||
    current.links?.find(
      (l) =>
        l.type.toLowerCase() === "website" || l.type.toLowerCase() === "view"
    )?.href;
  const sourceLink = current.links?.find(
    (l) =>
      l.type.toLowerCase() === "source" || l.type.toLowerCase() === "github"
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[300] flex items-center justify-center"
      onClick={handleClose}
      style={{ pointerEvents: isClosing ? "none" : "auto" }}
    >
      {/* Dynamic CSS Animation Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-in {
          animation: slideInUp 450ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
          height: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.15);
          border-radius: 9999px;
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.15);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.25);
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.25);
        }
      `
        }}
      />

      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-xl"
        style={{
          opacity:
            animationPhase === "initial" && !isClosing ? 0 : isClosing ? 0 : 1,
          transition: "opacity 400ms ease"
        }}
      />

      {/* ── Prev arrow ── */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          navigatePrev();
        }}
        disabled={!hasPrev}
        aria-label="Previous project"
        className={cn(
          "fixed left-4 md:left-8 z-[320]",
          "w-12 h-12 flex items-center justify-center",
          "rounded-full border border-border",
          "bg-background/90 backdrop-blur-md shadow-lg",
          "text-muted-foreground hover:text-foreground hover:border-neutral-400 dark:hover:border-neutral-600",
          "transition-all duration-300 hover:scale-110 active:scale-95",
          "disabled:opacity-0 disabled:pointer-events-none"
        )}
        style={{
          opacity: panelVisible && hasPrev ? 1 : 0,
          transform: panelVisible ? "translateX(0)" : "translateX(-16px)",
          transition:
            "opacity 250ms ease 180ms, transform 250ms ease 180ms, scale 200ms ease, border-color 200ms ease"
        }}
      >
        <ChevronLeft className="w-6 h-6" strokeWidth={2} />
      </button>

      {/* ── Next arrow ── */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          navigateNext();
        }}
        disabled={!hasNext}
        aria-label="Next project"
        className={cn(
          "fixed right-4 md:right-8 z-[320]",
          "w-12 h-12 flex items-center justify-center",
          "rounded-full border border-border",
          "bg-background/90 backdrop-blur-md shadow-lg",
          "text-muted-foreground hover:text-foreground hover:border-neutral-400 dark:hover:border-neutral-600",
          "transition-all duration-300 hover:scale-110 active:scale-95",
          "disabled:opacity-0 disabled:pointer-events-none"
        )}
        style={{
          opacity: panelVisible && hasNext ? 1 : 0,
          transform: panelVisible ? "translateX(0)" : "translateX(16px)",
          transition:
            "opacity 250ms ease 180ms, transform 250ms ease 180ms, scale 200ms ease, border-color 200ms ease"
        }}
      >
        <ChevronRight className="w-6 h-6" strokeWidth={2} />
      </button>

      {/* ── Modal card ── */}
      <div
        ref={containerRef}
        className="relative z-[310] w-full mx-4"
        style={{ maxWidth: "800px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            ...cardStyle,
            transition: cardTransition,
            transformOrigin: "center center"
          }}
        >
          <div
            className="relative overflow-hidden rounded-2xl bg-card shadow-2xl ring-1 ring-border/60"
            style={{
              borderRadius:
                animationPhase === "initial" && !isClosing ? "12px" : "16px",
              transition: "border-radius 480ms cubic-bezier(0.16, 1, 0.3, 1)"
            }}
          >
            {/* Frosted Close button overlaying the top-right of image */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClose();
              }}
              aria-label="Close"
              className={cn(
                "absolute top-4 right-4 z-50",
                "w-9 h-9 flex items-center justify-center",
                "rounded-full border border-white/20 bg-black/40 backdrop-blur-md",
                "text-white hover:bg-black/60",
                "transition-all duration-200 hover:scale-105 active:scale-95"
              )}
            >
              <X className="w-4 h-4" strokeWidth={2.5} />
            </button>

            {/* ── Image slider ── */}
            <div
              className="relative overflow-hidden bg-muted"
              style={{ height: "320px", maxHeight: "42vh" }}
            >
              <div
                className="flex h-full transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
                style={{
                  transform: `translateX(-${internalIndex * 100}%)`,
                  willChange: "transform"
                }}
              >
                {projects.map((p) => (
                  <div
                    key={p.id}
                    className="w-full h-full shrink-0 flex-none relative"
                  >
                    <img
                      src={p.image || "/placeholder.svg"}
                      alt={p.title}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>

              {/* Progress indicator dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                {projects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => onNavigate(idx)}
                    className={cn(
                      "rounded-full transition-all duration-350",
                      idx === internalIndex
                        ? "w-5 h-1.5 bg-white"
                        : "w-1.5 h-1.5 bg-white/40 hover:bg-white/65"
                    )}
                  />
                ))}
              </div>
            </div>

            {/* ── Details panel (transitions layout on project change) ── */}
            <div
              key={internalIndex}
              className="px-6 py-5 border-t border-border overflow-y-auto animate-slide-in bg-card custom-scrollbar"
              style={{
                maxHeight: "46vh"
              }}
            >
              {/* Title row */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    {current.href ? (
                      <a
                        href={websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-bold tracking-tight text-foreground hover:text-primary hover:underline underline-offset-4 transition-colors duration-200"
                      >
                        {current.title}
                      </a>
                    ) : (
                      <h3 className="text-xl font-bold tracking-tight text-foreground">
                        {current.title}
                      </h3>
                    )}
                    {current.isBuilding ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] tracking-widest uppercase font-bold rounded-full bg-amber-500/10 dark:bg-amber-400/15 text-amber-600 dark:text-amber-300 border border-amber-500/30 dark:border-amber-400/30 shadow-[0_0_12px_rgba(245,158,11,0.25)] select-none backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500 shadow-[0_0_8px_#f59e0b]" />
                        </span>
                        Building
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] tracking-widest uppercase font-bold rounded-full bg-lime-500/10 dark:bg-white/10 text-lime-600 dark:text-white border border-lime-500/30 dark:border-white/25 shadow-[0_0_12px_rgba(132,204,22,0.25)] dark:shadow-[0_0_12px_rgba(255,255,255,0.15)] select-none backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 dark:bg-white opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500 shadow-[0_0_8px_rgba(132,204,22,0.9)] dark:bg-white dark:shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
                        </span>
                        Live
                      </span>
                    )}
                  </div>
                  {current.dates && (
                    <time className="text-xs text-muted-foreground mt-1 block">
                      {current.dates}
                    </time>
                  )}
                </div>

                {/* Primary Action Buttons (Live Demo + Source) */}
                <div className="flex items-center gap-2 shrink-0">
                  {websiteUrl && (
                    <a
                      href={websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-semibold border border-lime-500/40 dark:border-white/25 bg-transparent text-lime-600 dark:text-white hover:bg-lime-500/10 dark:hover:bg-white/10 hover:border-lime-500/70 dark:hover:border-white/50 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] group select-none shadow-xs dark:shadow-[0_0_12px_rgba(255,255,255,0.12)]"
                    >
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 dark:bg-white opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-lime-500 shadow-[0_0_8px_rgba(132,204,22,0.9)] dark:bg-white dark:shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-lime-600 dark:text-white transition-transform duration-300 group-hover:scale-110" />
                      <span>Live Demo</span>
                      {/* @ts-ignore */}
                      <ArrowUpRight className="w-3 h-3 text-lime-600/70 dark:text-white/70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                  {sourceLink && (
                    <a
                      href={sourceLink.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-foreground bg-background hover:bg-muted border border-border transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] group select-none shadow-xs"
                    >
                      <Github className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                      <span>Source</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              {current.description && (
                <p className="text-[13px] text-muted-foreground leading-relaxed mb-4">
                  {current.description}
                </p>
              )}

              {/* Tech Badges with bg-background and grayscale-to-color logic */}
              {current.tags && current.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-2">
                  {current.tags.map((tag, i) => (
                    <div
                      key={i}
                      className="group/tag inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold border-none bg-transparent text-muted-foreground hover:text-foreground hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 hover:scale-[1.06] hover:-translate-y-0.5 select-none cursor-pointer transition-all duration-300 ease-out"
                    >
                      {tag.icon && (
                        <tag.icon className="size-4 shrink-0 grayscale opacity-80 group-hover/tag:grayscale-0 group-hover/tag:opacity-100 transition-all duration-300 group-hover/tag:rotate-12 group-hover/tag:scale-110" />
                      )}
                      <span>{tag.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
