import projects from "../_data/projects.json";
import categories from "../_data/categories.json";
import type { Project, Category } from "../src/types/data.ts";

function validateProject(project: any, index: number): string[] {
  const errors: string[] = [];
  const prefix = `Project[${index}] (${project?.id || "unknown ID"})`;

  if (!project || typeof project !== "object") {
    return [`${prefix}: Must be an object`];
  }

  if (typeof project.id !== "string" || project.id.trim() === "") {
    errors.push(`${prefix}: 'id' must be a non-empty string`);
  }

  if (typeof project.title !== "string" || project.title.trim() === "") {
    errors.push(`${prefix}: 'title' must be a non-empty string`);
  }

  if (typeof project.description !== "string") {
    errors.push(`${prefix}: 'description' must be a string`);
  }

  if (
    !Array.isArray(project.results) ||
    !project.results.every((r: any) => typeof r === "string")
  ) {
    errors.push(`${prefix}: 'results' must be an array of strings`);
  }

  if (
    !Array.isArray(project.techStack) ||
    !project.techStack.every((t: any) => typeof t === "string")
  ) {
    errors.push(`${prefix}: 'techStack' must be an array of strings`);
  }

  if (!project.links || typeof project.links !== "object") {
    errors.push(`${prefix}: 'links' must be an object`);
  } else {
    if (project.links.github !== undefined && typeof project.links.github !== "string") {
      errors.push(`${prefix}: 'links.github' must be a string`);
    }
    if (project.links.live !== undefined && typeof project.links.live !== "string") {
      errors.push(`${prefix}: 'links.live' must be a string`);
    }
  }

  if (project.featured !== undefined && typeof project.featured !== "boolean") {
    errors.push(`${prefix}: 'featured' must be a boolean`);
  }

  return errors;
}

function validateCategory(category: any, index: number): string[] {
  const errors: string[] = [];
  const prefix = `Category[${index}] (${category?.id || "unknown ID"})`;

  if (!category || typeof category !== "object") {
    return [`${prefix}: Must be an object`];
  }

  if (typeof category.id !== "string" || category.id.trim() === "") {
    errors.push(`${prefix}: 'id' must be a non-empty string`);
  }

  if (typeof category.name !== "string" || category.name.trim() === "") {
    errors.push(`${prefix}: 'name' must be a non-empty string`);
  }

  if (typeof category.description !== "string") {
    errors.push(`${prefix}: 'description' must be a string`);
  }

  return errors;
}

function runValidation() {
  console.log("Starting data validation...");
  let failed = false;
  const projectIds = new Set<string>();
  const categoryIds = new Set<string>();

  // Validate Projects
  if (!Array.isArray(projects)) {
    console.error("Error: projects.json must be a JSON array");
    failed = true;
  } else {
    projects.forEach((proj, idx) => {
      const errors = validateProject(proj, idx);
      if (errors.length > 0) {
        errors.forEach((err) => console.error(`  - ${err}`));
        failed = true;
      } else {
        if (projectIds.has(proj.id)) {
          console.error(`  - Duplicate Project ID found: "${proj.id}"`);
          failed = true;
        }
        projectIds.add(proj.id);
      }
    });
  }

  // Validate Categories
  if (!Array.isArray(categories)) {
    console.error("Error: categories.json must be a JSON array");
    failed = true;
  } else {
    categories.forEach((cat, idx) => {
      const errors = validateCategory(cat, idx);
      if (errors.length > 0) {
        errors.forEach((err) => console.error(`  - ${err}`));
        failed = true;
      } else {
        if (categoryIds.has(cat.id)) {
          console.error(`  - Duplicate Category ID found: "${cat.id}"`);
          failed = true;
        }
        categoryIds.add(cat.id);
      }
    });
  }

  if (failed) {
    console.error("\n❌ Data validation failed.");
    process.exit(1);
  } else {
    console.log(
      `\n✅ Data validation succeeded! Validated ${projects.length} projects and ${categories.length} categories.`,
    );
  }
}

runValidation();
