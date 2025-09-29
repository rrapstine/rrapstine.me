import { lazyLoadImages } from "./lazyLoad";
import initPerformanceMonitoring from "./performance-monitor";

// Initialize lazy loading when the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // Initialize lazy loading for images
  lazyLoadImages();

  // Initialize performance monitoring in development
  initPerformanceMonitoring();
});

// Listen for route changes in SPA mode (if applicable in the future)
document.addEventListener("astro:page-load", () => {
  lazyLoadImages();
});
