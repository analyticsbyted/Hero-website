# Security Note: Admin Analytics ships credentials to the browser

**Status:** Resolved. The client no longer imports `@google-analytics/data` or reads `VITE_GOOGLE_APPLICATION_CREDENTIALS`; the dependency was removed. The backend endpoint is still to be built (see README). The text below describes the original issue.
**Where:** `src/Pages/AdminDash/Analytics.jsx` (routed at `/admin/*` via `src/App.jsx`, behind `featureFlags.showAdminLink`).
**Severity:** High — if ever deployed with real values, a GA4 service-account credentials file is exposed to every visitor of the built site.

## What the code does today

```js
// src/Pages/AdminDash/Analytics.jsx
import { BetaAnalyticsDataClient } from "@google-analytics/data";
...
const propertyId = import.meta.env.VITE_GA4_PROPERTY_ID;
const credentials = JSON.parse(
  import.meta.env.VITE_GOOGLE_APPLICATION_CREDENTIALS
);
...
const analyticsDataClient = new BetaAnalyticsDataClient({ credentials });
const [response] = await analyticsDataClient.runReport({ ... });
```

This component runs in the browser (it's a normal React page component, rendered client-side), and calls Google's `@google-analytics/data` client — the official **server-side** GA4 Data API client — directly from there.

## How this becomes a real leak

Vite inlines every `import.meta.env.VITE_*` variable as a literal string constant into the JavaScript bundle at **build time**. That's the documented, intentional behavior of the `VITE_` prefix — it exists specifically to expose build-time config to client code. It is not a runtime secret store; anything assigned to a `VITE_*` variable becomes plain text in `dist/assets/*.js`, downloadable by anyone who loads the page, with no authentication required.

So the moment a real value is set for `VITE_GOOGLE_APPLICATION_CREDENTIALS` (a full GCP service-account JSON key — private key included) in whatever `.env` file or CI/build secret feeds the production build, that JSON gets baked into the public bundle. Opening browser devtools → Sources (or just `curl`-ing the built JS file and grepping it) hands anyone the service account's private key.

Separately — and this compounds the problem rather than mitigating it — `@google-analytics/data` is a Node-only package (it depends on `gRPC`, `gaxios`, and Node core modules like `net`, `tls`, `fs`, `crypto`, `child_process`). Vite currently builds it into the browser bundle anyway, externalizing each Node built-in to an empty stub with a console warning rather than failing the build (confirmed while fixing the unrelated dependency vulnerabilities in this repo — see commit `8c3f86d`). That means:
- The credentials are compiled into the bundle regardless of whether the feature ever successfully runs.
- Even if the credentials were somehow safe, the gRPC calls this library makes would not function in a browser sandbox (no raw TCP/TLS sockets) — the feature can't actually work client-side even before the security problem.

## Why it matters

Whoever extracts that key gets whatever access the service account was granted — at minimum, read access to this property's GA4 data via the Data API. If the same service account is reused elsewhere (a common shortcut), the blast radius is bigger than just analytics data. And because the leak lives in a static JS bundle, it doesn't show up as a "hack" in any log — it's just sitting in a public file for as long as that build is deployed.

Today this is not yet an active leak: there is no CI/deploy workflow in this repo (unlike `herocompliancev3`) and no `.env` committed, so nothing suggests production values have been wired in yet. Fixed before that happens — this note exists so it stays fixed before someone sets those env vars to ship the feature.

## Proposed fix

Move the GA4 Data API call behind a small server-side endpoint; never let the credentials JSON reach client code.

1. **Add a backend route** (reuse the existing `src/utils/server.js` Express proxy pattern already in this repo, or a serverless function on whatever host serves this site) that:
   - Reads the service-account credentials from a **server-only** env var (no `VITE_` prefix, e.g. `GOOGLE_APPLICATION_CREDENTIALS` or `GA4_SERVICE_ACCOUNT_JSON`), sourced from the server/host's secret store — never committed, never part of the Vite build.
   - Instantiates `BetaAnalyticsDataClient` and calls `runReport` there, server-side, where Node's `net`/`tls`/`grpc` support actually exists.
   - Exposes a simple `POST /api/analytics/report` (or similar) that accepts the metric/date-range params `Analytics.jsx` already collects, and returns just the formatted report JSON.
2. **Update `Analytics.jsx`** to `fetch()` that endpoint instead of importing `@google-analytics/data` or reading `VITE_GOOGLE_APPLICATION_CREDENTIALS` directly. Drop the `@google-analytics/data` import from client code entirely.
3. **Gate the endpoint** behind whatever auth this admin area ends up using (see `src/service/authContext.jsx` groundwork in the sibling `herocompliancev3` repo) so only logged-in admins can trigger a report — otherwise the leak just moves from "the JS bundle" to "an open API anyone can call."
4. **Rotate** the service-account key once the backend is in place, in case a build with real values was ever produced and shared/deployed.
5. Once the fix lands, `@google-analytics/data` (and the transitive gRPC/protobufjs/google-auth-library tree it pulls in) can move to the backend's own `package.json` / dependencies and disappear from this frontend project's bundle entirely — smaller build, and one less Node-only package for Vite to awkwardly externalize.

This is a design change, not a dependency bump, so it wasn't made as part of the `npm audit` remediation in commit `8c3f86d` — flagging it here for a deliberate decision on the backend approach (Express route vs. serverless function) before this ships.
