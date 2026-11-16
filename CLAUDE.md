# DaveBall Weddings — project notes

One-page, fully responsive site. Vite + plain HTML/CSS/JS, deployed to GitHub Pages
(https://thiuma.github.io/DaveBall-Weddings/) on every push to `main`.

## Workflow
- Design references come from Paper; copy comes from a PDF the user provides.
- Phase 1: layout and UI. Phase 2 (later): interactions and animations.
- One short-lived branch per round of work, merged into `main` via pull request. `main` is not branch-protected.

## Images
- Use **only** the photos in this Google Drive folder for all designs — no stock or placeholder imagery in final work:
  https://drive.google.com/drive/folders/1Xy4Yzwu57o0loVL6AbygugKxPOyGYygA
  (25 JPGs, ~140 MB: "Leanne & Louis-*" shoot photos, five `PXL_*` phone photos, "Officiant Pic").
- Download originals into `assets-source/` (git-ignored), only when needed for the design.
- Commit only optimized, resized web versions (WebP/AVIF, several widths) and serve them responsively.
