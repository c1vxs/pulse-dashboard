"use client";

import { useState } from "react";
import KpiCard from "@/components/KpiCard";
import RevenueChart from "@/components/RevenueChart";
import UsersChart from "@/components/UsersChart";
import TrafficChart from "@/components/TrafficChart";
import ActivityFeed from "@/components/ActivityFeed";
import DateRangeFilter from "@/components/DateRangeFilter";
import { kpis } from "@/lib/mockData";

export default function DashboardPage() {
  const [range, setRange] = useState("30d");

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Overview</h1>
          <p className="text-sm text-muted mt-1">
            Showing data for the last{" "}
            <span className="text-white">{range}</span>.
          </p>
        </div>
        <DateRangeFilter onChange={setRange} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((k) => (
          <KpiCard key={k.label} {...k} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <TrafficChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <UsersChart />
        </div>
        <ActivityFeed />
      </div>
    </div>
  );
}
