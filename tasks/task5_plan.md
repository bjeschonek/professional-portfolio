# Task 5 Implementation Plan: Project and Blog Data Schemas

Define static data schemas for the professional portfolio in `_data/`, establish strict TypeScript interfaces in `src/types/`, and set up automated data validation.

## 1. Schema Definitions

### 1.1 Projects (`_data/projects.json`)

Each project in the showcase will represent a real-world software engineering scenario with a focus on metrics and results.

- **id**: `string` (unique identifier, e.g., `"perf-dashboard"`)
- **title**: `string` (human-readable title)
- **description**: `string` (short project summary)
- **results**: `string[]` (high-impact bullet points demonstrating engineering results/metrics)
- **techStack**: `string[]` (technologies used, displayed as badges)
- **links**: `object` (external links)
  - **github**: `string` (optional, url to code)
  - **live**: `string` (optional, url to live app)
- **featured**: `boolean` (optional, whether to feature on homepage showcase)

### 1.2 Categories (`_data/categories.json`)

Blog post categories for dynamic client-side filtering.

- **id**: `string` (unique slug, e.g., `"web-performance"`)
- **name**: `string` (display name, e.g., `"Web Performance"`)
- **description**: `string` (short description of topics in this category)

---

## 2. TypeScript Interfaces (`src/types/data.ts`)

Strict type contracts to enforce validation of the static JSON data:

```typescript
export interface ProjectLinks {
  github?: string;
  live?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  results: string[];
  techStack: string[];
  links: ProjectLinks;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}
```

---

## 3. Automated Validation (`scripts/validate-data.ts`)

A standalone validation script executed via Bun. It will:

1. Load `_data/projects.json` and `_data/categories.json`.
2. Perform runtime validation asserting that the files contain arrays matching `Project[]` and `Category[]` interfaces.
3. Verify uniqueness of IDs.
4. Fail with exit code `1` if any validation check fails, printing details of the violation.

---

## 4. Execution Slices

1. **Slice 1: Setup Compiler & Types**
   - Update `tsconfig.json` to enable `"resolveJsonModule": true`.
   - Create `src/types/data.ts` with type definitions.
   - Run type checking to verify configuration.
2. **Slice 2: Create Data Files**
   - Create `_data/categories.json` with sample blog categories.
   - Create `_data/projects.json` with high-quality, metrics-focused project details.
3. **Slice 3: Implement Validation Script**
   - Create `scripts/validate-data.ts` which loads and validates the JSON data.
   - Run the script manually to confirm it passes.
4. **Slice 4: Integration & CI Setup**
   - Update `package.json` to run the validation script as part of `bun run lint`.
   - Run full `bun run lint` and `bun run build` to verify the entire pipeline passes.
