// Client-side search and category filtering for blog posts

interface PagefindResult {
  url: string;
  meta: {
    title: string;
    image?: string;
  };
  excerpt: string;
}

interface PagefindSearchResponse {
  results: Array<{
    id: string;
    data: () => Promise<PagefindResult>;
    url: string;
  }>;
}

interface PagefindInstance {
  init: () => Promise<void>;
  search: (query: string) => Promise<PagefindSearchResponse>;
}

let pagefind: PagefindInstance | null = null;
let pagefindLoading = false;

// State management
let currentCategory = "all";
let searchResults: Set<string> | null = null; // null means search is idle/empty

// DOM elements
let filterButtons: NodeListOf<HTMLButtonElement>;
let blogCards: NodeListOf<HTMLElement>;
let blogGrid: HTMLElement | null = null;
let noPostsMessage: HTMLElement | null = null;
let searchInput: HTMLInputElement | null = null;
let searchAnnouncer: HTMLElement | null = null;

// Normalize URLs to ensure reliable matching (handles slashes, index.html, casing)
function normalizeUrl(url: string | null): string {
  if (!url) return "";
  let normalized = url.trim().toLowerCase();

  if (normalized.startsWith("http://") || normalized.startsWith("https://")) {
    try {
      normalized = new URL(normalized).pathname;
    } catch (_) {}
  }

  normalized = normalized.split("?")[0]!.split("#")[0]!;

  if (normalized.endsWith("/index.html")) {
    normalized = normalized.slice(0, -11);
  } else if (normalized.endsWith("index.html")) {
    normalized = normalized.slice(0, -10);
  }

  if (normalized.startsWith("/")) normalized = normalized.slice(1);
  if (normalized.endsWith("/")) normalized = normalized.slice(0, -1);

  return normalized;
}

// Load Pagefind dynamically
async function initPagefind(): Promise<PagefindInstance | null> {
  if (pagefind) return pagefind;
  if (pagefindLoading) return null;

  pagefindLoading = true;
  try {
    // Dynamically import the pagefind client bundle generated post-build
    // @ts-ignore
    const module = await import("/pagefind/pagefind.js");
    pagefind = module as PagefindInstance;
    await pagefind.init();
    console.log("Pagefind initialized successfully.");
    return pagefind;
  } catch (err) {
    console.error("Error loading Pagefind client:", err);
    return null;
  } finally {
    pagefindLoading = false;
  }
}

// Update DOM cards visibility based on current category & search results
function updateList() {
  let visibleCount = 0;

  blogCards.forEach((card) => {
    const cardCategoryAttr = card.getAttribute("data-categories") || "";
    const cardCategories = cardCategoryAttr.split(/\s+/).filter(Boolean);
    const cardUrl = normalizeUrl(card.getAttribute("data-post-url"));

    const matchesCategory = currentCategory === "all" || cardCategories.includes(currentCategory);

    let matchesSearch = true;
    if (searchResults !== null) {
      matchesSearch = false;
      for (const resUrl of searchResults) {
        if (normalizeUrl(resUrl) === cardUrl) {
          matchesSearch = true;
          break;
        }
      }
    }

    if (matchesCategory && matchesSearch) {
      card.style.display = "flex";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  // Toggle empty state UI
  if (noPostsMessage) {
    if (visibleCount === 0) {
      noPostsMessage.classList.remove("hidden");
      if (blogGrid) blogGrid.classList.add("hidden");
    } else {
      noPostsMessage.classList.add("hidden");
      if (blogGrid) blogGrid.classList.remove("hidden");
    }
  }

  // Update announcer text for screen readers
  if (searchAnnouncer) {
    let announcement = "";
    if (visibleCount === 0) {
      announcement = "No posts found.";
    } else {
      announcement = `Showing ${visibleCount} post${visibleCount === 1 ? "" : "s"}.`;
    }

    const query = searchInput?.value.trim() || "";
    const activeFilterBtn = document.querySelector("#category-filters button.active");
    const activeCategory = activeFilterBtn?.textContent?.trim() || "All Posts";

    announcement += ` Filtered by category "${activeCategory}"`;
    if (query) {
      announcement += ` and search term "${query}".`;
    }
    searchAnnouncer.textContent = announcement;
  }
}

// Handle search input changes with a simple debounce
let debounceTimer: number | null = null;
async function handleSearchInput() {
  const query = searchInput?.value.trim() || "";

  if (debounceTimer) {
    clearTimeout(debounceTimer);
  }

  debounceTimer = window.setTimeout(async () => {
    if (query === "") {
      searchResults = null;
      updateList();
      return;
    }

    // Ensure Pagefind is loaded
    const pf = await initPagefind();
    if (!pf) return;

    try {
      const response = await pf.search(query);
      searchResults = new Set(response.results.map((r) => r.url));
      updateList();
    } catch (err) {
      console.error("Search query execution failed:", err);
    }
  }, 150);
}

// Setup Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  filterButtons = document.querySelectorAll("#category-filters button");
  blogCards = document.querySelectorAll("[data-blog-card]");
  blogGrid = document.getElementById("blog-grid");
  noPostsMessage = document.getElementById("no-posts-message");
  searchInput = document.getElementById("search-input") as HTMLInputElement;
  searchAnnouncer = document.getElementById("search-announcer");

  // Category badges click listener
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filterVal = button.getAttribute("data-filter") || "all";
      currentCategory = filterVal;

      // Update UI active styling and ARIA pressed states
      filterButtons.forEach((btn) => {
        btn.classList.remove("active", "bg-accent-deep", "text-accent-light", "border-accent/30");
        btn.classList.add("bg-dark-card", "text-text-muted", "border-border-subtle");
        btn.setAttribute("aria-pressed", "false");
      });

      button.classList.add("active", "bg-accent-deep", "text-accent-light", "border-accent/30");
      button.classList.remove("bg-dark-card", "text-text-muted", "border-border-subtle");
      button.setAttribute("aria-pressed", "true");

      updateList();
    });
  });

  // Search input change/input listener
  if (searchInput) {
    searchInput.addEventListener("input", handleSearchInput);

    // Lazy load Pagefind on focus/hover so it's ready when user types
    searchInput.addEventListener("focus", () => {
      initPagefind();
    });
    searchInput.addEventListener("mouseenter", () => {
      initPagefind();
    });
  }
});
