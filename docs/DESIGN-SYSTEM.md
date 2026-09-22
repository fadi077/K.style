# K.Style design system

Status: Phase 2 creative direction. This document defines the initial visual system and homepage architecture. It is not approval to build the homepage or publish placeholder content.

Internal implementation preview: `/design-system` (excluded from indexing and the sitemap).

## Skill-led analysis

The `frontend-design` and `ui-ux-pro-max` skills were used before choosing the direction.

The first UI/UX dataset pass returned a generic minimal/SaaS pattern, pink accent, Outfit headings, and card-led features. Those recommendations were rejected because they conflict with the supplied K.Style identity and would make the project feel interchangeable. The useful constraints retained from the skills are: a spacious density, low motion intensity, a rigorous grid, semantic colour tokens, self-hosted fonts, responsive images, one primary action per decision point, visible focus, and a readable final state without JavaScript or motion.

The revised system is grounded in K.Style's subject matter: laid tile, grout lines, stone samples, flooring boards, room-scale photography, showroom expertise, and the practical process of selecting materials in person.

## 1. Creative concept

### The Materials Edit

K.Style should feel like an interiors publication assembled from physical samples rather than a catalogue placed into a retail template.

The defining composition is a digital sample board:

- one large atmospheric room image;
- one narrow crop showing surface, edge, grain, glaze, or textile detail;
- expressive typography aligned to the same underlying grid;
- restrained product and commercial information beneath, not floating over, the imagery;
- orange appearing at moments of action and value, never as a field colour.

The system balances three qualities:

1. **Refined:** strong editing, generous space, disciplined type, precise alignment.
2. **Tactile:** close crops, material language, visible texture, room context.
3. **Approachable:** plain calls to action, clear offers, local context, uncomplicated enquiry paths.

### Chosen homepage opening

The future hero should use an asymmetric split: editorial statement on the left/foreground, one exceptional interior photograph taking most of the visual field, and a narrow material detail crop that breaks the predictable half-text/half-image composition.

```text
Desktop — 12 columns
┌────────────────────────────────────────────────────────────────────┐
│ Logo / navigation / showroom and enquiry actions                  │
├──────────────┬──────────────────────────────────────┬──────────────┤
│ Positioning  │                                      │ material     │
│ statement    │      cinematic room photograph       │ detail crop  │
│ and context  │                                      │              │
├──────────────┴──────────────────────────────────────┴──────────────┤
│ A single primary action                concise category context    │
└────────────────────────────────────────────────────────────────────┘

Mobile — 4 columns
┌──────────────────────────────┐
│ Compact brand / menu         │
├──────────────────────────────┤
│ Positioning statement        │
│ supporting context           │
├──────────────────────────────┤
│ portrait-aware room image    │
│ with deliberate crop         │
├─────────┬────────────────────┤
│ detail  │ primary action     │
└─────────┴────────────────────┘
```

A centered headline over a darkened stock photograph, a four-card category row, and animated content on every scroll were considered and rejected as generic.

## 2. Visual principles

### Photography leads

Photography carries colour and emotion. Interface surfaces should not compete with the work.

### Scale before decoration

Use type size, image scale, whitespace, and crop relationships to create impact. Avoid decoration added only to make a quiet area feel “designed.”

### Asymmetry with alignment

Layouts may be asymmetric, but every edge should relate to the 12/8/4-column grid. Apparent freedom must be supported by precise alignment.

### Material edges

Borders behave like grout lines or sample divisions: thin, structural, and used only to explain grouping. Corners stay nearly square. Shadows are exceptional, not default.

### Commercial clarity

Premium presentation must never obscure price, category, availability state, or how to contact K.Style. Plain language beats clever labels.

### One memorable moment

The large photographic/editorial composition is the signature. Buttons, navigation, forms, and offers remain restrained.

## 3. Colour system

The palette comes from porcelain, limestone, grout, and charcoal. K.Style orange is preserved as the recognition and conversion colour.

