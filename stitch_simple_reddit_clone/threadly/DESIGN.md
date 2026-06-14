---
name: Threadly
colors:
  surface: '#fcf8f9'
  surface-dim: '#dcd9da'
  surface-bright: '#fcf8f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f4'
  surface-container: '#f0edee'
  surface-container-high: '#eae7e8'
  surface-container-highest: '#e5e2e3'
  on-surface: '#1b1b1c'
  on-surface-variant: '#5d4038'
  inverse-surface: '#303031'
  inverse-on-surface: '#f3f0f1'
  outline: '#926f66'
  outline-variant: '#e7bdb2'
  surface-tint: '#b12d00'
  primary: '#ad2c00'
  on-primary: '#ffffff'
  primary-container: '#d83900'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb5a0'
  secondary: '#0060a9'
  on-secondary: '#ffffff'
  secondary-container: '#4ba1fd'
  on-secondary-container: '#003663'
  tertiary: '#005daa'
  on-tertiary: '#ffffff'
  tertiary-container: '#0075d5'
  on-tertiary-container: '#fefcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbd1'
  primary-fixed-dim: '#ffb5a0'
  on-primary-fixed: '#3b0900'
  on-primary-fixed-variant: '#872000'
  secondary-fixed: '#d3e4ff'
  secondary-fixed-dim: '#a2c9ff'
  on-secondary-fixed: '#001c38'
  on-secondary-fixed-variant: '#004881'
  tertiary-fixed: '#d4e3ff'
  tertiary-fixed-dim: '#a5c8ff'
  on-tertiary-fixed: '#001c3a'
  on-tertiary-fixed-variant: '#004785'
  background: '#fcf8f9'
  on-background: '#1b1b1c'
  surface-variant: '#e5e2e3'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 21px
  body-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  container-margin: 12px
  card-gap: 8px
---

## Brand & Style
The design system focuses on high-density information management balanced with modern legibility. The brand personality is community-centric, reliable, and functional. It adopts a **Modern / Corporate** style, emphasizing a "content-first" philosophy where the UI recedes to let user-generated media and discussions take center stage. 

The aesthetic is defined by extreme clarity, using ample whitespace and a disciplined grid to prevent the feed from feeling cluttered. It avoids heavy decorative elements in favor of subtle structural cues, ensuring the interface feels snappy and professional.

## Colors
The palette is anchored by "Action Orange," used strictly for high-priority interactions, branding touchpoints, and notifications. 

- **Primary (#FF4500):** Reserved for primary CTAs (Create Post, Join), active states, and brand marks.
- **Secondary (#0079D3):** Used for links and interactive metadata (usernames, sub-communities) to distinguish them from body text.
- **Surface & Background:** A light-gray background (#F6F7F8) provides contrast for white (#FFFFFF) content cards, creating a clear "stacked" visual hierarchy.
- **Text:** Deep Ink (#1A1A1B) ensures maximum readability for long-form content, while a secondary gray (#7C7C7C) is used for metadata and timestamps.

## Typography
This design system utilizes **Inter** for its neutral, systematic quality and exceptional legibility at small sizes. 

- **Hierarchy:** Post titles use `headline-lg` to grab attention. Metadata (author, time, subreddit) uses `label-sm` in secondary gray to remain secondary.
- **Density:** Line heights are optimized for scanning. `body-lg` is the standard for post comments to ensure comfort during extended reading.
- **Mobile scaling:** Since the system is mobile-first, the variance between headline sizes is tight (12px to 20px) to maximize screen real estate for content.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a mobile-first approach. 

- **Feed Layout:** Content cards span the full width of the viewport on mobile with 12px horizontal margins. Between cards, a 8px vertical gap (`card-gap`) maintains distinct separation without wasting space.
- **Internal Padding:** Cards utilize a 12px (`md`) internal padding for content and a 16px (`lg`) padding for high-impact media.
- **Rhythm:** All spacing is based on a 4px baseline grid. Use `md` (12px) for most grouping and `lg` (16px) for separating major sections like the header from the body.

## Elevation & Depth
This design system relies on **Tonal Layers** and **Low-contrast outlines** rather than heavy shadows.

- **Level 0 (Background):** #F6F7F8. The canvas for all content.
- **Level 1 (Cards/Surfaces):** #FFFFFF. These elements feature a subtle 1px border (#EDEFF1) to define their boundaries against the background. 
- **Interactions:** On hover (desktop) or press (mobile), cards do not lift; instead, the border color darkens slightly or the background shifts to a very faint gray.
- **Floating Action Buttons (FAB):** The 'Create' button is the only element that uses an ambient shadow (10% opacity, 8px blur) to signify it sits above the feed.

## Shapes
The shape language is **Rounded**, striking a balance between the friendliness of a social app and the precision of a news aggregator.

- **Cards:** Use a 12px radius (`rounded-lg`) to soften the feed.
- **Buttons:** Primary buttons use a 20px+ radius (semi-pill) to clearly distinguish them from content blocks.
- **Inputs:** Search bars and text fields use an 8px radius for a clean, modern look.
- **Media:** Images and video embeds within cards use a 4px radius to feel contained but maximize the viewable area.

## Components
- **Feed Cards:** The core component. Includes a top-row for community metadata, a bold headline, a content area (text or media), and a bottom-row for "Utility Actions" (Upvote, Comment, Share).
- **Vote Controller:** A vertical or horizontal stack featuring the 'Action Orange' upvote arrow and a neutral downvote arrow. The count between them turns 'Action Orange' when upvoted.
- **Primary FAB:** A prominent 'Create' button fixed to the bottom-right on mobile, using the primary #FF4500 color.
- **Chips/Badges:** Used for "Flairs." These use a light gray background with `label-sm` text to provide context without distracting from the title.
- **Input Fields:** Search bars should be subtle, using #EDEFF1 backgrounds and ghost-text placeholders to remain unobtrusive until focused.
- **Navigation:** A simple bottom tab bar on mobile for Home, Communities, Notifications, and Profile, using 24px icon sets.