# FARMORA — LANDING PAGE BLUEPRINT

> Complete structural blueprint for the Farmora landing page.
> Each section has a defined purpose, content, and design intent.

---

## Page Narrative Arc

The landing page tells one coherent story:

```
PROBLEM (Farmers lack market visibility)
    ↓
INFORMATION GAP (Fragmented data, weak bargaining)
    ↓
FARMORA (One intelligent platform)
    ↓
MARKET INTELLIGENCE (Real-time prices, trends)
    ↓
PRICE COMPARISON (Gross vs. net realization)
    ↓
NET REALIZATION (The actual earning, not just the price)
    ↓
BUYER CONNECTION (Verified, reliable buyers)
    ↓
LOGISTICS & STORAGE (Complete cost picture)
    ↓
BETTER SELLING DECISION (The promise)
```

---

## Section 01 — NAVIGATION

**Purpose:** Provide clear wayfinding and primary CTA access.

**Content:**
- Farmora wordmark/logo (left)
- Navigation links (center): Market Intelligence, How It Works, For Farmers, For FPOs, For Buyers
- Primary CTA (right): "Get Started" button (accent/primary color)

**Design:**
- Fixed top, 64px height
- White surface with subtle bottom border
- Backdrop blur on scroll for depth
- Transparent on hero, transitions to solid on scroll
- Mobile: Hamburger menu replacing center links

**Animation:**
- Background opacity transition on scroll (transparent → solid)
- Smooth underline on hover for nav links

---

## Section 02 — HERO

**Purpose:** Communicate the core value proposition immediately. The farmer should understand what Farmora does within 5 seconds.

**Content:**
- Primary headline: **"Sell Smarter. Earn Better."**
- Supporting text: "One intelligent platform connecting farmers with the right markets, buyers, logistics and storage — so every harvest can find its best opportunity."
- Primary CTA: "Explore Market Intelligence"
- Secondary CTA: "Get Started"
- Hero visual: Stylized product preview showing market intelligence data with price comparisons

**Design:**
- Full-viewport height on desktop (100vh minus nav)
- Centered layout with headline + CTAs on left, product visual on right
- Warm off-white background with subtle gradient accent
- Product preview shows: crop prices, trend charts, net realization comparison
- Typography: hero scale (72px desktop, 40px mobile)

**Animation:**
- Headline fades up (600ms delay)
- Supporting text fades up (800ms delay)
- CTAs fade up (1000ms delay)
- Product visual fades up with slight scale (1200ms delay)
- Subtle floating motion on product visual

---

## Section 03 — LIVE MARKET INTELLIGENCE

**Purpose:** Show the platform's core capability — real-time market data — as a tangible, interactive preview.

**Content:**
- Section heading: "Real-Time Market Intelligence"
- Subheading: "Current prices across Maharashtra's agricultural markets"
- 4 crop price cards showing demo data:
  - Onion: ₹2,480/q ↑ 8.4%
  - Soybean: ₹4,620/q ↑ 3.2%
  - Cotton: ₹7,240/q ↓ 1.6%
  - Grapes: ₹5,850/q ↑ 6.7%
- Mini price trend chart per crop
- "View All Markets →" link

**Design:**
- Light background section
- 4-column grid on desktop, 2-column on tablet, 1-column scrollable on mobile
- Each card: crop name, current price (large, tabular figures), % change (colored badge), sparkline
- Cards have subtle border and hover elevation

**Animation:**
- Cards stagger in from bottom (60ms delay per card)
- Number values animate (counter effect) on viewport entry
- Sparklines draw in from left to right

**Data label:** "Illustrative Data" badge in section corner

---

## Section 04 — THE PROBLEM

**Purpose:** Create empathy. Show the farmer's current challenge so the solution feels necessary.

**Content:**
- Section heading: "The Challenge Farmers Face"
- 6 problem cards (icon + title + short description):
  1. 🔍 Price Blindness — "Limited visibility into prices across different markets"
  2. 📊 Fragmented Information — "Market data, buyer info, and costs scattered across sources"
  3. ⚖️ Weak Bargaining Power — "Selling immediately after harvest due to lack of options"
  4. 🚛 Hidden Costs — "Transport and storage costs eat into actual earnings"
  5. 📦 Storage Constraints — "No easy access to affordable, nearby cold storage"
  6. ❓ Buyer Uncertainty — "No way to verify buyer reliability or payment history"

**Design:**
- Off-white background for visual separation
- 3-column grid on desktop, 2 on tablet, 1 on mobile
- Cards use Lucide icons (not emojis — emojis above are for this document only)
- Each card: icon (in brand-colored circle) + heading + 1-line description
- Clean, minimalist presentation — no heavy graphics

