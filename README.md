# Movies App — React → Vue 3 Migration

A TMDB movie browser migrated from React + CRA to Vue 3 + Vite, preserving all
UI and functionality.

## Stack

| Before                            | After                                   |
| --------------------------------- | --------------------------------------- |
| React 17 + CRA (react-scripts)    | Vue 3 + Vite 5                          |
| react-router-dom v5               | vue-router v4                           |
| React hooks (useState, useEffect) | Composition API (ref, watch, onMounted) |
| react-loader-spinner              | CSS spinner                             |

## Routes

| Path                       | Page                        |
| -------------------------- | --------------------------- |
| `/`                        | Trending movies (paginated) |
| `/movies?searchQuery=`     | Search                      |
| `/movies/:movieId`         | Movie detail                |
| `/movies/:movieId/cast`    | Cast (nested)               |
| `/movies/:movieId/reviews` | Reviews (nested)            |

## Migration approach

Incremental — one component at a time, app kept buildable at every step:

1. Scaffolded Vite + Vue 3, wired router skeleton and App entry before any
   component work
2. Ported utilities and services first (no framework deps — no changes needed)
3. Ported leaf components (Container, Header, LoadMore, MoviesList) with CSS
   Modules unchanged
4. Ported page components (HomePage, MoviesPage, MovieDetailsPage, Cast,
   Reviews)
5. Replaced `react-loader-spinner` with a CSS animated spinner
6. Removed all dead React source files

Key translation patterns:

- `useState` → `ref`; `useEffect` → `watch({ immediate: true })` or `onMounted`
- `useParams/useLocation/useHistory` → `useRoute/useRouter`
- `<NavLink activeClassName>` → `<RouterLink :active-class>`
- `<Switch><Route>` → `<RouterView>` (nested routes declared in router config)
- `React.lazy + <Suspense>` → `defineAsyncComponent + <Suspense>`
- CSS Modules: class names preserved verbatim; only import syntax changed

## Notable bugs caught during migration

- `route.path` mutates when a child route is active — sub-links in
  `MovieDetailsPage` must use `/movies/${route.params.movieId}/cast|reviews` as
  a static base, not `route.path`
- `defineAsyncComponent` is exported from `vue`, not `vue-router`
- App root stub must wire `<Container>` and `<Header>` before page components
  are ported
