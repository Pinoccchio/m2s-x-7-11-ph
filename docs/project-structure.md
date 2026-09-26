# Project structure

```text
m2s-x-7-11-ph/
├── apps/
│   └── web/                         # Next.js frontend owned by frontend work
│       ├── public/                  # Static assets
│       └── src/
│           ├── app/                 # Routes, layouts, loading/error boundaries
│           ├── features/            # Product areas grouped by capability
│           ├── components/
│           │   ├── ui/              # Reusable visual primitives
│           │   └── layout/          # Sidebar, header, responsive navigation
│           ├── lib/                 # API transport, auth helpers, utilities
│           └── styles/              # Global styles and design tokens
├── packages/                        # Add a package when code is shared for real
│   ├── ui/                          # Shared design system, when another app needs it
│   └── api-client/                  # Generated client/types from backend OpenAPI
├── docs/
│   ├── api-integration.md           # Frontend/backend working agreement
│   ├── project-structure.md
│   └── wireframe.md
├── package.json                     # npm workspaces and root commands
├── package-lock.json
└── turbo.json                       # Task graph and build caching
```

## Frontend feature pattern

Keep route files small. A route composes a feature screen; that feature owns its UI, API calls, schemas, and types.

```text
src/
├── app/
│   ├── (dashboard)/
│   │   ├── layout.tsx
│   │   ├── page.tsx                 # Overview route
│   │   ├── operations/page.tsx
│   │   ├── locations/page.tsx
│   │   └── reports/page.tsx
│   └── (auth)/login/page.tsx
├── features/
│   ├── overview/
│   │   ├── api/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── schemas/
│   │   └── types/
│   ├── operations/                  # Same shape, only as needed
│   ├── locations/
│   └── reports/
├── components/
│   ├── ui/
│   └── layout/
└── lib/
    ├── api/                         # Shared fetch setup and generated client
    ├── auth/
    └── utils/
```

Don't create every future folder in advance. Add a feature when its first screen or workflow is known. Keep one-off components inside their feature; promote them to `components/ui` after a second real use. This keeps the app easy to navigate without making the starter mostly empty abstractions.

## Backend collaboration

- The backend owner defines and publishes the API contract (prefer OpenAPI).
- Generate the frontend client and response types from that contract; don't copy backend models into a second hand-maintained types folder.
- Frontend code calls the API through feature `api/` modules and one shared transport layer. Components receive typed data and show loading, empty, error, and success states.
- Keep API base URLs in environment config. Never expose service keys or backend secrets through `NEXT_PUBLIC_*`.
- If the backend is also part of this repository, add it under `apps/api` with its own package and deployment lifecycle. If it lives elsewhere, keep this repo focused on the web app and shared contract/client.
- Agree on auth/session handling, pagination, filters, status enums, timezone, and error format before implementing each connected workflow.
