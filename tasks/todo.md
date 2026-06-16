# Task List: Professional Engineering Portfolio

## Phase 1: Design & Foundation

### Task 1: Write UI/UX design spec and PRD for Stitch (AI design tool)

**Description:** Create a comprehensive visual design specification and Product Requirements Document (PRD) detailing color palettes, typography scales, page layout flows, components, responsive breakpoints, and micro-interactions, to be fed into the Stitch AI design tool.
**Acceptance criteria:**

- [x] Stitch PRD/spec defining theme tokens and component layouts is generated and saved at `DESIGN.md`.
      **Verification:**
- [x] User reviews and approves the Stitch PRD/spec.
      **Dependencies:** None
      **Files likely touched:** `DESIGN.md`
      **Estimated scope:** Small: 1 file

### Task 2: Initialize project structure and dependencies (bun, 11ty, Tailwind)

**Description:** Set up the project with Bun, Eleventy (11ty), and Tailwind CSS v4.
**Acceptance criteria:**

- [x] `bun install` succeeds
- [x] `bun run dev` starts a local Eleventy server
- [x] `bun run build` produces a `_site` directory
- [x] PostCSS and Tailwind CSS are initialized and configured for the project
      **Verification:**
- [x] Build succeeds: `bun run build`
- [x] Manual check: Verify `package.json` contains correct scripts and dependencies.
      **Dependencies:** Task 1
      **Files likely touched:**
- `package.json`
- `bun.lock`
- `postcss.config.js`
- `eleventy.config.js` (or `.eleventy.js`)
  **Estimated scope:** Medium: 3-5 files

### Task 3: Configure TypeScript, Prettier, and PostCSS/Tailwind CSS

**Description:** Configure strict TypeScript compiler options, Prettier formatting, and Tailwind directives in global CSS.
**Acceptance criteria:**

- [x] `tsconfig.json` has `strict: true` and appropriate types configured
- [x] Prettier is configured for clean, standard formatting
- [x] Tailwind directives are imported in the global CSS file
- [x] `bun run lint` runs without errors
      **Verification:**
- [x] `bun run lint` passes
- [x] Prettier formats the codebase successfully
      **Dependencies:** Task 2
      **Files likely touched:**
- `tsconfig.json`
- `.prettierrc`
- `src/styles/main.css`
- `package.json`
  **Estimated scope:** Small: 1-2 files

### Task 4: Create global layouts (base, header, footer) and CSS styles

**Description:** Create reusable Nunjucks base layout and header/footer partials. Build the core styling sheet with custom Tailwind CSS properties.
**Acceptance criteria:**

- [x] Base layout includes meta tags, favicon link, and references the generated CSS stylesheet
- [x] Header Nunjucks partial contains responsive navigation links
- [x] Footer Nunjucks partial contains professional and social links
- [x] Global stylesheet includes typography scales, gradients, and custom animations matching the design spec
      **Verification:**
- [x] Manual check: Build and verify header and footer render cleanly.
      **Dependencies:** Task 3
      **Files likely touched:**
- `_includes/layouts/base.njk`
- `_includes/components/header.njk`
- `_includes/components/footer.njk`
- `src/styles/main.css`
  **Estimated scope:** Medium: 3-5 files

## Checkpoint: Foundation

- [x] Stitch PRD/spec is approved
- [x] 11ty project structure is verified and builds clean
- [x] Tailwind CSS compiles successfully with brand tokens
- [x] Basic base, header, and footer templates render correctly

---

## Phase 2: Core Content & Data

### Task 5: Define project and blog data schemas in `_data/`

**Description:** Create static JSON data files for projects and blog post categories, along with TypeScript definitions for strict type checking.
**Acceptance criteria:**

- [x] `_data/projects.json` exists with real-world sample projects, badges, links, and results
- [x] `_data/categories.json` defines categories/tags for blog posts
- [x] TypeScript interfaces in `src/types/` define validation contracts for these schemas
      **Verification:**
- [x] Verification script or type check validation succeeds.
      **Dependencies:** None
      **Files likely touched:**
- `_data/projects.json`
- `_data/categories.json`
- `src/types/data.ts`
  **Estimated scope:** Small: 1-2 files

### Task 6: Implement Home page template with Biography and Projects grid

**Description:** Build the main landing page containing a compelling biography and the responsive projects showcase grid, styled matching the Stitch PRD/spec.
**Acceptance criteria:**

- [ ] Biography section renders clearly with optimized typography
- [ ] Projects are displayed in a responsive grid layout
- [ ] Each project card displays descriptive content, results, and tech stack badges
      **Verification:**
- [ ] Manual check: Verify layout responsiveness and badges on mobile and desktop viewports.
      **Dependencies:** Task 4, Task 5
      **Files likely touched:**
- `src/pages/index.njk`
- `_includes/components/project-card.njk`
  **Estimated scope:** Medium: 3-5 files

