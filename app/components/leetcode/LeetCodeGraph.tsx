"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphLegend
} from "@/components/kibo-ui/contribution-graph";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { LeetCode } from "@/components/ui/svgs/leetcode";
import { Marquee } from "@/components/ui/marquee";
import {
  Award,
  Trophy,
  Zap,
  TrendingUp,
  Users,
  ExternalLink,
  Code2,
  ChevronDown,
  Flame,
  CalendarDays
} from "lucide-react";

/* ─────────────────────────────────────────── types ── */

type Activity = {
  date: string;
  count: number;
  value: number;
  level: number;
};

type LeetCodeBadge = {
  id: string;
  displayName: string;
  icon: string;
  creationDate: string;
};

type Submissions = {
  id?: string;
  title: string;
  titleSlug: string;
  timestamp: number | string;
  statusDisplay: string;
};

type LeetCodeData = {
  calendar: Record<string, number>;
  activeYears: number[];
  totalActiveDays: number;
  streak: number;
  badgesCount: number;
  badges: LeetCodeBadge[];
  mostRecentBadge: {
    displayName: string;
    icon: string;
    creationDate: string;
  } | null;
  contestTopPercentage: number | null;
  contestRating: number | null;
  contestGlobalRanking: number | null;
  totalParticipants: number | null;
  contestAttend: number | null;
  submissions?: Array<Submissions>;
  sublissionsList?: Array<Submissions>;
};

function formatRelativeTime(timestamp: number | string): string {
  if (!timestamp) return "";
  let ts = typeof timestamp === "string" ? parseInt(timestamp, 10) : timestamp;
  if (isNaN(ts)) return "";
  if (ts < 1e11) ts *= 1000;

  const now = Date.now();
  const diffMs = Math.max(0, now - ts);
  const diffMins = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 3600));
  const diffDays = Math.floor(diffMs / (1000 * 3600 * 24));

  if (diffMins < 1) return "just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  return `${diffDays}d ago`;
}

function calendarToActivities(calendar: Record<string, number>): {
  activities: Activity[];
  total: number;
} {
  let total = 0;
  const activities: Activity[] = Object.entries(calendar).map(([ts, count]) => {
    const c = Number(count) || 0;
    total += c;
    const date = new Date(Number(ts) * 1000).toISOString().split("T")[0];
    let level = 0;
    if (c > 0 && c < 2) level = 1;
    else if (c < 4) level = 2;
    else if (c < 7) level = 3;
    else if (c >= 7) level = 4;
    return { date, count: c, value: c, level };
  });
  return { activities, total };
}

