# Master Plan: Spaceion (Series A Redesign)

## Goal Description

Build a **Premium, Minimalistic SaaS Landing Page** for **Spaceion**, an $18M Series A funded AI infrastructure company.
The goal is to move their brand from "GitHub Repo" to "Enterprise Standard" using a **Tech-Minimalist** aesthetic.

**Target Audience:** Enterprise CTOs (Reliability) & Series B Investors (Scale).
**Key Value Proposition:** "The Universal Runtime for AI Agents."

## User Review Required

> [!IMPORTANT]
> **Brand Identity:** We are building for "Spaceion" (The Architects of AI Infrastructure).
> **Aesthetic:** **Neo-Minimalist Light Mode.** Stark White backgrounds, Deep Black text, "Swiss Style" precision.

## Design Philosophy & Aesthetic

Based on your references (Images 1-5), we are targeting:

1.  **Tech-Minimalism (The "Engineer's Luxury"):**
    - usage of `01/`, `02/` numbering (Image 1).
    - **Palette:** Pure White (#FFFFFF), Off-White (#F5F5F7) for sections, Deep Black (#000000) for type.
    - **Accent:** A very subtle "Electric Blue" or "International Orange" for primary actions only.

2.  **Corporate Confidence (The "Founder's Trust"):**
    - **High Contrast:** Black on White. Extremely legible.
    - **Swiss Layouts:** Grid-based, high whitespace, perfect alignment.

3.  **The Narrative Structure (The "Sales Pitch"):**
    - **Hero:** The Promise.
    - **Problem:** The Pain (High contrast section).
    - **Solution:** The System (Number list).
    - **Proof:** The Trust (Logos/Testimonials).
    - **Action:** The Close.

## Component Breakdown (The "Anatomy")

### 1. The "Zero-to-One" Hero (`hero-section.tsx`)

- **Concept:** Pure clarity. No distraction.
- **Typography:** Giant H1: "The Universal Runtime for AI Agents."
- **Sub-text:** "Deploy once. Run anywhere. Zero friction."
- **Visual:** Low-opacity "Space/Orbit" grid animation.
- **Action:** Single "Magnetic" CTA: "Start Building".

### 2. The "Trust Battery" (`trust-battery.tsx`)

- **Concept:** "Trusted by the best."
- **Design:** Logos of top-tier AI companies + "Backed by Sequoia" badge.

### 3. The "Pain Point" Problem Section (`problem-statement.tsx`)

- **Concept:** Agitate the "Cloud Sprawl".
- **Copy:** "Stop managing 14 different cloud credentials."
- **Design:** Contrast visual: Chaotic "Old Way" vs Clean "Spaceion Way".

### 4. The "System" Feature Engine (`feature-engine.tsx`)

- **Reference:** User provided Image (Split Layout).
- **Layout:** 50/50 Split Grid.
  - **Left Column:** Strict Vertical List (`01/`, `02/`, `03/`, `04/`).
    - _State:_ Active item text turns **Orange/Active Color** (as per ref).
  - **Right Column:** **Isometric SVG Engine**.
    - _Interaction:_ Hovering list item `01` triggers SVG `01` to animate (Draw-in/Spring-up).
    - _Tech:_ Framer Motion `layout` + SVG `pathLength` animations.
- **Aesthetic:** "Technical Schematic". Thin lines, dot-grid background.

### 5. The "Pricing" Authority (`pricing-section.tsx`)

- **Concept:** Simple options. No hidden fees.
- **Design:** Two/Three cards. "Starter" vs "Pro".
- **Premium Detail:** One card has a "glow" border or "Recommended" badge that pulses subtly.

### 6. The "Mega-Footer" (`footer.tsx`)

- **Concept:** The stamp of a real company. (Reference Image 5).
- **Design:** **Massive Brand Name** spanning the full width (e.g., "SPACEION" style).
- **Content:** Copyright, clean links, social icons.

## Tech Stack & execution

## Tech Stack & Execution (Updated)

- **Framework:** Next.js 16 (Canary/RC) if available, or latest 15+ (App Router).
- **Styling:** Tailwind CSS v4 (CSS-first configuration, no `tailwind.config.js`).
- **Motion:** Framer Motion (Spring physics ONLY).
- **Font:** `Geist Sans` (via `geist/font`).
- **Location:** `c:\Users\DELL\Desktop\projects\vibe-coding\spaceion-landing`

## Verification Plan

- **The "Squint Test":** If you squint, does the hierarchy still guide your eye?
- **The "Founder Test":** Would a non-tech founder understand what we do in 5 seconds?
- **Mobile Polish:** Does the list stack perfectly on mobile?
