"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

type BenchmarkDataItem = {
  name: string;
  value: number;
  valueSecondary?: number;
};

const BENCHMARK_DATA: Record<
  string,
  {
    title: string;
    metric: string;
    chartType: "bar" | "line" | "area";
    data: BenchmarkDataItem[];
    xLabel: string;
    yLabel: string;
    legendText: string;
    legendTextSecondary?: string;
  }
> = {
  reviewray: {
    title: "Code Review Cycle Time",
    metric: "Duration in Seconds (lower is better)",
    chartType: "bar",
    data: [
      { name: "Manual PR Review", value: 1800 },
      { name: "Traditional CI Check", value: 300 },
      { name: "ReviewRay AI Engine", value: 15 }
    ],
    xLabel: "Review Method",
    yLabel: "Seconds",
    legendText: "Execution Speed"
  },
  "exeos-ai": {
    title: "Inference Latency vs. Model Cost",
    metric: "Inference Delay in Seconds",
    chartType: "area",
    data: [
      { name: "GPT-4o API", value: 0.9, valueSecondary: 80 },
      { name: "Claude 3.5 Sonnet", value: 1.2, valueSecondary: 95 },
      { name: "Gemini 1.5 Pro", value: 1.1, valueSecondary: 70 },
      { name: "Llama-3-70b (Groq)", value: 0.3, valueSecondary: 25 }
    ],
    xLabel: "LLM Model Endpoint",
    yLabel: "Latency (s)",
    legendText: "Latency (s)",
    legendTextSecondary: "Relative Quality Score"
  },
  "zenith-cli": {
    title: "CLI Tool Startup Latency",
    metric: "Startup execution in Milliseconds",
    chartType: "bar",
    data: [
      { name: "Standard Node CLI", value: 140 },
      { name: "Deno CLI", value: 80 },
      { name: "Zenith CLI (Bun)", value: 12 }
    ],
    xLabel: "Runtime Platform",
    yLabel: "Startup (ms)",
    legendText: "Execution Speed"
  },
  "synapse-ui": {
    title: "Modular Dependency Bundle Size",
    metric: "Payload Size in Kilobytes",
    chartType: "area",
    data: [
      { name: "Material UI Bundle", value: 1200 },
      { name: "Radix UI Primitives", value: 250 },
      { name: "Synapse UI (Single Spec)", value: 18 }
    ],
    xLabel: "Framework Imports",
    yLabel: "Size (KB)",
    legendText: "Bundle Size"
  },
  "socket-poll": {
    title: "Broadcast Latency under Concurrent Load",
    metric: "Response Delay in Milliseconds",
    chartType: "line",
    data: [
      { name: "100 Users", value: 2 },
      { name: "500 Users", value: 4 },
      { name: "1,000 Users", value: 7 },
      { name: "5,000 Users", value: 12 }
    ],
    xLabel: "Concurrent Sockets",
    yLabel: "Latency (ms)",
    legendText: "WS Push Latency"
  },
  "linked-up": {
    title: "LinkedIn Post Generation Latency",
    metric: "Processing Latency in Seconds",
    chartType: "bar",
    data: [
      { name: "OpenAI GPT-4 API", value: 2.4 },
      { name: "Standard LLM Provider", value: 4.5 },
      { name: "Groq LPU + LangChain", value: 0.4 }
    ],
    xLabel: "Inference Engine",
    yLabel: "Latency (s)",
    legendText: "Generation Delay"
  },
  "mini-tailwindcss": {
    title: "Dynamic Compilation Load Rate",
    metric: "Parsing latency in Milliseconds",
    chartType: "line",
    data: [
      { name: "10 Selectors", value: 0.1 },
      { name: "50 Selectors", value: 0.4 },
      { name: "100 Selectors", value: 0.9 },
      { name: "500 Selectors", value: 2.2 }
    ],
    xLabel: "Parsed Selectors",
    yLabel: "Parse Time (ms)",
    legendText: "Runtime compilation"
  }
};