**Animation:**
- Cards fade up with stagger on scroll entry

---

## Section 05 — THE FARMORA SOLUTION

**Purpose:** Position Farmora as the single platform that resolves all the problems shown above.

**Content:**
- Section heading: "One Platform. Complete Market Intelligence."
- Subheading: "Farmora brings fragmented information into one place"
- Ecosystem visualization showing:
  - Farmer (center) connected to:
    - Markets (mandi prices, trends)
    - Buyers (offers, reliability)
    - Logistics (transport, routes)
    - Storage (facilities, costs)
  - All flowing through Farmora to produce → "Best Opportunity"

**Design:**
- White background
- Central diagram/illustration showing the Farmora ecosystem
- Clean, schematic visual — not a complex illustration
- Could use SVG with connecting lines or a clean hub-spoke layout

**Animation:**
- Central node appears first, then spokes animate outward
- Connection lines draw in sequentially
- Labels fade in after lines are drawn

---

## Section 06 — HOW IT WORKS

**Purpose:** Show the user journey in 5 simple steps. Reduce perceived complexity.

**Content:**
- Section heading: "How Farmora Works"
- 5 steps with numbered indicators:
  1. **Add Your Produce** — "Enter your crop, quantity, and location"
  2. **Compare Markets & Buyers** — "See prices across mandis, processors, and buyers"
  3. **Calculate Net Realization** — "Factor in transport, storage, and handling costs"
  4. **Choose the Best Opportunity** — "Make an informed decision based on actual earnings"
  5. **Connect & Transact** — "Deal directly with verified buyers"

**Design:**
- Warm off-white background
- Horizontal step flow on desktop (numbered circles connected by lines)
- Vertical step flow on mobile (numbered list with icons)
- Each step: number badge + Lucide icon + heading + 1-line description
- Active/highlighted step shows a product screenshot preview

**Animation:**
- Steps reveal sequentially as user scrolls
- Connecting lines draw between steps
- Icons animate in with subtle bounce

---

## Section 07 — SMART PRICE DISCOVERY

**Purpose:** Showcase the core product differentiator — net realization comparison.

**Content:**
- Section heading: "Don't Just Find a Price. Find the Best Opportunity."
- Interactive demo showing:
  - Input panel: Crop (Onion), Quantity (10 tonnes), Location (Nashik)
  - Results comparison:
    - Local Mandi: ₹2,200/q → Net: ₹2.20L
    - Mumbai Buyer: ₹2,750/q → Transport ₹8K, Handling ₹3K → Net: ₹2.53L
    - Pune Processor: ₹2,600/q → Transport ₹5K → Net: ₹2.43L
  - **Best Opportunity highlighted:** Mumbai Buyer → +₹33,000 vs Local Mandi

**Design:**
- White background
- Split layout: input form on left, comparison results on right
- Results use a ranked list with the best option highlighted (accent color border)
- Net realization values use large metric typography
- Improvement value ("+₹33,000") displayed prominently in accent color

**Animation:**
- Input appears, then results "calculate" with a brief loading state
- Results cards slide in from right with stagger
- Best opportunity card pulses subtly with accent glow

**Data label:** "Illustrative Data"

---

## Section 08 — MAHARASHTRA MARKET MAP

**Purpose:** Visualize the geographic scope and density of market coverage.

**Content:**
- Section heading: "Markets Across Maharashtra"
- Stylized map of Maharashtra (SVG — not Mapbox at this stage)
- Market pins showing major mandis with price indicators
- Sidebar or overlay with market summary on hover/click

**Design:**
- Light background
- SVG-based Maharashtra outline with stylized market points
- Market points sized by activity/volume
- Clean, cartographic aesthetic — not a full interactive map yet

**Animation:**
- Map draws in on scroll
- Market points pulse in with stagger
- Hover reveals market detail tooltip

**Note:** Full Mapbox integration deferred to later phase. Landing page uses a stylized SVG representation.

---

## Section 09 — BUYER MARKETPLACE

**Purpose:** Show that Farmora connects farmers with real, verifiable buyers.

**Content:**
- Section heading: "Discover Verified Buyers"
- 3 example buyer cards:
  - ABC Foods — 50T Grade-A Onion — ₹2,720/q — Payment: 7 days — Trust: 94/100
  - Maharashtra Agri Corp — 30T Soybean — ₹4,750/q — Payment: 5 days — Trust: 88/100
  - Fresh Valley Exports — 20T Grapes — ₹6,200/q — Payment: 10 days — Trust: 91/100
- "Browse All Buyers →" CTA

**Design:**
- Off-white background
- 3-column card grid
- Each buyer card: name + verified badge + crop requirement + offer price + payment terms + trust score bar
- Trust score uses a segmented progress bar (color-coded)

