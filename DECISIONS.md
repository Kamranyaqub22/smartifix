# Decisions — Smart iFix Website

Documents key architecture, design, and business decisions made during the build.

---

## Design Decisions

### D1 — Dark Theme
**Decision:** Use a near-black dark background (#050509) rather than a light theme.
**Reason:** Tech repair shops targeting younger, device-savvy audiences respond better to premium dark UIs. Dark also makes the electric blue and gradient accents pop with more visual impact. Competitors in the space use light or mid-tone themes — dark differentiates.

### D2 — Electric Blue + Purple Accent Palette
**Decision:** Primary accent #00d4ff (electric blue), secondary accent #7c3aed (purple).
**Reason:** Blue signals trust, reliability, and technology. Purple signals innovation and premium quality. Combined, they create a modern tech brand feel without looking generic.

### D3 — No Images in Hero / Services
**Decision:** Use CSS gradients + emoji iconography instead of photography in the hero and service cards.
**Reason:** No professional photography available at build time. Emoji-based icons are universal, instantly understood, render crisply at all sizes, and avoid stock photo blandness. The abstract radial gradient hero backgrounds feel custom without requiring assets.

### D4 — Glassmorphism Cards
**Decision:** Service/testimonial cards use `rgba(255,255,255,0.04)` glass cards with subtle border and shadow.
**Reason:** Consistent with the dark premium aesthetic. Provides visual depth without heavy design complexity. Easy to maintain across all card types with shared CSS variables.

### D5 — Inter Typeface
**Decision:** Single typeface — Inter (Google Fonts), weights 400/500/600/700/800/900.
**Reason:** Inter is optimised for screens, reads well at both large display and small body sizes, is free via Google Fonts, and is broadly associated with modern SaaS and tech products. Using one family keeps the load fast and the look consistent.

---

## Technical Decisions

### T1 — Vanilla HTML/CSS/JS (No Framework)
**Decision:** Static HTML files, single CSS file, single JS file. No React, Vue, build tools, or bundler.
**Reason:** A local business website doesn't need component reactivity. Vanilla stack means: instant hosting on any server, no build steps, easy handoff, and near-zero maintenance overhead. Lighthouse performance is easier to optimize.

### T2 — CSS Custom Properties for All Design Tokens
**Decision:** All colours, spacings, radii, fonts, and transitions defined as CSS variables in `:root`.
**Reason:** Enables consistent theming, easy future changes (e.g. rebrand accent colour in one line), and avoids magic values scattered across the stylesheet.

### T3 — IntersectionObserver for Animations and Counters
**Decision:** Use `IntersectionObserver` for scroll-triggered animations and counter start trigger, with a graceful fallback for old browsers.
**Reason:** Smooth perceived quality without JavaScript scroll events on every frame. The fallback (`classList.add('visible')` for non-supporting browsers) ensures nothing is invisible if IntersectionObserver is unavailable.

### T4 — Formspree + WhatsApp Fallback for Contact Form
**Decision:** Contact form submits to Formspree. If Formspree is unavailable or not configured, falls back to opening a pre-filled WhatsApp message.
**Reason:** WhatsApp is the primary business communication channel. The fallback ensures zero lost leads even before Formspree is configured. The WhatsApp message is pre-filled with form data for a seamless experience.

### T5 — Schema.org LocalBusiness on Every Page
**Decision:** Full `LocalBusiness` JSON-LD schema on every page, not just the homepage.
**Reason:** Google can encounter the site on any page via search. Having structured data on every page maximises rich snippet eligibility and local pack ranking signals regardless of the landing page.

### T6 — Announcement Bar Fixed Top
**Decision:** Announcement bar sits above the fixed navbar, pushing it down by 40px.
**Reason:** High-visibility placement for the key conversion message ("No Fix No Fee · Same Day Repairs"). The close button dismisses it and the navbar repositions to fill the space via JS.

---

## SEO Decisions

### S1 — Service Pages by Device Type
**Decision:** Separate landing pages for MacBook, Laptop, iPhone, Gaming PC rather than one giant services page.
**Reason:** Targeted pages rank individually for "{device} repair London/Surrey" long-tail searches. One services page would dilute keyword focus and reduce page-level relevance signals.

### S2 — Areas Covered Section on Homepage
**Decision:** Dense tag cloud of 40+ area/suburb names on the homepage and contact page.
**Reason:** Each area name is a potential keyword match for "repair near [area]" searches. This section provides geographic relevance signals without building hundreds of individual area pages.

### S3 — Canonical URLs on Every Page
**Decision:** Hard-coded `<link rel="canonical">` pointing to the exact production URL on every page.
**Reason:** Prevents duplicate content penalties if pages are indexed under multiple paths (e.g. with/without trailing slash, staging/production crossover).

---

## Content Decisions

### C1 — No Fix No Fee as Primary Trust Signal
**Decision:** "No Fix No Fee" appears in: announcement bar, hero trust items, trust bar, why-us section, CTA section, and OG/Twitter descriptions.
**Reason:** This is the single most powerful anxiety-reducer for repair shop customers. Repetition is intentional — it should be impossible to miss.

### C2 — Prices Shown on Homepage
**Decision:** Show "from £X" prices on service cards and the MacBook/iPhone spotlight sections.
**Reason:** Transparency builds trust. Hiding prices makes customers worry about being overcharged. Showing starting prices sets expectations and filters out non-buyers early, improving lead quality.

### C3 — Real Customer Reviews with Initials Instead of Photos
**Decision:** Use customer initials as avatar placeholders (e.g. "PJ" for Palbha Jain) rather than photos or generic icons.
**Reason:** No customer photos available. Initials feel personal and specific (not generic "user" icons) while remaining accurate to the actual reviewer identity.