export function ProjectPerformanceChart({ projectId }: { projectId: string }) {
  const chartInfo = BENCHMARK_DATA[projectId];
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!chartInfo || !mounted) {
    return (
      <div className="h-[200px] w-full bg-muted/5 animate-pulse rounded-xl border border-border/20" />
    );
  }

  const isDark = resolvedTheme === "dark";
  const gridColor = isDark
    ? "rgba(255, 255, 255, 0.08)"
    : "rgba(0, 0, 0, 0.05)";
  const labelColor = isDark
    ? "hsl(var(--muted-foreground))"
    : "hsl(var(--muted-foreground))";

  const renderChart = () => {
    switch (chartInfo.chartType) {
      case "bar":
        return (
          <BarChart
            data={chartInfo.data}
            margin={{ top: 10, right: 10, left: -20, bottom: 5 }}
          >
            <defs>
              <linearGradient id="cyanBlueIndigo" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.85} />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#6366f1" stopOpacity={0.7} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={gridColor}
              vertical={false}
            />
            <XAxis
              dataKey="name"
              stroke={labelColor}
              fontSize={10}
              tickLine={false}
            />
            <YAxis stroke={labelColor} fontSize={10} tickLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: isDark ? "#090b11" : "#fefefe",
                border: "1px solid hsl(var(--border))",
                borderRadius: "12px",
                fontSize: "12px"
              }}
            />
            <Bar
              dataKey="value"
              fill="url(#cyanBlueIndigo)"
              radius={[6, 6, 0, 0]}
              name={chartInfo.legendText}
              maxBarSize={45}
            />
          </BarChart>
        );

      case "line":
        return (
          <LineChart
            data={chartInfo.data}
            margin={{ top: 10, right: 10, left: -20, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={gridColor}
              vertical={false}
            />
            <XAxis
              dataKey="name"
              stroke={labelColor}
              fontSize={10}
              tickLine={false}
            />
            <YAxis stroke={labelColor} fontSize={10} tickLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: isDark ? "#090b11" : "#fefefe",
                border: "1px solid hsl(var(--border))",
                borderRadius: "12px",
                fontSize: "12px"
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ stroke: "#22d3ee", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6 }}
              name={chartInfo.legendText}
            />
          </LineChart>
        );

      case "area":
        return (
          <AreaChart
            data={chartInfo.data}
            margin={{ top: 10, right: 10, left: -20, bottom: 5 }}
          >
            <defs>
              <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={gridColor}
              vertical={false}
            />
            <XAxis
              dataKey="name"
              stroke={labelColor}
              fontSize={10}
              tickLine={false}
            />
            <YAxis stroke={labelColor} fontSize={10} tickLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: isDark ? "#090b11" : "#fefefe",
                border: "1px solid hsl(var(--border))",
                borderRadius: "12px",
                fontSize: "12px"
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              strokeWidth={2}
              fill="url(#areaGradient)"
              name={chartInfo.legendText}
            />
            {chartInfo.data[0]?.valueSecondary !== undefined && (
              <Line
                type="monotone"
                dataKey="valueSecondary"
                stroke="#22d3ee"
                strokeWidth={2}
                dot={{ r: 3 }}
                name={chartInfo.legendTextSecondary || "Secondary"}
              />
            )}
          </AreaChart>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full flex flex-col gap-y-3 rounded-2xl border border-border/40 bg-card/20 p-5 backdrop-blur-xs relative overflow-hidden">
      <div className="flex flex-col gap-y-1">
        <h5 className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
          {chartInfo.title}
        </h5>
        <p className="text-xs text-muted-foreground/80 leading-relaxed mb-2">
          {chartInfo.metric}
        </p>
      </div>

      <div className="h-[180px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          {renderChart()}
        </ResponsiveContainer>
      </div>
    </div>
  );
}
