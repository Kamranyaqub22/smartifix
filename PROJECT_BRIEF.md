# Project Brief — Smart iFix

## Project Name
Smart iFix — Tech Repair Website

## Project Type
Local business website (multi-page, static HTML)

## Goal
Generate phone calls, WhatsApp enquiries, and footfall for a physical tech repair shop in Worcester Park, Surrey. Convert visitors from Google Search (organic SEO) into repair bookings.

## Audience
- Individuals in South West London / Surrey with broken devices
- Device types: MacBook, iPhone, laptop, gaming PC, Android
- Age: 18–55, tech-comfortable but not technical
- Entry points: Google search ("MacBook repair Surrey", "iPhone repair near me"), word of mouth, Google Business Profile

## Main User Problem
Their device is broken and they need a trustworthy, local, affordable repair that won't take forever or rip them off.

## Success Criteria
- Visitor calls or WhatsApps within 60 seconds of landing
- Clear understanding of services and prices before committing
- Trust established through social proof, guarantees, and transparency
- Strong SEO ranking for local repair terms across London & Surrey

## Core Features
- Service pages (MacBook, Laptop, iPhone, Gaming PC)
- Contact form with WhatsApp fallback
- Click-to-call and floating WhatsApp buttons
- Animated stats counters (reviews, success rate, customers)
- Areas covered section (SEO keyword coverage)
- Reviews/testimonials
- FAQ accordion
- Collect & Return service highlight
- Local Schema.org structured data

## Pages / Screens
- `index.html` — Homepage
- `services.html` — All Services
- `macbook-repair-london.html` — MacBook Repair
- `laptop-repair-london.html` — Laptop Repair
- `iphone-repair-london.html` — iPhone Repair
- `gaming-pc-repair-london.html` — Gaming PC Repair
- `about.html` — About Us
- `contact.html` — Contact & Quote Form
- `privacy-policy.html` — Privacy / Terms / Cookie Policy

## Brand / Style Direction
- Dark, premium, modern (dark #050509 background)
- Electric blue accent (#00d4ff) — trust, tech, expertise
- Purple accent (#7c3aed) — energy, innovation
- Glassmorphism cards
- Inter typeface — clean, modern, professional
- Tone: Confident, direct, trustworthy — not corporate jargon

## UX Expectations
- Clear "Call Now" CTA above the fold
- No Fix No Fee guarantee visible on every page
- Mobile-first: floating call + WhatsApp buttons always visible
- Scroll-triggered fade-in animations for perceived quality
- Announcement bar for promotions / current offers
- Stats section with animated counters for social proof

## Technical Preferences
- Stack: Vanilla HTML5 / CSS3 / ES6 JavaScript (no build step required)
- Fonts: Google Fonts — Inter
- No frameworks, no dependencies
- CSS custom properties (variables) for design tokens
- IntersectionObserver for scroll animations and counter triggers
- Contact form: Formspree (with WhatsApp fallback)
- Deployment: Standard web hosting (or Netlify/Vercel static)
- Analytics: Google Analytics + Google Tag Manager ready

## SEO Constraints
- Each page must have unique `<title>`, `<meta description>`, `<link rel="canonical">`
- Schema.org LocalBusiness structured data on every page
- Open Graph + Twitter Card meta on every page including `og:image`
- Keyword-rich headings targeting "{service} London", "{service} Surrey" format
- `sitemap.xml` and `robots.txt` in root

## Business Info
- **Business Name:** Smart iFix
- **Address:** 166 Central Rd, Worcester Park, KT4 8HQ
- **Phone:** 020 8616 0663
- **WhatsApp:** 07405 119098
- **Email:** info@smartifix.co.uk
- **Website:** https://smartifix.co.uk
- **Hours:** Mon–Sat 9:00 AM – 7:00 PM, Sunday Closed
- **Rating:** 4.7★ Google (139 reviews)
- **Social:** Facebook, Instagram, Twitter/X (@smartifixuk)

## Avoid
- Generic hero image backgrounds (using abstract gradient + grid instead)
- Cluttered layouts or too many columns on mobile
- Inconsistent spacing between sections
- Dead footer links (Privacy/Terms must go to real pages)
- Missing `og:image` on any page
- Inline styles — prefer CSS classes
- Placeholder/lorem text in any live page
