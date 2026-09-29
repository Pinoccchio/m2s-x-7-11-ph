# M2S X 7-11 Ph

This repository contains the Next.js frontend for M2S X 7-11 Ph. The current screen is a sign-in prototype; backend authentication is not connected.

## Getting started

Use Node.js and npm. Install dependencies and start the app from the repository root:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. The home route redirects to `/login`.

## Repository layout

- `apps/web` — Next.js app, including the sign-in screen and static assets.
- `docs` — current UI behavior, project structure, API handoff, and an initial dashboard wireframe.
- `package.json` and `turbo.json` — npm workspace and task configuration.

The workspace configuration allows future `apps/*` and `packages/*` entries. Only `apps/web` exists today. See [project structure](docs/project-structure.md) for the current layout and extension guidelines.

## Checks

Run these from the repository root:

```bash
npm run lint
npm run typecheck
npm run build
```

See the [web app guide](apps/web/README.md), [auth page notes](docs/auth-page.md), and [API handoff](docs/api-integration.md) for behavior and integration details. The [dashboard wireframe](docs/wireframe.md) is a concept, not an implemented route.
