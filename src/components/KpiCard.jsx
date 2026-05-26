"use client";

import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { ResponsiveContainer, LineChart, Line } from "recharts";

export default function KpiCard({ label, value, delta, series }) {
  const positive = delta >= 0;
  const data = series.map((v, i) => ({ i, v }));

  return (
    <div className="bg-bg-card border border-border rounded-xl p-5 shadow-card">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm text-muted">{label}</div>
          <div className="text-2xl font-semibold mt-1 tracking-tight">{value}</div>
        </div>
        <div
          className={
            "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full " +
            (positive
              ? "bg-accent-green/10 text-accent-green"
              : "bg-accent-red/10 text-accent-red")
          }
        >
          {positive ? (
            <ArrowUpRight className="w-3 h-3" />
          ) : (
            <ArrowDownRight className="w-3 h-3" />
          )}
          {Math.abs(delta).toFixed(1)}%
        </div>
      </div>

      <div className="h-12 mt-4 -mx-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line
              type="monotone"
              dataKey="v"
              stroke={positive ? "#34d399" : "#f87171"}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
