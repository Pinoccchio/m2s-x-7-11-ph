# Project structure

## Current layout

```text
m2s-x-7-11-ph/
├── apps/
│   └── web/
│       ├── public/                    # Images and other browser assets
│       └── src/
│           ├── app/                   # / redirects to /login; /login renders the auth screen
│           ├── assets/references/     # Supplied visual reference
│           └── features/auth/         # Sign-in screen, form, icons, and styles
├── docs/                             # UI and API handoff notes
├── package.json                      # npm workspaces and root commands
└── turbo.json                        # Task configuration
```

The route files compose the screen in `features/auth`. `SignInForm` is the client component because it owns input state and event handlers. There is no backend app, shared package, API client, or dashboard route yet.

## Adding features

- Keep route files small and place feature-specific UI alongside its related behavior.
- Add shared components or packages only after a real second use. The root workspace patterns already allow `apps/*` and `packages/*`.
- When an API contract exists, keep endpoint calls near the feature and share transport and error handling across features. Generate client types from the agreed contract where practical.
- Keep secrets on the server. Values exposed through `NEXT_PUBLIC_*` are public.

See [API integration](api-integration.md) for the proposed frontend/backend boundary. The [dashboard wireframe](wireframe.md) describes a possible future screen, not the current app.
