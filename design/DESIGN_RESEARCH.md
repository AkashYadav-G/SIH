# FARMORA — DESIGN RESEARCH

> Design research conducted before implementation.
> References were studied for **principles only** — no branding, layouts, or identity was copied.

---

## 1. Landing Page References

### 1.1 Awwwards / Godly / Land-book

**Category:** Premium landing page galleries

**What was studied:**
- Hero composition and visual weight distribution
- Typography scale and heading hierarchy
- Section pacing and vertical rhythm
- Scroll-triggered content reveals
- Negative space as a design tool
- CTA placement relative to content flow

**What Farmora can learn:**
- Use generous whitespace between landing page sections to create breathing room
- Make the hero section tell the story in one viewport: headline + sub-headline + visual + CTA
- Use a progressive disclosure pattern — reveal information as the user scrolls
- Every section should answer ONE question and then lead to the next

**What NOT to copy:**
- Abstract art-direction or visual identity from any specific site
- Experimental navigation patterns that reduce usability
- Overly artistic layouts that sacrifice clarity

**How it influenced Farmora:**
- The landing page follows a strict vertical narrative arc: Problem → Solution → Features → Proof → CTA
- Sections are paced with 80–120px vertical gaps on desktop for editorial breathing room
- The hero section is outcome-oriented — "Sell Smarter. Earn Better." communicates immediate value

---

### 1.2 Saaspo / Supahero / LandFree

**Category:** SaaS landing page showcases

**What was studied:**
- Feature section composition (icon + heading + description)
- "How It Works" step patterns
- Social proof and trust indicator placement
- Footer architecture
- Mobile navigation patterns

**What Farmora can learn:**
- Use numbered step flows for "How It Works" to reduce cognitive load
- Place trust indicators (verified badges, reliability scores) near CTAs
- Keep mobile navigation to ≤5 primary items with a bottom sheet or hamburger
- Footer should be comprehensive but not bloated — 3–4 columns maximum

**What NOT to copy:**
- Generic SaaS template aesthetics
- Cookie-cutter gradient hero backgrounds
- Illustration styles specific to other brands

**How it influenced Farmora:**
- "How It Works" uses a 5-step flow with clean iconography
- Trust section highlights buyer verification and payment reliability
- Footer organizes links into Platform, Company, and Legal groups

---

### 1.3 Hebbia Max / SEESAW

**Category:** AI-product and enterprise SaaS landing pages

**What was studied:**
- "Clean Enterprise" aesthetic — high-end minimalism with dense information
- Product-first hero sections showing actual UI
- Outcome-oriented copy rather than feature lists
- Single primary CTA focus

**What Farmora can learn:**
- Show product screenshots or UI mockups in the hero to communicate the product experience
- Write copy around outcomes: "Find the best opportunity" not "We aggregate market data"
- Maintain editorial calm — the design should feel confident, not loud

**What NOT to copy:**
- Enterprise AI positioning or visual language
- Dark-mode-first aesthetic (Farmora should default to warm light)
- Complex agent-workflow visualizations

**How it influenced Farmora:**
- The hero section includes a stylized product preview showing market intelligence data
- Copy focuses on the farmer's outcome: better selling decisions, higher net realization
- The overall tone is "premium market intelligence" not "generic agri-tech"

---

### 1.4 MotionSites AI / OriginKit

**Category:** Motion and interaction design references

**What was studied:**
- Scroll-triggered animation patterns
- Section entrance choreography
- Micro-interaction timing (hover, focus, active states)
- Loading transitions

**What Farmora can learn:**
- Use fade-up with slight Y-translate (20px) for section reveals
- Stagger child elements by 50–80ms for lists and card grids
- Keep all animations under 400ms for UI interactions, 600–800ms for section reveals
- Use spring easing for a natural, organic feel

**What NOT to copy:**
- Excessive parallax or distortion effects
- Heavy 3D scenes that impact performance
- Animation for animation's sake

**How it influenced Farmora:**
- All scroll-reveal animations use a consistent fade-up pattern
- Card hover states include subtle scale(1.02) + shadow elevation
- Number counters in the Impact section animate on viewport entry

---

## 2. Product UI References

### 2.1 Linear

**Category:** Project management tool (dashboard UI benchmark)

**What was studied:**
- Sidebar architecture: compact, hierarchical, customizable
- Information density — maximum value per pixel
- Table design with inline status indicators
- Navigation hierarchy with workspace/team/project nesting
- Dark/light mode implementation

**What Farmora can learn:**
- Use a compact sidebar with icon + label, collapsible to icon-only on desktop
- Table rows should show the 4–5 most important columns with right-aligned numerics
- Use subtle background color differentiation for sidebar sections
- Status indicators (price up/down, order status) use color-coded dots, not full-color rows

