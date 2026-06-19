import postcss from "postcss";
import tailwindcss from "@tailwindcss/postcss";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import markdownIt from "markdown-it";

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
