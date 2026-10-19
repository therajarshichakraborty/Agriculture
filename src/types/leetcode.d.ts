export interface LeetCodeStats {
  easy: number;
  medium: number;
  hard: number;
  total: number;
}

export interface Contest {
  contest: {
    title: string;
    startTime: number;
  };
  rating: number;
  ranking: number;
}

export interface ContestChartData {
  date: string;
  rating: number;
}
