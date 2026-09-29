# Web app

This workspace contains the Next.js frontend for M2S X 7-11 Ph. Run commands from the repository root unless you are working on this package alone.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. The home route redirects to `/login`.

## Current behavior

The sign-in page is a frontend prototype. It checks that Employee ID and password are present and displays a pending message for valid input. It does not send credentials, create a session, or connect to an authentication service. Remember me, password reset, and account creation have no backend behavior yet.

The route files are in `src/app/`. The screen and its form are in `src/features/auth/`; only the form needs client-side state. See [auth page notes](../../docs/auth-page.md) for the current behavior and [API handoff](../../docs/api-integration.md) for the proposed integration boundary.

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```
