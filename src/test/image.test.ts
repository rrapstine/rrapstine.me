import { describe, it, expect } from "vitest";
import { existsSync } from "fs";
import { join } from "path";

describe("Image Optimization Components", () => {
  it("should have required image optimization components", () => {
    const requiredFiles = [
      "src/components/OptimizedImage.astro",
      "src/components/OptimizedPicture.astro",
      "src/js/lazyLoad.js",
      "src/js/performance.js",
      "src/js/performance-monitor.js",
    ];

    requiredFiles.forEach((file) => {
      const filePath = join(process.cwd(), file);
      expect(existsSync(filePath)).toBe(true);
    });
  });

  it("should have astro configured with image optimization", () => {
    // Load the Astro config file
    const astroConfigPath = join(process.cwd(), "astro.config.mjs");

    // Read the file as text to avoid dynamic imports issues in tests
    const configContent = require("fs").readFileSync(astroConfigPath, "utf8");

    // Check if the config contains image optimization settings
    expect(configContent).toContain("image:");
    expect(configContent).toContain("responsiveImages");
    expect(configContent).toContain("responsiveStyles");
  });
});
