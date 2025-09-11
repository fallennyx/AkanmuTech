# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# CLAUDE.md — AkanmuTech (one-page site)

## Purpose
Guardrails for Claude Code to build and edit a **single-page, static** site.

## Repo layout
/index.html        # entire page  
/main.js           # tiny JS: nav toggle, smooth scroll, form stub  
/assets/           # images (use .webp/.avif), add later

## Hard constraints
- No build tools. No frameworks. Tailwind via CDN only.
- Vanilla JS. No external JS libs. Inline SVG icons.
- A11y: semantic headings, labeled controls, focus-visible, contrast ≥4.5:1, keyboard nav.
- Perf: `<meta viewport>`, lazy-load below-the-fold images, defer non-critical JS.
- SEO: unique `<title>`, meta description, OG/Twitter tags, JSON-LD `Organization` (NYC service area).
- Deterministic: return exactly two files `index.html` + `main.js` as code blocks, no extra text.

## Project brief
- Brand: **AkanmuTech**
- Headline: “24/7 AI Reception & Booking for NYC Businesses”
- CTAs: “Book a free fit check” → `#book`; “Text us” → `tel:+13472162706`
- Contact: `emmanuel@akanmuinvestments.com`, `347-216-2706`
- Sections: Header, Hero, Why AI, Services, Verticals, Pricing, FAQ, Testimonials, CTA, Footer
- Pricing:
    - Starter — $399 setup + $149/mo
    - Growth — $799 setup + $399/mo
    - Pro — $1,499 setup + $899/mo

## Claude Code usage
- Keep outputs minimal and explicit.
- Read files → plan → implement → return files.
- Small, testable changes only.

## Acceptance checklist
- Heading order H1→H2→H3; keyboard-only nav works; visible focus rings.
- Lighthouse mobile: Accessibility ≥90, Performance ≥90.
- Non-decorative images have `alt`; below-the-fold images `loading="lazy"`.
- Only two files; no unused CSS/JS; no icon kits.

## Staten Island assets
- Hero image placeholder: `/assets/hero-staten-island.webp` with descriptive `alt`.

## Generation prompt (paste to Claude Code)
Implement the AkanmuTech one-page site.

**Files**
1) `index.html` — Tailwind via CDN; sections in order; inline SVG icons; JSON-LD Organization (NYC service area); OG/Twitter tags; hero image `/assets/hero-staten-island.webp` with `alt`.
2) `main.js` — mobile nav toggle with `aria-expanded`, smooth in-page scroll with fixed-header offset, simple `handleFormSubmit(e)` stub with `preventDefault()`.

**Rules**
- No frameworks or external JS. Utility-first Tailwind. Mobile-first layout.
- Strong a11y: semantic headings, labels, focus-visible, contrast ≥4.5:1.
- Perf: lazy images, defer JS, minimal DOM.
- Deterministic output: return **only** the two files as code blocks, no commentary.

**Content**
- Hero: “24/7 AI Reception & Booking for NYC Businesses”; subhead 1 sentence; CTAs to `#book` and `tel:+13472162706`; trust badges “NYC-focused • Fast install • Month-to-month”.
- Why AI: 3 cards — Never miss a call; Faster responses; Lower costs.
- Services: 6 cards + small badge for Healthcare add-ons (HIPAA-eligible).
- Verticals: Retail, Hospitality, Professional services, Healthcare (2-line outcomes each).
- Pricing: Starter/Growth/Pro bullets; note “HIPAA features require BAAs; third-party vendor fees billed separately.”
- FAQ (native `<details>`): install speed; HIPAA; keep current number; satisfaction; NYC coverage.
- Testimonials: 3 placeholder quotes.
- CTA (#book): “Book a 15-minute fit check” + tel link.
- Footer: Privacy, Terms, contact, small nav, © YEAR.

**SEO**
- Set `<title>` and meta description.
- Add JSON-LD Organization with NYC service area.

**A11y**
- Meaningful link text; label controls; skip-to-content link.

**Testing**
- Validate headings; keyboard navigation; focus states; Lighthouse checks.

## Edit prompt (small changes)
Make the smallest edits to:
- Replace `#book` with final Calendly URL.
- Tighten hero subhead to ≤16 words.
- Raise Lighthouse a11y to ≥95 by fixing failing checks.
  Return **only** updated file contents.
