# Professional Engineering Portfolio

A high-performance, minimalist personal portfolio and blog built for full-stack software engineers. Built with Eleventy (11ty), Tailwind CSS v4, TypeScript, and Bun.

## Features

- **compilers & static analysis:** Dynamic projects grid displaying features, tools, and visual results.
- **Client-Side Search:** Zero-dependency, dynamic search for blog posts powered by Pagefind.
- **Responsive Resume:** Print-ready, responsive, high-fidelity resume layout.
- **Privacy-First Analytics:** Ultra-lightweight custom analytics loader that respects user Do Not Track (DNT) and Global Privacy Control (GPC) preferences before loading any third-party script.

## Getting Started

### Prerequisites

You need [Bun](https://bun.sh) installed.

### Installation

```bash
bun install
```

### Development

Start the local development server:

```bash
bun run dev
```

### Build

Compile the static site (output will be in `_site/`):

```bash
bun run build
```

### Linting and Formatting

Run the verification suite (TypeScript validation, data validation, and Prettier checks):

```bash
bun run lint
```

Format the codebase:

```bash
bun run format
```

---

## Configuration

The site supports configuration via environment variables for analytics tracking (e.g. Umami Cloud or Cloudflare Web Analytics):

- `ANALYTICS_WEBSITE_ID`: The unique site identifier provided by your analytics service. **If this variable is not set, no analytics code is injected into the built pages.**
- `ANALYTICS_SRC`: The source URL of the tracking script. Defaults to Umami's cloud tracker: `https://cloud.umami.is/script.js`.

### Example Build with Analytics

```bash
ANALYTICS_WEBSITE_ID="your-umami-website-id" bun run build
```
