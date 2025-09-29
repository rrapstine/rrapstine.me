/**
 * Performance monitoring utility
 * This script helps track and report key performance metrics
 */

// Only run in development mode or when explicitly enabled
const ENABLE_PERFORMANCE_MONITORING =
  import.meta.env.DEV || import.meta.env.PERF_MONITORING === "true";

// Initialize performance monitoring
export function initPerformanceMonitoring() {
  if (!ENABLE_PERFORMANCE_MONITORING) return;

  // Ensure Performance API is available
  if (!("performance" in window)) return;

  // Wait for the page to be fully loaded
  window.addEventListener("load", () => {
    setTimeout(() => {
      collectMetrics();
    }, 0);
  });
}

// Collect performance metrics
function collectMetrics() {
  try {
    // Get navigation timing data
    const timing = performance.getEntriesByType("navigation")[0];

    // Get resource timing data
    const resources = performance.getEntriesByType("resource");

    // Get largest contentful paint
    let lcp;
    const lcpEntries = performance.getEntriesByType("largest-contentful-paint");
    if (lcpEntries && lcpEntries.length > 0) {
      lcp = lcpEntries[lcpEntries.length - 1];
    }

    // Calculate metrics
    const metrics = {
      // Navigation timing
      ttfb: timing ? timing.responseStart - timing.requestStart : null, // Time to First Byte
      fcp: null, // First Contentful Paint
      lcp: lcp ? lcp.startTime : null, // Largest Contentful Paint
      domLoad: timing
        ? timing.domContentLoadedEventEnd - timing.startTime
        : null, // DOM Content Loaded
      windowLoad: timing ? timing.loadEventEnd - timing.startTime : null, // Window Load

      // Resource metrics
      resourceCount: resources.length,
      totalResourceSize:
        resources.reduce(
          (total, resource) => total + (resource.transferSize || 0),
          0,
        ) / 1024, // KB
      imageSize:
        resources
          .filter(
            (resource) =>
              resource.initiatorType === "img" ||
              resource.name.match(/\.(png|jpg|jpeg|gif|webp|svg)$/i),
          )
          .reduce(
            (total, resource) => total + (resource.transferSize || 0),
            0,
          ) / 1024, // KB
      scriptSize:
        resources
          .filter(
            (resource) =>
              resource.initiatorType === "script" ||
              resource.name.match(/\.js$/i),
          )
          .reduce(
            (total, resource) => total + (resource.transferSize || 0),
            0,
          ) / 1024, // KB
      cssSize:
        resources
          .filter(
            (resource) =>
              resource.initiatorType === "css" ||
              resource.name.match(/\.css$/i),
          )
          .reduce(
            (total, resource) => total + (resource.transferSize || 0),
            0,
          ) / 1024, // KB
    };

    // Get FCP from paint entries
    const paintEntries = performance.getEntriesByType("paint");
    const fcpEntry = paintEntries.find(
      (entry) => entry.name === "first-contentful-paint",
    );
    metrics.fcp = fcpEntry ? fcpEntry.startTime : null;

    // Log metrics to console
    console.log(
      "%c📊 Performance Metrics",
      "font-weight: bold; font-size: 14px; color: #53169c;",
    );
    console.log("%c⚡ Navigation Timing", "font-weight: bold; color: #53169c;");
    console.table({
      "TTFB (ms)": metrics.ttfb ? Math.round(metrics.ttfb) : "N/A",
      "First Contentful Paint (ms)": metrics.fcp
        ? Math.round(metrics.fcp)
        : "N/A",
      "Largest Contentful Paint (ms)": metrics.lcp
        ? Math.round(metrics.lcp)
        : "N/A",
      "DOM Content Loaded (ms)": metrics.domLoad
        ? Math.round(metrics.domLoad)
        : "N/A",
      "Window Load (ms)": metrics.windowLoad
        ? Math.round(metrics.windowLoad)
        : "N/A",
    });

    console.log("%c📦 Resource Metrics", "font-weight: bold; color: #53169c;");
    console.table({
      "Resource Count": metrics.resourceCount,
      "Total Size (KB)": Math.round(metrics.totalResourceSize),
      "Images Size (KB)": Math.round(metrics.imageSize),
      "Scripts Size (KB)": Math.round(metrics.scriptSize),
      "CSS Size (KB)": Math.round(metrics.cssSize),
    });
  } catch (error) {
    console.error("Error collecting performance metrics:", error);
  }
}

// Export initialization function
export default initPerformanceMonitoring;
