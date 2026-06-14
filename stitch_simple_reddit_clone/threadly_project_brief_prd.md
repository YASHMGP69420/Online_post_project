# Threadly Project Brief & PRD

## Project Overview
Threadly is a minimalist social platform focused on visual storytelling and simplified content sharing. Inspired by high-density community platforms but stripped down to its core essence, Threadly prioritizes high-quality imagery and concise captions over complex metadata.

## Design Philosophy
- **Extreme Minimalism:** Removal of traditional social features (upvotes, comments, community tags) to focus entirely on the image and caption.
- **High Information Density:** Clean, single-column layouts that allow visual content to breathe.
- **Theme Versatility:** Native support for high-contrast Light and Dark modes to suit user preferences and environments.
- **Cross-Platform Cohesion:** A seamless transition between mobile and desktop experiences using the same simplified content hierarchy.

## Core Features
1. **Simplified Feed:**
   - Single-column stream of content.
   - Elements: Header ("Feed" or Brand Logo), Image, Caption.
   - Action: Persistent theme toggle for Light/Dark mode.
   
2. **Focused Creation:**
   - Distraction-free posting interface.
   - Input Fields: Image upload area and single text field for captions.
   - Action: "Post" button and theme toggle.

3. **Theme Management:**
   - Universal theme toggle located in the top navigation.
   - Instant switching between Threadly Light and Threadly Dark design systems.

## Design Systems
### Threadly (Light)
- **Primary Color:** #ff4500 (Action Orange)
- **Background:** #fcf8f9
- **Typography:** Inter
- **Aesthetic:** Clean, airy, and high-contrast.

### Threadly Dark
- **Primary Color:** #ff4500 (Action Orange)
- **Background:** #121416 (Deep Charcoal)
- **Typography:** Plus Jakarta Sans
- **Aesthetic:** Deep, immersive, and premium.

## Current Screen Inventory
### Mobile
- **Home Feed (Simplified):** {{DATA:SCREEN:SCREEN_15}}
- **Home Feed (Dark, Simplified):** {{DATA:SCREEN:SCREEN_11}}
- **Create Post (Simplified):** {{DATA:SCREEN:SCREEN_10}}
- **Create Post (Dark, Simplified):** {{DATA:SCREEN:SCREEN_13}}

### Desktop
- **Home Feed (Desktop):** {{DATA:SCREEN:SCREEN_16}}
- **Home Feed (Dark, Desktop):** {{DATA:SCREEN:SCREEN_9}}
- **Create Post (Desktop):** {{DATA:SCREEN:SCREEN_12}}
- **Create Post (Dark, Desktop):** {{DATA:SCREEN:SCREEN_5}}

## Future Roadmap
- **Image Editing:** In-app filters and cropping tools during the creation flow.
- **Contextual Discovery:** A minimal "Explore" tab that maintains the image-first layout.
- **Interactive Motion:** Smooth transitions between Feed and Create states.
