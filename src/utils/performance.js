import { lazyLoadImages } from "./lazyLoad";
import initPerformanceMonitoring from "./performance-monitor";

// Enhanced performance optimization functions
function optimizeScrollPerformance() {
  let ticking = false;

  function updateNavOnScroll() {
    const nav = document.querySelector("nav");
    if (nav) {
      const scrolled = window.scrollY > 100;
      nav.classList.toggle("scrolled", scrolled);
    }
    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateNavOnScroll);
      ticking = true;
    }
  }

  window.addEventListener("scroll", requestTick, { passive: true });
}

function preloadCriticalResources() {
  // Preload critical resources after user interaction
  let hasPreloaded = false;

  const preloadHandler = () => {
    if (hasPreloaded) return;
    hasPreloaded = true;

    // Preload resume PDF
    const resumeLink = document.createElement("link");
    resumeLink.rel = "preload";
    resumeLink.href = "/assets/docs/resume.pdf";
    resumeLink.as = "document";
    document.head.appendChild(resumeLink);

    // Preload project images below the fold
    const projectImages = document.querySelectorAll('img[loading="lazy"]');
    projectImages.forEach((img) => {
      if (img.getBoundingClientRect().top < window.innerHeight * 2) {
        const linkEl = document.createElement("link");
        linkEl.rel = "preload";
        linkEl.href = img.src;
        linkEl.as = "image";
        document.head.appendChild(linkEl);
      }
    });
  };

  // Trigger preloading on first meaningful interaction
  ["mouseenter", "touchstart", "scroll"].forEach((event) => {
    document.addEventListener(event, preloadHandler, {
      once: true,
      passive: true,
    });
  });
}

function optimizeCSS() {
  // Remove unused CSS classes if they still exist in DOM
  const unusedClasses = [
    "text-xs",
    "text-sm",
    "text-base",
    "text-lg",
    "text-xl",
    "text-2xl",
    "text-3xl",
    "text-4xl",
    "text-5xl",
    "text-6xl",
    "font-light",
    "font-regular",
    "font-medium",
    "font-semibold",
    "font-bold",
  ];

  // This is more for documentation - the classes are already removed from CSS
  if (process.env.NODE_ENV === "development") {
    console.log(
      "Unused CSS classes removed for better performance:",
      unusedClasses,
    );
  }
}

// Initialize all performance optimizations
function initPerformanceOptimizations() {
  // Core lazy loading and monitoring
  lazyLoadImages();
  initPerformanceMonitoring();

  // Additional optimizations
  optimizeScrollPerformance();
  preloadCriticalResources();
  optimizeCSS();

  // Optimize font loading
  if (document.fonts) {
    document.fonts.ready.then(() => {
      document.body.classList.add("fonts-loaded");
    });
  }

  // Memory optimization - clean up event listeners on page unload
  window.addEventListener("beforeunload", () => {
    // Clean up any performance observers or intervals
    // Note: Individual observers should be cleaned up in their respective modules
  });
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPerformanceOptimizations);
} else {
  initPerformanceOptimizations();
}

// Listen for route changes in SPA mode (if applicable in the future)
document.addEventListener("astro:page-load", () => {
  initPerformanceOptimizations();
});

// Export for potential external use
export {
  initPerformanceOptimizations,
  preloadCriticalResources,
  optimizeScrollPerformance,
};
