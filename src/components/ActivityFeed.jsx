"use client";

import {
  UserPlus,
  ShoppingCart,
  ArrowUpCircle,
  RotateCcw,
  Bell,
} from "lucide-react";
import { recentActivity } from "@/lib/mockData";

const iconFor = (type) => {
  switch (type) {
    case "signup":
      return { Icon: UserPlus, color: "text-accent" };
    case "order":
      return { Icon: ShoppingCart, color: "text-accent-green" };
    case "upgrade":
      return { Icon: ArrowUpCircle, color: "text-accent-cyan" };
    case "refund":
      return { Icon: RotateCcw, color: "text-accent-red" };
    default:
      return { Icon: Bell, color: "text-muted" };
  }
};

export default function ActivityFeed() {
  return (
    <div className="bg-bg-card border border-border rounded-xl p-5 shadow-card">
      <div className="mb-4">
        <div className="text-sm text-muted">Activity</div>
        <div className="text-lg font-semibold">Recent events</div>
      </div>

      <ul className="space-y-3">
        {recentActivity.map((a, i) => {
          const { Icon, color } = iconFor(a.type);
          return (
            <li key={i} className="flex items-start gap-3 text-sm">
              <div className={"mt-0.5 " + color}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div>{a.text}</div>
                <div className="text-xs text-muted">{a.time} ago</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
