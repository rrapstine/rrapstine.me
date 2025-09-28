# Agent Guidelines for rrapstine.me

## Commands

### Development & Build

- **Dev server**: `bun run dev` (starts development server with hot reload)
- **Build**: `bun run build` (produces production build in `dist/`)
- **Preview**: `bun run preview` (serves production build locally)
- **Format**: `npx prettier --write .` (formats all files with Prettier)

### Package Management

- **Install dependencies**: `bun install`
- **Update to latest versions**: `bun update --latest` (ignores version ranges for absolute latest)
- **Add dependency**: `bun add <package>`

### Linting & Testing

- No linting or testing scripts are currently configured
- Prettier handles code formatting
- TypeScript strict mode provides compile-time type checking

## Code Style Guidelines

### Framework & Language

- **Framework**: Astro 5.x with TypeScript (strict configuration)
- **File Extensions**: `.astro` for components, `.ts` for config files
- **TypeScript**: Strict mode enabled, extends `astro/tsconfigs/strict`
- **Configuration**: Minimal Astro config, no integrations currently used

### Component Structure

- **Props**: Define TypeScript interfaces for component props
- **Destructuring**: Always destructure `Astro.props` at the top of components
- **Data**: Import site data from central `src/data/site.json` file
- **Composition**: Build complex UIs through component composition (e.g., `SkillItem` within `Skills`)

### HTML & Accessibility

- **Semantic HTML**: Use proper semantic elements (`<section>`, `<nav>`, `<main>`, etc.)
- **ARIA Roles**: Add `role="list"` to `<ul>` elements for screen readers
- **External Links**: Use `target="_blank"` for external links
- **Alt Text**: ALWAYS provide meaningful alt text for images - never leave empty. Follow WCAG accessibility guidelines for all content.

### Styling (SCSS)

- **Preprocessor**: SCSS with CSS custom properties (variables)
- **CSS Variables**: Extensive use of custom properties defined in `src/styles/globals.scss`
  - Color variables: `--primary-white`, `--primary-black`, `--primary-gray`, `--primary-blue`
  - Typography: `--ff-primary`, `--ff-accent`, `--fw-regular`, `--fw-medium`, `--fw-bold`
  - Font sizes: `--fs-body`, `--fs-nav`, `--fs-subheading`, `--fs-heading`, `--fs-bigheading`
- **Utility Classes**: BEM-like naming convention
  - Typography: `ff-heading`, `fs-bigheading`, `fw-bold`
  - Colors: `text-white`, `text-dark`, `text-accent`
- **Responsive Design**: Use `clamp()` for fluid typography and spacing
- **Layout**: Flexbox-based layouts with consistent gap spacing
- **Animations**: CSS transitions with `ease` timing (0.2s-0.3s duration)
- **Hover Effects**: `transform: scale()` for interactive elements
- **Media Queries**: Mobile-first approach with `@media (min-width: 1080px)` breakpoints

### JavaScript/TypeScript

- **Client Scripts**: Use `<script>` tags in `.astro` files for client-side interactivity
- **Type Assertions**: Use `as` keyword for DOM element typing (e.g., `as NodeListOf<HTMLElement>`)
- **Modern APIs**: IntersectionObserver for scroll-based interactions
- **Event Handling**: Add event listeners programmatically rather than inline
- **TypeScript Overrides**: Minimal use of `@ts-ignore` (only when necessary)
- **Function Declarations**: Prefer function declarations over function expressions where possible

### File Organization

- **Components**: All components in `src/components/` with PascalCase naming
- **Pages**: Single page app with `src/pages/index.astro`
- **Data**: Centralized configuration in `src/data/site.json`
- **Styles**: Global styles in `src/styles/` (globals.scss, reset.css)
- **Assets**: Static assets in `public/` directory

### External Dependencies

- **Icons**: Devicon library loaded via CDN for technology icons
- **Fonts**: Google Fonts (Inter, Playfair Display) loaded via CDN
- **CSS Reset**: Modern CSS reset with accessibility considerations (prefers-reduced-motion)

### Development Practices

- **Version Control**: Standard .gitignore for Node.js/Astro projects
- **Git Workflow**: Create new branches for features/changes with sensible names (e.g., `feat/resume-download`, `refactor/modern-ui`). Make regular commits following conventional commit format (e.g., `feat: add resume download button`, `refactor: update UI to be more modern`). Always ask for review before committing to avoid excessive adjustment commits.
- **Formatting**: Prettier with semicolons enabled
- **No Comments**: Code is self-documenting without inline comments
- **Performance**: Static site generation, minimal JavaScript, efficient bundling

### Data Structure

- **JSON Schema**: Well-structured data with nested objects for skills, work, social links
- **Content Management**: All site content managed through JSON file updates
- **Type Safety**: Data structure supports TypeScript interfaces in components

This comprehensive overview covers all aspects of the codebase that agents would need to understand to maintain consistency with your existing patterns and architectural decisions. The project demonstrates clean, modern web development practices with a focus on performance, accessibility, and maintainability.
