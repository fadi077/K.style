# K.Style

Production website for K.Style — Tiles & Interiors, an established interiors retailer in Donegal Town, Ireland. The homepage implements the approved “The Materials Edit” direction; client photography, product data, contact details, offers, reviews, and enquiry delivery remain intentionally pending.

## Tech stack

- Next.js 16 with the App Router and React Server Components by default
- React 19 and TypeScript 5 in strict mode
- Tailwind CSS 4
- ESLint with Next.js Core Web Vitals and TypeScript rules
- npm and Git

## Local development

Prerequisites: use Node.js 20.19+, 22.13+, or 24+ as declared in `package.json`.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production checks

```bash
npm run lint
npm run build
npm run start
```

## Project structure

```text
src/
  app/                  Routes, layouts, metadata, robots, and sitemap
  components/
    ui/                 Reusable UI primitives
    layout/             Site-wide layout components
    sections/           Page-level composed sections
  data/                 Typed, verified content supplied by the business
  lib/                  Shared configuration and utilities
  styles/               Font and shared styling infrastructure
  types/                Shared TypeScript types
public/
  images/
    brand/
    interiors/
    products/
    showroom/
```

Empty asset and data directories are tracked with `.gitkeep` files until verified client material is supplied. Do not add placeholder products, claims, reviews, pricing, or other invented business content.

## Design skills

- Anthropic Frontend Design: `.agents/skills/frontend-design/`
- UI/UX Pro Max for Codex: `.agents/skills/ui-ux-pro-max/`

Use both skills for future visual, UI, or UX work. The current official Codex installer uses the agent-standard `.agents/skills/` location and also supplies its supporting data, scripts, and related bundled skills there. The Phase 2 direction is documented below and must be reviewed before production page work.

## Creative direction

- Source of truth: `docs/DESIGN-SYSTEM.md`
- Internal, non-indexed preview: `/design-system`

The preview demonstrates typography, colour, composition, actions, offer treatment, and the inspiration-enquiry direction. The production homepage is available at `/`; its clearly labelled development placeholders must be replaced only with verified client content and assets.

## Development conventions

- Follow the root `AGENTS.md`.
- Prefer Server Components. Add `"use client"` only for interaction that requires browser state or APIs.
- Keep dependencies minimal and justify additions.
- Use semantic HTML, accessible interaction patterns, and reduced-motion support.
- Preserve SEO-friendly rendering and strong Core Web Vitals.
- Use `next/image` for production imagery, with responsive sizing and appropriate lazy loading.
- Newsreader Variable and Work Sans Variable are self-hosted through `next/font/local`; revisit them only if the creative direction changes during approval.
- Never invent business facts or content. Real content will be supplied later.
