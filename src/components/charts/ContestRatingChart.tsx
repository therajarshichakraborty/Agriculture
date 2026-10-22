"use client";

import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
  CartesianGrid
} from "recharts";


type ContestDataItem = {
  date: string;
  rating: number;
  ranking: number;
  contestAttend: number;
};

type ContestChartData = {
  data: ContestDataItem[];
};

export default function ContestRatingChart({ data }: ContestChartData) {


  if (!data || data.length === 0) {
    return <div className="text-xs text-muted-foreground">No contest data</div>;
  }

  const strokeColor = "#ef4444";

  // const xTicks = [0,100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600];
  const yTicks = [1200, 1300, 1400, 1500];

  const dataX = [
    { x: 0, y: 12 },
    { x: 117, y: 45 },
    { x: 234, y: 23 },
    { x: 351, y: 78 },
    { x: 468, y: 156 }
  ];

  return (
    <div className="w-full rounded-xl p-0 sm:p-4 bg-transparent border-none">
      <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-center">
        Contest Rating Progress
      </h2>

      <div className="w-full h-[220px] mx-auto pointer-events-none select-none [&_*]:outline-none">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            accessibilityLayer={false}
            data={data}
            height={600}
            margin={{ left: 0, right: 15, top: 10, bottom: 10 }}
          >
            {/* <CartesianGrid strokeDasharray="2 2"/> */}
            <XAxis
              dataKey="date"
              tick={{ fontSize: 10 }}
              tickLine={false}
              //ticks={xTicks}
            />

            <YAxis
              tick={{ fontSize: 10 }}
              tickLine={true}
              width={35}
              ticks={yTicks}
              domain={["dataMin - 100", "dataMax + 10"]}
              interval={0}
            />

            <Legend wrapperStyle={{ fontSize: "10px" }} />

            {/* Rating Line */}
            <Line
              type="monotone"
              dataKey="rating"
              stroke={strokeColor}
              strokeWidth={2}
              dot={{ r: 3, fill: "#fff", stroke: strokeColor, strokeWidth: 1.5 }}
              activeDot={false}
              name="Rating"
              className="dark:text-white"
            />

            {/* Ranking Line */}
            {/* <Line
              type="monotone"
              dataKey="ranking"
              stroke="#000000"
              strokeWidth={2}
              dot={true}
              name="Ranking"
            /> */}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
