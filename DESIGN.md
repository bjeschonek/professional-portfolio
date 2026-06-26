---
theme:
  mode: dark-only
  colors:
    background:
      primary: "#030712" # Pure black/slate dark background
      secondary: "#0b0f19" # Card background
      tertiary: "#111827" # Border/highlight/hover states
    text:
      primary: "#f9fafb" # High-contrast nearly white (gray-50)
      secondary: "#f3f4f6" # Muted white (gray-100)
      muted: "#9ca3af" # Readable medium gray (gray-400)
    accent:
      primary: "#3b82f6" # Vibrant Blue (blue-500)
      secondary: "#60a5fa" # Light Blue (blue-400) for hover/links
      muted: "#1e3a8a" # Deep Blue for badges/subtle highlights
    border:
      subtle: "#1f2937" # Thin card/nav separator (gray-800)
      focus: "#3b82f6" # Blue border on focus
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
      hero_title: "3rem"
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

This document specifies the visual style, typography, layout structures, and interactive behaviors for the Professional Engineering Portfolio of Brad Jeschonek. It serves as the design specification input for the Stitch AI tool and guides the Tailwind configuration, layout scripts, and Eleventy page templates.

---

## 1. Global Core Principles

- **Minimalist & Professionalism:** The interface must remain clean and content-focused. Decorative clutter, excessive gradients, or heavy parallax animations are avoided. The design relies on clean grid alignments, strong typography, and smooth, responsive hover interactions.
- **Dark-Only Theme:** Exclusively styled for a dark mode experience. The background is a very dark slate/black (`#030712`) with high-contrast text (`#f9fafb`) for optimal readability.
- **Vibrant Blue Accents:** High-fidelity blue (`#3b82f6`) is used strategically for accents, active states, key interactive indicators, and focus outlines.
- **Responsiveness:** Standard mobile-first approach where desktop views are optimized (e.g., split two-column hero grids) and scale fluidly to a single column on mobile.

---

## 2. Layout & Page Specifications

### 2.1 Navigation (Global Header)

- **Positioning:** Sticky/Fixed at the top of the viewport.
- **Aesthetics:**
  - Background: Semi-transparent dark background (`#030712`) with an opacity layer of `85%` and a backdrop blur filter (`backdrop-filter: blur(8px)`).
  - Border: Subtle bottom border (`#1f2937`).
- **Layout & Structure:**
  - Standard flex layout container (`max-width: 1024px`) with brand/logotype on the left (`Brad Jeschonek`) and nav links (Home, Resume, Blog) on the right.
  - Active page links are highlighted in `#60a5fa`. Hover transitions smoothly from `#9ca3af` to `#60a5fa`.

---

### 2.2 Home Page

#### 2.2.1 Hero Section
- **Desktop Layout:** Two-column split grid (1:2 layout).
  - **Left Column (Profile & Metadata):**
    - Circular Profile Image: Centered, high-quality, with a subtle border in `#1f2937` that changes to accent blue on hover.
    - Location Info: Placed below the profile image, using a location pin icon alongside the text "Reading, PA / Remote".
    - Social Links: Placed below the location info, displaying clean SVG icons for GitHub and LinkedIn side-by-side. Hovering over icons changes color from `#9ca3af` to `#3b82f6` with a tiny bounce.
  - **Right Column (Name & Bio):**
    - Title: Name `Brad Jeschonek` using size `hero_title` (4xl/5xl), font-bold, in primary text (`#f9fafb`).
    - Subtitle: A short bio describing core engineering values, positioned directly below the name in secondary text (`#f3f4f6`).
    - Call to Actions (CTAs): Set of buttons located below the subtitle.
      - **Primary CTA:** "Contact Me" button (scrolls down to contact section or opens mailto) with a solid blue background (`#3b82f6`), text white, transitioning to light blue (`#60a5fa`) on hover.
      - **Secondary CTA:** "View Featured Projects" button (scrolls to projects grid) with a transparent background, thin border (`#1f2937`), transitioning to `#1f2937` background with white text on hover.
- **Mobile Layout:** Collapses to a single-column layout, stacking: Profile Image -> Location & Socials -> Name -> Subtitle -> CTAs.

#### 2.2.2 Featured Projects Grid
- **Layout:** Desktop multi-column grid (2-column or 3-column) depending on the number of projects. Collapses to 1 column on mobile.
- **Cards (Project Card Component):**
  - Background: Card background (`#0b0f19`).
  - Borders: Thin border (`#1f2937`) with `border-radius: 8px`.
  - Details: Shows project title, description, and list of key metric achievements.
  - Tech Stack Badges: Small inline badges styled with a deep blue (`#1e3a8a`) background and light blue (`#60a5fa`) text in monospace font.
  - Project Links: Located at the bottom-right of the card, displaying icon links for:
    - **Live Site/Demo:** Linked to live URL (using an external-link icon).
    - **GitHub Repository:** Linked to git URL (using a GitHub icon).
  - Hover Interaction: Border color transitions to primary blue accent (`#3b82f6`) with a subtle translate-y upward lift.

