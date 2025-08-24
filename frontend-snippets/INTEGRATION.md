# Integration notes (Angular)

1) Copy `frontend-snippets/app/core/services/api.service.ts` into your Angular app (e.g., `src/app/core/services`).
2) Copy components under `frontend-snippets/app/features/*` into your app and register them in your routes/pages.
3) Ensure HttpClientModule is imported in your app root.
4) Add the SCSS tokens to global styles:
   `@use './styles/tokens';` (and copy `_tokens.scss` to `src/styles/_tokens.scss`)
5) Use components:
   - Music grid: `<app-release-grid />`
   - Tour list: `<app-tour-list />`
6) Create `proxy.conf.json` to proxy `/api` → `http://localhost:3000` during dev.
