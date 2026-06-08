# Task List: Professional Engineering Portfolio

## Phase 1: Foundation

### Task 1: Initialize project structure and dependencies (bun, 11ty, Tailwind)
**Description:** Set up the project with Bun, 11ty, and Tailwind CSS.
**Acceptance criteria:**
- [ ] `bun install` succeeds
- [ ] `bun run dev` starts a local server
- [ ] `bun run build` produces a `_site` directory
- [ ] Tailwind CSS is initialized and configured
**Verification:**
- [ ] Build succeeds: `bun run build`
- [ ] Manual check: Verify that `package.json` contains necessary dependencies and scripts.
**Dependencies:** None
**Files likely touched:**
- `package.json`
- `bun.lock`
- `tailwind.config.js`
- `postcss.config.js`
- `.eleventy.js`
**Estimated scope:** Medium: 3-5 files

### Task 2: Configure TypeScript, Prettier, and Tailwind CSS
**Description:** Set up strict TypeScript configuration, Prettier formatting, and Tailwind directives.
**Acceptance criteria:**
- [ ] `tsconfig.json` has `strict: true`
- [ ] Prettier is configured for standard formatting
- [ ] Tailwind directives are included in global CSS
- [ ] Linting runs without errors
**Verification:**
- [ ] Linting passes
- [ ] Prettier formats the codebase
**Dependencies:** Task 1
**Files likely touched:**
- `tsconfig.json`
- `.prettierrc`
- `src/styles/main.css`
- `package.json`
**Estimated scope:** Small: 1-2 files

### Task 3: Create global layout components (Header, Footer) and base styles
**Description:** Create reusable layout components and define the base theme.
**Acceptance criteria:**
- [ ] Header includes navigation links
- [ ] Footer includes social links and copyright
- [ ] Base CSS handles typography and colors
**Verification:**
- [ ] Manual check: Verify header and footer render on all pages.
**Dependencies:** Task 2
**Files likely touched:**
- `src/components/Header.tsx`
- `src/components/Footer.tsx`
- `src/styles/main.css`
**Estimated scope:** Medium: 3-5 files

## Checkpoint: Foundation
- [ ] Tests pass, builds clean
- [ ] Tailwind is correctly generating styles
- [ ] 11ty project structure is verified

## Phase 2: Core Content & Data

### Task 4: Define project and blog data schemas in `_data/`
**Description:** Create JSON files for project metadata and blog post categories.
**Acceptance criteria:**
- [ ] `_data/projects.json` exists with sample data
- [ ] `_data/categories.json` exists
- [ ] TypeScript interfaces for these schemas are defined
**Verification:**
- [ ] Manual check: Verify JSON files are valid and follow the defined schema.
**Dependencies:** None
**Files likely touched:**
- `_data/projects.json`
- `_data/categories.json`
- `src/types/data.ts`
**Estimated scope:** Small: 1-2 files

### Task 5: Implement Home page with Biography and Projects grid
**Description:** Build the main landing page featuring a bio and project showcase.
**Acceptance criteria:**
- [ ] Biography is displayed clearly
- [ ] Projects are rendered in a grid
- [ ] Each project card has tech stack badges
**Verification:**
- [ ] Manual check: Verify grid layout and badges on mobile and desktop.
**Dependencies:** Task 3, Task 4
**Files likely touched:**
- `src/pages/Home.tsx`
- `src/components/ProjectGrid.tsx`
- `src/components/ProjectCard.tsx`
**Estimated scope:** Medium: 3-5 files

### Task 6: Implement Resume page with high-fidelity layout
**Description:** Create a dedicated resume page with a professional layout.
**Acceptance criteria:**
- [ ] Resume content is structured and readable
- [ ] Page is mobile responsive
**Verification:**
- [ ] Manual check: Verify layout on multiple screen sizes.
**Dependencies:** Task 3
**Files likely touched:**
- `src/pages/Resume.tsx`
**Estimated scope:** Medium: 3-5 files

### Task 7: Implement Blog listing page with category filtering
**Description:** Build the blog index page with category navigation.
**Acceptance criteria:**
- [ ] Blog posts are listed chronologically
- [ ] Categories are clickable and filter the list
**Verification:**
- [ ] Manual check: Verify filtering works correctly.
**Dependencies:** Task 3, Task 4
**Files likely touched:**
- `src/pages/Blog.tsx`
- `src/components/BlogFilter.tsx`
**Estimated scope:** Medium: 3-5 files

### Task 8: Implement individual Blog post pages from Markdown
**Description:** Create the template for rendering individual blog posts.
**Acceptance criteria:**
- [ ] Markdown files in `blog/` render correctly
- [ ] Frontmatter (date, title, etc.) is correctly parsed
**Verification:**
- [ ] Manual check: Navigate to a sample blog post.
**Dependencies:** Task 3, Task 4
**Files likely touched:**
- `src/layouts/PostLayout.tsx`
- `blog/post-1.md`
**Estimated scope:** Medium: 3-5 files

## Checkpoint: Core Features
- [ ] Blog posts render correctly with metadata
- [ ] Projects grid displays tech stack badges

## Phase 3: Interactive & Polish

### Task 9: Implement client-side search for blog posts
**Description:** Add a search bar to filter blog posts instantly.
**Acceptance criteria:**
- [ ] Search results update as the user types
- [ ] Empty states are handled
**Verification:**
- [ ] Manual check: Test search with various keywords.
**Dependencies:** Task 7
**Files likely touched:**
- `src/components/Search.tsx`
- `src/pages/Blog.tsx`
**Estimated scope:** Medium: 3-5 files

### Task 10: Implement Contact section and social links
**Description:** Add a contact section with a mailto link and social icons.
**Acceptance criteria:**
- [ ] Mailto link functions correctly
- [ ] Social icons are linked to GitHub/LinkedIn
**Verification:**
- [ ] Manual check: Verify all links open in new tabs/apps.
**Dependencies:** None
**Files likely touched:**
- `src/components/Contact.tsx`
- `src/components/SocialLinks.tsx`
**Estimated scope:** Small: 1-2 files

### Task 11: Add simple, performant analytics
**Description:** Integrate a lightweight analytics script.
**Acceptance criteria:**
- [ ] Analytics script is loaded without blocking the main thread
- [ ] Basic events (page view) are tracked
**Verification:**
- [ ] Manual check: Verify events in analytics dashboard.
**Dependencies:** None
**Files likely touched:**
- `src/components/Analytics.tsx`
- `src/layouts/Layout.tsx`
**Estimated scope:** Small: 1-2 files

### Task 12: Final polish (mobile responsiveness, accessibility check)
**Description:** Perform a final pass on UX and accessibility.
**Acceptance criteria:**
- [ ] All pages pass WCAG 2.1 AA check
- [ ] No horizontal scrolling on mobile
- [ ] Images are optimized
**Verification:**
- [ ] Manual check: Audit with accessibility tool.
**Dependencies:** All
**Files likely touched:**
- All
**Estimated scope:** Large: 5+ files
