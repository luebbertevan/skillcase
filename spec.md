# Skillcase Portfolio - Specification

## Overview

A static portfolio site built with React + TypeScript + Vite + Tailwind. Displays projects from local data with clean, responsive design.

**Goals**: Static portfolio, clean file structure, TypeScript-first, small iterations (≤300 LOC per milestone)

**Tech Stack**: React + TypeScript, Vite, Tailwind CSS, react-router-dom, Bun

**Architecture**: App shell renders layout (header, main, footer). HomePage lists projects, reusable components like ProjectCard/Header. Central Project interface ensures consistent data from local `src/data/projects.ts`.

### File Structure

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

## Milestones

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

### ✅ M2 — Establish file structure and layout (Tailwind)

-   **Purpose**: Create directories and `Header` scaffolding with responsive layout.
-   **Files**: Create `src/components/Header.tsx`, wire into `App.tsx`.
-   **Acceptance criteria**:
    -   `Header` shows site title.
    -   Layout uses semantic HTML and is responsive at basic breakpoints.
-   **Test plan**:
    -   Inspect DOM in DevTools; header and footer present across the app.

### ✅ M3 — Define types and seed static project data

-   **Purpose**: Add `Project` domain types and sample `projects` data file.
-   **Files**: `src/types/project.ts`, `src/data/projects.ts` with 2–3 entries.
-   **Acceptance criteria**:
    -   Types compile; `projects` conforms to `Project[]`.
    -   No unused export warnings.
-   **Test plan**:
    -   Import `projects` into `HomePage` and `console.log` length in dev.

### ✅ M4 — Home page with project list

-   **Purpose**: Create `HomePage` and a `ProjectCard` component to render projects.
-   **Files**: `src/pages/HomePage/*`, `src/components/ProjectCard/*`, update `App.tsx` to render `HomePage`.
-   **Acceptance criteria**:
    -   Projects render as cards with title, short description, tech chips, and primary link.
    -   Empty state visible when `projects` is empty.
-   **Test plan**:
    -   Temporarily set `projects` to empty; verify empty state.
    -   Restore data; cards render correctly.

### ✅ M5 — Styling polish and theme tokens

-   **Purpose**: Add Tailwind theme tokens (colors, spacing, typography); unify card spacing/hover.
-   **Files**: `tailwind.config.ts`, refine component classNames.
-   **Acceptance criteria**:
    -   Consistent spacing scale and color usage across components.
-   **Test plan**:
    -   Visual pass at 360px, 768px, 1280px widths.

### ➡️ M6 — Content authoring improvements

-   **Purpose**: Improve how projects are authored (structured TS export; optionally support small markdown snippets later).
-   **Files**: `src/data/projects.ts` and helper functions; optional `utils/format.ts`.
-   **Acceptance criteria**:
    -   Adding a new project is a single append in `projects.ts` with types enforced.
-   **Test plan**:
    -   Add a new sample project; ensure it appears correctly.

---

## Data Models & Standards

### Project Interface

```typescript
// src/types/project.ts
export interface Project {
	id: string; // slug-like id
	title: string;
	description: string;
	technologies: string[]; // simple array of tech names
	links: ProjectLink[];
	datePosted: string; // ISO date string
}

export interface ProjectLink {
	type: string; // "repo", "demo", "docs", etc.
	url: string;
}
```

### Key Design Decisions

-   **File Structure**: Flattened components (no folders until needed)
-   **TypeScript**: Omit `.tsx` extensions in local imports
-   **Routing**: Centralized route config in `src/routes/index.tsx`
-   **Styling**: Tailwind utility-first approach
-   **Data**: Local TypeScript files, no external APIs in static phase

### Coding Standards

-   TypeScript everywhere, descriptive names, small focused components
-   Tailwind utility-first styling with consistent spacing/color tokens
-   Minimal comments; rely on expressive identifiers and component boundaries
-   Each milestone includes a tiny, runnable diff with a one-line manual test
-   **Naming**: Choose distinct, descriptive names that clearly communicate purpose - don't just use literal user suggestions if better alternatives exist

### Risks and Mitigations

-   **Overengineering**: Keep milestones tiny; defer features until actually needed
-   **Design drift**: Centralize tokens in `tailwind.config.ts` to maintain consistency
-   **Type sprawl**: Keep domain types in `src/types/project.ts` with tight exports
-   **Spec drift**: Always update spec.md when making architectural changes

### Review Checklist per Milestone

-   Does the diff match the milestone scope only?
-   Are names clear and types precise?
-   Is the code runnable with a simple manual test?
-   Are files placed according to the proposed structure?
-   Is the spec.md updated to reflect any architectural changes?

---

## Deferred Features

-   GitHub integration: Fetch repo metadata, generate descriptions, stars, languages.
-   Backend/API: Persist user-curated projects.
-   Individual project pages: Detailed project view with full description, screenshots, etc.
-   Auth/multi-user
-   Favorite your projects that you want to show first. Maybe filter by date, etc.
-   Add custom settings, themeing

---
