# Rotten Council Website — Missing Assets & Content Checklist

This file tracks assets and content that need to be provided for a complete, professional website. Items marked with placeholders are already represented in the HTML with temporary content.

---

## P0 — Critical

These items are essential. The site looks incomplete without them.

- [ ] **Gameplay Screenshots** (4-6 images, 1920x1080 or 16:9)
  - Council table overview with cards
  - Card selection / statement reading
  - Arrest action moment
  - Role reveal (clean vs corrupt)
  - Campaign map / act progression
  - Custom game setup panel
  - *Placeholder: gray boxes with "Screenshot Coming Soon"*

- [ ] **Developer / Studio Logo** (SVG or PNG, transparent background)
  - Used in: nav bar, footer, press kit
  - *Placeholder: text-only "Studio Name"*

- [ ] **Store Page Link** (Steam, itch.io, Epic, etc.)
  - Used in: hero CTA buttons, nav "Get the Game" button, footer
  - *Placeholder: buttons link to `#` with "Coming Soon" tooltip*

- [ ] **Open Graph Image** (1200x630 JPG/PNG for social media link previews)
  - Used in: `<meta property="og:image">`
  - *Placeholder: uses favicon as fallback*

---

## P1 — Important

Expected on professional game websites. Should be added before public launch.

- [ ] **Gameplay Trailer / Video** (YouTube or Steam embed URL, 30-90 seconds)
  - Used in: hero "Watch Trailer" button
  - *Placeholder: button disabled with "Coming Soon" label*

- [ ] **Social Media Links** (URLs for active accounts)
  - Discord server invite link
  - Twitter/X profile
  - YouTube channel
  - Steam Community hub
  - *Placeholder: icons in footer linking to `#`*

- [ ] **System Requirements** (minimum and recommended specs)
  - OS, Processor, RAM, Graphics, Storage
  - *Placeholder: omitted from current build*

- [ ] **Release Status / Date**
  - "Coming Soon" / "Early Access" / "Released" + target date
  - *Placeholder: "In Development" badge in hero*

- [ ] **Press / Review Quotes** (2-3 testimonials or press excerpts)
  - Source name, quote text, optional avatar
  - *Placeholder: section hidden via CSS*

- [ ] **Wishlist / Newsletter CTA**
  - Steam wishlist URL or email signup endpoint
  - *Placeholder: "Wishlist on Steam" button linking to `#`*

---

## P2 — Nice to Have

Polish and completeness. Add when resources allow.

- [ ] **Developer "About" Content** (1-2 paragraphs about the studio/team)
  - *Placeholder: brief generic paragraph*

- [ ] **Press Kit ZIP** (downloadable package: logos, screenshots, descriptions, key art)
  - *Placeholder: footer link to `#`*

- [ ] **Animated GIFs / Short Clips** (3-5 second gameplay loops for inline use)
  - *Placeholder: static screenshots*

- [ ] **FAQ Content** (5-10 common questions and answers)
  - *Placeholder: section omitted*

- [ ] **Legal Pages** (Privacy Policy, Terms of Service, Imprint)
  - *Placeholder: footer links to `#`*

---

## Already Available

These assets exist in the game and are copied to the website:

- [x] Game icon / council seal logo (`icon.png`, 1000x1000)
- [x] 20 character portraits (10 clean + 10 corrupt variants)
- [x] 2 atmospheric backgrounds (city hall + council table)
- [x] UI icons (handcuffs, detective, interrogator, janitor, etc.)
- [x] Complete game mechanics text (roles, abilities, features)
- [x] Full color palette + typography system (WEBSITE_DESIGN_GUIDE.md)
