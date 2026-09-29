# Sign-in page

The screen at `/login` follows the supplied visual reference, with **Employee ID** in place of **Username**. The home route redirects here.

## Code layout

| File | Responsibility |
| --- | --- |
| `src/app/login/page.tsx` | Route and page metadata |
| `src/features/auth/components/auth-page.tsx` | Hero, branding, office list, and form placement |
| `src/features/auth/components/sign-in-form.tsx` | Input state, required-field validation, and notices |
| `src/features/auth/components/auth-icon.tsx` | Decorative SVG icons |
| `src/features/auth/auth-page.module.css` | Screen layout and responsive styles |

Major page sections are marked in the components with comments such as `//SIGN-IN BUTTON-//` so they are easy to locate.

## Current behavior

- Sign In requires a non-blank Employee ID and a password. It focuses the first invalid field and shows its error beside the input.
- With both fields present, the form displays a pending message. It does not send or save the credentials, authenticate the user, or create a session.
- Show/Hide password changes only the input's visibility. Remember me is a visible checkbox with no session effect.
- Forgot password and Create an account display pending messages. Their flows are not implemented.
- The page uses a live status region for notices and labels and error descriptions for the form inputs.
- The benefit cards follow the supplied design. This prototype does not verify their security or availability claims.

## Assets

- `src/assets/references/auth-final-reference.jpeg` is the supplied design reference.
- `public/images/m2s-office-building.jpeg` is the supplied building photo; `m2s-office-hero-composite.png` is its derivative for the tall hero crop.
- `public/brand/m2s-seven-eleven-lockup.png` is a transparent derivative of the supplied artwork. Replace it with official brand artwork when available.
- `public/images/auth-corner-overlay-user.png` is the supplied decorative overlay.
- Inter is a close visual match. The exact font in the flattened reference image cannot be verified.

## Backend handoff

Before connecting the form, agree on the authentication endpoint, Employee ID rules, session cookies, remember-me behavior, validation errors, password reset, and account creation eligibility. The submit handler marks the integration point. Keep credentials out of browser storage. See [API integration](api-integration.md) for the wider contract guidance.
