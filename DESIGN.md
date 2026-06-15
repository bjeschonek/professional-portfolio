---
theme:
  mode: dark-only
  colors:
    background:
      primary: "#0b0f19" # Deep dark gray-blue
      secondary: "#111827" # Dark gray (gray-900) for sections/cards
      tertiary: "#1f2937" # Slightly lighter gray (gray-800) for cards/borders
    text:
      primary: "#f3f4f6" # Near white (gray-100)
      secondary: "#d1d5db" # Light gray (gray-300)
      muted: "#9ca3af" # Medium gray (gray-400)
    accent:
      primary: "#3b82f6" # Premium Blue (blue-500)
      secondary: "#60a5fa" # Light Blue (blue-400) for hover/links
      muted: "#1e3a8a" # Deep Blue for badges/subtle highlights
    border:
      subtle: "#1f2937" # Thin card/nav separator
      focus: "#3b82f6"
  typography:
    fonts:
      sans: "Inter, system-ui, -apple-system, sans-serif"
      mono: "JetBrains Mono, Fira Code, monospace"
    sizes:
      xs: "0.75rem"
      sm: "0.875rem"
      base: "1rem"
      lg: "1.125rem"
      xl: "1.25rem"
      h3: "1.5rem"
      h2: "1.875rem"
      h1: "2.5rem"
  layout:
    max_width: "1200px"
    breakpoints:
      mobile: "640px"
      tablet: "768px"
      desktop: "1024px"
    grid_gap: "1.5rem"
  transitions:
    standard: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
---

# Visual Design Specification & PRD

This document specifies the visual style, typography, and interactive behaviors for the Professional Engineering Portfolio. It serves as the design specification input for the Stitch AI tool and guides the Tailwind configuration and page templates.

---

## 1. Global Core Principles

- **Minimalist & High-Performance:** Visuals must remain lightweight. Avoid heavy decorative assets, gradients with huge performance footprints, or complex scroll/layout engines. Rely on clean typography, precise grid alignments, and subtle transitions.
- **Dark-Only Theme:** Designed exclusively for a dark-mode experience. There is no light mode.
- **Desktop First, Mobile Friendly:** Layouts are optimized for larger desktop displays, scaling down fluidly to a single-column layout on mobile.

---

## 2. Layout Specifications

### 2.1 Navigation (Global Header)

- **Positioning:** Sticky/Fixed at the top of the viewport.
- **Aesthetics:**
  - Background: Semi-transparent deep dark gray-blue (`#0b0f19`) with a backdrop-blur filter (`backdrop-filter: blur(8px)`).
  - Border: Subtle bottom border (`#1f2937`).
- **Layout:**
  - Standard flex layout with the developer's name or logotype on the left and navigation links (Home, Resume, Blog) on the right.
  - Links have a subtle hover transition from muted text (`#9ca3af`) to accent light blue (`#60a5fa`).

### 2.2 Home Page (Biography, Projects, Contact)

- **Biography Section:**
  - Layout: Single-column centered or slightly left-aligned container with a max-width of `800px` for optimal reading line length.
  - Headline uses high-contrast primary text (`#f3f4f6`) in large size (`h1`).
- **Projects Showcase Grid:**
  - Layout: Desktop multi-column grid (2-column or 3-column depending on viewport size), collapsing to a single column on mobile.
  - Cards:
    - Background: Dark gray (`#111827`).
    - Borders: Subtle border (`#1f2937`) with a tiny rounding (`border-radius: 6px` or `rounded-md`).
    - Interactions: Card hover causes a border color transition to the primary blue accent (`#3b82f6`) and a very subtle hover lift (no heavy animations).
    - Content: Project title, description, tech stack badges (styled with deep blue `#1e3a8a` background and light blue `#60a5fa` text), and links.
- **Contact Section:**
  - Clean, minimal footer or dedicated section with direct links.
  - Contact links style with underlines that fade/grow in using the accent blue (`#3b82f6`).

### 2.3 Resume Page (Two-Column Layout)

- **Desktop Structure:**
  - Left Column (Larger - 2/3 width):
    - Experience timeline, education history, major achievements, and detailed project responsibilities.
    - Uses clear typographic hierarchical sections (`h2`, `h3`).
  - Right Column (Smaller - 1/3 width):
    - Profile/headshot photo.
    - List of Languages (e.g., TS/JS, Python, Go).
    - List of Frameworks (e.g., React, Node, Eleventy).
    - List of Tools (e.g., Git, Docker, Bun).
- **Mobile Structure:**
  - Collapses into a single column. The right column details (photo, languages, frameworks, tools) stack underneath the biography summary but above the experience timeline for rapid scanning.
- **Styling:**
  - Subtle divider line between left and right columns on desktop.
  - Skill items grouped into compact, readable monospace tag arrays to maximize space and scan-speed.

### 2.4 Blog Pages

- **Blog Listing Page:**
  - Multi-column grid showcasing post summaries, categories, and read times.
  - Top search input and tag filters styled with dark background, subtle gray border, and focus state showing a blue accent halo (`#3b82f6`).
- **Blog Post Detail Page:**
  - Strictly single-column layout with a max-width of `760px` centered for readability.
  - Typography:
    - Headers (`h1`, `h2`, `h3`) are high contrast.
    - Paragraph text uses secondary text (`#d1d5db`) with generous line height (`line-height: 1.75`).
    - Code blocks (`pre`, `code`) use monospace typography (`JetBrains Mono`) with a dark, syntax-highlighted background and horizontal scrolling.

---

## 3. Micro-Interactions & Styling Specs

- **Hover Transitions:** All buttons, links, and card hover triggers must utilize standard transitions: `transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1)`.
- **Button styling:**
  - Primary button: Solid blue background (`#3b82f6`), text white, hover transitions to `#60a5fa`.
  - Secondary/Ghost button: Transparent background, subtle border (`#1f2937`), hover background changes to `#1f2937` with accent text.
- **Borders:** Kept thin (`1px`) and precise to preserve a sleek, developer-centric terminal or IDE feel.
