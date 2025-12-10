# Design Guidelines: Human-Nature-Reality Movement Website

## Design Approach
**Philosophical Minimalism with Cosmic Natural Aesthetics**
- Drawing inspiration from spiritual/mindfulness sites like Headspace and Calm, combined with modern tech minimalism
- Balance between impactful urgency messaging and calming natural wisdom
- Single-page scroll experience with distinct thematic zones

## Color Palette
**Earth & Cosmic Tones:**
- Primary: Deep forest green (#1a4d2e), warm terracotta (#c1666b)
- Cosmic accents: Deep indigo (#2d3561), soft purple (#8b7fc7)
- Neutrals: Warm off-white (#faf8f3), charcoal (#2b2b2b)
- Urgent section: Near-black background (#1a1a1a) with amber highlights (#ffa726)

## Typography
**Font System:**
- Headings: Inter or DM Sans (geometric, modern, 600-700 weight)
- Body: Source Sans Pro or Open Sans (400-600 weight)
- Philosophical quotes: Georgia or Crimson Text (serif, 400 italic)

**Hierarchy:**
- Hero title: 3.5-4rem desktop, 2.25rem mobile, bold
- Section headings: 2.5-3rem desktop, 1.75rem mobile
- Subsection titles: 1.5-2rem
- Body text: 1.125rem with generous line-height (1.7-1.8)

## Layout System
**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: py-20 to py-32 desktop, py-12 to py-16 mobile
- Content max-width: 1280px (max-w-7xl)
- Text content: max-w-4xl for readability
- Consistent 8-unit grid system

## Section-Specific Design

### 1. Hero Section
**Full viewport height (min-h-screen)**
- Background: Subtle animated gradient (earth green → cosmic indigo, 12-second cycle)
- Overlay: Semi-transparent layer for text contrast
- Central alignment with generous spacing
- Title with subtle glow/shadow effect
- Subtitle in lighter weight, 1.25rem
- Invocation line in italic serif, smaller size
- Two CTA buttons: Primary (solid earth green) + Secondary (outline cosmic purple)
- Buttons with backdrop blur when over gradient
- Smooth scroll indicator at bottom

**Hero Image:** No large hero image - use gradient background with optional subtle geometric pattern overlay

### 2. About the Movement
**Light background (#faf8f3)**
- Two-column layout desktop (text + visual metaphor)
- Single column mobile
- Large opening quote in serif italic
- Three sub-sections with icon headers
- Generous whitespace between concepts

### 3. Core Principles (Three Columns)
**Card-based layout**
- Three equal-width cards desktop, stack mobile
- Each card: icon/symbol at top, title, description
- Subtle hover elevation effect
- Background: white cards on earth-tone section background
- Icons in brand colors (green, terracotta, indigo)

### 4. GAN Section (Guru-Antiguru-Nonguru)
**Creative triangular concept visualization**
- Three-part horizontal layout with connecting lines
- Each part: Symbol/icon, title, philosophical explanation
- Visual flow showing the relationship/cycle
- Cosmic purple background with subtle patterns
- White text for contrast
- Central connecting element emphasizing "play of consciousness"

### 5. NI and AI Relationship
**Split-screen comparison**
- 50/50 split desktop, stack mobile
- Left (NI): Organic imagery, warm earth tones, flowing shapes
- Right (AI): Geometric patterns, cool cosmic tones, structured grid
- Mirror/reflection visual metaphor in center divide
- Each side: Icon, title, 3-4 bullet points, concluding insight

### 6. Urgency Mirror Section
**High-impact dark theme**
- Near-black background (#1a1a1a)
- Amber/orange accent color (#ffa726) for urgency
- Large impactful statistics or statements
- Grid of concern areas (6 cards: 3 columns desktop, 2 tablet, 1 mobile)
- Each card: Icon, title, brief urgent statement
- Closing call-to-action: "Return to Nature, Intelligence, Reality"

### 7. Student Corner/Resources
**Light, accessible layout**
- Four-quadrant grid (2x2 desktop, stack mobile)
- YouTube videos: Embedded preview or linked cards
- GitHub: Repository card with star/fork info
- AI Learning: Roadmap visualization or tiered pathway
- Meditation practices: Calm card design with gentle imagery
- Each resource card with icon, title, description, CTA link

### 8. Social Media Integration
**Floating bar or footer section**
- Icon-based links with brand color on hover
- Evenly spaced, responsive sizing
- Include: YouTube, GitHub, Facebook, Instagram, TikTok, WhatsApp, Telegram, Email
- Consistent icon style (line icons, not filled)

### 9. Footer
**Minimal, centered design**
- Copyright centered
- Domain name prominent
- "Made with Open Source Tools" with heart icon
- GitHub source link
- Earth tone background (#1a4d2e dark) with light text

## Component Patterns

**Buttons:**
- Primary: Solid earth green, white text, rounded-lg, px-8 py-3
- Secondary: Outline cosmic purple, purple text, rounded-lg, px-8 py-3
- Ghost: Text only with underline on hover
- All buttons: backdrop-blur-sm when over images/gradients

**Cards:**
- Rounded-xl borders
- Subtle shadow on hover (elevation change)
- 16-24px padding
- White or semi-transparent backgrounds

**Icons:**
- Consistent size within sections (24px standard, 32px for features)
- Line-style icons preferred (Heroicons or Feather Icons)
- Brand colors for emphasis

## Visual Enhancements
- Smooth scroll behavior throughout
- Subtle fade-in animations on scroll (sections appear as user scrolls)
- Gradient backgrounds with slow animation (where specified)
- Minimal use of animation - focus on content
- Responsive images with proper aspect ratios

## Accessibility
- WCAG AA contrast ratios maintained
- Focus states for all interactive elements
- Semantic HTML structure
- Alt text for all images and icons

## Images
**Background/Atmospheric:**
- Hero: Gradient-based (no large image needed)
- NI section: Organic nature photography or abstract flowing forms
- AI section: Geometric patterns or circuit-board aesthetics
- Overall: Minimal image use, focus on typography and color

This design balances philosophical depth with modern web aesthetics, creating an urgent yet calming experience that reflects the movement's core principles.