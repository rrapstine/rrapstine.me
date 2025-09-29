import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [],
  image: {
    // Enable responsive image features
    responsiveImages: true,
    responsiveStyles: true,
    // Allow remote images from specific domains
    domains: ["communityems.net"],
    // Default image service settings
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        quality: 80,
      },
    },
  },
  build: {
    // Enable build visualization
    inlineStylesheets: "auto", // Automatically inline small stylesheets for better performance
    assets: "_assets", // Put assets in a dedicated directory for better caching
  },
  vite: {
    build: {
      // Enable Rollup bundle size analysis (uncomment when needed)
      // reportCompressedSize: true,
      cssMinify: "lightningcss",
      cssCodeSplit: true,
    },
    ssr: {
      // Avoid bundling certain dependencies in SSR
      noExternal: [],
    },
  },
});
