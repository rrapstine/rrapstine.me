/**
 * Utility for lazy loading elements with Intersection Observer API
 */

// Default options for intersection observer
const defaultOptions = {
  root: null, // use viewport as root
  rootMargin: "0px",
  threshold: 0.1, // trigger when 10% of element is visible
};

/**
 * Initialize lazy loading for elements
 * @param {string} selector - CSS selector for elements to lazy load
 * @param {Function} loadCallback - Callback function when element becomes visible
 * @param {IntersectionObserverInit} options - Intersection Observer options
 */
export function initLazyLoad(selector, loadCallback, options = defaultOptions) {
  // Check if IntersectionObserver is supported
  if (!("IntersectionObserver" in window)) {
    // Fallback for older browsers
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => loadCallback(element));
    return;
  }

  // Create intersection observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadCallback(entry.target);
        observer.unobserve(entry.target); // Stop observing once loaded
      }
    });
  }, options);

  // Start observing elements
  document.querySelectorAll(selector).forEach((element) => {
    observer.observe(element);
  });

  return observer;
}

/**
 * Lazy load images with blur-up technique
 * @param {string} selector - CSS selector for images to lazy load
 */
export function lazyLoadImages(selector = "[data-lazy-image]") {
  initLazyLoad(selector, (element) => {
    if (element.tagName === "IMG") {
      // For <img> elements
      if (element.dataset.src) {
        element.src = element.dataset.src;
      }
      if (element.dataset.srcset) {
        element.srcset = element.dataset.srcset;
      }
    } else if (element.tagName === "SOURCE") {
      // For <source> elements inside <picture>
      if (element.dataset.srcset) {
        element.srcset = element.dataset.srcset;
      }
    }

    // Add loaded class for any animations or transitions
    element.classList.add("loaded");
  });
}

// Function to initialize on page load
export function initLazyLoadOnPageLoad() {
  document.addEventListener("DOMContentLoaded", () => {
    lazyLoadImages();
  });
}
