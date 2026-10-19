export interface Topic {
  id: string;
  title: string;
  totalProblems: number;
  solvedProblems: number;
  difficultyCounts: {
    easy: { solved: number; total: number };
    medium: { solved: number; total: number };
    hard: { solved: number; total: number };
  };
  status: "completed" | "current" | "not-started" | "locked";
  iconName: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  isUnlocked: boolean;
  unlockCriteria: string;
}

export interface Activity {
  id: string;
  timeAgo: string; // "Today", "Yesterday", "2 days ago", etc.
  type: "started" | "solved" | "completed";
  detail: string; // e.g. "Two Sum", "Sliding Window", "Graphs"
  topicId: string;
}

export interface DSAMetrics {
  totalSolved: number;
  totalProblems: number;
  currentStreak: number;
  currentTopic: string;
  difficultySplit: {
    easy: { solved: number; color: string };
    medium: { solved: number; color: string };
    hard: { solved: number; color: string };
  };
}

export interface DailyGoal {
  total: number;
  solved: number;
  problems: string[];
}

export const dsaMetrics: DSAMetrics = {
  totalSolved: 248,
  totalProblems: 345,
  currentStreak: 19,
  currentTopic: "Sliding Window",
  difficultySplit: {
    easy: { solved: 95, color: "#22c55e" }, // Green
    medium: { solved: 112, color: "#eab308" }, // Yellow
    hard: { solved: 41, color: "#ef4444" } // Red
  }
};

export const dailyGoal: DailyGoal = {
  total: 3,
  solved: 2,
  problems: [
    "Two Sum",
    "Sliding Window Maximum",
    "Longest Substring Without Repeating Characters"
  ]
};

export const dsaAchievements: Achievement[] = [
  {
    id: "streak_30",
    title: "30 Day Streak",
    description: "Keep the momentum going for 30 consecutive days",
    icon: "🔥",
    isUnlocked: true,
    unlockCriteria: "Maintain a 30-day active problem solving streak"
  },
  {
    id: "solved_100",
    title: "First 100 Problems",
    description: "Solve 100 problems on any platform",
    icon: "🏆",
    isUnlocked: true,
    unlockCriteria: "Reach 100 total solved problems"
  },
  {
    id: "binary_search_master",
    title: "Binary Search Master",
    description: "Complete all Binary Search topics",
    icon: "⚡",
    isUnlocked: true,
    unlockCriteria: "Complete 100% of Binary Search topics"
  },
  {
    id: "tree_explorer",
    title: "Tree Explorer",
    description: "Start exploring complex Tree and Graph structures",
    icon: "🌳",
    isUnlocked: false,
    unlockCriteria: "Solve 20 Tree problems"
  },
  {
    id: "dp_beginner",
    title: "DP Beginner",
    description: "Solve your first 5 Dynamic Programming problems",
    icon: "🧩",
    isUnlocked: false,
    unlockCriteria: "Unlock and complete 5 DP problems"
  }
];

export const recentActivities: Activity[] = [
  {
    id: "act_1",
    timeAgo: "Today",
    type: "solved",
    detail: "Two Sum",
    topicId: "arrays"
  },
  {
    id: "act_2",
    timeAgo: "Yesterday",
    type: "completed",
    detail: "Sliding Window",
    topicId: "sliding_window"
  },
  {
    id: "act_3",
    timeAgo: "2 days ago",
    type: "started",
    detail: "Graphs",
    topicId: "graphs"
  }
];

