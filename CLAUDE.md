# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npx astro check` | TypeScript and Astro code validation |
| `npx astro add <integration>` | Add new Astro integrations |

Note: This project requires Node.js >= 18.20.8. Current issues with Node.js 18.19.1.

## Architecture Overview

### Technology Stack
- **Framework**: Astro 5.8+ with static site generation
- **Styling**: Tailwind CSS + custom CSS with glassmorphism design system
- **Deployment**: Vercel with static output
- **TypeScript**: Enabled with strict checking

### Design System: "Eco-Style"
The project uses a cohesive design system inspired by eco.com with:
- **Glassmorphism**: Extensive use of backdrop-filter and rgba backgrounds
- **Color Palette**: Blue (#3b82f6), Orange (#f97316), Yellow (#fbbf24) with dark navy backgrounds
- **Brand Colors**: Custom Cuarahí colors (red: #FF4A1C, orange: #FF6B1A, yellow: #FFB800)
- **Typography**: Lexend Deca font with responsive clamp() sizing
- **Animations**: Smooth transitions, parallax effects, and floating elements

### Component Architecture

**Layout Structure**:
- `Layout.astro`: Master layout with global scripts, meta tags, and parallax functionality
- Pages are composed of section-based components

**Key Component Patterns**:
- **SpaceCard.astro**: Reusable card component with color theming (yellow/orange/red variants)
- **Section Components**: Hero, AboutSection, SpacesSection, ContactSection - each self-contained with their own animations
- **NavBar.astro**: Fixed navbar with glassmorphism, mobile menu, and banner integration

**Global Scripts Location**: 
- Primary interactive scripts are in `Layout.astro` (lines 55-190)
- Component-specific scripts are within individual `.astro` files

### State Management & Interactivity
- **No Framework Dependencies**: Pure TypeScript/JavaScript for DOM manipulation
- **Animation System**: Intersection Observer for scroll-triggered animations
- **Parallax Effects**: Controlled parallax in Layout.astro for hero section only
- **Mobile Menu**: Hamburger navigation with transform animations

### Content Structure
- **Cuarahí Spaces**: Three main offerings (MakerSpace, DevSpace, EduSpace)
- **MakerSpace Page**: Detailed equipment lists, workshops, testimonials, and registration flow
- **Homepage**: Hero + overview of all three spaces

## TypeScript Considerations

### Common Patterns for DOM Manipulation
Always use type assertions when working with DOM elements:

```typescript
// Correct
const element = document.querySelector('.my-element') as HTMLElement;
if (element) {
    element.style.opacity = '1';
}

// For NodeList
document.querySelectorAll('.items').forEach(el => {
    const element = el as HTMLElement;
    element.style.transform = 'translateY(0)';
});
```

### Animation Script Patterns
Follow the established pattern for Intersection Observer animations:
1. Type cast entry.target as HTMLElement
2. Add null checks before style manipulation
3. Use `opacity` and `transform` for reveal animations

## Styling Guidelines

### CSS Architecture
- **Global Styles**: `src/styles/global.css` contains the complete design system
- **Component Styles**: Each Astro component has `<style>` blocks for component-specific styles
- **Tailwind Integration**: Used alongside custom CSS, not as replacement

### Design System Variables
Key CSS custom properties defined in `:root`:
- Colors: `--eco-blue`, `--eco-orange`, `--eco-yellow` 
- Glassmorphism: `--eco-glass`, `--eco-glass-border`, `--eco-glass-hover`
- Spacing: `--space-xs` through `--space-3xl`
- Transitions: `--transition-smooth`, `--transition-bounce`

### Responsive Patterns
- Use `clamp()` for fluid typography
- Mobile-first approach with glassmorphism maintained across breakpoints
- Desktop: Parallax and advanced animations enabled
- Mobile: Simplified animations, stacked layouts

## Deployment Configuration

### Vercel Setup
- **Output**: Static site generation (`output: 'static'`)
- **Build Command**: `npm ci && npm run build`
- **Analytics**: Enabled via Vercel integration
- **Caching**: Long-term caching for `_astro` assets (1 year)

### Performance Optimizations
- Font preloading with fallback in Layout.astro
- Image service enabled via Vercel adapter
- CSS preprocessing with autoprefixer
- Reduced motion accessibility support

## Content Management

### Page Structure
- **Homepage**: Single index.astro with all major sections
- **MakerSpace**: Dedicated page with detailed equipment, workshops, pricing
- **Brand Assets**: SVG logo in multiple locations (Hero, NavBar, public/assets)

### Data Patterns
Component props are defined inline with TypeScript interfaces. No external CMS or data layer currently implemented.