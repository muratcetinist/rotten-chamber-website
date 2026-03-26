# CLAUDE.md: Rotten Chamber Website

## Project Overview

Marketing website for **Rotten Chamber**, a single-player social deduction puzzle game built in Godot. This is a static site with no build step and no framework. Open `index.html` in a browser to preview.

The game repository lives at `../../` (parent `game-1/`). The game's own `CLAUDE.md` is the authoritative source for game mechanics, role names, campaign structure and data. **Always cross-reference game data before writing website content.** Role names, counts and campaign structure change in the game repo first.

## Hosting & Domain

- **Domain:** `rottenchamber.com` (managed via Cloudflare)
- **Hosting:** GitHub Pages (repo: `muratcetinist/rotten-chamber-website`)
- **Deploy:** automatic from `main` branch, no build step
- **DNS:** Cloudflare DNS, CNAME file in repo root
- **Cloudflare SSL/TLS:** must be **Full** (not Full strict). Strict mode causes 5xx errors because Cloudflare cannot validate GitHub Pages' Let's Encrypt origin certificate. This breaks Google crawling.
- **Cloudflare "Always Use HTTPS":** ON (configured 2026-03-26)
- **Google Search Console:** property verified at `rottenchamber.com`

## Tech Stack

- Plain HTML5 / CSS3 / vanilla JS
- No bundler, no npm, no build step
- Google Fonts loaded via CDN (Oswald, Crimson Pro)
- i18n: JSON-based with `data-i18n` attributes; English is the HTML default

## File Structure

```text
website/
├── index.html              Single-page site
├── css/styles.css          All styles (variables, layout, components, responsive)
├── js/
│   ├── main.js             Nav, scroll reveal, particles
│   └── i18n.js             Language detection, translation engine
├── lang/
│   └── en.json             English translation keys (fallback; HTML has defaults)
├── assets/images/
│   ├── exclusive/          Web-only art (AI-generated masters)
│   │   ├── *_master.png    Full-resolution source images
│   │   └── derived/        Crops: mobile, OG, etc.
│   ├── portraits/          Game portrait copies (legacy, mostly unused now)
│   ├── backgrounds/        Game background copies (legacy)
│   ├── icons/              Game icon copies (placeholder, to be replaced with SVG)
│   └── favicon.png         Source favicon (256x256 RGBA, council table)
├── apple-touch-icon.png    180x180 RGB (dark bg, for iOS/Google thumbnail)
├── favicon.ico             Multi-size ICO (16/32/48)
├── favicon-32x32.png       32x32 browser tab favicon
├── favicon-16x16.png       16x16 browser tab favicon
├── robots.txt              Crawler directives + sitemap reference
├── sitemap.xml             XML sitemap for search engines
├── .nojekyll               Disables Jekyll processing on GitHub Pages
├── 404.html                Themed error page (noir aesthetic, noindex)
├── CNAME                   GitHub Pages custom domain (rottenchamber.com)
├── WEBSITE_TODO.md          Asset & integration tracker
└── hero_keyart_philosophy.md   Art direction brief for hero image
```

## Key Conventions

### Writing Style

- **No Oxford comma.** Write `A, B and C` not `A, B, and C`. Same for `or`.
- **No em dash.** Use a colon, period or restructure the sentence instead.

### HTML & SEO

- **Semantic HTML is mandatory.** Every element must use the correct tag for its purpose (e.g. `<blockquote>` for quotes, `<nav>` for navigation, `<section>` for thematic grouping).
- **SEO opportunity is obligation.** If a change can serve SEO (alt text, keyword placement, structured data, heading hierarchy), it must. Do not leave SEO value on the table.

### Spoiler Policy

- **No corrupt portraits** (`*_c.png`, `*_mc.png`, `*_fc.png`) displayed on site
- **No flip-card reveal** mechanics (removed)
- **Roles section** shows 4 showcase characters + a mystery block for corrupt side
- **Mechanic details** kept minimal; the site sells atmosphere, not the full rulebook

### Content Accuracy

Before editing any game-related content (role names, campaign numbers, mechanic descriptions), verify against the game repo:

- Role names & ordering: `scripts/core/game_enums.gd` (`CORRUPT_DISPLAY_ORDER`, `ROLE_*` constants)
- Campaign structure: `scripts/systems/run_data.gd` (3 acts, 15 levels each = 45 total)
- Professional abilities: `scripts/data/professional_data.gd`
- Annotation stamps: `scripts/core/game_enums.gd` (innocent, corrupt, suspicious)

### Asset Tiers

1. **Exclusive** (`assets/images/exclusive/`): web-only, AI-generated art. These are the primary visuals.
2. **Game copies** (`portraits/`, `backgrounds/`, `icons/`): copied from game repo for placeholder use. Icons in How to Play are placeholders to be replaced with custom SVG.

### i18n

- English text is embedded directly in HTML (source of truth for EN)
- `lang/en.json` is a parallel reference. Keep it in sync when HTML content changes.
- `data-i18n` keys on elements; `data-i18n-attr` for attributes
- Only English is active; other languages are commented out in `i18n.js`

### CSS Architecture

- CSS custom properties in `:root` for colors, spacing, timing
- BEM-like naming: `.block__element--modifier`
- Responsive breakpoints: 1024px (tablet), 640px (mobile), 380px (small mobile)
- Section atmospheric textures use `::before` pseudo-elements with low opacity
- No CSS preprocessor. Plain CSS only.

### Sections

| Section | Description |
| --- | --- |
| Hero | Key art background, title, CTA buttons |
| Screenshots | 6 real gameplay screenshots with lightbox |
| How to Play | 4-step overview with placeholder icons |
| Roles | 4 showcase cards + corrupt mystery block |
| Features | 3x2 grid of feature cards |
| Footer | Brand, links, social placeholders |
