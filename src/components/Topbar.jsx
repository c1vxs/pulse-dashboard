"use client";

import { Search, Bell } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-16 border-b border-border bg-bg-soft/60 backdrop-blur flex items-center justify-between px-6">
      <div className="relative flex-1 max-w-md">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
        <input
          type="text"
          placeholder="Search metrics, customers, reports..."
          className="w-full bg-bg-card border border-border rounded-lg pl-9 pr-3 py-2 text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50"
        />
      </div>

      <div className="flex items-center gap-4 ml-4">
        <button className="relative p-2 rounded-lg text-muted hover:bg-bg-hover hover:text-white transition-colors">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-accent-red" />
        </button>
        <div className="flex items-center gap-3">
          <div className="hidden sm:block text-right">
            <div className="text-sm font-medium">Chris Atahan</div>
            <div className="text-xs text-muted">Admin</div>
          </div>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-accent-cyan flex items-center justify-center text-sm font-semibold">
            CA
          </div>
        </div>
      </div>
    </header>
  );
}
