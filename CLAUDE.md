# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun run dev      # Start development server
bun run build    # Production build
bun run lint     # Run Biome linter
bun run format   # Format code with Biome (writes in place)
```

**Package manager: Bun** — always use `bun` instead of `npm`/`yarn`/`pnpm`.

## Architecture

Next.js 16 App Router project using React 19 with Server Components (RSC-first).

```
src/
  app/           # App Router pages and layouts
  components/ui/ # Reusable UI components (shadcn/ui conventions)
  lib/utils.ts   # cn() helper (clsx + tailwind-merge)
```

### Key Design Decisions

- **Tailwind CSS v4** — uses the new `@theme` syntax in `globals.css` with OKLch color space; no `tailwind.config.*` file, config lives in CSS
- **shadcn/ui** — component style is "New York"; add new components via `bunx shadcn@latest add <component>`
- **Biome** — replaces ESLint and Prettier; enforces 2-space indentation and auto-organizes imports
- **React Compiler** — enabled in `next.config.ts` (`reactCompiler: true`), so manual `useMemo`/`useCallback` are generally unnecessary
- **Path alias** — `@/*` maps to `./src/*`

### Component Patterns

- Use CVA (`class-variance-authority`) for components with multiple variants (see `src/components/ui/button.tsx`)
- Use `cn()` from `@/lib/utils` for all className merging
- Radix UI primitives underpin interactive components; use `asChild` via `@radix-ui/react-slot` when needed

## UI Rules

- **Mobile-first** — always design for mobile first, then scale up with `sm:`, `md:`, `lg:` breakpoints. Never start with desktop layout.
- **shadcn/ui** — must be used for all UI components where applicable.
- **Colors** — always use tokens from `globals.css` (`text-primary`, `bg-background`, `text-muted-foreground`, `text-teal`, etc.). Never use hardcoded hex or raw Tailwind color palette values.
