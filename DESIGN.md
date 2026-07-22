# Design System & Brand Guidelines — Cardi Business Power Ecosystem™

## 1. Visual Theme & Atmosphere
The Cardi visual language represents confidence, precision, and technological scale. Designed for Indonesian enterprises, SMEs, and growth-stage brands scaling towards IPO readiness (*"Partner for IPO"*), the atmosphere balances corporate prestige with modern software elegance.

- **Density:** Balanced & Breathable (Score: 5/10)
- **Variance:** Asymmetric & Dynamic (Score: 7/10)
- **Motion:** Hardware-Accelerated & Fluid (Score: 7/10)

---

## 2. Color Palette & Functional Roles

### Core Brand Colors
- **Primary Brand Blue** (`#0258a4` | `rgba(2, 88, 164)` | `hsl(208, 98%, 33%)`) — Primary CTAs, active states, focus indicators, and key brand accents.
- **Dark Primary Blue** (`#01417a` | `rgba(1, 65, 122)`) — Primary hover state & active button state.
- **Deep Ink** (`#0A1633`) — Primary typography, headers, dark cards, and deep structural surfaces.
- **Body Slate** (`#3D4B6B`) — Secondary text, body paragraphs, list items, and descriptions.
- **Muted Steel** (`#6B7A9C`) — Metadata, captions, total counters, and inactive indicators.
- **Soft Canvas** (`#F5F8FE` / `#F4F8FC`) — Section backgrounds, input fills, and subtle container highlights.
- **Structural Line** (`#E6ECF7`) — 1px borders, subtle dividers, and card outlines.

### Sub-Brand Ecosystem Color System
- **Cardi AI Agent**:
  - HEX: `#1e4fff` | RGB: `rgba(30, 79, 255)` | HSL: `227, 100%, 56%` (*Scale to IPO & Operational Automation*)
- **Cardi Digital**:
  - HEX: `#c42025` | RGB: `rgba(196, 32, 37)` | HSL: `358, 72%, 45%` (*Digital Growth & Performance Retainer*)
- **Cardi Branding**:
  - HEX: `#fb3202` | RGB: `rgba(251, 50, 2)` | HSL: `12, 98%, 50%` (*Brand Development & Visual Identity*)
- **Cardi Nusantara**:
  - HEX: `#0A1633` | RGB: `rgba(10, 22, 51)` | HSL: `222, 67%, 12%` (*Go-To-Market & Retail Distribution*)

---

## 3. Typography Architecture

- **Primary Font Stack:** `Plus Jakarta Sans`, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif.
- **Headlines (`h1`, `h2`, `h3`):** Track-tight (`letter-spacing: -0.02em` to `-0.03em`), bold to extra-bold (`font-weight: 800`), responsive scaling via `clamp()`.
- **Body Text:** `font-weight: 400`/`500`, `line-height: 1.65` to `1.7`, maximum `65ch` per paragraph.
- **Monospace & Stat Counters:** Monospace / `font-weight: 800` for numerical metrics and step tracking.

---

## 4. Logo & Brand Asset Guidelines

> [!IMPORTANT]
> **Logo Usage & Typography Rule**
> 1. **Primary Brand Logo**: Use `/logocardi.png` for all Navigation Header and Footer branding.
> 2. **No Duplicate Text**: Because `/logocardi.png` already contains the word mark *"cardi"*, **NEVER** place inline text `"cardi"` next to the logo image in the Navbar or Footer.
> 3. **Favicon**: Use `/cardi-logo-no-text.png` (or `/favicon.png`) as the official site favicon in HTML `<head>`.

---

## 5. Component Stylings

### Buttons (`.btn`)
- **Primary Fill:** `#0258a4` with white text (`#FFFFFF`).
- **Hover State:** Background smoothly transitions to `#01417a`.
- **Border Radius:** `10px` rounded corners.
- **Tactile Feel:** No neon outer glow. Smooth hardware-accelerated CSS transition (`0.2s ease`).

### Sticky Parallax Morphing Canvas (`.circle-canvas`)
- Desktop: `280px` canvas with morphing SVG leaf rotation & dot translation.
- Mobile (`< 900px`): `42px` compact circle embedded inside a `64px` sticky glassmorphism header (`backdrop-filter: blur(12px)`).

### Infinite Marquee Ticker (`.marquee-wrapper`)
- Continuous, hardware-accelerated `-50%` infinite slide (`animation: marquee-slide 32s linear infinite`).
- Left/Right gradient mask (`mask-image: linear-gradient(...)`) for soft edge fading.
- **Pause on Hover**: Smoothly pauses ticker animation when hovered.

---

## 6. Banned Patterns (Anti-Patterns)
- ❌ **No Duplicate Logo Text**: Do not render text `"cardi"` alongside `/logocardi.png`.
- ❌ **No Pure Black (`#000000`)**: Use Deep Ink (`#0A1633`) for high-contrast dark surfaces.
- ❌ **No Outdated Blue (`#1E4FFF`)**: Always use calibrated brand blue `#0258a4`.
- ❌ **No Horizontal Screen Overflow**: `overflow-x: clip` enforced to prevent mobile side-scrolling.
