# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (http://localhost:3000)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

## Architecture

Next.js 16 App Router site hosted on Vercel at `lab.onursenture.com`. A playground for experiments and side projects.

**Project registry** (`lib/projects.ts`) — single typed array that is the source of truth for all project metadata. Both the homepage and API routes read from it.

**Adding a new project:**
1. Add an entry to the `projects` array in `lib/projects.ts`
2. Optionally create a directory under `projects/<slug>/` for project-specific files
3. Push to main — Vercel auto-deploys

**Key paths:**
- `lib/types.ts` — `Project` interface
- `lib/projects.ts` — project registry + `getProjects()` / `getProjectBySlug()` helpers
- `app/page.tsx` — homepage (project list)
- `app/projects/[slug]/page.tsx` — individual project page (SSG via `generateStaticParams`)
- `app/api/projects/route.ts` — `GET /api/projects` (list all, CORS for onursenture.com)
- `app/api/projects/[slug]/route.ts` — `GET /api/projects/:slug` (single project)

**Styling:** Plain CSS in `app/globals.css`. PT Serif font, navy headings (`rgb(27,49,86)`), blue links (`rgb(17,92,161)`), 720px max-width centered layout. Matches onursenture.com aesthetic.
