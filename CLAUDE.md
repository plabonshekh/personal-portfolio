# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build (also type-checks)
npm run lint     # ESLint via next lint
npm run start    # Serve production build locally
```

There are no tests in this project.

## Architecture

**Next.js 14 App Router** single-page portfolio. All content is a single route (`app/page.tsx`) rendered as a vertical stack of section components. No API routes, no dynamic routes.

### Data layer (`data/`)
All portfolio content lives in static TypeScript files — `personalInfo.ts`, `experience.ts`, `caseStudies.ts`, `skills.ts`, `achievements.ts`. Types are defined in `types/index.ts`. To update content, edit these files only; no component changes needed.

### Component structure
- `components/sections/` — full-width page sections assembled in `app/page.tsx`
- `components/layout/` — `Navbar` and `Footer`, rendered in `app/layout.tsx`
- `components/ui/` — reusable primitives: `AnimatedSection`, `Badge`, `Button`, `SectionHeading`
- `components/ThemeProvider.tsx` — custom light/dark context (no external library); persists to `localStorage`, toggles the `dark` class on `<html>`
- `components/MotionProvider.tsx` — thin wrapper for animation context

### Styling
Tailwind CSS with `darkMode: "class"`. Two custom fonts: `--font-playfair` (display/headings) and `--font-inter` (body). Use `font-display` and `font-body` Tailwind utilities to apply them. `cn()` from `lib/utils.ts` merges class names (`clsx` + `tailwind-merge`).

Scroll-triggered fade-in is handled by `AnimatedSection` using `IntersectionObserver` — no animation library dependency. CSS keyframes (`fadeInUp`, `expandX`, `scaleIn`) are defined in `globals.css` for CSS-only animations.

The `.section-num` utility class renders large decorative background numbers behind section headings.

### Theme
The design is intentionally black-and-white editorial. Avoid introducing color beyond neutrals unless explicitly requested. Dark mode uses `neutral-950` backgrounds and `neutral-50` text.

### Path aliases
`@/` maps to the project root (configured in `tsconfig.json`).
