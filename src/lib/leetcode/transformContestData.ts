import { Contest, ContestChartData } from "@/types/leetcode";

export function transformContestData(data: Contest[]): ContestChartData[] {
  if (!Array.isArray(data)) return [];
  return data
    .filter((item) => item && item.contest && item.contest.startTime)
    .map((item) => ({
      date: new Date(item.contest.startTime * 1000).toLocaleDateString(),
      rating: item.rating
    }));
}
