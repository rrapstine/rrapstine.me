import { describe, it, expect } from "vitest";
import { existsSync } from "fs";
import { join } from "path";

describe("Astro Build and Development", () => {
  it("should have astro config file", () => {
    // Test that astro config exists
    const configPath = join(process.cwd(), "astro.config.mjs");
    expect(existsSync(configPath)).toBe(true);
  });

  it("should have valid package.json scripts", () => {
    const packageJson = require(join(process.cwd(), "package.json"));

    expect(packageJson.scripts).toHaveProperty("dev");
    expect(packageJson.scripts).toHaveProperty("build");
    expect(packageJson.scripts).toHaveProperty("preview");
    expect(packageJson.scripts).toHaveProperty("test");
    expect(packageJson.scripts).toHaveProperty("test:run");
    expect(packageJson.scripts.dev).toBe("astro dev");
    expect(packageJson.scripts.build).toBe("astro build");
    expect(packageJson.scripts.preview).toBe("astro preview");
  });

  it("should have required project structure", () => {
    const requiredFiles = [
      "src/pages/index.astro",
      "src/components",
      "src/data/site.json",
      "src/styles/globals.scss",
      "public",
    ];

    requiredFiles.forEach((file) => {
      const filePath = join(process.cwd(), file);
      expect(existsSync(filePath)).toBe(true);
    });
  });

  it("should have testing setup", () => {
    const testFiles = [
      "vitest.config.ts",
      "src/test/setup.ts",
      "src/test/data.test.ts",
      "src/test/components.test.ts",
      "src/test/links.test.ts",
      "src/test/astro.test.ts",
    ];

    testFiles.forEach((file) => {
      const filePath = join(process.cwd(), file);
      expect(existsSync(filePath)).toBe(true);
    });
  });
});
