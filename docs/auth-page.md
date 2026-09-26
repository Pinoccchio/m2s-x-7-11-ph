# Auth page handoff

The sign-in screen at `/login` follows the supplied final reference (Image #4). The building photo is the supplied Image #3. The only field label changed from the reference is **Username → Employee ID**.

## Screen sections

| Section | What it contains | Code owner |
| --- | --- | --- |
| Brand hero | Supplied M2S and 7-Eleven lockup, office photo, welcome copy, three benefit cards, office list | `auth-page.tsx` |
| Employee ID input | Text input, accessible label, required-field message | `sign-in-form.tsx` |
| Password input | Password field, show/hide control, required-field message | `sign-in-form.tsx` |
| Sign-in button | Form validation and future API handoff point | `sign-in-form.tsx` |
| Other actions | Remember me checkbox, forgot password, create account | `sign-in-form.tsx` |

Source comments mark the major sections, including `SIGN-IN BUTTON`, so management can find the related code quickly.

## Current behavior

- Sign In checks that Employee ID and password are present, then explains that backend connection is pending. It does not send or save either value.
- Remember me is a visible form preference. Session persistence needs a backend contract before it can take effect.
- Forgot password and Create an account show pending messages. Their backend flows are still undefined.

## Assets and typography

- `apps/web/src/assets/references/auth-final-reference.jpeg` is the untouched final design reference.
- `apps/web/public/images/m2s-office-building.jpeg` is the untouched building photo.
- `apps/web/public/brand/m2s-seven-eleven-lockup.png` is a transparent derivative generated from the supplied visual reference. Replace it with official brand artwork when available.
- `apps/web/public/images/m2s-office-hero-composite.png` is a visual derivative of the supplied office photo, composed for the tall hero crop. The original photo remains available separately.
- `apps/web/public/images/auth-corner-overlay-user.png` is the transparent corner-stripe overlay supplied by the user; it sits over the pale page background.
- Inter is used as a close visual match for the UI text; the exact font from a flattened JPEG cannot be verified.

## Backend handoff

The backend owner should provide the authentication endpoint, Employee ID rules, session cookie behavior, remember-me semantics, validation error format, password reset route, and account creation eligibility. Connect the API at the marked submit handler and keep credentials out of browser storage.
