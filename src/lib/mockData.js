// Mock data for the dashboard. In a real app this would come from an API.

export const kpis = [
  {
    label: "Revenue",
    value: "$48,329",
    delta: 12.4,
    series: [12, 18, 14, 22, 19, 25, 28, 32],
  },
  {
    label: "Active Users",
    value: "8,492",
    delta: 4.1,
    series: [40, 42, 41, 45, 48, 47, 51, 54],
  },
  {
    label: "Conversion",
    value: "3.84%",
    delta: -0.6,
    series: [4.2, 4.0, 4.1, 3.9, 4.0, 3.8, 3.85, 3.84],
  },
  {
    label: "Avg. Order",
    value: "$126.20",
    delta: 2.3,
    series: [120, 118, 122, 124, 121, 125, 124, 126],
  },
];

export const revenueByMonth = [
  { month: "Jan", revenue: 21500, expenses: 14200 },
  { month: "Feb", revenue: 24800, expenses: 15100 },
  { month: "Mar", revenue: 22100, expenses: 14800 },
  { month: "Apr", revenue: 28700, expenses: 16400 },
  { month: "May", revenue: 31200, expenses: 17200 },
  { month: "Jun", revenue: 29500, expenses: 16800 },
  { month: "Jul", revenue: 34800, expenses: 18100 },
  { month: "Aug", revenue: 38200, expenses: 19500 },
  { month: "Sep", revenue: 41700, expenses: 20800 },
  { month: "Oct", revenue: 44100, expenses: 21200 },
  { month: "Nov", revenue: 47200, expenses: 22400 },
  { month: "Dec", revenue: 48329, expenses: 23100 },
];

export const usersOverTime = [
  { day: "Mon", new: 320, returning: 1240 },
  { day: "Tue", new: 410, returning: 1310 },
  { day: "Wed", new: 380, returning: 1280 },
  { day: "Thu", new: 470, returning: 1420 },
  { day: "Fri", new: 510, returning: 1580 },
  { day: "Sat", new: 360, returning: 1180 },
  { day: "Sun", new: 290, returning: 980 },
];

export const trafficSources = [
  { name: "Organic", value: 42, color: "#7c5cff" },
  { name: "Direct", value: 24, color: "#22d3ee" },
  { name: "Referral", value: 18, color: "#34d399" },
  { name: "Social", value: 12, color: "#fbbf24" },
  { name: "Email", value: 4, color: "#f87171" },
];

export const recentActivity = [
  { time: "2m", text: "New signup from Sofia Chen", type: "signup" },
  { time: "8m", text: "Order #4821 marked as paid ($248.00)", type: "order" },
  { time: "21m", text: "Customer 'Northwind' upgraded to Pro", type: "upgrade" },
  { time: "45m", text: "Order #4820 refunded ($89.00)", type: "refund" },
  { time: "1h", text: "Weekly report generated", type: "system" },
  { time: "2h", text: "New signup from Marcus Lee", type: "signup" },
];

export const customers = [
  { id: 1, name: "Sofia Chen", email: "sofia@northwind.io", plan: "Pro", mrr: 99, status: "Active", joined: "2024-08-12" },
  { id: 2, name: "Marcus Lee", email: "marcus@helix.dev", plan: "Starter", mrr: 29, status: "Active", joined: "2024-09-03" },
  { id: 3, name: "Aisha Patel", email: "aisha@kindlestone.com", plan: "Enterprise", mrr: 499, status: "Active", joined: "2023-11-22" },
  { id: 4, name: "Diego Romero", email: "diego@romero.studio", plan: "Pro", mrr: 99, status: "Trial", joined: "2025-01-14" },
  { id: 5, name: "Emma Wright", email: "emma@brightlab.ai", plan: "Pro", mrr: 99, status: "Active", joined: "2024-06-30" },
  { id: 6, name: "Yuki Tanaka", email: "yuki@meridian.jp", plan: "Enterprise", mrr: 499, status: "Active", joined: "2023-04-18" },
  { id: 7, name: "Liam O'Connor", email: "liam@oconnor.co", plan: "Starter", mrr: 29, status: "Past Due", joined: "2024-10-05" },
  { id: 8, name: "Priya Krishnan", email: "priya@vellum.tech", plan: "Pro", mrr: 99, status: "Active", joined: "2024-12-19" },
  { id: 9, name: "Noah Becker", email: "noah@becker.dev", plan: "Starter", mrr: 29, status: "Cancelled", joined: "2024-02-11" },
  { id: 10, name: "Hana Kim", email: "hana@studiokim.com", plan: "Pro", mrr: 99, status: "Active", joined: "2025-03-08" },
  { id: 11, name: "Alex Rivera", email: "alex@rivera.io", plan: "Enterprise", mrr: 499, status: "Active", joined: "2022-07-29" },
  { id: 12, name: "Sara Müller", email: "sara@blauwerk.de", plan: "Pro", mrr: 99, status: "Trial", joined: "2025-04-21" },
];

export const channelPerformance = [
  { channel: "Search", impressions: 124000, clicks: 8200, conversions: 412 },
  { channel: "Display", impressions: 86000, clicks: 3100, conversions: 98 },
  { channel: "Social", impressions: 58000, clicks: 4800, conversions: 186 },
  { channel: "Email", impressions: 22000, clicks: 6400, conversions: 312 },
  { channel: "Affiliate", impressions: 14000, clicks: 1900, conversions: 84 },
];
