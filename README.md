# Pulse — Analytics Dashboard

A modern SaaS-style analytics dashboard built with **Next.js 14 (App Router)**, **React**, **Tailwind CSS**, and **Recharts**.

Three pages, a dozen reusable components, interactive filters, charts, and a searchable/sortable data table. Designed to be a strong portfolio piece for a front-end internship application.

---

## Run it locally

You need Node.js 18.17+ installed. Check with `node --version`. If you don't have it, download from [nodejs.org](https://nodejs.org).

From inside this folder:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000). The home page redirects to `/dashboard`.

To build for production:

```bash
npm run build
npm start
```

---

## What's in here

```
pulse-dashboard/
├── src/
│   ├── app/                   # Next.js App Router pages
│   │   ├── layout.jsx         # Root layout (sidebar + topbar)
│   │   ├── page.jsx           # Redirects to /dashboard
│   │   ├── globals.css        # Tailwind + custom styles
│   │   ├── dashboard/page.jsx # Overview: KPIs, revenue, users, traffic
│   │   ├── analytics/page.jsx # Channels, funnel, deeper charts
│   │   └── customers/page.jsx # Searchable/sortable customer table
│   ├── components/            # Reusable React components
│   │   ├── Sidebar.jsx        # Nav with active-link highlight (usePathname)
│   │   ├── Topbar.jsx
│   │   ├── KpiCard.jsx        # KPI card with sparkline
│   │   ├── RevenueChart.jsx   # Recharts AreaChart with gradient fill
│   │   ├── UsersChart.jsx     # Recharts stacked BarChart
│   │   ├── TrafficChart.jsx   # Recharts donut PieChart
│   │   ├── ChannelChart.jsx   # Recharts grouped BarChart
│   │   ├── ConversionFunnel.jsx
│   │   ├── ActivityFeed.jsx
│   │   ├── DateRangeFilter.jsx# Stateful filter (useState)
│   │   └── DataTable.jsx      # Search, multi-sort, plan filter (useMemo)
│   └── lib/
│       └── mockData.js        # All mock data lives here
├── package.json
├── tailwind.config.js
├── next.config.mjs
└── README.md
```

---

## Tech stack

| Tech         | Why                                                       |
|--------------|-----------------------------------------------------------|
| Next.js 14   | Industry-standard React framework. App Router is current. |
| React 18     | Functional components + hooks (`useState`, `useMemo`).    |
| Tailwind CSS | Utility-first CSS, fast to iterate, looks professional.   |
| Recharts     | Composable React chart library, widely used.              |
| lucide-react | Clean SVG icon set.                                       |

---

## What this project demonstrates

A reviewer looking at this code will see:

- **App Router fluency** — root layout, nested routes (`/dashboard`, `/analytics`, `/customers`), `redirect()` in a Server Component, `usePathname()` for active-link state.
- **Server vs Client components** — pages are Server Components by default; interactive pieces opt in with `"use client"`.
- **Hooks** — `useState` for filters and toggles, `useMemo` to memoize sorted/filtered table rows.
- **Component composition** — KPI card, chart, and table components are reused across pages.
- **Data visualization** — five chart types (Area, Bar, stacked Bar, Pie/donut, sparkline) plus a custom CSS funnel.
- **Responsive design** — Tailwind responsive utilities (`md:`, `lg:`); grids collapse on mobile.
- **A custom design system** — dark theme with named colors in `tailwind.config.js`, consistent spacing, custom scrollbars, themed Recharts tooltips.

---

## For your CV

Pick the bullets that fit. Tweak the wording so it sounds like you.

> **Pulse — Analytics Dashboard** · Next.js, React, Tailwind, Recharts · [github.com/chris/pulse-dashboard]
> - Built a responsive SaaS-style analytics dashboard with three pages (overview, analytics, customers) using **Next.js 14 App Router**, Server and Client components, and custom Tailwind theming.
> - Implemented five interactive **Recharts** visualizations (area, stacked bar, donut, grouped bar, sparkline) backed by a mock data layer that mirrors a real API contract.
> - Built a searchable, multi-column-sortable customer table with derived state memoized via `useMemo`; supports plan filtering and live MRR totals.
> - Designed a cohesive dark UI with reusable components (KPI card, chart container, filter bar) and accessible interactive states.

If you want to tie this to VasariAI on your CV:

> - Rebuilt VasariAI's internal reporting UI as a Next.js front-end with interactive Recharts visualizations (see *Pulse* repo for the public version).

---

## What to say in interviews

Likely questions, and what's actually true about this code:

**"Walk me through how this is structured."**
Next.js 14 App Router. Root layout in `src/app/layout.jsx` wraps every page with a Sidebar and Topbar. Each route is a folder under `src/app/` with a `page.jsx`. Pages that need interactivity (filters, sorting) use `"use client"`; everything else is a Server Component by default.

**"Why Server vs Client components?"**
Server Components render on the server and ship less JS to the browser — good default. I opt into Client Components only when a piece needs state, effects, or browser-only APIs. For example, `Sidebar` uses `usePathname()` (browser API) so it has `"use client"`. The customer table needs `useState` and `useMemo`, so it's a client component too. The customers *page itself* could be a Server Component that just renders the table.

**"How does the data table sort?"**
Local state holds the sort key and direction. A `useMemo` recomputes the sorted/filtered rows when any of `query`, `sort`, or `planFilter` changes. Clicking a header toggles the direction if it's the same column, or sets a new column with ascending direction.

**"How would you connect this to a real backend?"**
Replace the imports from `lib/mockData.js` with `fetch()` calls in Server Components (Next.js automatically deduplicates and caches them). For client-side reactivity I'd use SWR or React Query. Mutations would go through Next.js Route Handlers or Server Actions.

**"What would you do next?"**
Add TypeScript, real auth (NextAuth), a database (Postgres + Prisma), URL-driven filter state (`useSearchParams`), pagination on the table, and tests with Vitest + Testing Library.

---

## Customizing

- **Change the brand name / colors**: edit `tailwind.config.js` (color palette) and `src/components/Sidebar.jsx` (logo + name).
- **Swap mock data for real data**: edit `src/lib/mockData.js`, or replace it with `fetch()` calls inside Server Components.
- **Add a page**: create `src/app/<route>/page.jsx` and add an entry to `navItems` in `Sidebar.jsx`.

---

## Deploying

The fastest way is [Vercel](https://vercel.com) (made by the team behind Next.js):

1. Push this folder to a new GitHub repo.
2. Go to Vercel, click **New Project**, import the repo.
3. Click Deploy. Done — you get a public URL.

A public URL is a huge plus on a CV. Add it next to the project name.
