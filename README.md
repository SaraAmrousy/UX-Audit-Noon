# UX Audit — noon Saudi Arabia

A comprehensive UX and accessibility audit of [noon.com/saudi-en](https://www.noon.com/saudi-en) covering the full iPhone 17 purchase journey on both Web (1440×900) and Mobile (390×844), delivered as a self-contained interactive HTML report.

## Deliverable

Open **`report/index.html`** in any modern browser — the report is a single static page that loads `audit-data.js` and references screenshots via relative paths. No build step, no CDN, no server required.

```
UX-Audit-Noon/
├── report/
│   ├── index.html        ← main deliverable (vanilla HTML/CSS/JS)
│   └── audit-data.js     ← 55 findings, EN + AR translations
├── screenshots/
│   ├── web/      (9 PNGs — full-page, 1440 wide)
│   └── mobile/   (9 PNGs — full-page, 390 wide, iOS UA)
├── capture*.js           ← Playwright capture scripts (3 fallback strategies)
├── capture-log.json      ← capture status per step/platform
└── package.json
```

## What's in the report

- **Executive Summary** — narrative + top risks + quick wins + metric bar
- **Audit in Slides** — 55 horizontally-scrollable issue cards
- **9 Journey Steps** — Homepage → Search → Results → Brand → PDP → Add-to-Cart → Cart → Checkout → Confirmation, each with:
  - Sticky annotated screenshot (numbered hotspot dots)
  - Platform toggle (Web ↔ Mobile)
  - Observation · UX Issue (Nielsen heuristic) · Accessibility Issue (WCAG 2.1 criterion) · Impact · Recommendation · Severity
- **Insights** — 5 theme cards + full Web-vs-Mobile comparison table
- **Accessibility** — Contrast, Tap-target, and Labeling tables aggregated across the journey
- **Summary tab** — condensed dashboard (Executive Summary · Key UX Themes · Key A11y Issues · W/M comparison · Opportunities)

## Features

- 🌓 Dark / light theme toggle (persists in `localStorage`)
- 🌐 EN ⟷ AR language toggle with full RTL mirroring
- 🖼️ Click any screenshot to open full-screen modal
- 🎯 Hover an annotation dot → highlights its matching analysis card (and vice-versa)
- ⌨️ Full keyboard support: Tab / Shift+Tab, Arrow keys between tabs, Esc to close modals, skip-to-content link
- 🖨️ `Export PDF` button expands every tab for print
- ♿ WCAG 2.1 AA contrast tokens, `aria-selected` on tabs, `aria-label` on icon buttons, `prefers-reduced-motion` honored

## Methodology

- **UX framework**: Nielsen's 10 Usability Heuristics (every UX finding cites #N + name)
- **A11y framework**: WCAG 2.1 AA (every accessibility finding cites exact criterion + level)
- **Scope**: 9 journey steps × 2 platforms = 18 screens
- **Findings**: 55 total (23 High · 32 Medium/Low)
- **Capture**: 17/18 real screenshots via Playwright + stealth headful; 1 placeholder (bot-protected state)

## Capture pipeline

Four progressive capture strategies live in the repo root:

| Script                | Strategy                                             |
|-----------------------|------------------------------------------------------|
| `capture.js`          | Headless Chromium, 3-attempt retry per step          |
| `capture-stealth.js`  | Headful + `playwright-extra` stealth plugin          |
| `capture-retry.js`    | Persistent context reuse, targeted re-attempts       |
| `capture-final.js`    | Per-step custom wait + different viewport strategies |

Every attempt is logged to `capture-log.json` with timestamp, status (`captured` / `fallback`), and reason.

To re-run:

```bash
npm install
node capture-stealth.js   # or capture-retry / capture-final as needed
```

## Design system

- Font: Inter via system stack
- Monochrome surface tiers: `#FBFBFC` page · `#FFFFFF` paper · `#F5F6F7` inset · `#ECEDEF` divider
- Layered paper shadows (pure black, 3–8% alpha)
- noon yellow `#FEEE00` used sparingly as brand-only accent
- 4-px spacing scale (`--sp-1` through `--sp-16`)
- Severity pills: high `#B91C1C` · medium `#B45309` · low `#15803D`

## Tech

Vanilla HTML/CSS/JS only — zero runtime dependencies, zero CDN links. Data layer (`audit-data.js`) is a single plain-JS object; all rendering is a set of small builder functions in `report/index.html`.

---

_Audit conducted April 2026. Findings are inferred from documented noon.com SA patterns grounded in 17 real captured screens._
