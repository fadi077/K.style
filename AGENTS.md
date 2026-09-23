# K.Style engineering rules

- Treat this as a premium production website, not a quick template.
- Do not begin visual design until the user explicitly instructs you to do so.
- For visual, UI, or UX work, use both installed project skills: `frontend-design` and `ui-ux-pro-max`.
- Avoid generic AI-generated website patterns; future design decisions must be deliberate and grounded in the approved brief.
- Build reusable components where repetition or clear responsibility warrants them, without over-componentizing.
- Make responsive behavior excellent; mobile is a first-class experience.
- Accessibility is mandatory. Use semantic HTML, visible focus states, correct control semantics, and sufficient contrast.
- Respect `prefers-reduced-motion`; motion must never be required to understand or operate the site.
- Protect Core Web Vitals. Optimize images with `next/image`, correct dimensions, responsive `sizes`, and appropriate loading priority.
- Preserve SEO-friendly server rendering and document semantics.
- Default to React Server Components. Add `"use client"` only when interaction genuinely requires client-side JavaScript.
- Do not add a dependency without a clear production reason.
- Never invent business facts, reviews, prices, addresses, product specifications, awards, stock status, or claims.
- Real business content and final brand direction will be supplied later.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
