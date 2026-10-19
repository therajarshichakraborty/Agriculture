"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Brain, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Separator } from "@/components/ui/separator";

import { dsaMetrics, dsaTopics, Topic } from "@/data/dsa";

import DSAHeader from "./DSAHeader";
import SearchBar from "./SearchBar";
import ProgressOverview from "./ProgressOverview";
import DailyGoal from "./DailyGoal";
import TopicCard from "./TopicCard";
import Achievements from "./Achievements";
import RecentActivity from "./RecentActivity";

type DifficultyFilter = "all" | "easy" | "medium" | "hard";

export default function DSAPanel() {
  const [isOpen, setIsOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<DifficultyFilter>("all");
  const [expandedTopicId, setExpandedTopicId] = useState<string | null>(null);

  // Dynamic values depending on filter
  let displaySolved = dsaMetrics.totalSolved;
  let displayTotal = dsaMetrics.totalProblems;

  if (filter === "easy") {
    displaySolved = dsaMetrics.difficultySplit.easy.solved;
    displayTotal = 110; // Easy total problems
  } else if (filter === "medium") {
    displaySolved = dsaMetrics.difficultySplit.medium.solved;
    displayTotal = 170; // Medium total problems
  } else if (filter === "hard") {
    displaySolved = dsaMetrics.difficultySplit.hard.solved;
    displayTotal = 65; // Hard total problems
  }

  // Filter topics
  const filteredTopics = dsaTopics.filter((topic) => {
    const matchesSearch = topic.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  // Calculate stats for filtered topics to update overview if search is active
  const filteredStats = filteredTopics.reduce(
    (acc, topic) => {
      acc.easy += topic.difficultyCounts.easy.solved;
      acc.medium += topic.difficultyCounts.medium.solved;
      acc.hard += topic.difficultyCounts.hard.solved;

      acc.easyTotal += topic.difficultyCounts.easy.total;
      acc.mediumTotal += topic.difficultyCounts.medium.total;
      acc.hardTotal += topic.difficultyCounts.hard.total;
      return acc;
    },
    { easy: 0, medium: 0, hard: 0, easyTotal: 0, mediumTotal: 0, hardTotal: 0 }
  );

  const isFiltered = searchQuery.length > 0;
  const filteredTopicsSolved = {
    easy: filteredStats.easy,
    medium: filteredStats.medium,
    hard: filteredStats.hard,
    total:
      filter === "easy"
        ? filteredStats.easyTotal
        : filter === "medium"
          ? filteredStats.mediumTotal
          : filter === "hard"
            ? filteredStats.hardTotal
            : filteredStats.easyTotal +
              filteredStats.mediumTotal +
              filteredStats.hardTotal
  };

  const handleToggleExpand = (id: string) => {
    setExpandedTopicId((prev) => (prev === id ? null : id));
  };

  // Map filtered topic to the topic item representation with dynamic fields
  const getMappedTopic = (topic: Topic): Topic => {
    if (filter === "all") return topic;

    const solved = topic.difficultyCounts[filter].solved;
    const total = topic.difficultyCounts[filter].total;

    return {
      ...topic,
      solvedProblems: solved,
      totalProblems: total,
      status:
        topic.status === "locked"
          ? "locked"
          : total === 0
            ? "not-started"
            : solved === total
              ? "completed"
              : topic.status === "current"
                ? "current"
                : "not-started"
    };
  };

  return (
    <>
      {/* 🧠 COLLAPSED TRIGGER BUTTON (Floating Brain) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            key="trigger-btn"
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={() => setIsOpen(true)}
            className="fixed right-6 bottom-28 h-12 w-12 rounded-full border border-border/80 bg-card/85 backdrop-blur-md shadow-lg flex items-center justify-center cursor-pointer hover:bg-accent text-primary dark:text-foreground hover:scale-105 active:scale-95 transition-all z-40 hidden lg:flex"
            title="Open DSA Progress Panel"
            aria-label="Open DSA Progress Panel"
          >
            <Brain className="h-5 w-5 animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* 📂 MAIN PANEL CONTAINER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="dsa-panel"
            initial={{ x: "100%", opacity: 0.8 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0.8 }}
            transition={{ type: "spring", stiffness: 220, damping: 26 }}
            className="fixed right-6 top-6 bottom-28 w-[360px] xl:w-[380px] z-40 hidden lg:flex flex-col bg-card/75 dark:bg-card/70 backdrop-blur-xl border border-border/80 shadow-2xl rounded-2xl overflow-hidden"
          >
            {/* COLLAPSE TAB ON LEFT BORDER */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[11px] h-20 w-[12px] rounded-l-md border border-r-0 border-border/80 bg-card/90 dark:bg-card/95 hover:bg-accent text-muted-foreground hover:text-foreground flex items-center justify-center cursor-pointer shadow-xs transition-colors group z-50"
              title="Collapse Panel"
              aria-label="Collapse Panel"
            >
              <ChevronRight className="h-3 w-3 stroke-[2.5] transition-transform group-hover:translate-x-0.5" />
            </button>

            {/* HEADER (Sticky) */}
            <div className="p-4 flex flex-col gap-3.5 bg-background/5 border-b border-border/20">
              <DSAHeader
                totalSolved={displaySolved}
                totalProblems={displayTotal}
              />

              <SearchBar value={searchQuery} onChange={setSearchQuery} />

              {/* SEGMENTED FILTER CONTROL */}
              <div className="relative flex p-0.5 bg-muted/40 dark:bg-muted/20 border border-border/40 rounded-lg w-full">
                {(["all", "easy", "medium", "hard"] as const).map((opt) => {
                  const isActive = filter === opt;
                  return (
                    <button
                      key={opt}
                      onClick={() => setFilter(opt)}
                      className={`relative flex-1 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md transition-colors cursor-pointer outline-hidden z-10 ${
                        isActive
                          ? "text-primary-foreground dark:text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeFilterBg"
                          className="absolute inset-0 bg-primary dark:bg-muted rounded-md -z-10 shadow-xs"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30
                          }}
                        />
                      )}
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* SCROLLABLE CONTENT */}
            <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-5 custom-scrollbar scroll-smooth">
              {/* Progress Overview Section */}
              <ProgressOverview
                metrics={dsaMetrics}
                filteredTopicsSolved={filteredTopicsSolved}
                isFiltered={isFiltered}
              />

              <Separator className="bg-border/40" />

              {/* Daily Goal Widget */}
              <DailyGoal />

              <Separator className="bg-border/40" />

              {/* Topic Roadmap */}
              <div className="flex flex-col gap-3">
                <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
                  Topic Roadmap
                </span>

                <div className="flex flex-col gap-2.5">
                  {filteredTopics.length > 0 ? (
                    filteredTopics.map((topic) => {
                      const mappedTopic = getMappedTopic(topic);
                      return (
                        <TopicCard
                          key={topic.id}
                          topic={mappedTopic}
                          isActive={expandedTopicId === topic.id}
                          onToggleExpand={() => handleToggleExpand(topic.id)}
                        />
                      );
                    })
                  ) : (
                    <div className="text-center py-6 border border-dashed border-border/50 rounded-xl bg-muted/5">
                      <span className="text-xs text-muted-foreground font-medium">
                        No topics match search
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <Separator className="bg-border/40" />

              {/* Achievements */}
              <Achievements />

              <Separator className="bg-border/40" />

              {/* Recent Activity */}
              <RecentActivity />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
