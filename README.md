# Animaticons — 1,026 Free Animated Icons

**Animaticons** is a website showcasing 1,026 free animated icons (513 designs × 2 packs: **Aura** and **Ember**) with live preview, search, customization and copy-paste code.

![theme](https://img.shields.io/badge/theme-light%20orange-FFA24D) ![icons](https://img.shields.io/badge/icons-1%2C026-F2892C) ![license](https://img.shields.io/badge/license-MIT-green)

## What's inside

| Page | What it does |
| --- | --- |
| `index.html` | Landing page — hero, quick find, live playground (size / duration / color + code copy), pack showcase, real-UI demos |
| `gallery.html` | Full gallery — pack switcher, 33 categories with counts, live search, quick-copy (SVG / React / Vue / HTML), mobile filter drawer |
| `icon.html` | Icon detail — big preview, size / duration / color controls, replay & reset, code tabs, download SVG, related icons, prev / next |
| `docs.html` | Documentation — install, usage, props, triggers, motion vocabulary, accessibility, license, FAQ |

Plus: command palette (`⌘K` / `Ctrl+K`), copy toasts, reduced-motion support, keyboard-friendly controls.

## The icon set

- **1,026 icons** generated from original geometry (no copied artwork): 513 designs in two render styles
  - **Aura** — crisp outline style, no fill
  - **Ember** — the same design with tinted fills baked into its closed shapes (every pair differs)
- **33 categories** — from "On the Move" and "Panels & Controls" to "Sky & Weather", "Bites & Sips" and "Play & Party"
- Motion vocabulary of ~10 animation types (`pop`, `draw`, `swing`, `spin`, `drop`, `pulse`…) applied per element and triggered on hover
- Regenerate the dataset any time with:

```bash
node scripts/generate.mjs   # writes js/icons-data.js
```

The generator lives in `scripts/` (`dsl.mjs` + `recipes/*.mjs`). Edit recipes to tweak geometry, keywords or animations, then regenerate.

## Run it

The site is fully static — no build step. Serve the folder with any static server:

```bash
python3 -m http.server 4173
# or: npx serve .
```

Then open `http://localhost:4173`.

## Design

- Main color: **light orange** (`#FFA24D` / `#F2892C`) on warm cream surfaces
- Type: [Fraunces](https://fontsource.com/fonts/fraunces) (display) + [Plus Jakarta Sans](https://fontsource.com/fonts/plus-jakarta-sans) (text), bundled as woff2 in `assets/fonts/`
- Every icon is original, procedurally assembled SVG on a 24×24 grid with round caps

## License

MIT — see [LICENSE](LICENSE). Use the icons and the site code in personal and commercial projects.
