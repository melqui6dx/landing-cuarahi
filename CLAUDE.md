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

### Design System: "Cuarahí Brand System"
The project uses a modern glassmorphism design system with the new Cuarahí brand identity:
- **Glassmorphism**: Extensive use of backdrop-filter and rgba backgrounds for premium feel
- **Primary Brand Color**: Red (#DC2626) - Main brand color for primary elements
- **Secondary Brand Colors**: Orange (#FF6B1A), Yellow (#FFB800) - Supporting brand colors
- **Support Colors**: Blue (#3b82f6) for accents, White/transparent for glassmorphism
- **Logo Assets**: Uses `logo-blanco.webp` (white logo) throughout components
- **Typography**: Inter font with responsive clamp() sizing and white text with subtle glows
- **Animations**: Linear.app-inspired animations, smooth transitions, and luminous effects

### Component Architecture

**Layout Structure**:
- `Layout.astro`: Master layout with global scripts, meta tags, and parallax functionality
- Pages are composed of section-based components

**Key Component Patterns**:
- **SpaceCard.astro**: Unified neutral card design with red accent glow effects on titles, icons, and arrows
- **Hero.astro**: Linear.app-inspired design with glowing logo orb and red-focused gradient animations
- **Section Components**: Hero, AboutSection, SpacesSection, ContactSection - each using consistent brand colors
- **NavBar.astro**: Fixed navbar with glassmorphism, uses logo-blanco.webp, red accent colors
- **Footer.astro**: Comprehensive footer with logo-blanco.webp and red brand color integration

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
Key CSS custom properties defined in `:root` (`src/styles/global.css`):

**Cuarahí Brand Colors**:
- `--cuarahi-red`: #DC2626 (Primary brand color)
- `--cuarahi-red-light`: #EF4444, `--cuarahi-red-dark`: #B91C1C
- `--cuarahi-orange`: #FF6B1A (Secondary brand color)
- `--cuarahi-orange-light`: #FF8B3D, `--cuarahi-orange-dark`: #E55A0F
- `--cuarahi-yellow`: #FFB800 (Accent color)
- `--cuarahi-yellow-light`: #FFC933, `--cuarahi-yellow-dark`: #E6A500

**Glassmorphism & Layout**:
- `--cuarahi-glass`: rgba(255, 255, 255, 0.1)
- `--cuarahi-glass-border`: rgba(255, 255, 255, 0.2)
- `--cuarahi-glass-hover`: rgba(255, 255, 255, 0.15)
- `--cuarahi-space-xs` through `--cuarahi-space-3xl`

**Legacy Compatibility**: Maintains `--eco-*` aliases for smooth transition

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

## Logo & Asset Management

### Logo Implementation
- **Primary Logo**: `/public/assets/logo-blanco.webp` (white version for dark backgrounds)
- **Usage Pattern**: Consistent sizing and styling across components
- **Hero Logo**: Special glowing orb treatment with rotating gradients
- **NavBar Logo**: 20px standard size, 18px mobile, glassmorphism container
- **Footer Logo**: 32px size with enhanced glow effects

### Logo Styling Guidelines
```css
/* Standard logo implementation */
.logo-img {
    width: 20px;
    height: 20px;
    object-fit: contain;
}

/* With glow effects */
.logo-with-glow {
    filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.4));
}
```

## Content Management

### Page Structure
- **Homepage**: Single index.astro with all major sections
- **MakerSpace**: Dedicated page with detailed equipment, workshops, pricing
- **Brand Assets**: Uses `logo-blanco.webp` consistently across Hero, NavBar, Footer components
- **Logo Implementation**: White logo with glow effects and glassmorphism containers

### Data Patterns
Component props are defined inline with TypeScript interfaces. No external CMS or data layer currently implemented.

## Brand Color Migration (2025)

### Color System Evolution
The project migrated from an eco.com-inspired color system to a unified Cuarahí brand system:

**Before**: Mixed color theming with yellow/orange/blue variations per component
**After**: Unified red-primary system with neutral components and consistent brand accents

### Key Migration Changes
1. **Global Colors** (`src/styles/global.css`): Complete rebrand to `--cuarahi-*` variables
2. **Tailwind Config** (`tailwind.config.js`): Updated with full Cuarahí color palette
3. **Component Updates**:
   - **Hero**: Linear-inspired design with red-focused orb gradients
   - **SpaceCard**: Neutral glassmorphism with red accent glows
   - **NavBar/Footer**: logo-blanco.webp implementation with red brand colors
4. **Logo Assets**: Standardized on `logo-blanco.webp` replacing inline SVGs

### Implementation Notes
- **Backward Compatibility**: Legacy `--eco-*` variables aliased to new `--cuarahi-*` system
- **Glow Effects**: Title, icon, and interactive element glows using CSS drop-shadow and text-shadow
- **Glassmorphism**: Enhanced with red accent tints while maintaining neutral base
- **Brand Consistency**: Red (#DC2626) used consistently for primary actions and accents