### Task 7: Implement Resume page template with high-fidelity layout

**Description:** Create a high-fidelity, professional resume page styled using the layout defined in the Stitch PRD/spec.
**Acceptance criteria:**

- [ ] Resume details (Experience, Skills, Education) are cleanly structured and readable
- [ ] Page is fully mobile-responsive and print-friendly
- [ ] A download link for a PDF resume is present
      **Verification:**
- [ ] Manual check: Verify responsive columns on desktop vs mobile. Inspect print preview.
      **Dependencies:** Task 4
      **Files likely touched:**
- `src/pages/resume.njk`
  **Estimated scope:** Small: 1-2 files

### Task 8: Implement Blog listing page template with category filtering

**Description:** Create the blog list template that lists posts chronologically and displays clickable categories.
**Acceptance criteria:**

- [x] Blog posts are listed with title, publish date, read time, and category tags
- [x] Clickable category badges filter posts dynamically or route correctly
      **Verification:**
- [x] Manual check: Verify template parses data feed correctly and lists posts.
      **Dependencies:** Task 4, Task 5
      **Files likely touched:**
- `src/pages/blog.njk`
- `_includes/components/blog-card.njk`
  **Estimated scope:** Medium: 3-5 files

### Task 9: Implement individual Blog post template rendering from Markdown

**Description:** Configure Markdown parser (markdown-it) and build the layout template for individual blog posts.
**Acceptance criteria:**

- [ ] Markdown files inside `blog/` are successfully compiled by Eleventy
- [ ] Blog layout displays frontmatter (date, title, read time, description) and body text
- [ ] Code blocks in posts render with syntax highlighting
      **Verification:**
- [ ] Manual check: Navigate to `/blog/post-1/` and verify layout, images, and code snippets.
      **Dependencies:** Task 4, Task 5
      **Files likely touched:**
- `_includes/layouts/post.njk`
- `blog/post-1.md`
- `eleventy.config.js`
  **Estimated scope:** Medium: 3-5 files

## Checkpoint: Core Features

- [ ] End-to-end site routing works
- [ ] Blog posts render correctly with metadata and styles
- [ ] Projects grid displays tech stack badges matching the design spec

---

## Phase 3: Interactive & Polish

### Task 10: Implement client-side search (TypeScript) for blog posts

**Description:** Implement a lightweight, client-side search component in TypeScript that filters blog posts instantly based on title, content, or tags.
**Acceptance criteria:**

- [ ] Input element dynamically filters list items without full page reload
- [ ] Empty/No-results states are gracefully handled
- [ ] Compiled JavaScript is minimal, performant, and does not block page load
      **Verification:**
- [ ] Test search performance and filtering accuracy across multiple terms.
      **Dependencies:** Task 8
      **Files likely touched:**
- `src/scripts/search.ts`
- `src/pages/blog.njk`
  **Estimated scope:** Medium: 3-5 files

### Task 11: Implement Contact section and social links

**Description:** Design and build the Contact section with a clear call to action, contact form or mailto link, and professional social link list.
**Acceptance criteria:**

- [ ] Contact details are clean and visually prominent
- [ ] Social links open in new tabs with appropriate security attributes (`rel="noopener noreferrer"`)
      **Verification:**
- [ ] Manual check: Verify links function as expected on mobile and desktop.
      **Dependencies:** Task 4
      **Files likely touched:**
- `_includes/components/contact.njk`
- `src/pages/index.njk`
  **Estimated scope:** Small: 1-2 files

### Task 12: Add simple, performant analytics (lightweight TS/JS script)

**Description:** Integrate a privacy-focused, lightweight analytics tracker script without affecting performance score.
**Acceptance criteria:**

- [ ] Analytics tracking works asynchronously and does not impact page performance scores
- [ ] Respects user preferences (Do Not Track check)
      **Verification:**
- [ ] Performance audit passes. Page load telemetry is checked.
      **Dependencies:** Task 4
      **Files likely touched:**
- `src/scripts/analytics.ts`
- `_includes/layouts/base.njk`
  **Estimated scope:** Small: 1-2 files

### Task 13: Final polish (mobile responsiveness, accessibility audit, performance check)

**Description:** Run final accessibility audits, optimize assets (images/fonts), check cross-browser mobile responsiveness, and run final build.
**Acceptance criteria:**

- [ ] Lighthouse or PageSpeed Insights accessibility score of 100
- [ ] Zero responsiveness layout breakages on mobile screens (down to 320px width)
- [ ] Performance score of 95+ on all pages
      **Verification:**
- [ ] Run build and verify output sizes. Check visual display using browser emulation.
      **Dependencies:** All previous tasks
      **Files likely touched:**
- All template and CSS files
  **Estimated scope:** Large: 5+ files

## Checkpoint: Complete

- [ ] All acceptance criteria met
- [ ] Ready for review
