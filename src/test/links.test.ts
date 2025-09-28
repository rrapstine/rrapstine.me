import { describe, it, expect } from "vitest";
import data from "../data/site.json";

describe("Links and URLs", () => {
  it("should have valid navigation links", () => {
    data.nav.forEach((item) => {
      expect(item.link).toMatch(/^#/); // Navigation links should be anchor links
      expect(item.link.length).toBeGreaterThan(1); // Should not be just '#'
    });
  });

  it("should have valid work project URLs", () => {
    data.work.forEach((item) => {
      expect(item.url).toMatch(/^https?:\/\//); // Should be valid URLs

      if (item.github) {
        expect(item.github).toMatch(/^https?:\/\/github\.com\//); // GitHub URLs should be valid
      }
    });
  });

  it("should have valid social media links", () => {
    data.socials.forEach((social) => {
      expect(social.link).toMatch(/^https?:\/\//); // Should be valid URLs

      // Check for known social platforms
      const validPlatforms = [
        "github.com",
        "linkedin.com",
        "twitter.com",
        "x.com",
      ];
      const url = new URL(social.link);
      expect(
        validPlatforms.some((platform) => url.hostname.includes(platform)),
      ).toBe(true);
    });
  });

  it("should have valid resume URL", () => {
    expect(data.resume).toMatch(/^\/assets\/docs\//); // Should be a local path
    expect(data.resume).toMatch(/\.(pdf|doc|docx)$/); // Should be a document file
  });

  it("should have valid site URL", () => {
    expect(data.url).toMatch(/^https?:\/\//); // Should be a valid URL
    const url = new URL(data.url);
    expect(url.hostname).toBeTruthy();
  });

  it("should have valid image paths", () => {
    // Check work images
    data.work.forEach((item) => {
      expect(item.image).toMatch(/^\/assets\/images\//); // Should be in assets/images
      expect(item.image).toMatch(/\.(webp|png|jpg|jpeg|svg)$/); // Should be valid image format
    });

    // Check profile pic if it exists
    if (data.profile_pic) {
      expect(data.profile_pic).toMatch(/^\/assets\/images\//);
      expect(data.profile_pic).toMatch(/\.(webp|png|jpg|jpeg|svg)$/);
    }
  });
});
