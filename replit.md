# Human-Nature-Reality Movement Website

## Overview
A single-page responsive website for the Human-Nature-Reality Movement, exploring themes of consciousness, Natural Intelligence (NI), Artificial Intelligence (AI), and the Guru-Antiguru-Nonguru (GAN) philosophy.

## Project Structure
```
client/
├── src/
│   ├── components/
│   │   ├── navigation.tsx          # Fixed navigation bar
│   │   ├── sections/               # All page sections
│   │   │   ├── hero-section.tsx
│   │   │   ├── about-section.tsx
│   │   │   ├── core-principles-section.tsx
│   │   │   ├── gan-section.tsx
│   │   │   ├── niai-section.tsx
│   │   │   ├── urgency-mirror-section.tsx
│   │   │   ├── student-corner-section.tsx
│   │   │   ├── social-media-section.tsx
│   │   │   └── footer-section.tsx
│   │   └── ui/                     # Shadcn UI components
│   ├── pages/
│   │   └── home.tsx                # Main landing page
│   ├── App.tsx
│   └── index.css                   # Custom CSS with design system colors
├── tailwind.config.ts              # Custom animations and design tokens
└── index.html                      # SEO meta tags
```

## Design System
- **Colors**: Earth tones (forest green, terracotta) + cosmic tones (indigo, purple)
- **Typography**: Inter/DM Sans for headings, Libre Baskerville for quotes
- **Sections**: Hero with animated gradient, About, Core Principles (3-column), GAN, NI & AI comparison, Urgency Mirror (dark theme), Student Corner, Social Media, Footer

## Running the Project
```bash
npm run dev
```
The app runs on port 5000 with Express backend and Vite frontend.

## Key Features
- Fully responsive design
- Smooth scroll navigation
- Animated gradient backgrounds
- SEO optimized meta tags
- Accessible with proper ARIA labels and semantic HTML
- Social media integration

## Recent Changes
- December 2024: Initial build of single-page website with all 9 sections
