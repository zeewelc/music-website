
# Integration notes (Angular)

1) Copy `frontend-snippets/app/core/services/api.service.ts` into your Angular app (e.g., `src/app/core/services`).
2) Copy components under `frontend-snippets/app/features/*` into your app and register them in the routes or host pages.
3) Import HttpClientModule in your `app.config.ts` or `app.module.ts`.
4) Add the SCSS tokens in your global styles (e.g., `src/styles.scss`):
   `@use './styles/tokens';`
5) Use components:
   - Music grid: `<app-release-grid />`
   - Tour list: `<app-tour-list />`
6) Ensure your Angular dev server proxies `/api` to the backend (create `proxy.conf.json`).
