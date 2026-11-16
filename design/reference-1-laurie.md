# Reference 1 — "Weddings by Laurie" (layout study)

Source: the two reference frames in the Paper file `daveball-weddings`, both full captures of a
wedding-planner website template ("Weddings by Laurie").
- **Frame A**: home page, 1617 × 8227
- **Frame B**: about page, 1617 × 3588

**What we take from them:** layout, section building blocks, grid, spacing rhythm, image treatments
and component shapes.
**What we don't take:** their colours, fonts and copy. Colours and type come from our brand guide,
copy comes from `content/content.md`, and photos come only from the Drive folder.

---

## 1. Layout system

- **Fluid 24-column grid** with an 11px gap and a minimum side gutter of about 22px. Content runs
  nearly edge to edge on desktop. Elements are placed by grid column span, not inside centred
  containers. Text blocks typically span 10–14 columns; images span 6–12.
- **Full-bleed sections.** Each section is a full-width band with its own background
  (white / cream / dark), so the background changes mark the page's rhythm.
- **Vertical rhythm:** about 108px of padding on big statement sections and about 54px on split
  sections. Plenty of empty space around a single idea.
- **Corners are sharp.** The only rounded shapes are the **arch-topped photo** (top radius ~400px)
  and the **circular arrow buttons**.

## 2. Section building blocks (in page order)

| Code | Block | Frame A / B | Anatomy |
|---|-------|-------------|---------|
| L1 | **Header bar** | both | Wordmark on the left, 3 nav links in the centre, small icon + solid CTA button on the right. ~65px tall, transparent over the page background. |
| L2 | **Full-bleed hero photo** | A | Edge-to-edge photo (~1180px tall), followed by a huge one-line wordmark headline on white. |
| L2b | **Headline-over-arch hero** | B | Giant headline (~120px, tight tracking) above a centred arch-topped portrait on cream. |
| L3 | **Statement block** | A | Small ornament mark → large centred statement (55px / 56px line height, −0.03em tracking, 2 paragraphs) → one small CTA button. White background, very generous padding. |
| L4 | **Split: text + arch portrait** | A | Cream background. Left: ornament, small eyebrow label, big name (88px), short bio (20px), button. Right: tall arch-topped photo spanning ~12 columns. |
| L5 | **Split: photo + offerings list** | A | Left: large rectangular photo. Right: ornament, eyebrow, the **service names stacked as large display lines**, button. |
| L5b | **Split: photo + headline + body** | B | Left: portrait photo (~7 columns). Right: 55px headline over 3 short body paragraphs (16px), aligned to the bottom of the image. |
| L6 | **Full-bleed photo slideshow** | A | Edge-to-edge image (~1400px tall) with circular prev/next arrows on the left and right edges. |
| L7 | **Testimonial on dark** | A | Dark background. Left: couple's name in the accent colour + a centred quote in white. Right: two portrait photos side by side. Circular arrow buttons centred below. |
| L7b | **Horizontal image carousel** | B | A row of square photos running past the right edge, with circular arrows below. |
| L8 | **3-up card row** | A | Centred section title (88px), then 3 equal columns: square photo, title in accent colour (36px), 2-line description, underlined text link. |
| L9 | **Footer** | both | Cream background. Left: short line + email field + button. Right: two columns of underlined links. Lots of empty space. |

## 3. Typographic behaviour (sizes to remap onto our type scale)

- Display: **88–120px**, tight tracking (−0.03em), line height ~0.95. Used for the wordmark, names and section titles.
- Statement / H2: **55px**, −0.03em tracking, line height ~1.0.
- Card title: **36px**, in the accent colour.
- Body: **16–20px**, line height 1.4.
- Eyebrow label and button: **14–16px**, slightly open tracking (+0.02em).
- Contrast comes from **scale, not weight**: big display type at a regular weight against small body text.

## 4. Components

- **Primary button:** solid accent fill, white 14px label, padding 10 × 16, **square corners**.
- **Text link:** underlined, small, body colour.
- **Round arrow button:** about 60px circle, accent fill, white thin arrow.
- **Ornament:** a small 4-point star (34px) in the accent colour, placed above key headings. *For us,
  this becomes a brand mark we design.*
- **Arch image mask:** fully rounded top corners, square bottom.
- **Email input:** thin border, square corners, joined to the button.

## 5. Colour roles in the reference → our brand guide

| Reference role | Reference value | Our role |
|---|---|---|
| Accent (headlines, buttons, arrows, ornament) | red #E24646 | **Brand forest green** |
| Warm section background | cream #FFFCE0 | **Linen** |
| Default background | white | white / off-white neutral |
| Dark feature section | plum #2F1E24 | **Deep green** (darkest brand shade) |
| Body text | black | **Ink** (grayscale 900) |

## 6. Mapping our content onto the blocks (proposal)

1. **Header**: DAVE BALL wordmark · nav · "Book a consultation" CTA *(nav and CTA labels are new copy → need approval)*
2. **Full-bleed hero**: Leanne & Louis ceremony photo + "DAVE BALL / LICENSED WEDDING OFFICIANT"
3. **Statement block**: "If you are reading this: Congratulations! …"
4. **Split + arch portrait**: Officiant Pic with the "It's an honour…" intro paragraph, plus contact details
5. **Split: photo + offerings**: "My services". The three services stacked large, with description and price for each
6. **Linen band**: "All services include" + "Other considerations" lists
7. **Full-bleed slideshow / carousel**: Leanne & Louis gallery
8. **Testimonial on dark green**: Leanne & Louis quote + two photos
9. **CTA + footer**: "To book your free virtual consultation email weddings@heydaveball.com", phone, affiliation line

Dropped because we have no content for them: the blog card row ("Wedding Stories") and the
newsletter sign-up. The 3-up card layout could be reused for the three services if we want.

## 7. Linking requirement (edit at scale)

The brand guide must be the single source for every colour, type style, spacing step and radius:
- In **Paper**: saved as file design tokens (Tailwind v4 namespaces: `--color-*`, `--font-*`, `--text-*`,
  `--tracking-*`, `--leading-*`, `--spacing-*`, `--radius-*`, …). Every design frame references
  `var(--token)`, never a raw hex or pixel value.
- In **code**: the same token names, as CSS custom properties in `src/styles/tokens.css`. Sections only
  use tokens, so changing a token in one place updates the whole site.
