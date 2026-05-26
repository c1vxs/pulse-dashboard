"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";
import { trafficSources } from "@/lib/mockData";

export default function TrafficChart() {
  const total = trafficSources.reduce((s, x) => s + x.value, 0);

  return (
    <div className="bg-bg-card border border-border rounded-xl p-5 shadow-card">
      <div className="mb-4">
        <div className="text-sm text-muted">Traffic Sources</div>
        <div className="text-lg font-semibold">By channel</div>
      </div>

      <div className="flex items-center gap-4">
        <div className="h-48 w-48 shrink-0 relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={trafficSources}
                dataKey="value"
                innerRadius={55}
                outerRadius={80}
                paddingAngle={2}
                stroke="none"
              >
                {trafficSources.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(v) => `${v}%`} />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <div className="text-xs text-muted">Total</div>
            <div className="text-xl font-semibold">{total}%</div>
          </div>
        </div>

        <div className="flex-1 space-y-2">
          {trafficSources.map((s) => (
            <div key={s.name} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: s.color }} />
                <span>{s.name}</span>
              </div>
              <span className="text-muted">{s.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
