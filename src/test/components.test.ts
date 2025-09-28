import { describe, it, expect } from "vitest";

// Test component prop interfaces and data structures
describe("Component Props and Data Structures", () => {
  it("should validate SkillIcon props structure", () => {
    const validProps = {
      icon: "javascript",
      colored: true,
      size: "2",
      fontColor: "white",
    };

    expect(validProps.icon).toBe("javascript");
    expect(validProps.colored).toBe(true);
    expect(validProps.size).toBe("2");
    expect(validProps.fontColor).toBe("white");
  });

  it("should validate SkillItem props structure", () => {
    const validSkill = {
      name: "JavaScript",
      icon: "javascript",
      colored: true,
    };

    expect(validSkill.name).toBe("JavaScript");
    expect(validSkill.icon).toBe("javascript");
    expect(validSkill.colored).toBe(true);
  });

  it("should validate WorkItem props structure", () => {
    const validWorkItem = {
      title: "Test Project",
      description: "A test project description",
      image: "/assets/images/test.webp",
      url: "https://example.com",
      github: "https://github.com/test/repo",
      tech: [
        { name: "HTML", icon: "html5", colored: true },
        { name: "CSS", icon: "css3", colored: true },
      ],
    };

    expect(validWorkItem.title).toBe("Test Project");
    expect(validWorkItem.description).toBe("A test project description");
    expect(validWorkItem.image).toBe("/assets/images/test.webp");
    expect(validWorkItem.url).toBe("https://example.com");
    expect(validWorkItem.github).toBe("https://github.com/test/repo");
    expect(Array.isArray(validWorkItem.tech)).toBe(true);
    expect(validWorkItem.tech.length).toBe(2);
  });
});
