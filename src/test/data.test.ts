import { describe, it, expect } from "vitest";
import data from "../data/site.json";

describe("Site Data", () => {
  it("should have required properties", () => {
    expect(data).toHaveProperty("title");
    expect(data).toHaveProperty("description");
    expect(data).toHaveProperty("url");
    expect(data).toHaveProperty("author");
    expect(data).toHaveProperty("tagline");
    expect(data).toHaveProperty("nav");
    expect(data).toHaveProperty("skills");
    expect(data).toHaveProperty("work");
    expect(data).toHaveProperty("socials");
  });

  it("should have valid navigation data", () => {
    expect(Array.isArray(data.nav)).toBe(true);
    expect(data.nav.length).toBeGreaterThan(0);

    data.nav.forEach((item) => {
      expect(item).toHaveProperty("link");
      expect(item).toHaveProperty("name");
      expect(typeof item.link).toBe("string");
      expect(typeof item.name).toBe("string");
    });
  });

  it("should have valid skills data", () => {
    expect(data.skills).toHaveProperty("comfortable");
    expect(data.skills).toHaveProperty("mastering");
    expect(Array.isArray(data.skills.comfortable)).toBe(true);
    expect(Array.isArray(data.skills.mastering)).toBe(true);

    [...data.skills.comfortable, ...data.skills.mastering].forEach((skill) => {
      expect(skill).toHaveProperty("name");
      expect(skill).toHaveProperty("icon");
      expect(skill).toHaveProperty("colored");
      expect(typeof skill.name).toBe("string");
      expect(typeof skill.icon).toBe("string");
      expect(typeof skill.colored).toBe("boolean");
    });
  });

  it("should have valid work data", () => {
    expect(Array.isArray(data.work)).toBe(true);
    expect(data.work.length).toBeGreaterThan(0);

    data.work.forEach((item) => {
      expect(item).toHaveProperty("title");
      expect(item).toHaveProperty("description");
      expect(item).toHaveProperty("image");
      expect(item).toHaveProperty("url");
      expect(item).toHaveProperty("tech");

      expect(typeof item.title).toBe("string");
      expect(typeof item.description).toBe("string");
      expect(typeof item.image).toBe("string");
      expect(typeof item.url).toBe("string");
      expect(Array.isArray(item.tech)).toBe(true);

      if (item.github) {
        expect(typeof item.github).toBe("string");
      }
    });
  });

  it("should have valid socials data", () => {
    expect(Array.isArray(data.socials)).toBe(true);
    expect(data.socials.length).toBeGreaterThan(0);

    data.socials.forEach((social) => {
      expect(social).toHaveProperty("link");
      expect(social).toHaveProperty("title");
      expect(social).toHaveProperty("icon");
      expect(typeof social.link).toBe("string");
      expect(typeof social.title).toBe("string");
      expect(typeof social.icon).toBe("string");
    });
  });
});
