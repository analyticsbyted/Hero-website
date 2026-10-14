# Hero Compliance Marketing Site

A React + Vite single-page application for the Hero Compliance marketing site, including an admin dashboard section (Stripe/Cognito-adjacent groundwork, GA4 analytics view) under `/admin`.

## Getting Started

```bash
npm install
npm run dev      # start the Vite dev server
npm run build    # production build to dist/
npm run preview  # preview the production build locally
npm run lint     # ESLint
```

**Prerequisites:** Node.js `^20.19.0` or `>=22.12.0` (required by Vite 7).

## Admin Analytics

`src/Pages/AdminDash/Analytics.jsx` no longer holds any Google credentials. It POSTs `{ startDate, endDate, metric }` to the URL in `VITE_ANALYTICS_API_URL` and expects a GA4 `runReport`-shaped JSON response. That backend endpoint does not exist yet. When building it, keep the service-account key in a server-only secret, never a `VITE_*` variable, and require admin auth on the route. See [`SECURITY_NOTE_admin_analytics.md`](./SECURITY_NOTE_admin_analytics.md) for history.

## Maintenance Log

- **2026-09-06 — Build fix + dependency security remediation** (commits `02b0b17`, `8c3f86d`, `7b41556`):
  - Fixed a broken `npm run build`: added the missing `error.html` (referenced by `vite.config.js`'s copy-assets plugin but absent from the repo) and added the `bootstrap` package as a real dependency (`src/index.css` imported its CSS directly, but only the unused `react-bootstrap` was ever declared).
  - Resolved a GitHub security advisory for `nanoid` (GHSA-2v37-7h3g-55p8, transitive via `postcss`), then cleared the remaining `npm audit` findings (40 → 0). Removed unused dependencies (`jsonwebtoken`, `bcryptjs`, `uuid`, `react-gtm-module`, `react-bootstrap`); kept `@google-analytics/data` since it's actually used (see Known Issue above); upgraded `react-router-dom` 6→7, `swiper` 11→14, and `vite`/`@vitejs/plugin-react` 5/4→7/5; added npm `overrides` for `nanoid`, `qs`, and `uuid`.
  - Documented the client-side credential exposure in `AdminDash/Analytics.jsx` found while doing this work (see `SECURITY_NOTE_admin_analytics.md`).
