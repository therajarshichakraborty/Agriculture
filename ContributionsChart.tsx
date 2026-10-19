//@ts-nocheck
import React, { useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

/* ---------- deterministic mock data ---------- */
function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function generateData() {
  const rand = seededRandom(42);
  const days = 30;
  const today = new Date();
  const data = [];
  let base = 4;
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    base += (rand() - 0.45) * 3;
    base = Math.max(0, base);
    const spike = rand() > 0.88 ? rand() * 10 : 0;
    const value = Math.max(0, Math.round(base + spike + rand() * 3));
    data.push({ date: d.toISOString().slice(0, 10), contributions: value });
  }
  return data;
}

function formatDate(dateStr, long = false) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString(
    "en-US",
    long
      ? { weekday: "short", month: "short", day: "numeric" }
      : { month: "short", day: "numeric" }
  );
}

export default function ContributionsChart({ chartData, isDark = true }) {
  const [data] = useState(() => chartData ?? generateData());

  return (
    <div
      className="relative h-full w-full rounded-xl p-4"
      style={{
        background: isDark
          ? "linear-gradient(180deg, #0a0f1c 0%, #0d1526 100%)"
          : "#ffffff",
        minHeight: 320
      }}
    >
      <style>{`
        @keyframes cx-fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes cx-pop { from { opacity: 0; transform: translateY(4px) scale(0.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .cx-area-wrap { animation: cx-fade-in 0.5s ease-out both; }
        .cx-tooltip { animation: cx-pop 0.15s cubic-bezier(.2,.9,.3,1.2) both; }
      `}</style>

      <div className="mb-3 flex items-baseline justify-between">
        <h3
          className="text-sm font-semibold"
          style={{ color: isDark ? "rgba(226,232,240,0.9)" : "#0f172a" }}
        >
          Contributions
        </h3>
        <span
          className="text-[11px]"
          style={{ color: isDark ? "rgba(148,163,184,0.7)" : "#64748b" }}
        >
          Last 30 days
        </span>
      </div>

      <div className="cx-area-wrap" style={{ height: 260, width: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ left: -10, right: 10, top: 5, bottom: 5 }}
          >
            <defs>
              <linearGradient id="contribGradient" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="rgb(59, 130, 246)"
                  stopOpacity={isDark ? 0.45 : 0.35}
                />
                <stop
                  offset="95%"
                  stopColor="rgb(59, 130, 246)"
                  stopOpacity={0}
                />
              </linearGradient>

              <filter
                id="contribGlow"
                x="-60%"
                y="-60%"
                width="220%"
                height="220%"
              >
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <CartesianGrid
              strokeDasharray="2 2"
              stroke={
                isDark
                  ? "rgba(148, 163, 184, 0.15)"
                  : "rgba(148, 163, 184, 0.35)"
              }
            />

            <XAxis
              dataKey="date"
              tickFormatter={(tick) =>
                new Date(tick + "T00:00:00").getDate().toString()
              }
              tickLine={true}
              axisLine={true}
              tick={{
                fontSize: 9,
                fill: isDark ? "rgba(148,163,184,0.8)" : "#64748b"
              }}
              stroke={
                isDark
                  ? "rgba(148, 163, 184, 0.25)"
                  : "rgba(148, 163, 184, 0.5)"
              }
            />

            <YAxis
              tickLine={true}
              axisLine={true}
              tick={{
                fontSize: 9,
                fill: isDark ? "rgba(148,163,184,0.8)" : "#64748b"
              }}
              width={25}
              allowDecimals={false}
              ticks={[0, 5, 10, 15, 20, 25]}
              domain={[0, 25]}
              stroke={
                isDark
                  ? "rgba(148, 163, 184, 0.25)"
                  : "rgba(148, 163, 184, 0.5)"
              }
            />

            <Tooltip
              cursor={{
                stroke: "rgb(59, 130, 246)",
                strokeWidth: 1,
                strokeDasharray: "3 3",
                strokeOpacity: 0.6
              }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const point = payload[0].payload;
                  return (
                    <div
                      key={point.date}
                      className="cx-tooltip rounded-lg px-3 py-2 text-[10px] shadow-lg backdrop-blur-md"
                      style={{
                        border: `1px solid ${isDark ? "rgba(59,130,246,0.25)" : "rgba(148,163,184,0.4)"}`,
                        background: isDark
                          ? "rgba(13,21,38,0.92)"
                          : "rgba(255,255,255,0.95)",
                        color: isDark ? "#e2e8f0" : "#0f172a"
                      }}
                    >
                      <p
                        className="mb-0.5 font-semibold"
                        style={{
                          color: isDark ? "rgba(148,163,184,0.9)" : "#64748b"
                        }}
                      >
                        {formatDate(point.date, true)}
                      </p>
                      <div className="flex items-center gap-1.5">
                        <span
                          className="inline-block h-1.5 w-1.5 rounded-full"
                          style={{
                            background: "rgb(59, 130, 246)",
                            boxShadow: "0 0 6px 2px rgba(59,130,246,0.6)"
                          }}
                        />
                        <p
                          className="text-xs font-bold tabular-nums"
                          style={{ color: "rgb(59, 130, 246)" }}
                        >
                          {point.contributions}{" "}
                          {point.contributions === 1
                            ? "contribution"
                            : "contributions"}
                        </p>
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />

            <Area
              type="monotone"
              dataKey="contributions"
              stroke="rgb(59, 130, 246)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#contribGradient)"
              filter="url(#contribGlow)"
              isAnimationActive
              animationDuration={1400}
              animationEasing="ease-out"
              dot={{
                r: 2.5,
                fill: "rgb(59, 130, 246)",
                stroke: "rgb(59, 130, 246)",
                strokeWidth: 0
              }}
              activeDot={{
                r: 5,
                fill: "rgb(59, 130, 246)",
                stroke: isDark ? "#0a0f1c" : "white",
                strokeWidth: 2,
                style: {
                  filter: "drop-shadow(0 0 6px rgba(59,130,246,0.7))",
                  transition: "r 0.2s ease"
                }
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
