"use client";

import { useState } from "react";
import DateRangeFilter from "@/components/DateRangeFilter";
import RevenueChart from "@/components/RevenueChart";
import ChannelChart from "@/components/ChannelChart";
import ConversionFunnel from "@/components/ConversionFunnel";
import TrafficChart from "@/components/TrafficChart";

export default function AnalyticsPage() {
  const [range, setRange] = useState("30d");

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Analytics</h1>
          <p className="text-sm text-muted mt-1">
            Deep dive on traffic, channels, and conversion ({range}).
          </p>
        </div>
        <DateRangeFilter onChange={setRange} />
      </div>

      <RevenueChart />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <ChannelChart />
        </div>
        <TrafficChart />
      </div>

      <ConversionFunnel />
    </div>
  );
}
