"use client";

const steps = [
  { label: "Visited site", value: 124000, color: "#7c5cff" },
  { label: "Viewed product", value: 58400, color: "#a78bfa" },
  { label: "Added to cart", value: 18200, color: "#22d3ee" },
  { label: "Started checkout", value: 9100, color: "#34d399" },
  { label: "Completed purchase", value: 4760, color: "#fbbf24" },
];

export default function ConversionFunnel() {
  const max = steps[0].value;

  return (
    <div className="bg-bg-card border border-border rounded-xl p-5 shadow-card">
      <div className="mb-4">
        <div className="text-sm text-muted">Conversion funnel</div>
        <div className="text-lg font-semibold">Last 30 days</div>
      </div>

      <div className="space-y-3">
        {steps.map((s, i) => {
          const pct = (s.value / max) * 100;
          const drop =
            i === 0 ? null : ((1 - s.value / steps[i - 1].value) * 100).toFixed(1);
          return (
            <div key={s.label}>
              <div className="flex items-center justify-between text-sm mb-1">
                <span>{s.label}</span>
                <span className="text-muted">
                  {s.value.toLocaleString()}
                  {drop !== null && (
                    <span className="ml-2 text-accent-red">-{drop}%</span>
                  )}
                </span>
              </div>
              <div className="h-3 rounded-full bg-bg-soft overflow-hidden">
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: `${pct}%`, background: s.color }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