**What NOT to copy:**
- Linear's dark-mode-first identity
- Issue-tracking-specific interaction patterns
- Exact sidebar layout or spacing

**How it influenced Farmora:**
- Dashboard sidebar uses icon + label with a collapsible mode
- Tables show key metrics (price, quantity, net realization) with proper numeric alignment
- Status chips use a dot + label pattern: ● Active, ● Pending, ● Completed

---

### 2.2 Stripe

**Category:** Financial dashboard and payments interface

**What was studied:**
- "Numerals discipline" — monospaced, aligned financial figures
- State-only color: color conveys meaning, never decoration
- Summary → detail drill-down pattern
- Chart placement: summary charts at top, transaction tables below
- Filterable, sortable data tables

**What Farmora can learn:**
- Use tabular (monospaced) figures for all price and currency displays
- Reserve color exclusively for semantic meaning: green = growth/success, amber = opportunity, red = decline/error
- Dashboard hierarchy: Verdict Row → Key Metrics → Trend Chart → Data Table
- Side panels for detail views to maintain list context

**What NOT to copy:**
- Stripe's brand blue identity
- Payment-specific flows (checkout, invoicing)
- Exact dashboard composition

**How it influenced Farmora:**
- All currency values use tabular figures for perfect column alignment
- Color is semantic: green for price increase, red for decrease, amber for opportunity/CTA
- Farmer dashboard follows: Best Opportunity → Crop Prices → Price Trends → Buyer Offers
- Detail views use a slide-in panel rather than full page navigation

---

### 2.3 Mobbin

**Category:** Mobile design pattern library

**What was studied:**
- Mobile navigation patterns for data-heavy apps
- Card-based layouts for small screens
- Bottom navigation architecture
- Touch-friendly interaction targets

**What Farmora can learn:**
- Mobile farmer experience uses bottom navigation with 4–5 tabs
- Cards stack vertically on mobile with clear tap targets (min 44px)
- Key actions (Sell, Compare) are pinned to bottom of viewport
- Price information uses large, readable text (≥18px for primary metrics)

**What NOT to copy:**
- Specific app designs from Mobbin's collection
- Any branded UI patterns

**How it influenced Farmora:**
- Mobile bottom nav: Home, Markets, Sell, Buyers, Profile
- Mobile cards are full-width with 16px padding
- Primary metric text (prices) is 20px+ on mobile for readability

---

## 3. Component Library References

### 3.1 shadcn/ui (PRIMARY)

**What was studied:**
- Component API patterns: composable, accessible, copy-paste ownership
- Theming through CSS variables
- Tailwind CSS integration patterns
- Form component architecture

**How it influenced Farmora:**
- shadcn/ui is the primary component foundation
- All components are customized via CSS variables matching Farmora's design tokens
- Form components follow shadcn patterns for consistent accessibility

### 3.2 Aceternity UI / Magic UI / Motion-Primitives (SECONDARY)

**What was studied:**
- Landing page animated sections (hero effects, feature cards)
- Micro-interaction primitives (text reveals, staggered entries)
- Marketing-specific components (animated beams, grid patterns)

**How it influenced Farmora:**
- Landing page uses selective animated components for hero and feature sections
- Product UI (dashboard) does NOT use these libraries — it stays on shadcn/ui
- Animation primitives are used sparingly and only where they enhance understanding

---

## 4. Design Pattern Synthesis for Farmora

### Principle 1: Agricultural Intelligence, Not Agricultural Decoration
- The design communicates **data intelligence** and **market opportunity**
- Agriculture is the context, not the decoration
- No spinning tractors, no clipart wheat, no generic farm imagery

### Principle 2: Premium Fintech Meets Marketplace
- Financial data presentation follows fintech best practices (Stripe)
- Navigation and density follow modern SaaS standards (Linear)
- Marketplace elements (buyer cards, offers) follow e-commerce patterns

### Principle 3: Mobile-First for Farmers
- Primary farmer experience is designed for smartphone access
- Key decisions (Where to sell? Best price? Net realization?) are answerable in <3 taps
- Data visualization adapts gracefully to small screens

### Principle 4: Trust Through Transparency
- Prices show source and timestamp
- Net realization shows full cost breakdown
- Buyer reliability is data-backed, not decorative
- Demo data is clearly labeled

### Principle 5: Purposeful Motion
- Every animation serves information delivery
- Scroll reveals guide attention through the landing page narrative
- Dashboard animations are subtle: hover states, transitions, number counters
- Respect `prefers-reduced-motion` at all times
