# M2S X 7-11 Ph

Monorepo for the M2S X 7-11 Ph product. The web frontend lives in `apps/web`.

## Getting started

```bash
npm install
npm run dev
```

The web app runs at `http://localhost:3000`.

## Workspaces

- `apps/web` — Next.js frontend
- `packages/*` — shared packages added when there is a real shared use case
- `docs` — product, UI, and API integration decisions

Use `npm run build`, `npm run lint`, and `npm run typecheck` from the repo root.

See [project structure](docs/project-structure.md), [API handoff](docs/api-integration.md), [auth page handoff](docs/auth-page.md), and [initial dashboard wireframe](docs/wireframe.md).
