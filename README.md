<div align="center">

# Pulse

### A modern analytics dashboard built with Next.js, React, and Recharts.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38BDF8?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Recharts](https://img.shields.io/badge/Recharts-2-FF6384)](https://recharts.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**[Live Demo](https://pulse-dashboard-two-psi.vercel.app/dashboard) · **[Report Bug](../../issues)** · **[Request Feature](../../issues)**

</div>

## About

Pulse is a responsive, dark-themed analytics dashboard that demonstrates production patterns in a modern Next.js front-end: App Router, Server vs. Client components, composable charts, and a custom design system. Built as a portfolio piece to show fluency in React and Next.js fundamentals.

## Features

- **Three full pages** — Overview, Analytics, and Customers, each with its own layout and data needs.
- **Interactive charts** — Area, stacked bar, donut, grouped bar, and sparkline visualizations powered by Recharts.
- **Searchable data table** — Multi-column sort, plan filter, live row count and MRR total, all derived with `useMemo`.
- **Responsive layout** — Sidebar collapses on mobile; grids reflow at `md` and `lg` breakpoints.
- **Custom dark theme** — Cohesive palette defined in `tailwind.config.js`, themed Recharts tooltips, custom scrollbars.
- **Date-range filter** — Stateful filter component reused across Overview and Analytics pages.


## Tech Stack

| Layer        | Choice                              | Why                                                       |
|--------------|-------------------------------------|-----------------------------------------------------------|
| Framework    | [Next.js 14](https://nextjs.org)    | App Router, Server Components, file-based routing.        |
| UI Library   | [React 18](https://react.dev)       | Functional components and hooks throughout.               |
| Styling      | [Tailwind CSS](https://tailwindcss.com) | Utility-first; consistent custom theme.               |
| Charts       | [Recharts](https://recharts.org)    | Composable React chart primitives.                        |
| Icons        | [Lucide](https://lucide.dev)        | Clean, consistent SVG icon set.                           |
| Deployment   | [Vercel](https://vercel.com)        | Zero-config Next.js hosting.                              |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) 18.17 or newer
- npm (ships with Node)

### Installation

```bash
git clone https://github.com/c1vxs/pulse-dashboard.git
cd pulse-dashboard
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the home page redirects to `/dashboard`.

### Production build

```bash
npm run build
npm start
```

## Project Structure

```
pulse-dashboard/
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── layout.jsx         # Root layout (sidebar + topbar)
│   │   ├── page.jsx           # Redirects to /dashboard
│   │   ├── globals.css        # Tailwind + custom styles
│   │   ├── dashboard/         # Overview page
│   │   ├── analytics/         # Analytics page
│   │   └── customers/         # Customers page
│   ├── components/            # Reusable React components
│   │   ├── Sidebar.jsx        # Nav with active-link highlight
│   │   ├── Topbar.jsx
│   │   ├── KpiCard.jsx        # KPI card with inline sparkline
│   │   ├── RevenueChart.jsx   # AreaChart with gradient fill
│   │   ├── UsersChart.jsx     # Stacked BarChart
│   │   ├── TrafficChart.jsx   # Donut PieChart
│   │   ├── ChannelChart.jsx   # Grouped BarChart
│   │   ├── ConversionFunnel.jsx
│   │   ├── ActivityFeed.jsx
│   │   ├── DateRangeFilter.jsx
│   │   └── DataTable.jsx      # Search + multi-sort + filter
│   └── lib/
│       └── mockData.js        # All mock data
├── docs/                      # Screenshots for README
├── tailwind.config.js
├── next.config.mjs
└── package.json
```

## What This Project Demonstrates

- **App Router fluency** — nested routes, root layout, `redirect()` from a Server Component, `usePathname()` for active-link state.
- **Server vs. Client components** — pages default to Server Components; interactivity opts in with `"use client"`.
- **React hooks in real contexts** — `useState` for filters and toggles, `useMemo` for derived table state.
- **Component composition** — chart, KPI, and filter components reused across pages.
- **Custom design system** — named colors in Tailwind config, consistent spacing scale, themed third-party UI (Recharts tooltips, scrollbars).
- **Responsive design** — grids reflow gracefully from mobile to desktop.

## Roadmap

- [ ] Migrate to TypeScript
- [ ] Replace mock data with a real API layer (SWR or React Query)
- [ ] URL-driven filter state (`useSearchParams`)
- [ ] Server-side pagination on the customers table
- [ ] NextAuth for authentication
- [ ] Unit tests with Vitest + Testing Library
- [ ] Dark / light theme toggle

## Deploy Your Own

Deploy in one click with Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/c1vxs/pulse-dashboard)

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.

## Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [Recharts Examples](https://recharts.org/en-US/examples)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)

---

<div align="center">

Built by **Chris Atahan** · [LinkedIn](https://linkedin.com) · [Portfolio](https://example.com)

</div>
