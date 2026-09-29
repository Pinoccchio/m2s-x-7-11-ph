# M2S X 7-11 Ph

Next.js frontend for the M2S X 7-11 Ph workspace. The current app contains a responsive sign-in page. Authentication and account flows are not connected to a backend yet.

## Requirements

- Node.js 20.17 or later in the 20.x line, or Node.js 22.9 or later
- npm 11.11.0 (the version declared in `package.json`)

## Run locally

From the repository root:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The `/` route redirects to `/login`. If port 3000 is already in use, use the URL printed by Next.js.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the web app locally |
| `npm run lint` | Check code style and common issues |
| `npm run typecheck` | Check TypeScript types |
| `npm run build` | Create a production build |

## Repository layout

| Path | Purpose |
| --- | --- |
| `apps/web` | Next.js app, sign-in screen, and static assets |
| `docs` | Current UI behavior and future API handoff notes |
| `package.json`, `turbo.json` | Workspace and task configuration |

The workspace configuration allows additional apps and shared packages, but only `apps/web` exists today. See the [project structure](docs/project-structure.md) for the current layout.

## Current behavior

The sign-in form checks that Employee ID and password are present. It does not submit credentials or create a session. Remember me, password reset, and account creation are visible but have no backend behavior. See the [sign-in page notes](docs/auth-page.md) and [API handoff](docs/api-integration.md) for details.

The [dashboard wireframe](docs/wireframe.md) is a concept, not an implemented route. For web-app-specific notes, see the [web app guide](apps/web/README.md).
