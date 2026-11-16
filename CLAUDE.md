# DaveBall Weddings — project notes

One-page, fully responsive site. Vite + plain HTML/CSS/JS, deployed to GitHub Pages
(https://thiuma.github.io/DaveBall-Weddings/) on every push to `main`.

## Content
- Site: Dave Ball, Licensed Wedding Officiant (Toronto/GTA). Offerings: Full length ceremony ($750+HST),
  Pre-wedding signing ($600+HST), Legal attending ($500+HST).
- **All copy comes from `content/content.md`**, a verbatim transcription of `content/dave-ball-officiant-one-pager.pdf`.
  Any new or reworded copy is only a suggestion and needs the user's approval. Never fix flagged typos silently.
- The PDF's building blocks (hero, intro letter, includes checklist, services with prices, testimonial,
  ceremony photo, booking CTA, affiliation footer) define the sections and offerings to build.

## Design references (Paper file `daveball-weddings`)
- Layout only: take structure, grid, spacing and block anatomy, never their colours, fonts or copy.
- `design/reference-1-laurie.md`: wedding-planner template, centred/romantic blocks **L1–L9**.
- `design/reference-2-kinsley.md`: tutoring template, left-aligned/editorial blocks **K1–K14**.
- When the user names a block (e.g. "use K6"), adapt that block to our brand tokens and content.
- Brand guide → Paper design tokens + `src/styles/tokens.css` with the same names; designs and code
  use only tokens, so edits apply everywhere.

## Designs
- Two versions in Paper: "Version A — Essentials" and "Version B — Full" (see design/versions.md). Version A is the active design; Version B is a frozen reference — never edit it. Winner gets coded later; desktop only in Paper, responsive handled in code.

## Workflow
- Design references come from Paper.
- Phase 1: layout and UI. Phase 2 (later): interactions and animations.
- One short-lived branch per round of work, merged into `main` via pull request. `main` is not branch-protected.

## Images
- Use **only** the photos in this Google Drive folder for all designs — no stock or placeholder imagery in final work:
  https://drive.google.com/drive/folders/1Xy4Yzwu57o0loVL6AbygugKxPOyGYygA
  (25 JPGs, ~140 MB: "Leanne & Louis-*" shoot photos, five `PXL_*` phone photos, "Officiant Pic").
- Download originals into `assets-source/` (git-ignored), only when needed for the design.
- Commit only optimized, resized web versions (WebP/AVIF, several widths) and serve them responsively.
