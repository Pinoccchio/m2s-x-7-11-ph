# Frontend and backend handoff

Use this as a starting agreement for each feature. The backend owner keeps the API contract current; the frontend consumes the contract and owns the screen states.

## Agree before connecting a feature

- Endpoint and HTTP method
- Request filters, sorting, and pagination format
- Response fields, nullability, and status enum values
- Authentication/session mechanism and permission failures
- Validation and error response shape
- Date/time format and timezone
- Empty, partial, and stale data behavior

## Suggested response conventions

Use resource-shaped JSON for successful responses and a consistent error object. For example:

```json
{
  "data": [],
  "meta": { "page": 1, "pageSize": 20, "total": 0 }
}
```

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Some fields need attention.",
    "requestId": "...",
    "fields": { "name": ["This field is required."] }
  }
}
```

These are proposals, not assumed backend requirements. Agree on one shape with the backend owner and document it in the OpenAPI contract.

## Frontend implementation boundary

```text
feature screen -> feature api module -> shared API transport -> backend
```

- Keep endpoint-specific functions and input/output usage in `src/features/<feature>/api/`.
- Keep base URL, credentials, request IDs, and common error parsing in `src/lib/api/`.
- Generate TypeScript types/client from the agreed OpenAPI document when the contract is available.
- Render loading, empty, error, and success states explicitly so API changes don't become silent blank screens.
- Validate user input at the form boundary. Treat server validation as authoritative for persisted data.
- Add secrets only to server-side environment variables. Browser-exposed `NEXT_PUBLIC_*` values are public.