export const dsaTopics: Topic[] = [
  {
    id: "arrays",
    title: "Arrays",
    totalProblems: 38,
    solvedProblems: 38,
    difficultyCounts: {
      easy: { solved: 20, total: 20 },
      medium: { solved: 15, total: 15 },
      hard: { solved: 3, total: 3 }
    },
    status: "completed",
    iconName: "Brackets"
  },
  {
    id: "strings",
    title: "Strings",
    totalProblems: 25,
    solvedProblems: 25,
    difficultyCounts: {
      easy: { solved: 15, total: 15 },
      medium: { solved: 8, total: 8 },
      hard: { solved: 2, total: 2 }
    },
    status: "completed",
    iconName: "Type"
  },
  {
    id: "hashing",
    title: "Hashing",
    totalProblems: 24,
    solvedProblems: 24,
    difficultyCounts: {
      easy: { solved: 10, total: 10 },
      medium: { solved: 11, total: 11 },
      hard: { solved: 3, total: 3 }
    },
    status: "completed",
    iconName: "Hash"
  },
  {
    id: "two_pointers",
    title: "Two Pointers",
    totalProblems: 15,
    solvedProblems: 15,
    difficultyCounts: {
      easy: { solved: 5, total: 5 },
      medium: { solved: 8, total: 8 },
      hard: { solved: 2, total: 2 }
    },
    status: "completed",
    iconName: "ArrowUpDown"
  },
  {
    id: "sliding_window",
    title: "Sliding Window",
    totalProblems: 20,
    solvedProblems: 3,
    difficultyCounts: {
      easy: { solved: 0, total: 4 },
      medium: { solved: 2, total: 11 },
      hard: { solved: 1, total: 5 }
    },
    status: "current",
    iconName: "Box"
  },
  {
    id: "stack",
    title: "Stack",
    totalProblems: 15,
    solvedProblems: 15,
    difficultyCounts: {
      easy: { solved: 5, total: 5 },
      medium: { solved: 8, total: 8 },
      hard: { solved: 2, total: 2 }
    },
    status: "completed",
    iconName: "Layers"
  },
  {
    id: "queue",
    title: "Queue",
    totalProblems: 10,
    solvedProblems: 10,
    difficultyCounts: {
      easy: { solved: 4, total: 4 },
      medium: { solved: 5, total: 5 },
      hard: { solved: 1, total: 1 }
    },
    status: "completed",
    iconName: "ArrowRightLeft"
  },
  {
    id: "binary_search",
    title: "Binary Search",
    totalProblems: 20,
    solvedProblems: 20,
    difficultyCounts: {
      easy: { solved: 8, total: 8 },
      medium: { solved: 10, total: 10 },
      hard: { solved: 2, total: 2 }
    },
    status: "completed",
    iconName: "Binary"
  },
  {
    id: "linked_list",
    title: "Linked List",
    totalProblems: 15,
    solvedProblems: 15,
    difficultyCounts: {
      easy: { solved: 5, total: 5 },
      medium: { solved: 8, total: 8 },
      hard: { solved: 2, total: 2 }
    },
    status: "completed",
    iconName: "Link"
  },
  {
    id: "trees",
    title: "Trees",
    totalProblems: 30,
    solvedProblems: 30,
    difficultyCounts: {
      easy: { solved: 10, total: 10 },
      medium: { solved: 15, total: 15 },
      hard: { solved: 5, total: 5 }
    },
    status: "completed",
    iconName: "GitFork"
  },
  {
    id: "bst",
    title: "BST",
    totalProblems: 15,
    solvedProblems: 15,
    difficultyCounts: {
      easy: { solved: 5, total: 5 },
      medium: { solved: 7, total: 7 },
      hard: { solved: 3, total: 3 }
    },
    status: "completed",
    iconName: "GitMerge"
  },
  {
    id: "heap",
    title: "Heap",
    totalProblems: 12,
    solvedProblems: 12,
    difficultyCounts: {
      easy: { solved: 4, total: 4 },
      medium: { solved: 5, total: 5 },
      hard: { solved: 3, total: 3 }
    },
    status: "completed",
    iconName: "ChevronsUp"
  },
  {
    id: "trie",
    title: "Trie",
    totalProblems: 8,
    solvedProblems: 8,
    difficultyCounts: {
      easy: { solved: 2, total: 2 },
      medium: { solved: 4, total: 4 },
      hard: { solved: 2, total: 2 }
    },
    status: "completed",
    iconName: "SearchCode"
  },
  {
    id: "backtracking",
    title: "Backtracking",
    totalProblems: 18,
    solvedProblems: 18,
    difficultyCounts: {
      easy: { solved: 2, total: 2 },
      medium: { solved: 6, total: 6 },
      hard: { solved: 10, total: 10 }
    },
    status: "completed",
    iconName: "Undo"
  },
  {
    id: "graphs",
    title: "Graphs",
    totalProblems: 15,
    solvedProblems: 0,
    difficultyCounts: {
      easy: { solved: 0, total: 3 },
      medium: { solved: 0, total: 8 },
      hard: { solved: 0, total: 4 }
    },
    status: "not-started",
    iconName: "Share2"
  },
  {
    id: "union_find",
    title: "Union Find",
    totalProblems: 10,
    solvedProblems: 0,
    difficultyCounts: {
      easy: { solved: 0, total: 2 },
      medium: { solved: 0, total: 6 },
      hard: { solved: 0, total: 2 }
    },
    status: "locked",
    iconName: "Link2"
  },
  {
    id: "greedy",
    title: "Greedy",
    totalProblems: 15,
    solvedProblems: 0,
    difficultyCounts: {
      easy: { solved: 0, total: 3 },
      medium: { solved: 0, total: 9 },
      hard: { solved: 0, total: 3 }
    },
    status: "locked",
    iconName: "Coins"
  },
  {
    id: "dynamic_programming",
    title: "Dynamic Programming",
    totalProblems: 20,
    solvedProblems: 0,
    difficultyCounts: {
      easy: { solved: 0, total: 3 },
      medium: { solved: 0, total: 12 },
      hard: { solved: 0, total: 5 }
    },
    status: "locked",
    iconName: "Puzzle"
  },
  {
    id: "bit_manipulation",
    title: "Bit Manipulation",
    totalProblems: 10,
    solvedProblems: 0,
    difficultyCounts: {
      easy: { solved: 0, total: 2 },
      medium: { solved: 0, total: 6 },
      hard: { solved: 0, total: 2 }
    },
    status: "locked",
    iconName: "Cpu"
  },
  {
    id: "math",
    title: "Math",
    totalProblems: 5,
    solvedProblems: 0,
    difficultyCounts: {
      easy: { solved: 0, total: 1 },
      medium: { solved: 0, total: 3 },
      hard: { solved: 0, total: 1 }
    },
    status: "locked",
    iconName: "Calculator"
  },
  {
    id: "intervals",
    title: "Intervals",
    totalProblems: 5,
    solvedProblems: 0,
    difficultyCounts: {
      easy: { solved: 0, total: 1 },
      medium: { solved: 0, total: 3 },
      hard: { solved: 0, total: 1 }
    },
    status: "locked",
    iconName: "Hourglass"
  }
];