| Token | Value | Purpose |
| --- | --- | --- |
| `--color-paper` | `#F7F5F0` | Primary page canvas; warm but not cream-heavy |
| `--color-surface` | `#FFFDF9` | Quiet raised fields and offer sections |
| `--color-limestone` | `#D5CEC2` | Material blocks and photography placeholders |
| `--color-grout` | `#AAA197` | Secondary structure and neutral depth |
| `--color-charcoal` | `#2E2E2E` | Core brand text and dark sections |
| `--color-ink` | `#191918` | Strongest dark state, used sparingly |
| `--color-muted-ink` | `#5F5A54` | Secondary copy on light surfaces |
| `--color-brand` | `#FF7A00` | Primary action, offers, active moments |
| `--color-brand-hover` | `#E66D00` | Orange interaction state |
| `--color-brand-deep` | `#B84F00` | Accessible orange text/rules and focus |
| `--color-danger` | `#A32922` | Form errors and destructive state only |

Verified core contrast pairs:

- charcoal on orange: `5.20:1`;
- muted ink on paper: `6.26:1`;
- deep orange on paper: `4.64:1`;
- charcoal on paper: `12.46:1`;
- surface white on charcoal: `13.58:1`.

Rules:

- Do not use bright orange body text on off-white; it does not meet normal-text contrast.
- Orange buttons use charcoal labels.
- Orange cannot be the only indication of offer, error, active, or selected state; pair it with text, position, or structure.
- The intended launch system is light-led. A dark theme is not planned; charcoal fields are composed sections, not a global mode.

## 4. Typography

### Display: Newsreader Variable

Newsreader gives K.Style an editorial voice without leaning on the familiar Playfair/Cormorant luxury formula. Its variable weight range provides quiet text and authoritative display sizes without adding many font files. It should be used for headlines, selected statements, and short editorial passages—not navigation or dense product data.

### Body and UI: Work Sans Variable

Work Sans is legible, open, and practical. It keeps retail content, offers, product details, forms, and calls to action approachable. The pairing prevents the serif from making K.Style feel rarefied or prohibitively expensive.

Both fonts are self-hosted through `next/font/local` using Latin variable WOFF2 files from OFL-licensed Fontsource packages. There are no runtime calls to Google Fonts.

### Fluid type scale

| Role | Token | Range | Guidance |
| --- | --- | --- | --- |
| Caption | `--type-caption` | 12–13px | Supporting metadata only; sentence case |
| Small body | `--type-body-sm` | 14–15.2px | Secondary interface copy |
| Body | `--type-body` | 16–18px | Default copy; 1.6 line height |
| Lead | `--type-lead` | 20–28px | Intros and considered statements |
| Small heading | `--type-heading-sm` | 28–48px | Section subheads and category links |
| Heading | `--type-heading` | 40–88px | Primary section headings |
| Display | `--type-display` | 64–160px | Hero/editorial statement only |

Typography rules:

- Display weight: approximately 390–430; avoid default bold luxury headings.
- Body weight: 400; interface emphasis: 520–650.
- Display letter spacing: `-0.035em`; do not tighten body copy.
- Body measure: 60–75 characters on desktop, 35–60 on mobile.
- Use balanced heading wrapping as progressive enhancement, never forced non-breaking phrases.
- Do not italicise or recolour one word merely to create emphasis.
- Avoid repeated all-caps eyebrows, tracked labels, monospace metadata, and ornamental numbering. Numbering is reserved for real sequences.

## 5. Grid

| Viewport | Columns | Gutter | Intended behaviour |
| --- | --- | --- | --- |
| Below 768px | 4 | 20–24px | Intentional mobile compositions and portrait crops |
| 768–1023px | 8 | 24–40px | Tablet layouts; avoid compressed desktop arrangements |
| 1024px and above | 12 | 32–64px | Full editorial composition |

Core widths:

- wide visual field: `96rem` / 1536px;
- standard content: `80rem` / 1280px;
- reading measure: `44rem` / 704px;
- page gutter: `clamp(1.25rem, 0.6rem + 2.8vw, 4rem)`;
- grid gap: `clamp(1rem, 0.75rem + 1vw, 2rem)`.

Alignment is normally left-led. Center alignment is reserved for very short transitional statements and should not become the site default.

## 6. Spacing

The spacing system uses a 4px base while allowing large editorial intervals.

