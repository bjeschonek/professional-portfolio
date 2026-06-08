# SPEC: Professional Engineering Portfolio

## 1. Objective
Build a high-performance, minimalist professional portfolio for a full-stack software engineer. The goal is to secure mid-to-senior level job offers by showcasing high-level project results, technical depth via blog posts, and a professional, performant presence.

**Target Audience:** Recruiters and Engineering Managers.
**Core Brand:** "Full-stack engineer who values simplicity and performance."

## 2. Commands & Workflow
- **Build Tooling:** Use `bun` as the primary runtime for all build commands and scripts.
- **Package Management:** `bun install`
- **Development:** `bun run dev` (or equivalent 11ty dev command)
- **Build:** `bun run build` (generates static files for GitHub Pages)
- **Linting/Formatting:** Standard TypeScript linting and Prettier-compatible formatting.

## 3. Project Structure
```text
.
├── .agents/                      # Agent skills and workflows
├── agents/                       # Agent personas
├── docs/                         # Documentation
├── references/                   # Reference materials
├── .github/workflows/           # GitHub Actions for automated deployment
├── assets/                       # Images, icons, and global assets
├── blog/                        # Markdown files for blog posts
│   ├── post-1.md
│   └── post-2.md
├── public/                       # Static assets (favicon, etc.)
├── src/
│   ├── components/               # Reusable UI components (Tailwind-based)
│   ├── layouts/                  # Page wrappers (Home, Blog, Resume)
│   ├── pages/                    # Page-specific logic/content
│   ├── styles/                   # Global CSS & Tailwind directives
│   └── types/                    # TypeScript interfaces and types
├── _data/                        # JSON files for project metadata, tags, etc.
├── _includes/                    # 11ty partials (header, footer, cards)
├── .gitignore
├── AGENTS.md
├── README.md
├── SPEC.md
├── package.json
├── tsconfig.json
```

## 4. Code Style & Paradigm
- **Paradigm:** Functional and declarative. Favor native Web APIs.
- **Type Safety:** Strict TypeScript enforcement. No `any`.
- **Styling:** Tailwind CSS for layout and components.
- **Animations:** Use standard CSS transitions/animations (avoid heavy JS libraries like Framer Motion).
- **Performance:** Minimize bundle size; optimize images; prioritize $O(1)$ or $O(\log n)$ data lookups (e.g., using Sets/Maps for filtering blog posts).

## 5. Testing Strategy
- **Unit Tests:** Test critical logic (e.g., blog filtering, search logic) using a lightweight test runner.
- **Accessibility:** Ensure WCAG 2.1 AA compliance (semantic HTML, ARIA labels where needed).
- **Regression:** Verify build output on every PR to ensure no broken paths.

## 6. Boundaries
- **Always:** Use Markdown for blog content. Ensure mobile responsiveness.
- **Always:** Include metadata for projects (tech stack, repo link, live demo link).
- **Always:** Ship the smallest possible payload (minimal JS/CSS).
- **Never:** Use a headless CMS.
- **Never:** Use `lodash` or other large utility libraries if a native JS solution exists.
- **Never:** Use placeholders; all code must be production-ready.
- **Ask First:** Any third-party analytics integration.
- **Ask First:** Any major architectural changes to the data flow (e.g., switching from 11ty to a JS framework).

## 7. Feature Requirements
- **Biography:** Concise intro on the home page.
- **Resume Page:** A dedicated, high-fidelity resume page.
- **Blog:** Markdown-driven with category tags and a client-side search function.
- **Projects:** Grid layout highlighting high-level results with tech stack badges.
- **Contact:** `mailto:` link and professional social links (GitHub, LinkedIn).
- **Analytics:** Simple, performant tracking.
