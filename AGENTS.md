# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js 16 App Router portfolio. Routes, layouts, and the contact API live in `app/`; `(main)` is a route group and `_components` contains UI local to that group. Reusable site components belong in `components/shared`, while generated or primitive UI components belong in `components/ui`. Keep shared data and helpers in `lib/`, shared TypeScript contracts in `shared/`, and static files in `public/`. Configuration is kept in root files such as `next.config.ts`, `tsconfig.json`, and `eslint.config.mjs`.

## Build, Test, and Development Commands

Use pnpm; `pnpm-lock.yaml` is the authoritative lockfile. Next.js requires Node.js 20.9 or newer.

- `pnpm install` installs dependencies.
- `pnpm dev` starts the Turbopack development server at `http://localhost:3000`.
- `pnpm lint` runs ESLint with Next.js Core Web Vitals and TypeScript rules.
- `pnpm build` creates a production build and catches route/type integration failures.
- `pnpm start` serves the completed production build.

Run `pnpm lint && pnpm build` before requesting review.

## Coding Style & Naming Conventions

Write strict TypeScript and functional React components. Follow the existing two-space indentation, semicolons, and double quotes. Use PascalCase for component identifiers, camelCase for functions and data, and kebab-case for component filenames (for example, `projects-card.tsx`). Use the `@/` alias for root imports. Prefer Server Components; add `"use client"` only when browser APIs, state, or event handlers require it. Compose Tailwind classes with `cn()` when conditional class lists become complex.

## Testing Guidelines

No automated test framework or coverage threshold is configured yet. For every change, run lint and a production build, then manually exercise affected routes, responsive layouts, dark mode, and the contact flow. If adding tests, colocate them as `*.test.ts` or `*.test.tsx` and add the corresponding pnpm script and framework configuration in the same change.

## Commit & Pull Request Guidelines

History follows Conventional Commit-style prefixes such as `feat:`, `fix:`, `refactor:`, and `chore:`. Keep subjects imperative, focused, and concise. Pull requests should explain the user-visible change, list verification performed, link related issues, and include before/after screenshots for visual work. Call out configuration or dependency changes explicitly.

## Agent-Specific Instructions

Next.js APIs in this repository may differ from familiar versions. Before changing routing, rendering, caching, or configuration, read the relevant bundled guide under `node_modules/next/dist/docs/` and follow current deprecation guidance.