| Token | Size |
| --- | --- |
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-6` | 24px |
| `--space-8` | 32px |
| `--space-12` | 48px |
| `--space-16` | 64px |
| `--space-24` | 96px |
| `--space-32` | 128px |
| `--space-40` | 160px |

Section spacing is fluid from 80px to 176px through `--section-space`. Mobile is not simply “less space”: relationships are compressed selectively so the hero and calls to action remain strong without pushing essential content too far below the fold.

## 7. Photography direction

### Overall direction

Images should feel observed and inhabited, not staged as generic catalogue sets. Natural or believable architectural light, material accuracy, and purposeful negative space are more valuable than excessive styling.

### Required image library

1. **Hero interiors:** wide and portrait alternatives of complete rooms with usable negative space for crop flexibility.
2. **Installed tiles:** full walls/floors showing scale, grout, joints, corners, and transitions.
3. **Tile details:** raking light across texture, glaze, veining, edge, and finish.
4. **Flooring:** room context, plank direction, thresholds, and close grain shots.
5. **Bathrooms:** complete bathroom scenes, vanity details, shower areas, and freestanding baths.
6. **Beds and mattresses:** inviting room context, construction/detail, and showroom presentation without hotel clichés.
7. **Interior products:** styled in context rather than isolated wherever possible.
8. **Showroom:** exterior arrival, wide interior, material library, displays, consultation moments, and tactile close-ups.
9. **People/service:** optional documentary images of genuine assistance or selection, with consent and without forced handshakes.

### Capture specifications

- Supply original high-resolution files and usage rights.
- Capture key scenes in landscape 16:10/3:2 and portrait 4:5; do not rely on one crop for every viewport.
- Leave negative space on both left and right across the full set.
- Avoid heavy presets, crushed blacks, cold blue casts, extreme HDR, fake depth blur, and orange colour grading.
- Photograph colour-reference material where product colour fidelity matters.

### Web treatment

- Use `next/image` with intrinsic dimensions or `fill` inside an aspect-ratio container.
- Hero/LCP images receive priority; below-fold imagery remains lazy-loaded.
- Set responsive `sizes` deliberately.
- Art-direct mobile crops instead of using desktop center-crops by default.
- Meaningful images receive concise alt text describing room, product type, material, and relevant context. Decorative texture crops use empty alt text.
- No text embedded in imagery.

## 8. Component philosophy

Build only primitives with clear repeated value. A component is justified by semantic consistency, interaction behaviour, accessibility, or genuine reuse—not by the fact that an element can be extracted.

Initial primitives:

- `ActionLink`: primary orange, dark secondary, and understated text variants.
- Future: accessible site header/navigation, responsive picture wrapper, offer price treatment, labelled form field, upload field, and review quotation once real content exists.

Avoid:

- generic `Card`, `Section`, `Container`, or `Feature` abstractions that erase editorial differences;
- a universal border radius or shadow applied to every surface;
- an icon library until the interface needs a real icon set;
- client components for styling-only behaviour.

Buttons and links:

- Minimum 48px primary control height.
- Sentence-case labels that describe the result: “Request a quote,” “Visit the showroom,” “Send us your inspiration.”
- Orange is the primary action; charcoal is secondary; text links use a structural underline.
- No arrow glyph appended to every link.
- Visible 3px deep-orange focus ring with 4px offset.
- Hover and active states never change layout bounds.

Borders and surfaces:

- `1px` charcoal at approximately 22% mix for divisions.
- Control radius: 2px.
- Photography and editorial fields normally have square corners.
- Shadows are reserved for true overlays or sticky surfaces that require separation.

## 9. Motion language

Motion intensity is deliberately low: approximately 3/10.

Allowed:

- one controlled hero image or type reveal after useful content is already rendered;
- image clipping/masking that resolves to the full accessible image;
- slight image scale on deliberate hover for large editorial links;
- short navigation and disclosure transitions that explain state;
- crossfade when a user explicitly changes imagery or a selection.

Rules:

- Content starts readable and visible; SEO and comprehension cannot depend on animation.
- Animate transform and opacity, not layout dimensions.
- Use shared timing tokens but select duration by distance and complexity.
- Motion must be interruptible and cannot block interaction.
- Parallax, if approved later, is limited to one large image and disabled for reduced motion.
- `prefers-reduced-motion: reduce` removes non-essential reveals and shows the final state immediately.
- No section-by-section fade-up sequence, scroll-jacking, cursor effects, magnetic buttons, continuous marquees, or decorative floating motion.

## 10. Responsive strategy

### Mobile first, not desktop compressed

- Navigation prioritises categories, offers, quote, phone, showroom, and inspiration upload without an overloaded first view.
- Hero type is allowed to be large, but its line breaks and image crop are authored for small screens.
- The main hero image uses a portrait-aware source or focal point.
- Primary action appears early and remains at least 48px high.
- Category discovery becomes a strong vertical index with imagery interleaved, not a two-column card grid.
- Pricing never truncates; old/current prices stack when necessary.
- Forms use visible labels, correct `email`/`tel` input types, autofill tokens, and one-column progression.
- File upload supports camera/photo library and explains file type/size before selection.
- Sticky controls must never obscure keyboard focus or content.

### Review widths

- 375px small phone;
- 430px large phone;
- 768px tablet portrait;
- 1024px tablet landscape/small desktop;
- 1440px desktop;
- 1920px wide desktop with capped content width.

Also test mobile landscape, 200% zoom, text enlargement, keyboard-only navigation, and reduced motion.

## 11. Homepage architecture

This is the approved planning order, not implemented page content.

1. **Header/navigation** — brand, product categories, inspiration, offers, showroom/contact; one visually primary enquiry route.
2. **Cinematic hero** — distinctive room photography, concise positioning, Donegal Town context, one primary action.
3. **Editorial category discovery** — Tiles, Flooring, Bathrooms, Beds & Mattresses as a visual index/atlas rather than four equal cards.
4. **Curated products or collections** — layout shell only until verified inventory, imagery, and specifications are supplied.
5. **Inspiration/spaces** — room-scale editorial storytelling linking material to finished environments.
6. **Special offers** — genuine verified offers with clear previous/current price semantics; restrained orange indicator.
7. **Seen something you love?** — signature image-led sourcing enquiry.
8. **Why K.Style** — local expertise and personal service expressed through prose, photography, and process; no unsupported metrics.
9. **Reviews** — reserved architecture for verified customer reviews only.
10. **Showroom** — Donegal Town, real showroom photography, verified practical details when provided.
11. **Final CTA** — choose one action based on the preceding content, not a cluster of competing buttons.
12. **Footer** — useful product/service navigation, contact/showroom details once verified, legal links, and brand closure.

## 12. Conversion strategy

### Primary conversion hierarchy

1. Request a quote.
2. Send an inspiration image.
3. Call K.Style.
4. Visit the showroom.
5. Explore products, inspiration, and genuine offers.

The exact priority may change once traffic and enquiry data are available.

### Signature “Seen something you love?” flow

The experience should be a short, guided enquiry rather than a generic contact form:

1. Add a photo from camera or library.
2. Describe what caught the visitor's eye and optionally select a broad category.
3. Add name and preferred contact method using visible labels and appropriate input types.
4. Explain consent, what happens next, and that submission does not guarantee an identical product.
5. Show upload progress and explicit success/error recovery.

Backend storage, CRM delivery, retention policy, anti-spam controls, file scanning, and privacy copy are intentionally deferred. They must be defined before enabling submission.

### Offer conversion

- Show real product name, image, previous price, current price, and any material terms only when supplied and verified.
- Keep previous/current price semantics available to assistive technology.
- Do not use fake urgency, countdowns, perpetual sales, flashing labels, or invented stock scarcity.

### Measurement readiness

Future analytics should measure meaningful actions—quote starts/completions, inspiration-flow starts/completions, call clicks, directions/showroom actions, and category engagement—without being added until the user authorises analytics and privacy requirements are defined.

## 13. Things we explicitly will not do

- Build the homepage before this direction is approved.
- Modify, redraw, recolour, or invent the K.Style logo.
- Use orange as a dominant background or general body colour.
- Use gradients, glassmorphism, floating cards, excessive pills, decorative shadows, or a universal large radius.
- Assemble the homepage from identical cards or generic feature/icon grids.
- Use centered SaaS hero conventions, ornamental statistics, or template social-proof strips.
- Use random stock imagery to make the design appear finished.
- Scrape or reproduce Bathshack content.
- Invent products, prices, offers, specifications, stock states, reviews, awards, years in business, guarantees, opening hours, addresses, or performance claims.
- Hide important content behind JavaScript, hover, carousels, or entrance animation.
- Animate every section or use motion that ignores reduced-motion preferences.
- Add a UI component library for convenience.
- Add a CMS, database, e-commerce, authentication, analytics, or upload backend during this phase.
- Deploy the design preview.
