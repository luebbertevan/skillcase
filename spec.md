## Skillcase Portfolio - Specification (Iteration 0: Static Site)

### Goals for this phase

-   **Static portfolio**: Display projects from local data (JSON/TS), no external API calls.
-   **Clean file structure**: Clear separation of UI, types, data, and utilities.
-   **TypeScript-first**: Strong types for project data and components.
-   **Small iterations**: Each milestone produces a minimal, reviewable diff (≤300 LOC).

### Tech Stack (current phase)

-   **Frontend**: React + TypeScript
-   **Build**: Vite
-   **Styling**: Tailwind CSS (utility-first)
-   **Routing**: `react-router-dom` (included from M0)
-   **State**: Local component state only
-   **Data**: Local `projects` data file

### High-Level Architecture (static)

-   **App shell**: `App` renders layout (header, main, footer)
-   **Pages**: `HomePage` (list of projects), future `ProjectPage` (per-project)
-   **UI components**: Reusable components like `ProjectCard`, `Header`, `Footer`
-   **Domain types**: Central `Project` interface ensures consistent data
-   **Data source**: Local `src/data/projects.ts` during static phase

### Proposed File Structure (initial)

```
skillcase/
  README.md
  spec.md
  package.json
  tsconfig.json
  vite.config.ts
  tailwind.config.ts
  postcss.config.js
  index.html
  src/
    main.tsx
    App.tsx
    routes/
      index.tsx            // Exports app routes
    pages/
      HomePage/
        HomePage.tsx
      ProjectPage/         // Added later when detail view exists
        ProjectPage.tsx
    components/
      Header/
        Header.tsx
      Footer/
        Footer.tsx
      ProjectCard/
        ProjectCard.tsx
      EmptyState/
        EmptyState.tsx
    data/
      projects.ts          // Typed local data source
    types/
      project.ts           // Project interface and helpers
    styles/
      tailwind.css         // Tailwind base/components/utilities
```

---

## Milestones (Iteration Plan)

Each milestone includes a purpose, expected files touched, acceptance criteria, and a simple test plan. Diffs should be minimal and focused.

### ✅ M0 — Complete project specification

-   **Purpose**: Define project scope, tech stack, file structure, and milestone plan.
-   **Files**: `spec.md`, `.cursorrules`
-   **Acceptance criteria**: Clear, actionable spec with defined milestones and tech stack.
-   **Test plan**: Review spec for completeness and clarity.

### ✅ M1 — Bootstrap Vite + TypeScript + Tailwind + Router

-   **Purpose**: Initialize Vite React + TS app with Tailwind and routing from the start.
-   **Files (new/updated)**: `package.json`, `tsconfig.json`, `vite.config.ts`, `tailwind.config.ts`, `postcss.config.js`, `index.html`, `src/main.tsx`, `src/App.tsx`, `src/styles/tailwind.css`, `src/routes/index.tsx`.
-   **Acceptance criteria**:
    -   `bun dev` serves the app at `localhost:5173` with a simple "Hello Skillcase".
    -   TypeScript compiles without errors.
    -   Basic routing setup with home route and 404 fallback.
-   **Test plan**:
    -   Start dev server, load page, see text.
    -   Modify text in `App.tsx`; hot reload works.
    -   Navigate to `/not-a-page`; see 404 message.

### ➡️ M2 — Establish file structure and layout (Tailwind)

-   **Purpose**: Create directories and `Header` scaffolding with responsive layout.
-   **Files**: Create `src/components/Header.tsx`, wire into `App.tsx`.
-   **Acceptance criteria**:
    -   `Header` shows site title.
    -   Layout uses semantic HTML and is responsive at basic breakpoints.
-   **Test plan**:
    -   Inspect DOM in DevTools; header and footer present across the app.

### M3 — Define types and seed static project data

-   **Purpose**: Add `Project` domain types and sample `projects` data file.
-   **Files**: `src/types/project.ts`, `src/data/projects.ts` with 2–3 entries.
-   **Acceptance criteria**:
    -   Types compile; `projects` conforms to `Project[]`.
    -   No unused export warnings.
-   **Test plan**:
    -   Import `projects` into `HomePage` and `console.log` length in dev.

### M4 — Home page with project list

-   **Purpose**: Create `HomePage` and a `ProjectCard` component to render projects.
-   **Files**: `src/pages/HomePage/*`, `src/components/ProjectCard/*`, update `App.tsx` to render `HomePage`.
-   **Acceptance criteria**:
    -   Projects render as cards with title, short description, tech chips, and primary link.
    -   Empty state visible when `projects` is empty.
-   **Test plan**:
    -   Temporarily set `projects` to empty; verify empty state.
    -   Restore data; cards render correctly.

### M5 — Styling polish and theme tokens

-   **Purpose**: Add Tailwind theme tokens (colors, spacing, typography); unify card spacing/hover.
-   **Files**: `tailwind.config.ts`, refine component classNames.
-   **Acceptance criteria**:
    -   Consistent spacing scale and color usage across components.
-   **Test plan**:
    -   Visual pass at 360px, 768px, 1280px widths.

### M6 — Content authoring improvements

-   **Purpose**: Improve how projects are authored (structured TS export; optionally support small markdown snippets later).
-   **Files**: `src/data/projects.ts` and helper functions; optional `utils/format.ts`.
-   **Acceptance criteria**:
    -   Adding a new project is a single append in `projects.ts` with types enforced.
-   **Test plan**:
    -   Add a new sample project; ensure it appears correctly.

### Deferred (future phases, out of scope now)

-   GitHub integration: Fetch repo metadata, generate descriptions, stars, languages.
-   Backend/API: Persist user-curated projects.
-   Individual project pages: Detailed project view with full description, screenshots, etc.
-   Auth/multi-user

---
