# Initial wireframe

Working concept: an operations dashboard for M2S X 7-11 Ph. Confirm the exact workflows with the product owner before treating the labels or metrics below as final.

## Desktop: overview

```text
┌─────────────────────────────────────────────────────────────────────────┐
│ M2S × 7-Eleven PH     Search…                 Help  Notifications  User │
├──────────────┬──────────────────────────────────────────────────────────┤
│ Overview     │ Good morning, [name]             [Date range ▾] [Export] │
│ Operations   │                                                          │
│ Locations    │ ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌─────────┐ │
│ Reports      │ │ KPI 1      │ │ KPI 2      │ │ KPI 3      │ │ KPI 4   │ │
│ Team         │ └────────────┘ └────────────┘ └────────────┘ └─────────┘ │
│ Settings     │                                                          │
│              │ ┌───────────────────────────┐ ┌────────────────────────┐ │
│              │ │ Trends / activity chart  │ │ Needs attention        │ │
│              │ │                           │ │ Status + next action   │ │
│              │ └───────────────────────────┘ └────────────────────────┘ │
│              │                                                          │
│              │ Recent activity / records                               │
│              │ Search  Filters                         [View all]      │
│              │ ┌─────────────────────────────────────────────────────┐ │
│              │ │ ID | Location | Status | Updated | Owner | Action   │ │
│              │ └─────────────────────────────────────────────────────┘ │
└──────────────┴──────────────────────────────────────────────────────────┘
```

## Mobile

```text
┌──────────────────────────┐
│ ☰  M2S × 7-Eleven   🔔   │
│ Search…                  │
│ Overview       [Date ▾]  │
│ ┌──────────────────────┐ │
│ │ Primary KPI          │ │
│ └──────────────────────┘ │
│ [KPI 2]       [KPI 3]    │
│ Needs attention          │
│ ┌──────────────────────┐ │
│ │ Item + status        │ │
│ │ Primary action       │ │
│ └──────────────────────┘ │
│ Recent activity          │
│ [compact record card]    │
│ Overview Operations More │
└──────────────────────────┘
```

Keep the dashboard focused on the next action: show a small set of meaningful metrics, make exceptions easy to spot, and let users open a record for its full details. Use tables on wide screens and compact cards on small screens.

## API collaboration

- Agree on endpoint names, pagination, filters, status values, and error shapes with the backend owner before wiring real data.
- Treat the API contract as the source of truth. Prefer an OpenAPI spec from the backend and generate the frontend client/types from it; avoid maintaining duplicate hand-written DTOs.
- Keep API calls and response mapping in `src/features/<feature>/api` and `src/lib/api`; keep loading, empty, error, and success states in each feature's UI.
- Put only browser-safe configuration in `NEXT_PUBLIC_*`. Keep secrets on the server.
