"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { channelPerformance } from "@/lib/mockData";

export default function ChannelChart() {
  return (
    <div className="bg-bg-card border border-border rounded-xl p-5 shadow-card">
      <div className="mb-4">
        <div className="text-sm text-muted">Channel performance</div>
        <div className="text-lg font-semibold">Impressions, clicks, conversions</div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={channelPerformance} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1f2a3d" vertical={false} />
            <XAxis dataKey="channel" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Legend wrapperStyle={{ color: "#7c8aa3", fontSize: 12 }} />
            <Bar dataKey="impressions" fill="#7c5cff" radius={[4, 4, 0, 0]} />
            <Bar dataKey="clicks" fill="#22d3ee" radius={[4, 4, 0, 0]} />
            <Bar dataKey="conversions" fill="#34d399" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
