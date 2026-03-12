# Tasks — Smart iFix Website

Follow the workflow from `emergent_style_vs_code_master_prompt.md`.

---

## Build Status

### ✅ Phase 1 — Core Pages (Complete)
- [x] `index.html` — Homepage (hero, services, why-us, process, stats, testimonials, spotlights, areas, CTA, footer)
- [x] `services.html` — All Services listing
- [x] `macbook-repair-london.html` — MacBook Repair landing page
- [x] `laptop-repair-london.html` — Laptop Repair landing page
- [x] `iphone-repair-london.html` — iPhone Repair landing page
- [x] `gaming-pc-repair-london.html` — Gaming PC Repair landing page
- [x] `about.html` — About Us page (team, values, guarantees, FAQ)
- [x] `contact.html` — Contact page with form + map + hours

### ✅ Phase 2 — Design System (Complete)
- [x] CSS variables / design tokens in `style.css`
- [x] Dark theme with electric blue + purple accent
- [x] Inter typeface + typography scale
- [x] Button system (primary, outline, ghost, green)
- [x] Glassmorphism cards
- [x] Responsive grid system (1200px container)
- [x] Announcement bar component
- [x] Navbar with scroll shrink and mobile hamburger
- [x] Floating WhatsApp + Call buttons
- [x] Back to top button
- [x] Page loader with logo

### ✅ Phase 3 — Animations & JS (Complete)
- [x] Scroll-triggered fade-in / fade-in-left / fade-in-right
- [x] Animated stats counters (IntersectionObserver)
- [x] FAQ accordion
- [x] Active nav link detection
- [x] Contact form with Formspree + WhatsApp fallback
- [x] Announcement bar dismiss
- [x] Highlight today's opening hours

### ✅ Phase 4 — SEO (Complete)
- [x] Unique `<title>` and `<meta description>` on all pages
- [x] `<link rel="canonical">` on all pages
- [x] Open Graph meta tags on all pages
- [x] Twitter Card meta on all pages
- [x] Schema.org `LocalBusiness` structured data on all pages
- [x] `sitemap.xml`
- [x] `robots.txt`
- [x] Breadcrumb navigation on inner pages

---

## 🔴 Open Issues (Identified via Review Audit — March 2026)

### Critical
- [x] **Footer dead links** — Fixed. `privacy-policy.html` created; all 8 pages now link to `privacy-policy.html#privacy`, `#terms`, `#cookies`
- [x] **Missing `og:image`** on `about.html` and `contact.html` — Fixed. Added `og:image` meta to both pages.

### High
- [x] **No favicon** — Fixed. Added `<link rel="icon" href="images/logo.svg" type="image/svg+xml">` to all pages.

- [ ] **`about.html` nav-phone missing phone SVG icon**
  → Low impact but visible inconsistency vs index.html

### Medium
- [ ] **No real Google Maps embed** on `contact.html`
  → Consider embedding Google Maps iframe for the Worcester Park address

- [ ] **No real review schema** — Reviews in testimonials section not backed by `Review` structured data
  → Add `schema.org/Review` markup to visible testimonials

### Low
- [ ] **Social share images (`og:image`)** don't exist yet in `/images/`
  → Design/export a 1200×630 og-image.jpg for the site

- [ ] **Missing `aria-label`** on some button elements across pages
  → Audit all `<button>` elements for accessibility labels

- [ ] **Cookie consent** — Cookie Policy referenced in footer with no consent banner
  → Either add a lightweight cookie banner or confirm cookies are not being set

---

## 🧪 QA Checklist

### Before Publishing
- [ ] Test all pages on mobile (320px, 375px, 414px)
- [ ] Test navigation hamburger open/close on all pages
- [ ] Test contact form submission (Formspree endpoint set)
- [ ] Verify all internal links work (no 404s)
- [ ] Verify Google Analytics / GTM code inserted
- [ ] Run Lighthouse audit on homepage (target: 90+ Performance, 100 Accessibility)
- [ ] Test click-to-call and WhatsApp links on real mobile device
- [ ] Verify Schema.org markup with Google Rich Results Test
- [ ] Submit sitemap.xml to Google Search Console after deployment

---

## 🚀 Future Enhancements
- [ ] Add a "Book a Repair" online booking system
- [ ] Add a price calculator tool (estimated repair cost by device + issue)
- [ ] Add a live chat widget (Tidio or Crisp)
- [ ] Build a blog/articles section for SEO long-tail keywords
- [ ] Add a gallery section with before/after repair photos
- [ ] Set up Google Reviews API integration (live review feed)
- [ ] Add WhatsApp Business API for automated first response
