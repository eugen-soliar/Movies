# SPEC — Movies App: React→Vue 3 Migration

## §G Goal

Migrate React+CRA+CSS Modules Movies app to Vue 3+Vite+CSS Modules. Preserve all
UI, routes, features. One step at a time, no big-bang rewrite.

---

## §C Constraints

- C1: Preserve all existing routes and URL shapes exactly.
- C2: Preserve CSS Module class names; do not rename selectors.
- C3: Keep TMDB API calls identical (same endpoints, same key location).
- C4: No new features during migration.
- C5: Each task must leave the app in a runnable state (incremental).
- C6: Target Vue 3 Composition API (`<script setup>`); no Options API.
- C7: Replace react-router-dom v5 with vue-router v4.
- C8: Replace react-loader-spinner with Vue-compatible spinner (or simple CSS).
- C9: Remove React-specific deps (react, react-dom, react-scripts,
  react-router-dom).
- C10: No test suite required — none exists in source.

---

## §I Interfaces / External Surfaces

| id       | surface           | detail                                                                                  |
| -------- | ----------------- | --------------------------------------------------------------------------------------- |
| I.api    | TMDB REST API     | base `https://api.themoviedb.org/3`; key hardcoded in services/fetchAPI                 |
| I.img    | TMDB image CDN    | `https://image.tmdb.org/t/p/{size}/`                                                    |
| I.routes | Browser URL space | `/`, `/movies`, `/movies/:movieId`, `/movies/:movieId/cast`, `/movies/:movieId/reviews` |
| I.build  | Vite dev+build    | replaces react-scripts; `vite.config.js` at root                                        |

---

## §V Invariants

- V1: All five routes resolve to correct page/component after migration.
- V2: CSS Module scoping preserved — no global class leakage between components.
- V3: TMDB API key not moved to env var (out of scope); fetch functions
  signature unchanged.
- V4: Lazy-loading applied to page-level components (dynamic import +
  `<Suspense>`).
- V5: Pagination accumulates results (load-more appends, does not replace).
- V6: Search query persists in URL (`?searchQuery=`) and survives page refresh.
- V7: Detail page "Return" navigates back to the caller route (Home or Search).
- V8: Nested routes `/cast` and `/reviews` render inside `MovieDetailsPage`
  without full remount.
- V9: App runs on `vite dev` and `vite build` with zero console errors after
  each task.
- V10: All lazy-loaded SFCs defined via
  `defineAsyncComponent(() => import(...))` ; `<Suspense>` wraps only trees
  containing async components; no bare dynamic import used as a component.
- V11: `vue-router` pinned ≥ 4.1.0; navigation `state: { from: route }` verified
  — detail page "Return" lands on originating route, not always `/`.
- V12: `MovieDetailsPage` sub-route links built using `useRoute().path`; Cast
  and Reviews links resolve correctly under any `:movieId`.

---

## §T Tasks

| id  | status | subject                                                                                                             | cites               |
| --- | ------ | ------------------------------------------------------------------------------------------------------------------- | ------------------- |
| T1  | x      | Scaffold Vite+Vue3 project; install vue-router v4 (≥4.1.0); delete CRA scripts                                      | I.build, V9, V11    |
| T2  | x      | Wire vue-router config skeleton: all five routes, lazy imports, catch-all redirect                                  | V1, V4, V8, V10     |
| T3  | x      | Port `App` root → Vue SFC + `main.js` entry (`createApp().use(router).mount()`); stub `<RouterView>` + `<Suspense>` | V1, V4, V9          |
| T4  | x      | Port `src/index.css` + global styles; verify `modern-normalize` import                                              | V2                  |
| T5  | x      | Port `services/fetchAPI.js` → plain JS module (no React dep); keep fn signatures                                    | I.api, V3           |
| T6  | x      | Port `utils/genreFinder.js` + `utils/scrollDown.js` (no React dep)                                                  | —                   |
| T7  | .      | Port `Container` component → Vue SFC with CSS Module                                                                | V2, V9              |
| T8  | .      | Port `Header` component → Vue SFC; use `<RouterLink>` active-class                                                  | V1, V2              |
| T9  | .      | Port `LoadMore` component → Vue SFC; align PropTypes → fix declaration to `onClick`                                 | V2                  |
| T10 | .      | Port `MoviesList` view → Vue SFC; pass `{ movies, genres }` as props; use `useRoute()` for back-state               | V2, V7, V11         |
| T11 | .      | Port `HomePage` page → Vue SFC; useState→ref, useEffect→onMounted/watch                                             | V1, V4, V5          |
| T12 | .      | Port `MoviesPage` page → Vue SFC; URL query via `useRoute`; push via `useRouter`                                    | V1, V4, V5, V6      |
| T13 | .      | Port `MovieDetailsPage` → Vue SFC; `useRoute().path` for sub-links; nested `<RouterView>`                           | V1, V4, V7, V8, V12 |
| T14 | .      | Port `Cast` sub-page → Vue SFC                                                                                      | V1, V8              |
| T15 | .      | Port `Reviews` sub-page → Vue SFC                                                                                   | V1, V8              |
| T16 | .      | Replace react-loader-spinner with `defineAsyncComponent` + CSS spinner; update all usage                            | V4, V9, V10         |
| T17 | .      | Smoke-test all routes; verify V1–V12; remove unused React deps from package.json                                    | V9                  |

---

## §B Bugs

| id  | date | cause | fix |
| --- | ---- | ----- | --- |
