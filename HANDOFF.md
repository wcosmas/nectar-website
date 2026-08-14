# Session handoff — Nectar Technologies website

Paste everything below into a new session, working in
`/Users/rtv-lpt-403/Desktop/Projects/Nectar/nectar-website`.

---

## Context

I'm continuing work on the Nectar Technologies marketing site. A previous
session upgraded Next.js and rebuilt the site from scratch. Read `PRODUCT.md`
and `lib/content.ts` first — they carry all the product truth and every piece
of site copy.

**Stack:** Next.js 16.3.1 (App Router, Turbopack), React 19.2.3, Tailwind v4,
TypeScript, bun as the package manager. Build with `bun run build`, lint with
`bun run lint`. A dev server may already be running on :3000 — check before
starting another. Both build and lint currently pass with 28 static pages.

**Who the site is for:** institutional and government procurement (universities,
ministries, councils, national bureaus), research funders, private enterprise
buyers, and partners/talent. All four were confirmed as primary. The visitor's
job is to decide fairly quickly whether this team is real and the work serious.

## The design system

Rebuilt on the company letterhead. I sampled `Nectar_Technologies_Letterhead.docx`
and its single ink is **#004F58**, a deep teal. The whole palette derives from
it — tokens are in `app/globals.css`:

- Brand ramp `--teal-900 #00343B` → `--teal-700 #004F58` (the letterhead ink) →
  `--teal-500` → `--teal-300` → `--teal-100` → `--teal-50`
- One warm signal `--signal #B8543A`, used **only** for the "live system of
  record" marker. Nothing else may use it.
- Neutrals: `--paper #FFFFFF`, `--paper-alt #F6F8F8`, `--ink #12201F`,
  `--ink-soft`, `--ink-faint`, `--line`, `--line-soft`
- Roughly 90% neutral, 10% brand colour. Light ground, never dark.

**Type:** **Instrument Sans** carries the entire system — display, headlines,
UI, body and figures. **Bodoni Moda** (the letterhead Didone) survives in
exactly two places: the NECTAR wordmark, and `.type-accent`, which sets **one
italic word inside a headline**. Never a whole heading in the serif, never the
serif at body size — an earlier build used Bodoni for all display type and the
client rejected it as too fashion-editorial. `PageHeader` in
`components/site/ui.tsx` italicises the last word of its title automatically via
`accentLastWord()`. Geist Mono is loaded but barely used.

Helper classes: `.type-display`, `.type-headline`, `.type-accent`, `.type-title`,
`.type-body`, `.type-lead`, `.type-eyebrow`, `.type-figure`, plus `.shell` for
the 1280px container and `.link-draw` for the underline-on-hover link.

**Hard constraints the client set, do not reintroduce:**
- No decorative or offset shadows anywhere, especially not on the hero or hero
  text. An earlier iteration had hard "signwriter" offset shadows and the client
  rejected them explicitly.
- No keyline/inset borders framing the hero.
- No stock photography — no city skylines with colour scrims, no handshakes, no
  people-around-a-laptop. The hero graphic is authored SVG
  (`components/site/system-graphic.tsx`): scattered institutional records on the
  left, drawn through a single derivation point, resolving into one ordered
  system of record on the right. It animates slowly and stops under
  `prefers-reduced-motion`.
- No Didone/high-contrast serif as the display voice. One italic accent word
  per headline is the ceiling.
- The hero copy talks only about what the firm does. It must not name client
  institutions — those appear in the band below and on the case pages.

## Routes

| Route | Notes |
|---|---|
| `/` | Hero, client wall, services, figures band, 3 featured cases, insights, close |
| `/work` | All nine projects, ruled index |
| `/work/[slug]` | 9 case pages; AHPC is the deep one |
| `/outcomes` | Metric wall — 12 verified counts, each tied to a named institution |
| `/services`, `/services/[slug]` | 6 services |
| `/about` | Vision, mission, six people, engagement stages |
| `/insights`, `/insights/[slug]` | 3 pieces, currently drafts |
| `/contact` | Direct contact + procurement guidance |

Components live in `components/site/`: `site-header.tsx` (client component,
fixed, mobile dialog with Escape + focus return), `site-footer.tsx`,
`wordmark.tsx`, `ui.tsx` (Eyebrow, ButtonLink, ArrowLink, PageHeader, FigureRow,
PlaceholderNote), `system-graphic.tsx`. `components/ui/` is leftover shadcn and
is currently unused — safe to delete if nothing starts importing it.

## The truth rule — important

`lib/content.ts` opens with it and it is not optional. Every figure and client
name in the file is verified. **Nothing may be invented** — no testimonials,
pricing, awards, certifications, press, partner logos, or outcome metrics beyond
the confirmed counts. If a fact isn't known, the field is simply absent.
Anything standing in for real material must be visibly marked with
`<PlaceholderNote>`.

Verified counts: 10,000+ staff (Makerere e-HRMS) · 48,839 student files and
49,038 total files and 1,942 users (Academic Records) · 500+ students, 200+
theses, 150+ active projects (GRIMS) · 1,000+ users (UBOS e-HRMS) · 4 modules
and 7 roles (AHPC) · 7 live systems of record · founded 2019.

Two claims were deliberately softened and should not be strengthened without the
client confirming: the team is "drawn from Makerere University academia," **not**
"a research group out of Makerere University" — that reads as institutional
affiliation and is legally material for procurement. And the site says 7 systems
of record in service, not 9 projects in production, because two of the nine are
research programmes rather than live systems.

## Open items

1. **`DESIGN.md` does not exist.** It was deleted along with the previous
   (rejected) design world and never rewritten for the current teal system.
   `.impeccable/surfaces/app-page-tsx.md` is also stale — it still describes the
   discarded "Painted Directory Board" direction. Both should be regenerated to
   match what's actually built.
2. **Insights are unapproved drafts.** The three pieces in `lib/content.ts` were
   written from real AHPC architecture (read-only integration boundaries,
   derive-once-on-write, approval chains as configuration). They're technically
   true but nobody at Nectar has reviewed them. They're labelled "Draft" on the
   page and set to `noindex`. They need sign-off or replacement.
3. **Awaiting client assets:** team portraits (monograms shown, marked) and
   product screenshots (the AHPC case page has a marked slot where the monthly
   grid should go).
4. **Recommended, needs client input, do not invent:** a named/capitalised
   delivery method or reference architecture (peer firms all own one —
   AI/works™, Technology Radar, GovTech Stack); ISO 9001 / ISO 27001 badges if
   they hold them, which is the highest-value credential for ministry buyers;
   moving off `nectarug.technologies@gmail.com` to role addresses on
   nectartechnologies.com, since a Gmail address on a procurement page is a real
   credibility leak.
5. **Never shipped:** no OG image asset exists, so Twitter card is `summary`
   rather than `summary_large_image`. An `opengraph-image.tsx` using
   `ImageResponse` in the brand palette would be a quick win.

## Reference bar

The client chose Thoughtworks / Slalom as the tier to sit alongside. Research
across ~18 peer sites established the conventions this build follows: five-to-six
item nav, named-client wall in the first or second band, case titles written as
outcomes rather than project descriptions, metrics always attached to a named
client, hairline rules instead of card chrome with shadows, 90/10
neutral-to-brand colour, one contrast CTA in the header. Anti-patterns to keep
out: rounded cards with drop shadows, three-up icon rows, gradient mesh blobs,
anonymous testimonials, floating firmographic stats, "leading provider of"
copy, and Google-default typefaces.

---

## What I want to do next

<!-- Replace this line with your actual task. -->
