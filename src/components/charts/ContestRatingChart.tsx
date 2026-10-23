"use client";

import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
  Tooltip
} from "recharts";

type ContestDataItem = {
  date: string;
  fullDate: string;
  title: string;
  rating: number;
  ranking: number;
  contestAttend: number;
};

type ContestChartData = {
  data: ContestDataItem[];
};

const strokeColor = "#ef4444";

export default function ContestRatingChart({ data }: ContestChartData) {
  if (!data || data.length === 0) {
    return <div className="text-xs text-muted-foreground">No contest data</div>;
  }

  const yTicks = [1200, 1300, 1400, 1500];

  return (
    <div className="w-full rounded-xl p-0 sm:p-4 bg-transparent border-none">
      <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-center">
        Contest Rating Progress
      </h2>

      <div className="w-full h-[220px] mx-auto select-none [&_*]:outline-none">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            accessibilityLayer={false}
            data={data}
            margin={{ left: 0, right: 15, top: 10, bottom: 10 }}
          >
            <XAxis dataKey="date" tick={{ fontSize: 10 }} tickLine={false} />

            <YAxis
              tick={{ fontSize: 10 }}
              tickLine={true}
              width={35}
              ticks={yTicks}
              domain={["dataMin - 100", "dataMax + 10"]}
              interval={0}
            />

            <Legend wrapperStyle={{ fontSize: "10px" }} />

            <Tooltip
              cursor={{
                stroke: strokeColor,
                strokeOpacity: 0.35,
                strokeDasharray: "3 3"
              }}
              wrapperStyle={{ outline: "none", zIndex: 20 }}
              content={({ active, payload }) => {
                if (!active || !payload || payload.length === 0) return null;
                const point = payload[0].payload as ContestDataItem;
                const prev = data[point.contestAttend - 2];
                const delta = prev ? point.rating - prev.rating : null;

                return (
                  <div className="min-w-44 rounded-lg border border-border bg-popover/90 px-3 py-2 text-[10px] text-popover-foreground shadow-md backdrop-blur-md">
                    <p className="mb-0.5 font-semibold text-muted-foreground">
                      {point.fullDate}
                    </p>
                    <p className="mb-1.5 text-xs font-semibold text-foreground">
                      {point.title}
                    </p>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-muted-foreground">Rating</span>
                      <span className="text-xs font-bold tabular-nums text-foreground">
                        {point.rating.toLocaleString()}
                        {delta !== null && (
                          <span
                            className={
                              delta >= 0
                                ? "ml-1 text-emerald-600 dark:text-emerald-400"
                                : "ml-1 text-red-500"
                            }
                          >
                            {delta >= 0 ? `+${delta}` : delta}
                          </span>
                        )}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-muted-foreground">Rank</span>
                      <span className="font-semibold tabular-nums text-foreground">
                        {point.ranking.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-muted-foreground">Contest</span>
                      <span className="font-semibold tabular-nums text-foreground">
                        #{point.contestAttend}
                      </span>
                    </div>
                  </div>
                );
              }}
            />

            <Line
              type="monotone"
              dataKey="rating"
              stroke={strokeColor}
              strokeWidth={2}
              dot={{
                r: 3,
                fill: "#fff",
                stroke: strokeColor,
                strokeWidth: 1.5
              }}
              activeDot={{
                r: 5,
                fill: strokeColor,
                stroke: "#fff",
                strokeWidth: 2
              }}
              name="Rating"
              className="dark:text-white"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
