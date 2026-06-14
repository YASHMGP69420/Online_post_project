---
name: Threadly Dark
colors:
  surface: '#121416'
  surface-dim: '#121416'
  surface-bright: '#38393c'
  surface-container-lowest: '#0c0e10'
  surface-container-low: '#1a1c1e'
  surface-container: '#1e2022'
  surface-container-high: '#282a2c'
  surface-container-highest: '#333537'
  on-surface: '#e2e2e5'
  on-surface-variant: '#e7bdb2'
  inverse-surface: '#e2e2e5'
  inverse-on-surface: '#2f3133'
  outline: '#ad887e'
  outline-variant: '#5d4038'
  surface-tint: '#ffb5a0'
  primary: '#ffb5a0'
  on-primary: '#601400'
  primary-container: '#ff5625'
  on-primary-container: '#541100'
  inverse-primary: '#b12d00'
  secondary: '#c5c6ca'
  on-secondary: '#2e3134'
  secondary-container: '#494c4f'
  on-secondary-container: '#babcc0'
  tertiary: '#c3c7cc'
  on-tertiary: '#2d3135'
  tertiary-container: '#8d9196'
  on-tertiary-container: '#262a2e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbd1'
  primary-fixed-dim: '#ffb5a0'
  on-primary-fixed: '#3b0900'
  on-primary-fixed-variant: '#872000'
  secondary-fixed: '#e1e2e6'
  secondary-fixed-dim: '#c5c6ca'
  on-secondary-fixed: '#191c1f'
  on-secondary-fixed-variant: '#44474a'
  tertiary-fixed: '#e0e3e8'
  tertiary-fixed-dim: '#c3c7cc'
  on-tertiary-fixed: '#181c20'
  on-tertiary-fixed-variant: '#43474b'
  background: '#121416'
  on-background: '#e2e2e5'
  surface-variant: '#333537'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.25'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 0.25rem
  sm: 0.5rem
  md: 1rem
  lg: 1.5rem
  xl: 2.5rem
  gutter: 1.5rem
  margin-mobile: 1rem
  margin-desktop: 2rem
---

## Brand & Style

The design system adopts a **Modern High-Contrast** aesthetic specifically optimized for dark environments. It targets a tech-savvy, community-driven audience that values focus and visual impact. The personality is energetic yet grounded, utilizing deep charcoal foundations to allow the "Action Orange" to pop with maximum vibrancy.

By leveraging **Minimalism** with subtle **Glassmorphism** for elevated surfaces, the UI evokes a sense of premium precision. The design avoids pure black to prevent "smearing" on OLED screens and uses deep gray scales to maintain a sophisticated, layered depth.

## Colors

The palette is anchored by a deep charcoal background to reduce eye strain while maintaining high readability. 

- **Primary (Action Orange):** Used exclusively for high-priority interactions, active states, and critical branding moments.
- **Neutral (Base):** The foundation is `#0f1113`.
- **Surfaces:** Elevated components use progressive shades of charcoal (`#1e2124` and `#2b2f33`) to communicate hierarchy without relying on heavy shadows.
- **Accents:** Feedback colors (Success, Warning, Error) should be slightly desaturated to prevent "neon vibrating" against the dark background.

## Typography

This design system uses a triple-font approach to balance personality, readability, and technical precision.

1.  **Plus Jakarta Sans** provides a friendly, modern voice for headlines, utilizing tight letter-spacing to feel cohesive.
2.  **Inter** serves as the workhorse for body text, ensuring maximum legibility at high-contrast ratios.
3.  **JetBrains Mono** is used for labels, metadata, and micro-copy, providing a "utility" aesthetic that complements the community/threaded nature of the product.

All typography is rendered in high-contrast off-whites to prevent the harshness of `#ffffff` on dark backgrounds.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a 12-column structure for desktop and a 4-column structure for mobile. 

- **Vertical Rhythm:** A strict 4px baseline grid ensures consistent spacing between text elements and containers.
- **Margins:** Containers use generous internal padding (`1.5rem`) to create "breathing room" against the dark background, preventing the UI from feeling cramped.
- **Breakpoints:** 
    - Mobile: < 600px
    - Tablet: 600px - 1024px
    - Desktop: > 1024px

## Elevation & Depth

In this dark mode system, depth is communicated through **Tonal Layers** rather than heavy shadows. 

- **Level 0 (Base):** `#0f1113` (The canvas).
- **Level 1 (Cards/Sidebar):** `#1e2124` with a subtle `1px` border of `#2d3135`.
- **Level 2 (Modals/Popovers):** `#2b2f33` with a faint `20%` opacity white inner-glow on the top edge to simulate a light source.

Shadows, when used, are large, soft, and tinted with the background color (e.g., `rgba(0,0,0,0.5)`) to avoid a "muddy" look. Backdrop blurs (`blur(12px)`) are applied to floating navigation bars to maintain context of the content underneath.

## Shapes

The shape language is **Rounded**, strike a balance between professional and approachable. 

- Standard components (Buttons, Inputs) use a `0.5rem` radius.
- Larger containers (Cards, Modals) use `1rem`.
- Small utility elements (Tags, Chips) may utilize `1.5rem` (Pill) to distinguish them from interactive buttons.

This consistent rounding softens the high-contrast color palette, making the interface feel more tactile and less aggressive.

## Components

- **Buttons:** 
    - *Primary:* Action Orange background, white text. No border.
    - *Secondary:* Transparent background, Action Orange border, Action Orange text.
    - *Ghost:* No background or border, `text-secondary` color, switching to `text-primary` on hover.
- **Inputs:** Darker than the card surface (`#0a0c0e`) with a `1px` border. The border turns Action Orange on focus. Labels use the `label-sm` monospace font.
- **Cards:** Use the Level 1 elevation color. Borders are essential for definition. On hover, the border color should brighten to `border_vibrant`.
- **Chips/Tags:** Small, monospace text with a subtle `#2b2f33` background. Active tags use a desaturated orange tint.
- **Lists:** Items separated by `1px` solid `#2d3135` dividers. Hover states should use a subtle highlight of `#ffffff05`.