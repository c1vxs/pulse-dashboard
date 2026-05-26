"use client";

import { useMemo, useState } from "react";
import { ChevronUp, ChevronDown, Search } from "lucide-react";

const STATUS_STYLES = {
  Active: "bg-accent-green/10 text-accent-green",
  Trial: "bg-accent-cyan/10 text-accent-cyan",
  "Past Due": "bg-accent-amber/10 text-accent-amber",
  Cancelled: "bg-accent-red/10 text-accent-red",
};

const COLUMNS = [
  { key: "name", label: "Customer" },
  { key: "email", label: "Email" },
  { key: "plan", label: "Plan" },
  { key: "mrr", label: "MRR", align: "right" },
  { key: "status", label: "Status" },
  { key: "joined", label: "Joined" },
];

export default function DataTable({ rows }) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState({ key: "mrr", dir: "desc" });
  const [planFilter, setPlanFilter] = useState("All");

  const plans = useMemo(
    () => ["All", ...Array.from(new Set(rows.map((r) => r.plan)))],
    [rows]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let out = rows.filter((r) => {
      const matchesQuery =
        !q ||
        r.name.toLowerCase().includes(q) ||
        r.email.toLowerCase().includes(q);
      const matchesPlan = planFilter === "All" || r.plan === planFilter;
      return matchesQuery && matchesPlan;
    });

    out = [...out].sort((a, b) => {
      const av = a[sort.key];
      const bv = b[sort.key];
      if (av < bv) return sort.dir === "asc" ? -1 : 1;
      if (av > bv) return sort.dir === "asc" ? 1 : -1;
      return 0;
    });

    return out;
  }, [rows, query, sort, planFilter]);

  const toggleSort = (key) => {
    setSort((s) =>
      s.key === key
        ? { key, dir: s.dir === "asc" ? "desc" : "asc" }
        : { key, dir: "asc" }
    );
  };

  return (
    <div className="bg-bg-card border border-border rounded-xl shadow-card overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 border-b border-border">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search customers..."
            className="w-full bg-bg-soft border border-border rounded-lg pl-9 pr-3 py-2 text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/50"
          />
        </div>
        <div className="flex items-center gap-1 bg-bg-soft border border-border rounded-lg p-1">
          {plans.map((p) => (
            <button
              key={p}
              onClick={() => setPlanFilter(p)}
              className={
                "px-3 py-1.5 text-xs font-medium rounded-md transition-colors " +
                (planFilter === p
                  ? "bg-bg-hover text-white"
                  : "text-muted hover:text-white")
              }
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-muted border-b border-border">
              {COLUMNS.map((c) => (
                <th
                  key={c.key}
                  className={
                    "px-4 py-3 font-medium select-none cursor-pointer hover:text-white " +
                    (c.align === "right" ? "text-right" : "")
                  }
                  onClick={() => toggleSort(c.key)}
                >
                  <span className="inline-flex items-center gap-1">
                    {c.label}
                    {sort.key === c.key &&
                      (sort.dir === "asc" ? (
                        <ChevronUp className="w-3 h-3" />
                      ) : (
                        <ChevronDown className="w-3 h-3" />
                      ))}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((r) => (
              <tr
                key={r.id}
                className="border-b border-border/50 hover:bg-bg-hover/40"
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent-cyan flex items-center justify-center text-xs font-semibold">
                      {r.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                    <span className="font-medium">{r.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-muted">{r.email}</td>
                <td className="px-4 py-3">{r.plan}</td>
                <td className="px-4 py-3 text-right tabular-nums">
                  ${r.mrr}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={
                      "inline-flex px-2 py-1 rounded-full text-xs font-medium " +
                      (STATUS_STYLES[r.status] || "bg-bg-soft text-muted")
                    }
                  >
                    {r.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-muted">{r.joined}</td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={COLUMNS.length}
                  className="px-4 py-10 text-center text-muted"
                >
                  No customers match your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="px-4 py-3 border-t border-border text-xs text-muted flex items-center justify-between">
        <span>
          Showing {filtered.length} of {rows.length} customers
        </span>
        <span>
          MRR total:{" "}
          <span className="text-white tabular-nums">
            ${filtered.reduce((s, r) => s + r.mrr, 0).toLocaleString()}
          </span>
        </span>
      </div>
    </div>
  );
}