#### 2.2.3 Languages & Tools
- **Layout:** A clean, horizontal flex-wrap grid displaying developer capabilities.
- **Content:** Icons for key technologies: React, Next.js, Node.js, TypeScript, JavaScript, Rust, Go, Python, SQL, Docker, Git, Bun, Vite, Tailwind CSS, PostCSS.
- **Aesthetics:** High-contrast minimal SVG icons, colored matching the technology's theme or using custom grayscale icons that light up with blue accenting on hover. Text labels are positioned below or appear as tooltips.

#### 2.2.4 Short Bio Section
- **Layout:** A centered reading container (max-width `800px`).
- **Aesthetics:** High readability with paragraph elements in secondary text (`#f3f4f6`) and generous line height (`1.75`). Details the developer's journey, philosophy (e.g. speed, simplicity, zero-overhead abstractions), and career summary.

#### 2.2.5 Most Recent Posts
- **Layout:** A vertical stack or 3-column grid displaying the **3 most recent posts** from the blog.
- **Cards (Recent Post Card):**
  - Displays title, date (e.g., "June 25, 2026"), read time, category badge, and a brief summary.
  - Clean card structure matching project cards with a subtle blue accent line or text hover color transition.

#### 2.2.6 Contact Section
- **Aesthetics:** Minimalist layout centered or aligned with grid.
- **Content:** Title "Get in Touch" with a short explanatory paragraph.
- **Interactive Email Link:** Prominent clickable text or email button pointing to `brad@jeschonek.dev`. Hovering reveals a blue underline transition and shifts color to `#60a5fa`.

---

### 2.3 Resume Page

- **Layout:** Clean **Single-Column Chronological Timeline Layout** optimized for both web scanning and physical printing (`@media print` rules).
- **Structure (Flowing top-to-bottom):**
  - **Header Block:** Developer Name, professional title, location metadata, and a "Download PDF" action button (hidden on print).
  - **Summary/Overview:** Short professional bio highlighting years of experience (8+) and core focus areas.
  - **Work Experience Section:** 
    - Chronological timeline starting with the current role.
    - Each entry includes: Role Title, Company Name, Employment Dates (Right-aligned or inline), and bulleted achievements (using standard markdown lists with high contrast text).
    - Timeline styling: A thin vertical connector line (`#1f2937`) running along the left margin of the work experience list, with dot node indicators (`#3b82f6`) marking each position.
  - **Education Section:**
    - High-level list showing Degree, Institution, Graduation Dates, and Honors/Specializations.
  - **Awards & Major Achievements Section:**
    - Clean bulleted list containing awards, patents, speaking engagements, and key open-source contributions.
  - **Skills Sidebar details:** Restructured as clear grouped subsections within the flow (e.g., Languages, Frameworks, and Tools) utilizing minimal badge grids to optimize scanning speed.

---

### 2.4 Blog Pages

#### 2.4.1 Blog Listing (Archive) Page
- **Header:** Title "Blog" with a short description.
- **Controls (Filter & Search):**
  - Category tags: Horizontal pills (All, Performance, Systems, DX, etc.). Active state uses vibrant blue background (`#3b82f6`) with white text.
  - Search Bar: Text input styled with background `#0b0f19` and border `#1f2937`, displaying a focus outline in `#3b82f6`. Includes search icon.
- **Pagination:**
  - Paginated grid list of blog posts.
  - Bottom navigation controls (Previous, Next buttons) for archives exceeding the default count (e.g., 6 posts per page).
- **Empty State:** Shows a clean "No posts found" message with custom icon if filters yield zero matches.

#### 2.4.2 Blog Post Detail Page
- **Layout:** Focused single-column layout centered with `max-width: 760px` for optimal typography line lengths.
- **Header:** Displays category tag, post date, reading duration estimate, and large h1 heading.
- **Typography Standards:**
  - Headings (`h2`, `h3`): Clean font weight (`700`), high contrast (`#f9fafb`), with a subtle border-b for h2 elements.
  - Body Text: Secondary white text (`#f3f4f6`) with generous line height (`leading-relaxed` or `1.75`).
  - Code Blocks: Monospace syntax highlighting using `JetBrains Mono`. Pre blocks have a background of `#0b0f19` with a subtle `#1f2937` border, rounded corners, and horizontal scrolling support. Code snippets inline are styled similarly but without block margins.

---

## 3. Micro-Interactions & Styling Specs

- **Hover Transitions:** Buttons, social links, project cards, and anchors transition using: `transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1)`.
- **Button Styling:**
  - **Primary:** Background `#3b82f6` -> Hover `#60a5fa`. Text is white or high contrast.
  - **Secondary:** Background transparent, border `#1f2937` -> Hover background `#1f2937`, text color transitions to white.
  - **Badge Tags:** Small, padding `px-2 py-0.5`, background `#1e3a8a` (Deep Blue), text `#60a5fa` (Light Blue).
- **Focus Rings:** Elements focused via keyboard (tab) display an outline: `outline: 2px solid #3b82f6` with `outline-offset: 2px` to ensure WCAG 2.1 AA compliance.
- **Print Adjustments:** Custom `@media print` rules to change text to pure black, backgrounds to pure white, hide non-printable elements (nav, footer, PDF download button, profile placeholders), and set full-width pages.
