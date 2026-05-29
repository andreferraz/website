# Copilot Instructions

## Project Overview

This project is a personal portfolio website built with Next.js App Router and localized with `next-intl`.

Treat the codebase as a content-first, server-first frontend application:

- Prefer simple, static, and composable UI over abstraction-heavy patterns.
- Keep page logic thin; move reusable rendering into `src/components` or `src/layouts`.
- Preserve the current separation between route files, layout compositions, presentational components, and configuration utilities.

## Tech Stack

- Framework: Next.js 15 with App Router.
- Language: TypeScript with `strict` mode enabled.
- UI: React 19.
- Styling: Tailwind CSS 4.
- Internationalization: `next-intl` with locale-aware routing in `src/i18n`.
- Themes: Tailwind dark mode with `class` strategy, and `next-themes` for client theme toggling.
- Icons: `react-icons`.
- Path aliases: use `@/*` for imports from `src`.
- Linting: ESLint 9 with `next/core-web-vitals` and `next/typescript`.

## State Management

This project does not use a dedicated client-state library.

Follow these rules:

- Default to server components.
- Add `'use client'` only when browser APIs, event handlers, or client hooks are required.
- Keep state local to the component that owns the interaction.
- Derive UI state from props, route state, locale, or configuration before introducing React state.
- Do not introduce Redux, Zustand, Context providers, or other global state tools unless there is a clear cross-tree requirement.
- For shared static content, prefer configuration files, typed props, or localized message files instead of client state.

## Coding Standards

### General Rules

- Keep implementations small, explicit, and easy to scan.
- Prefer composition over inheritance and avoid premature abstractions.
- Reuse existing components, layouts, and utility types before creating new ones.
- Do not duplicate markup patterns when an existing component can be extended with props.
- Keep public APIs minimal; add props only when they support a real reuse case.
- Match the existing code style in the surrounding file.
- Consider accessibility and good UX practices when building components and layouts, especially for interactive elements, focus states, and semantic HTML.

### TypeScript Rules

- Maintain full type safety; do not weaken strict typing to make code compile.
- Prefer explicit prop interfaces or type aliases for exported components.
- Avoid `any`. Use concrete types, unions, or generics.
- Use non-null assertions only when the invariant is guaranteed and obvious.
- Keep utility types close to usage unless they are shared across multiple modules.

### React and Next.js Rules

- Prefer async server components for route-level data or locale-dependent rendering.
- Keep `page.tsx`, `layout.tsx`, and route handlers focused on routing and composition.
- Place reusable page sections in `src/layouts` or `src/components`, not inside route files.
- Use `next-intl` routing helpers from `src/i18n/routing` instead of raw locale string handling when navigation is involved.
- Do not add client components where a server component is sufficient.
- Avoid unnecessary React imports when the file does not need them.

### Styling Rules

- Use Tailwind utility classes for styling.
- Reuse existing spacing, sizing, and layout patterns before adding new ones.
- Keep class lists readable; extract a wrapper component only when the same structure is repeated.
- Do not introduce a parallel styling system such as Styled Components, CSS Modules, or inline style-heavy patterns unless the repo is explicitly migrated.
- Consider accessibility and theming when applying styles

### Imports and Exports

- Prefer `@/` imports over deep relative paths for code inside `src`.
- Use local barrel exports through `index.ts` where the folder already follows that pattern.
- Preserve the existing default-export convention for main component and layout entry points.
- Keep imports grouped clearly: framework, external packages, internal modules.

### Naming Conventions

- Use `PascalCase` for component, layout, and type file entry points such as `Header.tsx` and `HomeLayout.tsx`.
- Use `kebab-case` for component and layout folder names such as `language-switch` and `page-not-found`.
- Use `index.ts` as the barrel file for component and layout directories.
- Use `page.tsx`, `layout.tsx`, and `not-found.tsx` only for Next.js route conventions.
- Use CEV (`<Context><Element!><Variant?>`) naming for components and layouts, with clear domain context and concrete UI element names.
- Use descriptive names; avoid generic names such as `utils.ts`, `helpers.ts`, or `data.ts` unless the scope is genuinely broad.
- Name props interfaces with the component name plus `Props` when exported or reused.

## Folder Structure

Use the existing structure as the default architectural boundary:

- `src/app`: App Router routes, locale routes, and route-level composition.
- `src/components`: Reusable UI components.
- `src/layouts`: Page section and page-level layout compositions.
- `src/i18n`: Locale routing and request-level i18n setup.
- `src/messages`: Translation dictionaries by locale.
- `src/utils`: Static configuration and shared typings.
- `public`: Static assets.
- `tools/plop`: Code generators and templates.

Follow these placement rules:

- Put route-specific composition in `src/app` only when it is tied to the route contract.
- Put reusable visual building blocks in `src/components`.
- Put page assemblies that combine multiple components in `src/layouts`.
- Put constants and site metadata in `src/utils/config`.
- Put shared domain or UI types in `src/utils/typings` only when they are reused across modules.
- Keep translations in `src/messages`; always use message keys and do not hardcode user-facing copy when a message key is appropriate;

## Linting and Quality Rules

- Code must pass `npm run lint`.
- Follow the rules from `next/core-web-vitals` and `next/typescript` without adding inline disables unless there is no practical alternative.
- Do not leave unused imports, unused variables, dead components, or unreachable branches.
- Prefer fixing the underlying issue over silencing ESLint or TypeScript.
- Keep files focused; if a file starts handling multiple responsibilities, split it.

## Key Rules

- Check for an existing component, layout, type, or config entry before adding new code.
- Keep route files thin and presentation code reusable.
- Prefer server rendering and local state over client-wide state.
- Use typed props and locale-aware helpers consistently.
- Preserve folder naming and export conventions already used in the repo.
- Do not introduce new architectural patterns without a clear need.
- Avoid redundant wrappers, duplicate class structures, and copy-pasted sections.
- When adding files, place them in the narrowest folder that owns the behavior.
