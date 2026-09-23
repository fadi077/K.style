# K.Style

Production website for K.Style Tiles & Interiors, a physical showroom business in Donegal Town, Ireland. The site implements the approved “The Materials Edit” direction with confirmed business details and supplied imagery.

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

Verified business details are centralised in `src/data/business.ts`. Supplied imagery lives in the relevant `public/images/` directory and is rendered through `next/image`. Do not add placeholder products, claims, reviews, pricing, supplier relationships, or other invented business content.

## Design skills

- Anthropic Frontend Design: `.agents/skills/frontend-design/`
- UI/UX Pro Max for Codex: `.agents/skills/ui-ux-pro-max/`

Use both skills for future visual, UI, or UX work. The current official Codex installer uses the agent-standard `.agents/skills/` location and also supplies its supporting data, scripts, and related bundled skills there. The Phase 2 direction is documented below and must be reviewed before production page work.

## Creative direction

- Source of truth: `docs/DESIGN-SYSTEM.md`
- Internal, non-indexed preview: `/design-system`

The preview demonstrates typography, colour, composition, actions, offer treatment, and the inspiration-enquiry direction. The production homepage is available at `/`.

## Public routes

- `/` — production homepage
- `/tiles` — tiles category and showroom enquiry path
- `/flooring` — flooring category and showroom enquiry path
- `/bathrooms` — bathrooms and bathroom ware category
- `/beds-mattresses` — beds and mattresses category
- `/inspiration` — room inspiration and image-enquiry interface
- `/offers` — verified-offers architecture and current empty state
- `/visit-us` — address, phone and confirmed opening hours
- `/get-a-quote` — phone-first quote route and disabled enquiry interface

The SEO approach is local-first: unique page titles, descriptions and useful copy establish K.Style in Donegal Town before offering a careful route for people planning from elsewhere in Ireland. Do not create near-duplicate town pages or claim delivery, stock, service areas or national coverage without verified business information.

Intentional photography-pending states remain for Beds & Mattresses and the K.Style showroom. Replace them only with authentic, approved business photography.

## Launch dependencies

- Connect the inspiration enquiry to secure file storage and message delivery.
- Add consent, retention, spam protection, upload limits, server validation, and clear success/error states before enabling submission.
- Supply a verified directions URL.
- Supply authentic Beds & Mattresses and K.Style showroom photography.
- Supply verified offer data before publishing product names, prices, units, or availability.
- Supply confirmed email, social, privacy, and legal details if they are to appear.
- Supply a true transparent or source logo asset before creating a favicon; the provided PNG has a checkerboard background baked into the file.

## Development conventions

- Follow the root `AGENTS.md`.
- Prefer Server Components. Add `"use client"` only for interaction that requires browser state or APIs.
- Keep dependencies minimal and justify additions.
- Use semantic HTML, accessible interaction patterns, and reduced-motion support.
- Preserve SEO-friendly rendering and strong Core Web Vitals.
- Use `next/image` for production imagery, with responsive sizing and appropriate lazy loading.
- Newsreader Variable and Work Sans Variable are self-hosted through `next/font/local`; revisit them only if the creative direction changes during approval.
- Never invent business facts, prices, reviews, stock, supplier claims, or content.
