# Design System: Spaceion

**Project ID:** 6259349780440042194
**Source Screen:** Spaceion Swiss Style Homepage V2 (b91d076ecaa34f4fbfe2b0977496b8bf)

## 1. Visual Theme & Atmosphere

**"The Orbital Laboratory."**
The design feels clinical, precise, and expensive. It mimics the aesthetic of high-end architectural diagrams or Swiss print design. It is "unopinionated" in its decoration but "highly opinionated" in its structure.

- **Mood:** Hyper-competent, Transparent, Engineered.
- **Density:** Low. Massive application of whitespace to signal luxury.
- **Lighting:** Flat, stark lighting. No soft shadows; only hard lines and "glass" refractions.

## 2. Color Palette & Roles

- **Vacuum White** (#FFFFFF): The canvas. Used for all page backgrounds. Zero tint.
- **Ink Black** (#000000): The content. Used for all primary typography, borders, and icons. Maximum contrast.
- **Signal Green** (#13EC13): The life. Used _only_ for "active" states (e.g., system status lights) to prove the platform is alive.
- **Vapor Grey** (#F5F5F7): The subtle depth. Used for secondary cards or slight differentiation in sections.

## 3. Typography Rules

**Font Family:** `Space Grotesk` (or `Inter Tight` in implementation).
**Character:** Technical, Monospaced-feel, "Data-ready".

- **Display Headers (H1):** Massive scale (text-6xl+). Tracking: Tight (-2% to -4%). Leading: 1.0 (Solid).
  - _Role:_ Authority. The headline is the graphic.
- **Body Text:** High readability. Tracking: Normal.
  - _Role:_ Clarity.
- **Data/Numbers:** Monospace logic.
  - _Role:_ Technical proof.

## 4. Component Stylings

- **Buttons:**
  - **Primary:** Solid Ink Black background, White text. Sharp corners or extremely subtle rounding (`rounded-sm`).
  - **Secondary:** White background, Black border (1px).
- **Cards/Containers:**
  - **Style:** "Glass Slips" or "Hard Lines".
  - **Borders:** 1px solid Black dividers.
  - **Shadows:** None (Flat) OR Hard-edge offsets (Brutalist).
- **Forms/Inputs:**
  - **Style:** Understated. Bottom-border only or minimalist box.

## 5. Layout Principles

- **The Grid:** Strict 12-column modular grid. Content adheres to vertical lines.
- **Alignment:** Extreme Left-Alignment for lists/data. Center-Alignment for Hero statements.
- **Whitespace:** "Pause before you speak." Sections are separated by significant vertical rhthym (120px+).
