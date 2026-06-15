import postcss from "postcss";
import tailwindcss from "@tailwindcss/postcss";

export default function (eleventyConfig) {
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
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "src/layouts",
      data: "_data",
      output: "_site",
    },
  };
}