**Animation:**
- Cards fade up with stagger
- Trust score bars animate from 0 to value

**Data label:** "Demo Verified — Prototype Data"

---

## Section 10 — FPO ECOSYSTEM

**Purpose:** Show how FPOs benefit from aggregation and bulk selling.

**Content:**
- Section heading: "Stronger Together — FPO Aggregation"
- Visual flow: Multiple Farmers → FPO → Bulk Volume → Better Opportunities
- Key benefits: Higher volumes, better negotiation power, buyer discovery, revenue analytics

**Design:**
- White background
- Flow diagram showing aggregation journey
- 4 benefit cards in a row

**Animation:**
- Flow diagram animates sequentially
- Benefit cards stagger in

---

## Section 11 — LOGISTICS + STORAGE

**Purpose:** Complete the cost picture — show that Farmora considers transport and storage.

**Content:**
- Section heading: "Complete Cost Picture"
- Subheading: "Higher price doesn't always mean higher profit"
- Split view: Transport panel + Storage panel
- Transport: vehicle capacity, distance, estimated cost
- Storage: cold storage, warehouse, cost per day, availability

**Design:**
- Off-white background
- Two-panel layout on desktop, stacked on mobile
- Clean data presentation with Lucide icons

**Animation:**
- Panels slide in from left and right

---

## Section 12 — TRUST

**Purpose:** Establish credibility with transparency indicators.

**Content:**
- Section heading: "Built on Transparency"
- Trust indicators:
  - Verified Buyers
  - Payment Reliability
  - Order Completion Rate
  - Transaction History
  - Trust Score System
- Brief explanation of how trust is built

**Design:**
- White background
- Icon + metric + description layout
- Clean, professional presentation

**Animation:**
- Metrics count up on viewport entry

---

## Section 13 — IMPACT

**Purpose:** Show meaningful outcomes (prototype metrics, clearly labeled).

**Content:**
- Section heading: "Platform Impact"
- 4–5 key metrics:
  - 200+ Markets Connected (Illustrative)
  - 500+ Buyers Discovered (Illustrative)
  - 150+ FPOs Supported (Illustrative)
  - 10,000+ Opportunities Analyzed (Illustrative)
- Clear "Prototype Data" label

**Design:**
- Brand primary background (dark green) with white text — creating visual contrast
- Large metric numbers (Manrope, 48px+) with labels below
- 4-column layout on desktop

**Animation:**
- Number counters animate from 0 to value on scroll entry
- Stagger: 100ms per metric

---

## Section 14 — FINAL CTA

**Purpose:** Close the loop. Convert interest into action.

**Content:**
- Headline: "Your harvest deserves its best market."
- Supporting text: "Compare. Decide. Connect. Sell better."
- Primary CTA: "Get Started"
- Secondary CTA: "Explore Market Intelligence"

**Design:**
- Warm off-white background with centered layout
- Large, confident typography
- Generous whitespace above and below
- CTA buttons side-by-side

**Animation:**
- Content fades up on scroll

---

## Section 15 — FOOTER

**Purpose:** Comprehensive navigation and legal information.

**Content:**
- Farmora wordmark + brief description
- Platform: Market Intelligence, Buyers, FPOs, Logistics, Storage
- Company: About, Contact
- Legal: Privacy, Terms
- Social links (placeholder)
- © 2026 Farmora. All rights reserved.

**Design:**
- Dark background (near-black warm) with light text
- 4-column layout on desktop, stacked on mobile
- Subtle top border

**Animation:**
- None — footer is static

---

## Responsive Summary

| Section           | Desktop Layout          | Mobile Layout            |
|-------------------|-------------------------|--------------------------|
| Navigation        | Logo + links + CTA      | Logo + hamburger + CTA   |
| Hero              | 2-column (text + visual)| Stacked (text above)     |
| Market Intel      | 4-column cards          | Horizontal scroll        |
| Problem           | 3-column cards          | 1-column stacked         |
| Solution          | Hub-spoke diagram       | Vertical list            |
| How It Works      | 5-step horizontal       | 5-step vertical          |
| Price Discovery   | 2-column split          | Stacked                  |
| Market Map        | Full-width map          | Scaled map               |
| Buyer Marketplace | 3-column cards          | 1-column stacked         |
| FPO Ecosystem     | Flow diagram + cards    | Simplified vertical flow |
| Logistics/Storage | 2-panel side by side    | Stacked panels           |
| Trust             | Multi-column metrics    | 2-column grid            |
| Impact            | 4-column metrics        | 2-column grid            |
| Final CTA         | Centered                | Centered                 |
| Footer            | 4-column                | Stacked                  |
