import postcss from "postcss";
import tailwindcss from "@tailwindcss/postcss";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import markdownIt from "markdown-it";
import { execSync } from "child_process";

export default function (eleventyConfig) {
  // Add syntax highlighting plugin
  eleventyConfig.addPlugin(syntaxHighlight);

  // Configure markdown-it with html: false for security
  const mdLib = markdownIt({
    html: false,
    linkify: true,
    typographer: true,
  });
  eleventyConfig.setLibrary("md", mdLib);

  // Normalize paths for navigation active states and canonical URLs
  eleventyConfig.addFilter("normalize_path", (url) => {
    if (!url || typeof url !== "string") return "/";
    let p = url.split("?")[0].split("#")[0] || "/";
    if (p.endsWith("/index.html")) p = p.slice(0, -"/index.html".length) || "/";
    else if (p.endsWith(".html")) p = p.slice(0, -".html".length) || "/";
    if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
    return p || "/";
  });

  // Add date formatting filters
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    if (!dateObj) return "";
    const date = typeof dateObj === "string" ? new Date(dateObj) : dateObj;
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });
  });

  eleventyConfig.addFilter("dateToISO", (dateObj) => {
    if (!dateObj) return "";
    try {
      const date = typeof dateObj === "string" ? new Date(dateObj) : dateObj;
      return date.toISOString().split("T")[0];
    } catch (e) {
      return dateObj;
    }
  });

  // Tell Eleventy to process CSS files
  eleventyConfig.addTemplateFormats("css");

  // Define the processing logic for CSS files
  eleventyConfig.addExtension("css", {
    outputFileExtension: "css",
    compile: async function (inputContent, inputPath) {
      return async () => {
        const result = await postcss([tailwindcss]).process(inputContent, {
          from: inputPath,
        });
        return result.css;
      };
    },
  });

  // Watch target for the main CSS file
  eleventyConfig.addWatchTarget("src/styles/main.css");

  // Watch target for search scripts
  eleventyConfig.addWatchTarget("src/scripts/");
  eleventyConfig.watchIgnores.add("assets/js/**");

  // Build client-side scripts before Eleventy compilation
  eleventyConfig.on("eleventy.before", async () => {
    console.log("Bundling client-side scripts with Bun...");
    try {
      const minifyFlag = process.env.NODE_ENV === "production" ? " --minify" : "";
      execSync(`bun build src/scripts/search.ts --outfile assets/js/search.js${minifyFlag}`, {
        stdio: "inherit",
      });
      console.log("Bun build succeeded.");
    } catch (err) {
      console.error("Error during Bun build:", err);
    }
  });

  // Post-build indexing with Pagefind
  eleventyConfig.on("eleventy.after", async () => {
    console.log("Running Pagefind indexer...");
    try {
      execSync("bunx pagefind --site _site", { stdio: "inherit" });
      console.log("Pagefind indexing succeeded.");
    } catch (err) {
      console.error("Error running Pagefind:", err);
    }
  });

  // Ignore system markdown files and documentation
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("DESIGN.md");
  eleventyConfig.ignores.add("SPEC.md");
  eleventyConfig.ignores.add("AGENTS.md");
  eleventyConfig.ignores.add("tasks/**");
  eleventyConfig.ignores.add("docs/**");
  eleventyConfig.ignores.add("references/**");
  eleventyConfig.ignores.add("agents/**");
  eleventyConfig.ignores.add(".agents/**");

  // Set up passthrough copy for static folders
  eleventyConfig.ignores.add("public"); // we only want passthrough copy, not templates
  eleventyConfig.addPassthroughCopy({ public: "/" });
  eleventyConfig.addPassthroughCopy("assets");

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "src/layouts",
      data: "_data",
      output: "_site",
    },
  };
}