function BadgeCard({
  badge,
  isMostRecent
}: {
  badge: LeetCodeBadge;
  isMostRecent?: boolean;
}) {
  const formattedDate = badge.creationDate
    ? new Date(badge.creationDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      })
    : null;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          render={<div />}
          className={`
            relative flex flex-col items-center gap-2 p-3 rounded-xl
            border transition-all duration-300 cursor-pointer group
            hover:scale-105 hover:shadow-lg
            ${
              isMostRecent
                ? "border-amber-500/40 bg-amber-500/5 hover:border-amber-500/60 hover:bg-amber-500/10 hover:shadow-amber-500/10"
                : "border-border bg-muted/20 hover:border-violet-500/30 hover:bg-violet-500/5 hover:shadow-violet-500/10"
            }
          `}
        >
          {isMostRecent && (
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 bg-amber-500/90 text-white text-[9px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap shadow-sm">
              <Zap className="size-2.5" />
              Most Recent
            </span>
          )}
          <div
            className={`
            size-14 flex items-center justify-center rounded-xl overflow-hidden
            ${isMostRecent ? "ring-2 ring-amber-500/50 ring-offset-1 ring-offset-background" : ""}
          `}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={badge.icon}
              alt={badge.displayName}
              className="size-12 object-contain drop-shadow-md group-hover:drop-shadow-lg transition-all duration-300"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
          <p className="text-[10px] font-medium text-center text-muted-foreground leading-tight max-w-[80px] line-clamp-2">
            {badge.displayName}
          </p>
        </TooltipTrigger>
        <TooltipContent
          side="top"
          className="text-xs max-w-[180px] text-center"
        >
          <p className="font-semibold">{badge.displayName}</p>
          {formattedDate && (
            <p className="text-muted-foreground mt-0.5">
              Earned {formattedDate}
            </p>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

function StatsBar({
  topPercentage,
  rating,
  globalRanking,
  totalParticipants,
  contestAttend,
  badgesCount,
  loading
}: {
  topPercentage: number | null;
  rating: number | null;
  globalRanking: number | null;
  totalParticipants: number | null;
  contestAttend: number | null;
  badgesCount: number;
  loading: boolean;
}) {
  const pct = topPercentage !== null ? topPercentage.toFixed(2) : null;

  const stats = [
    {
      icon: <Award className="size-4 text-amber-500 fill-amber-500" />,
      label: "Badges",
      value: badgesCount > 0 ? badgesCount.toString() : "—",
      sub: "",
      accent: "via-amber-500"
    },
    {
      icon: <TrendingUp className="size-4 text-orange-400 fill-orange-400" />,
      label: "Top",
      value: pct !== null ? `${pct}%` : "—",
      sub: "",
      accent: "via-orange-400"
    },
    {
      icon: <Trophy className="size-4 text-violet-500 fill-violet-500" />,
      label: "Contest Rating",
      value: rating !== null ? Math.round(rating).toLocaleString() : "—",
      sub: "",
      accent: "via-violet-500"
    },
    {
      icon: <Users className="size-4 text-blue-400 fill-blue-400" />,
      label: "Global Rank",
      value: globalRanking !== null ? globalRanking.toLocaleString() : "—",
      sub: "",
      accent: "via-blue-400"
    },
    {
      icon: (
        <Zap className="size-5 text-amber-400 dark:text-zinc-200 fill-amber-400 dark:fill-zinc-200" />
      ),
      label: "Attended",
      value: contestAttend !== null ? contestAttend.toString() : "—",
      sub: "",
      accent: "via-amber-400 dark:via-zinc-300"
    }
  ];

  return (
    <div className="grid grid-cols-5 gap-1 sm:gap-3 mb-4">
      {stats.map(({ icon, label, value, sub, accent }) => (
        <div
          key={label}
          className="relative rounded-xl bg-transparent px-0.5 sm:px-1.5 py-2 sm:py-3.5 flex flex-col items-center gap-0.5 sm:gap-1 overflow-hidden hover:shadow-md transition-all duration-300"
        >
          <div
            className={`absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent ${accent} to-transparent`}
          />
          <div className="flex items-center gap-1 sm:gap-1.5">
            <span className="[&>svg]:size-3 sm:[&>svg]:size-4">{icon}</span>
            <span className="text-[8px] sm:text-[10px] font-medium text-muted-foreground uppercase tracking-tight sm:tracking-wider text-center truncate">
              {label}
            </span>
          </div>
          <div className="flex items-baseline justify-center gap-0.5">
            {loading ? (
              <span className="inline-block w-8 sm:w-10 h-5 sm:h-6 bg-muted/40 animate-pulse rounded" />
            ) : (
              <span className="text-xs sm:text-xl font-bold text-foreground tabular-nums truncate">
                {value}
              </span>
            )}
            <span className="text-[9px] sm:text-[10px] text-muted-foreground">
              {sub}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function RecentSubmissionsCard({
  submissions,
  loading
}: {
  submissions: Submissions[];
  loading: boolean;
}) {
  const displaySubmissions = submissions.slice(0, 20);

  return (
    <div className="relative flex flex-col w-full rounded-xl bg-transparent text-card-foreground px-0 py-2 my-4 transition-all duration-300 dark:bg-transparent">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 select-none shrink-0">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <LeetCode />
            <h3 className="text-sm font-semibold tracking-tight text-foreground">
              LeetCode Activity
            </h3>
            <span className="inline-flex items-center gap-1.5 bg-transparent text-lime-600 dark:text-white border border-lime-500/25 dark:border-white/20 dark:bg-white/10 text-[10px] font-bold px-2 py-0.5 rounded-full">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 dark:bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-lime-500 dark:bg-white dark:shadow-[0_0_6px_rgba(255,255,255,0.9)]"></span>
              </span>
              Live
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            Checkout my latest solved problems
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="gap-1.5 bg-background text-foreground border border-input transition-all duration-300 ease-out hover:scale-[1.04] hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/5 dark:hover:shadow-white/5 active:scale-[0.98] shrink-0"
          nativeButton={false}
          render={
            <a
              href="https://leetcode.com/u/rajarshi_2005/"
              target="_blank"
              rel="noopener noreferrer"
            />
          }
        >
          <span>View Profile</span>
          <ExternalLink className="size-3" />
        </Button>
      </div>

      {/* Content / Marquee Area */}
      <div
        className="flex-1 min-w-0 h-[220px] relative overflow-hidden flex items-center"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)"
        }}
      >
        {loading ? (
          <div className="w-full space-y-3 py-2 animate-pulse">
            <div className="flex items-center gap-3 px-2">
              <div className="size-3.5 bg-neutral-200 dark:bg-neutral-800 rounded-full shrink-0" />
              <div className="h-3.5 bg-neutral-200 dark:bg-neutral-800 rounded-md w-1/3" />
            </div>
            <div className="flex items-center gap-3 px-2">
              <div className="size-3.5 bg-neutral-200 dark:bg-neutral-800 rounded-full shrink-0" />
              <div className="h-3.5 bg-neutral-200 dark:bg-neutral-800 rounded-md w-1/2" />
            </div>
          </div>
        ) : displaySubmissions.length === 0 ? (
          <div className="text-[13px] text-muted-foreground w-full py-4 text-center">
            No recent submissions found.
          </div>
        ) : (
          <Marquee
            vertical
            pauseOnHover
            className="[--duration:10s] [--gap:0.75rem] h-[220px] w-full"
            repeat={6}
          >
            {displaySubmissions.map((sub, idx) => {
              const submissionUrl = sub.id
                ? `https://leetcode.com/submissions/detail/${sub.id}/`
                : sub.titleSlug
                  ? `https://leetcode.com/problems/${sub.titleSlug}/`
                  : "https://leetcode.com/u/rajarshi_2005/";

              return (
                <a
                  key={`${sub.id || sub.title}-${sub.timestamp}-${idx}`}
                  href={submissionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 py-1.5 transition-all duration-300 ease-out cursor-pointer w-full min-w-0 justify-start hover:bg-neutral-100/60 dark:hover:bg-neutral-800/30 rounded-lg px-2.5"
                >
                  <Code2 className="size-4 text-muted-foreground group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-300 ease-out shrink-0" />
                  <div className="flex items-center justify-between min-w-0 flex-1 gap-4">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-[13px] font-medium text-muted-foreground transition-colors duration-300 ease-out truncate group-hover:text-black dark:group-hover:text-white">
                        {sub.title}
                      </span>
                    </div>
                    {sub.timestamp && (
                      <span className="text-[10px] text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 ease-out shrink-0 hidden sm:inline">
                        {formatRelativeTime(sub.timestamp)}
                      </span>
                    )}
                  </div>
                </a>
              );
            })}
          </Marquee>
        )}
      </div>
    </div>
  );
}

type YearOption = number | "current";

function YearSelector({
  activeYears,
  selected,
  onChange,
  loading
}: {
  activeYears: number[];
  selected: YearOption;
  onChange: (y: YearOption) => void;
  loading: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const options: YearOption[] = [
    "current",
    ...activeYears.slice().sort((a, b) => b - a)
  ];
  const label = selected === "current" ? "Current" : String(selected);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        disabled={loading || activeYears.length === 0}
        className={`
          inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold
          border transition-all duration-200 select-none
          ${
            open
              ? "border-violet-500/60 bg-violet-500/10 text-violet-400"
              : "border-border bg-muted/30 text-foreground hover:border-violet-500/40 hover:bg-violet-500/5"
          }
          disabled:opacity-40 disabled:cursor-not-allowed
        `}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {loading ? (
          <span className="inline-block w-12 h-3 bg-muted/60 animate-pulse rounded" />
        ) : (
          <>
            {label}
            <ChevronDown
              className={`size-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            />
          </>
        )}
      </button>

      {open && (
        <div
          className={`
            absolute right-0 top-full mt-1.5 z-50
            min-w-[110px] rounded-xl border border-border
            bg-background/95 backdrop-blur-md shadow-xl
            overflow-hidden
            animate-in fade-in-0 zoom-in-95 duration-150
          `}
          role="listbox"
        >
          {options.map((opt) => {
            const isSelected = opt === selected;
            const optLabel = opt === "current" ? "Current" : String(opt);
            return (
              <button
                key={optLabel}
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className={`
                  w-full flex items-center justify-between gap-3 px-3 py-2 text-xs
                  transition-colors duration-150 text-left
                  ${
                    isSelected
                      ? "bg-violet-500/10 text-violet-400 font-semibold"
                      : "text-foreground hover:bg-muted/50"
                  }
                `}
              >
                {optLabel}
                {isSelected && (
                  <span className="size-1.5 rounded-full bg-violet-400 shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────── Main component ── */

export default function LeetCodeGraph() {
  /* ── Graph / calendar state ── */
  const [data, setData] = useState<Activity[]>([]);
  const [total, setTotal] = useState(0);
  const [totalActiveDays, setTotalActiveDays] = useState(0);
  const [streak, setStreak] = useState(0);
  const [activeYears, setActiveYears] = useState<number[]>([]);
  const [selectedYear, setSelectedYear] = useState<YearOption>("current");
  const [graphVisible, setGraphVisible] = useState(true);
  const [graphLoading, setGraphLoading] = useState(false);

  /* ── Full-page loading ── */
  const [loading, setLoading] = useState(true);

  /* ── Badge / contest / submissions state ── */
  const [badgesCount, setBadgesCount] = useState<number>(0);
  const [badges, setBadges] = useState<LeetCodeBadge[]>([]);
  const [mostRecentBadge, setMostRecentBadge] = useState<LeetCodeBadge | null>(
    null
  );
  const [contestTopPercentage, setContestTopPercentage] = useState<
    number | null
  >(null);
  const [contestRating, setContestRating] = useState<number | null>(null);
  const [contestGlobalRanking, setContestGlobalRanking] = useState<
    number | null
  >(null);
  const [totalParticipants, setTotalParticipants] = useState<number | null>(
    null
  );
  const [contestAttend, setContestAttend] = useState<number | null>(null);
  const [submissions, setSubmissions] = useState<Array<Submissions>>([]);

  /* ── Initial fetch (no year = "current") ── */
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/leetcode");
        const json: LeetCodeData = await res.json();

        const calendar =
          typeof json.calendar === "string"
            ? JSON.parse(json.calendar)
            : (json.calendar ?? {});

        const { activities, total: t } = calendarToActivities(calendar);
        setData(activities);
        setTotal(t);
        setTotalActiveDays(json.totalActiveDays ?? 0);
        setStreak(json.streak ?? 0);
        setActiveYears(json.activeYears ?? []);

        setBadgesCount(json.badgesCount ?? 0);
        setBadges(json.badges ?? []);
        if (json.mostRecentBadge) {
          const recentFull = (json.badges ?? []).find(
            (b) => b.displayName === json.mostRecentBadge!.displayName
          );
          setMostRecentBadge(recentFull ?? null);
        }

        setContestTopPercentage(json.contestTopPercentage ?? null);
        setContestRating(json.contestRating ?? null);
        setContestGlobalRanking(json.contestGlobalRanking ?? null);
        setTotalParticipants(json.totalParticipants ?? null);
        setContestAttend(json.contestAttend ?? null);
        setSubmissions(json.submissions || json.sublissionsList || []);
      } catch (err) {
        console.error("Failed to fetch LeetCode data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  /* ── Year change: re-fetch only the calendar ── */
  const handleYearChange = async (year: YearOption) => {
    if (year === selectedYear) return;
    setSelectedYear(year);

    // Fade out → fetch → fade in
    setGraphVisible(false);
    setGraphLoading(true);

    try {
      const url =
        year === "current" ? "/api/leetcode" : `/api/leetcode?year=${year}`;
      const res = await fetch(url);
      const json: LeetCodeData = await res.json();

      const calendar =
        typeof json.calendar === "string"
          ? JSON.parse(json.calendar)
          : (json.calendar ?? {});

      const { activities, total: t } = calendarToActivities(calendar);
      setData(activities);
      setTotal(t);
      setTotalActiveDays(json.totalActiveDays ?? 0);
      setStreak(json.streak ?? 0);
    } catch (err) {
      console.error("Failed to fetch calendar for year", year, err);
    } finally {
      setGraphLoading(false);
      // Small delay so React paints the new data before fading back in
      setTimeout(() => setGraphVisible(true), 50);
    }
  };

  /* ── Badge display logic ── */
  const featuredBadgeNames = new Set<string>();
  const featuredBadges: LeetCodeBadge[] = [];

  if (mostRecentBadge && !featuredBadgeNames.has(mostRecentBadge.id)) {
    featuredBadgeNames.add(mostRecentBadge.id);
    featuredBadges.push(mostRecentBadge);
  }
  for (const b of badges) {
    if (featuredBadges.length >= 4) break;
    if (!featuredBadgeNames.has(b.id)) {
      featuredBadgeNames.add(b.id);
      featuredBadges.push(b);
    }
  }
  const remainingBadges = badges.filter((b) => !featuredBadgeNames.has(b.id));

  /* ── Render ── */
  return (
    <>
      <div className="w-full mt-6">
        <StatsBar
          topPercentage={contestTopPercentage}
          rating={contestRating}
          globalRanking={contestGlobalRanking}
          totalParticipants={totalParticipants}
          contestAttend={contestAttend}
          badgesCount={badgesCount}
          loading={loading}
        />

        <RecentSubmissionsCard submissions={submissions} loading={loading} />

        {/* ── Contribution Graph ── */}
        <div className="w-full overflow-x-auto custom-scrollbar pb-2">
          <TooltipProvider>
            {/* Graph header row — mirrors LeetCode's layout */}
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 mb-3">
              {/* Left: submission count + active days + streak */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                {loading || graphLoading ? (
                  <span className="inline-block w-40 h-4 bg-muted/40 animate-pulse rounded" />
                ) : (
                  <>
                    <span>
                      <span className="font-semibold text-foreground">
                        {total.toLocaleString()}
                      </span>{" "}
                      submissions
                      {selectedYear === "current"
                        ? " in the past one year"
                        : ` in ${selectedYear}`}
                    </span>
                    {totalActiveDays > 0 && (
                      <span className="flex items-center gap-1">
                        <CalendarDays className="size-3 text-violet-400" />
                        <span className="font-semibold text-foreground">
                          {totalActiveDays}
                        </span>{" "}
                        active days
                      </span>
                    )}
                    {streak > 0 && (
                      <span className="flex items-center gap-1">
                        <Flame className="size-3 text-orange-400" />
                        Max streak:{" "}
                        <span className="font-semibold text-foreground">
                          {streak}
                        </span>
                      </span>
                    )}
                  </>
                )}
              </div>

              {/* Right: Year selector */}
              <YearSelector
                activeYears={activeYears}
                selected={selectedYear}
                onChange={handleYearChange}
                loading={loading}
              />
            </div>

            {/* Heatmap — fades when switching year */}
            <div
              style={{
                opacity: graphVisible ? 1 : 0,
                transition: "opacity 0.3s ease"
              }}
            >
              <ContributionGraph
                data={data}
                theme="purple"
                className="transition-[background-color,color,border-color,fill,stroke] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
              >
                <ContributionGraphCalendar>
                  {({ activity, dayIndex, weekIndex }) => (
                    <ContributionGraphBlock
                      activity={activity}
                      dayIndex={dayIndex}
                      weekIndex={weekIndex}
                    >
                      <title className="z-50 rounded-xl border border-neutral-700 bg-neutral-900 px-3 py-2 text-xs shadow-xl backdrop-blur-md">
                        {`📅 ${activity.date}\n🔥 ${activity.count ?? 0} submissions`}
                      </title>
                    </ContributionGraphBlock>
                  )}
                </ContributionGraphCalendar>

                <div className="flex flex-row-reverse items-center justify-between w-full mt-1.5">
                  <ContributionGraphLegend />
                  <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                    Total:
                    <Badge variant="outline">
                      {loading || graphLoading ? "—" : total.toLocaleString()}{" "}
                      Submissions
                    </Badge>
                  </div>
                </div>
              </ContributionGraph>
            </div>
          </TooltipProvider>
        </div>
      </div>
    </>
  );
}
