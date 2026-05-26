"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { revenueByMonth } from "@/lib/mockData";

const fmtMoney = (n) => `$${(n / 1000).toFixed(0)}k`;

export default function RevenueChart() {
  return (
    <div className="bg-bg-card border border-border rounded-xl p-5 shadow-card">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-sm text-muted">Revenue vs Expenses</div>
          <div className="text-lg font-semibold">Last 12 months</div>
        </div>
        <div className="flex items-center gap-3 text-xs text-muted">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-accent"></span>Revenue
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-accent-cyan"></span>Expenses
          </span>
        </div>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueByMonth} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7c5cff" stopOpacity={0.5} />
                <stop offset="95%" stopColor="#7c5cff" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="exp" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1f2a3d" vertical={false} />
            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <YAxis tickFormatter={fmtMoney} axisLine={false} tickLine={false} />
            <Tooltip formatter={(v) => `$${v.toLocaleString()}`} />
            <Area type="monotone" dataKey="revenue" stroke="#7c5cff" strokeWidth={2} fill="url(#rev)" />
            <Area type="monotone" dataKey="expenses" stroke="#22d3ee" strokeWidth={2} fill="url(#exp)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
