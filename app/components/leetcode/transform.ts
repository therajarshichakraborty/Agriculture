export type Day = {
  date: string;
  count: number;
};

export function transformCalendar(calendar: Record<string, number>): Day[] {
  return Object.entries(calendar).map(([timestamp, count]) => {
    return {
      date: new Date(Number(timestamp) * 1000).toISOString().split("T")[0],
      count
    };
  });
}
