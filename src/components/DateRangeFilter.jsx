"use client";

import { useState } from "react";
import { Calendar, ChevronDown } from "lucide-react";

const RANGES = ["7d", "30d", "90d", "12m", "All"];

export default function DateRangeFilter({ onChange }) {
  const [active, setActive] = useState("30d");

  return (
    <div className="inline-flex items-center bg-bg-card border border-border rounded-lg p-1">
      {RANGES.map((r) => (
        <button
          key={r}
          onClick={() => {
            setActive(r);
            onChange && onChange(r);
          }}
          className={
            "px-3 py-1.5 text-xs font-medium rounded-md transition-colors " +
            (active === r
              ? "bg-bg-hover text-white"
              : "text-muted hover:text-white")
          }
        >
          {r}
        </button>
      ))}
    </div>
  );
}
