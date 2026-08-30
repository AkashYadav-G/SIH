# FARMORA
# DESIGN, UI/UX & FRONTEND FOUNDATION PRD
## Version 1.0 — Hackathon Edition

============================================================
01. PRODUCT IDENTITY
============================================================

Product Name:
Farmora

Product Category:
Agricultural Market Intelligence & Market Linkage Platform

Hackathon Problem Statement:
"Strengthening market linkages and price discovery for farmers"

Organization:
Government of Maharashtra
Software / Agriculture, FoodTech & Rural Development

Core Product Statement:

"Don't just find a price. Find the best opportunity."

Primary Tagline:

"Sell Smarter. Earn Better."

Alternative supporting statement:

"Farmora connects farmers and FPOs with markets, buyers, logistics
and storage to help them make better selling decisions."


============================================================
02. PRODUCT VISION
============================================================

Farmora is a digital platform designed to reduce information
asymmetry between farmers and agricultural markets.

The platform brings fragmented information into one place:

- Mandi prices
- Market trends
- Buyer demand
- Buyer offers
- Quality requirements
- Market arrivals
- Logistics
- Storage
- Buyer reliability
- Payment information
- Estimated net realization

Farmora should help answer:

WHERE should I sell?

WHO should I sell to?

WHAT price can I get?

WHAT will it cost me?

WHAT will I actually earn?

IS THE BUYER RELIABLE?

CAN I STORE MY PRODUCE?

HOW CAN I TRANSPORT IT?


============================================================
03. PROBLEM STATEMENT
============================================================

Many farmers, especially smallholders and producer groups, have
limited visibility into current and expected prices across:

- Nearby mandis
- Processors
- Institutional buyers
- Private buyers
- Digital trading channels

Information about:

- Quality requirements
- Demand
- Logistics
- Storage
- Payment reliability
- Buyer credentials

is often fragmented.

Farmers may therefore sell immediately after harvest because of:

- Liquidity requirements
- Lack of storage
- Lack of information
- Weak bargaining power
- Lack of access to buyers

Buyers also face problems:

- Difficulty aggregating consistent volumes
- Difficulty discovering producers/FPOs
- Difficulty verifying quality
- Difficulty finding reliable supply


============================================================
04. PRODUCT OBJECTIVE
============================================================

Farmora should improve:

1. Price transparency
2. Market discovery
3. Buyer discovery
4. Farmer bargaining power
5. FPO aggregation
6. Buyer sourcing
7. Logistics coordination
8. Storage discovery
9. Transaction efficiency
10. Farmer price realization
11. Reduction of post-harvest losses


============================================================
05. PRIMARY USERS
============================================================

USER TYPE 01 — FARMER

Primary needs:

- View current prices
- Compare markets
- Find buyers
- Calculate net realization
- Find transport
- Find storage
- Sell produce
- Track transactions


USER TYPE 02 — FPO

Primary needs:

- Aggregate farmer produce
- Discover buyers
- Compare offers
- Sell larger volumes
- Manage members
- Track transactions
- Analyze revenue


USER TYPE 03 — BUYER

Primary needs:

- Discover farmers/FPOs
- Post requirements
- Specify quality
- Specify quantity
- Make offers
- Manage orders
- Track suppliers


USER TYPE 04 — LOGISTICS PROVIDER

Primary needs:

- List vehicles
- Show availability
- Provide transport quotes
- Manage routes
- Track deliveries


============================================================
06. DESIGN OBJECTIVE
============================================================

Farmora must NOT look like:

- A government portal
- A traditional agriculture website
- A generic SaaS template
- A generic AI website
- A student hackathon project

Farmora should look like:

PREMIUM FINTECH
+
MARKET INTELLIGENCE
+
MODERN MARKETPLACE
+
AGRICULTURAL TECHNOLOGY


============================================================
07. BRAND PERSONALITY
============================================================

Farmora should feel:

- Intelligent
- Trustworthy
- Premium
- Human
- Transparent
- Modern
- Data-driven
- Accessible
- Reliable
- Practical

The design should communicate:

"Farmora helps me make a better selling decision."


============================================================
08. DESIGN RESEARCH ECOSYSTEM
============================================================

The following resources should be used for RESEARCH and INSPIRATION.

They must NOT be copied.

------------------------------------------------------------
08.1 LANDING PAGE REFERENCES
------------------------------------------------------------

Use:

- Awwwards
- Godly
- Land-book
- Saaspo
- Supahero
- MotionSites AI
- Hebbia Max / SEESAW
- LandFree
- OriginKit

Study:

- Hero composition
- Typography
- Layout
- Visual hierarchy
- Scroll storytelling
- Section transitions
- CTA placement
- Navigation
- Product storytelling
- Premium visual language


------------------------------------------------------------
08.2 PRODUCT UI REFERENCES
------------------------------------------------------------

Use:

- Linear
- Stripe
- Mobbin
- Kexsio Components

Study:

- Dashboard architecture
- Navigation
- Sidebar
- Tables
- Cards
- Forms
- Filters
- Search
- Data density
- Information hierarchy
- Mobile UX


------------------------------------------------------------
08.3 COMPONENT REFERENCES
------------------------------------------------------------

PRIMARY:

shadcn/ui

SECONDARY:

- Aceternity UI
- Magic UI
- Motion-Primitives
- Kexsio Components

IMPORTANT:

shadcn/ui must remain the primary component foundation.

Secondary libraries should only be used where they provide a
specific visual or interaction advantage.

Do NOT mix component libraries randomly.


------------------------------------------------------------
08.4 ICONS
------------------------------------------------------------

PRIMARY:

Lucide

Use Lucide for standard product UI icons.

Rules:

- One consistent icon family
- Consistent stroke weight
- Consistent sizing
- Consistent alignment
- Semantic usage

Never use emojis as primary interface icons.


------------------------------------------------------------
08.5 3D ICONS / VISUAL ASSETS
------------------------------------------------------------

Potential resources:

- 3dicons
- Things 3D Icons
- Artify 3D Lettering
- Explore 3dicons

Use selectively for:

- Hero
- Feature illustrations
- Onboarding
- Empty states
- Marketing sections

Do NOT use 3D icons throughout the dashboard.


------------------------------------------------------------
08.6 ANIMATION
------------------------------------------------------------

PRIMARY:

Motion for React

SECONDARY:

- Anime.js
- GSAP
- Motion-Primitives

Use Motion for:

- Hover
- Scroll reveal
- Page transitions
- Card interactions
- Layout animation
- Micro-interactions
- Number counters

Use GSAP or Anime.js only when a specific complex animation
requires them.

Do NOT use multiple animation frameworks unnecessarily.

All animations must:

- Be smooth
- Be purposeful
- Be performant
- Not distract from content
- Respect prefers-reduced-motion


------------------------------------------------------------
08.7 AI UI
------------------------------------------------------------

Resource:

prompt-kit

Use only if Farmora requires AI-specific interfaces.

Potential AI use cases:

- Market recommendation
- Buyer matching
- Price explanation
- Natural-language market queries
- Decision support

IMPORTANT:

Farmora is NOT an AI chatbot product.

AI is an intelligence layer supporting the market platform.


------------------------------------------------------------
08.8 MAPS
------------------------------------------------------------

Use:

Mapbox

Potential use cases:

- Maharashtra market map
- Market locations
- Buyer locations
- Storage facilities
- Logistics routes


------------------------------------------------------------
08.9 DATA VISUALIZATION
------------------------------------------------------------

Use:

Recharts

For:

- Price history
- Price comparison
- Demand
- Market arrivals
- Revenue
- Buyer activity
- Trends
- Forecasts


------------------------------------------------------------
08.10 PHOTOGRAPHY
------------------------------------------------------------

Potential sources:

- Unsplash
- Pexels

Use agricultural photography selectively.

Do NOT fill the website with random stock photos.


============================================================
09. TECHNOLOGY FOUNDATION
============================================================

Frontend:

Next.js

Language:

TypeScript

Styling:

Tailwind CSS

UI:

shadcn/ui

Icons:

Lucide

Animation:

Motion for React

Charts:

Recharts

Maps:

Mapbox

Backend:

Supabase

Database:

PostgreSQL via Supabase

Authentication:

Supabase Auth

Storage:

Supabase Storage

AI:

LLM API through secure server-side architecture

IMPORTANT:

Never expose API keys in frontend code.


============================================================
10. DEPENDENCY STRATEGY
============================================================

DO NOT install every library immediately.

Initial dependencies:

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide
- Motion
- Recharts

Add later only when required:

Mapbox
GSAP
Anime.js
3D libraries
prompt-kit


============================================================
11. DESIGN SYSTEM
============================================================

Create:

/design/DESIGN_SYSTEM.md

This file must become the single source of truth for:

- Colors
- Typography
- Spacing
- Radius
- Shadows
- Buttons
- Inputs
- Cards
- Tables
- Navigation
- Sidebar
- Badges
- Charts
- Icons
- Animations
- Responsive rules


============================================================
12. COLOR SYSTEM
============================================================

Brand direction:

Primary:
Deep Forest Green

Secondary:
Soft Sage

Accent:
Warm Agricultural Amber / Gold

Background:
Warm Off-White

Surface:
White

Primary Text:
Near Black

Secondary Text:
Neutral Gray

Semantic:

Success
Warning
Error
Info

IMPORTANT:

Do NOT make the entire website green.

Use neutral colors as the primary interface foundation.

Green should represent the brand and agriculture.

Amber can represent opportunity, value and important actions.

Avoid excessive gradients.


============================================================
13. TYPOGRAPHY
============================================================

Primary font:

Manrope

Use for:

- Hero
- Headings
- Large numbers
- Major metrics

Secondary font:

Inter

Use for:

- Body
- Tables
- Forms
- Labels
- Dashboard information

Suggested desktop hierarchy:

H1:
64–80px

H2:
48–60px

H3:
28–36px

Body:
16–18px

Small:
13–14px

Use responsive typography on smaller devices.


============================================================
14. SPACING
============================================================

Use a consistent spacing system.

Landing page:

Generous whitespace.

Dashboard:

More compact information density.

Avoid:

- Random padding
- Random margins
- Inconsistent spacing
- Crowded layouts


============================================================
15. BORDER RADIUS
============================================================

Use a consistent radius system.

Small:

6–8px

Medium:

10–12px

Large:

16–20px

Feature / Hero:

Up to 24px when appropriate.

Do NOT make every element excessively rounded.


============================================================
16. SHADOWS
============================================================

Use:

- Subtle borders
- Minimal shadows
- Layered surfaces

Avoid:

- Heavy shadows
- Neon glows
- Excessive glassmorphism
- Excessive floating effects


============================================================
17. BUTTON SYSTEM
============================================================

Primary button:

Strong brand color.

Secondary:

Outlined / neutral.

Every button must support:

- Default
- Hover
- Active
- Focus
- Disabled
- Loading where necessary

Primary CTA must have strong visual hierarchy.


============================================================
18. CARD SYSTEM
============================================================

Cards should be:

- Clean
- Structured
- Slightly rounded
- Subtle border
- Minimal shadow
- Strong hierarchy

IMPORTANT:

Not everything should be a card.

Use flat sections when appropriate.


============================================================
19. ICON SYSTEM
============================================================

Default:

Lucide.

Example mapping:

Market:
TrendingUp

Price:
IndianRupee

Crop:
Wheat

Buyer:
Building2

FPO:
Users

Transport:
Truck

Storage:
Warehouse

Location:
MapPin

Analytics:
ChartNoAxesCombined

Search:
Search

Notification:
Bell

Settings:
Settings

Profile:
User


============================================================
20. DATA VISUALIZATION SYSTEM
============================================================

Farmora is a data-driven product.

Important visualizations:

- Price history
- Price comparison
- Demand trends
- Market arrivals
- Buyer activity
- Revenue
- Net realization
- Forecast

Charts must be:

- Clear
- Responsive
- Accessible
- Interactive where useful
- Properly labeled

Never add charts merely for decoration.


============================================================
21. CORE PRODUCT DIFFERENTIATOR
============================================================

Farmora must distinguish:

HEADLINE PRICE

from

REALIZED / NET VALUE.

Example:

LOCAL MANDI

Gross:
₹2,200/q

Alternative Buyer:

Gross:
₹2,800/q

But after:

Transport
Storage
Handling
Other costs

the actual comparison could become:

Local Mandi:
₹2.20L net

Alternative Buyer:
₹2.56L net

Potential improvement:
+₹36,000

The platform must emphasize:

"BEST NET REALIZATION"

rather than simply:

"HIGHEST PRICE"


============================================================
22. LANDING PAGE
============================================================

The landing page must tell one coherent story:

PROBLEM
↓
INFORMATION GAP
↓
FARMORA
↓
MARKET INTELLIGENCE
↓
PRICE COMPARISON
↓
NET REALIZATION
↓
BUYER CONNECTION
↓
LOGISTICS
↓
BETTER SELLING DECISION


============================================================
23. LANDING PAGE STRUCTURE
============================================================

SECTION 01 — NAVIGATION

Include:

Farmora logo
Market Intelligence
How It Works
For Farmers
For FPOs
For Buyers
About

CTA:

Get Started

Navigation should be minimal and premium.


------------------------------------------------------------

SECTION 02 — HERO

Primary headline:

"Sell Smarter. Earn Better."

Supporting text:

"One intelligent platform connecting farmers with the right
markets, buyers, logistics and storage — so every harvest can
find its best opportunity."

Primary CTA:

"Explore Market Intelligence"

Secondary CTA:

"Get Started"

Hero visual should represent:

Farmer
↓
Markets
↓
Buyers
↓
Logistics
↓
Best Opportunity

Possible visual technologies:

- SVG
- Motion
- Interactive data visualization
- Subtle 3D

Do NOT use a generic spinning tractor.


------------------------------------------------------------

SECTION 03 — LIVE MARKET INTELLIGENCE

Show realistic demo data.

Example:

ONION
₹2,480/q
↑ 8.4%

SOYBEAN
₹4,620/q
↑ 3.2%

COTTON
₹7,240/q
↓ 1.6%

GRAPES
₹5,850/q
↑ 6.7%

Include:

Price chart
Market comparison
Demand indicator


------------------------------------------------------------

SECTION 04 — THE PROBLEM

Explain:

- Price blindness
- Fragmented market information
- Weak bargaining power
- Hidden logistics costs
- Storage constraints
- Buyer uncertainty

Use visual storytelling.

Avoid huge blocks of text.


------------------------------------------------------------

SECTION 05 — THE FARMORA SOLUTION

Show the ecosystem:

Farmer
→ Farmora
→ Markets
→ Buyers
→ Logistics
→ Storage

Explain that Farmora brings these fragmented services together.


------------------------------------------------------------

SECTION 06 — HOW IT WORKS

Step 1:

Add your produce

Step 2:

Compare markets and buyers

Step 3:

Calculate net realization

Step 4:

Choose the best opportunity

Step 5:

Connect and transact


------------------------------------------------------------

SECTION 07 — SMART PRICE DISCOVERY

This should be one of the strongest sections.

Input:

Crop
Quantity
Quality
Location
Harvest date

Farmora compares:

- Mandis
- Buyers
- Processors
- Institutional buyers
- Digital channels

Then calculates:

Gross price
Transport
Storage
Handling
Other costs
Net realization

Show:

BEST OPPORTUNITY


Example:

Mumbai Buyer

₹2,750/q

Estimated Net:

₹2.53L

Potential improvement:

+₹33,000 vs Local Mandi


------------------------------------------------------------

SECTION 08 — MAHARASHTRA MARKET MAP

Interactive Maharashtra map.

Show:

- Markets
- Current prices
- Demand
- Buyer density
- Transport routes
- Storage

Clicking a market reveals:

Market name
Crop
Price
Demand
Arrivals
Active buyers
Transport


------------------------------------------------------------

SECTION 09 — BUYER MARKETPLACE

Buyer cards should display:

Buyer name
Verification
Required crop
Quantity
Quality
Offer price
Location
Payment terms
Reliability
Trust score

Example:

ABC Foods

Verified Buyer

50T Grade-A Onion

Offer:
₹2,720/q

Payment:
7 days

Trust:
94/100


------------------------------------------------------------

SECTION 10 — FPO ECOSYSTEM

Explain:

Multiple farmers
↓
FPO aggregation
↓
Bulk volume
↓
Better buyer opportunities

Show:

- Aggregation
- Bulk selling
- Buyer discovery
- Offer comparison
- Revenue analytics


------------------------------------------------------------

SECTION 11 — LOGISTICS + STORAGE

Show:

Transport

- Vehicle capacity
- Distance
- Cost
- Availability

Storage

- Capacity
- Distance
- Cost
- Availability
- Storage type

Important message:

"Higher price does not always mean higher profit."

Farmora helps calculate the actual outcome.


------------------------------------------------------------

SECTION 12 — TRUST

Show:

- Verified buyers
- Payment reliability
- Order completion
- Transaction history
- Average payment time
- Trust score

IMPORTANT:

Do not claim a buyer is genuinely verified unless the backend
actually performs verification.

For prototype data, label it:

"Demo Verified"

or

"Prototype Data"


------------------------------------------------------------

SECTION 13 — IMPACT

Show meaningful product outcomes.

Possible metrics:

- Markets connected
- Buyers discovered
- FPOs supported
- Opportunities analyzed
- Transactions enabled

For prototype metrics, label clearly as:

"Prototype"
"Demo Data"
"Illustrative"


------------------------------------------------------------

SECTION 14 — FINAL CTA

Headline:

"Your harvest deserves its best market."

Supporting text:

"Compare. Decide. Connect. Sell better."

CTA:

"Get Started"


------------------------------------------------------------

SECTION 15 — FOOTER

Include:

Farmora

Platform
Market Intelligence
Buyers
FPOs
Logistics
Storage

Company
About
Contact

Legal
Privacy
Terms

Social links where applicable.


============================================================
24. FARMER DASHBOARD
============================================================

Primary navigation:

Dashboard
Market Intelligence
Price Discovery
My Crops
Buyers
Logistics
Storage
Transactions
Notifications
Profile


Dashboard should prioritize:

1. Best selling opportunity
2. Current crop prices
3. Market trends
4. Buyer demand
5. Net realization


============================================================
25. FPO DASHBOARD
============================================================

Navigation:

Dashboard
Members
Produce
Aggregation
Buyers
Offers
Orders
Analytics
Transactions
Settings

Features:

- Member management
- Produce aggregation
- Buyer discovery
- Offer comparison
- Bulk selling
- Revenue analytics


============================================================
26. BUYER DASHBOARD
============================================================

Navigation:

Dashboard
Requirements
Marketplace
Suppliers
Offers
Orders
Transactions
Analytics
Profile

Features:

- Post requirements
- Discover suppliers
- Manage offers
- Track orders
- Manage payments


============================================================
27. LOGISTICS MODULE
============================================================

Features:

- Transport providers
- Vehicle availability
- Capacity
- Distance
- Route
- Estimated cost
- Booking
- Tracking


============================================================
28. STORAGE MODULE
============================================================

Show:

Storage facility
Type
Capacity
Availability
Distance
Cost
Facilities

Possible types:

Cold storage
Warehouse
Dry storage
Specialized storage


============================================================
29. TRANSACTION SYSTEM
============================================================

Transaction flow:

Offer
↓
Negotiation
↓
Order
↓
Logistics
↓
Delivery
↓
Payment
↓
Completed

UI should show:

- Status
- Timeline
- Amount
- Quantity
- Buyer
- Delivery
- Payment


============================================================
30. AUTHENTICATION
============================================================

Pages:

Login
Register
Forgot Password
Reset Password
Role Selection

Roles:

Farmer
FPO
Buyer
Logistics Provider


============================================================
31. MOBILE EXPERIENCE
============================================================

Mobile is extremely important.

Farmers may primarily access Farmora using smartphones.

Mobile priority:

1. Current price
2. Best opportunity
3. Net realization
4. Buyer discovery
5. Sell action
6. Notifications

Use mobile bottom navigation where appropriate.

Do not simply shrink the desktop interface.

Create intentional mobile layouts.


============================================================
32. RESPONSIVE DESIGN
============================================================

Support:

- Mobile
- Tablet
- Laptop
- Desktop
- Large Desktop

Breakpoints must be consistent.

Charts must resize.

Tables should transform into:

- Cards
- Horizontal scroll
- Stacked layouts

when necessary.


============================================================
33. ACCESSIBILITY
============================================================

Implement:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Accessible labels
- Sufficient contrast
- Screen-reader-friendly structure
- Reduced-motion support

Never communicate critical information using color alone.


============================================================
34. PERFORMANCE
============================================================

Performance is a priority.

Use:

- Lazy loading
- Optimized images
- Code splitting
- Responsive images
- Efficient animations
- Optimized charts
- Efficient map rendering

Avoid:

- Huge video backgrounds
- Excessive 3D
- Unnecessary JavaScript
- Excessive animation


============================================================
35. LOADING / ERROR / EMPTY STATES
============================================================

Every important page must support:

Loading state
Empty state
Error state
Success state

Examples:

No buyers found.

No storage available nearby.

No market data available.

Loading market prices...


============================================================
36. DEMO DATA RULES
============================================================

This is a hackathon prototype.

Use realistic but clearly identifiable demo data.

Never falsely claim:

- Real transactions
- Real buyer verification
- Real farmer savings
- Real government partnerships
- Real impact metrics

unless genuinely implemented and verified.

Use:

"Demo Data"

"Prototype Data"

"Illustrative Data"

where appropriate.


============================================================
37. REUSABLE COMPONENT INVENTORY
============================================================

Create reusable components.

LAYOUT:

- Navbar
- Sidebar
- MobileNav
- Footer

BUTTONS:

- PrimaryButton
- SecondaryButton
- IconButton

DATA:

- MetricCard
- PriceCard
- TrendCard
- MarketCard
- BuyerCard
- OpportunityCard
- TrustScore

FORMS:

- CropSelector
- QuantityInput
- QualitySelector
- LocationSelector
- DateSelector

CHARTS:

- PriceChart
- DemandChart
- ArrivalChart
- RevenueChart

MARKETPLACE:

- BuyerProfile
- BuyerRequirement
- BidCard
- OfferCard

LOGISTICS:

- TransportCard
- StorageCard
- RouteCard

TRANSACTIONS:

- OrderTimeline
- TransactionCard
- PaymentStatus


============================================================
38. PROJECT STRUCTURE
============================================================

Use a clean architecture.

Suggested:

/app
/components
/lib
/hooks
/types
/services
/public
/styles

/design

    DESIGN_SYSTEM.md
    DESIGN_RESEARCH.md
    UI_RULES.md
    COMPONENT_INVENTORY.md
    LANDING_PAGE_BLUEPRINT.md

    /references

        /landing
        /dashboard
        /marketplace
        /charts
        /maps
        /mobile
        /animations
        /agriculture


============================================================
39. DESIGN_RESEARCH.md
============================================================

Create this document before major implementation.

For every useful reference document:

Reference:
Example: Linear

Category:
Dashboard

What was studied:

- Navigation
- Information hierarchy
- Density
- Cards
- Tables

What Farmora can learn:

- Compact navigation
- Strong hierarchy
- Clear data presentation

What NOT to copy:

- Branding
- Exact layout
- Colors
- Identity

How it influenced Farmora:

Explain the resulting design decision.


============================================================
40. UI_RULES.md
============================================================

Document rules such as:

1. Lucide is the primary icon system.
2. shadcn/ui is the primary UI foundation.
3. Manrope is the primary display font.
4. Inter is the primary body font.
5. Green is a brand color, not the entire UI.
6. Avoid excessive gradients.
7. Avoid excessive glassmorphism.
8. Avoid excessive rounded cards.
9. Avoid excessive shadows.
10. Avoid unnecessary animation.
11. Avoid emoji as UI icons.
12. Use data visualizations for decision-making.
13. Prioritize net realization.
14. Mobile farmer experience is first-class.
15. Maintain one coherent design language.


============================================================
41. DESIGN RESEARCH WORKFLOW
============================================================

Before coding the landing page:

STEP 1:

Inspect all available reference material.

STEP 2:

Analyze:

- Layout
- Typography
- Spacing
- Animation
- Components
- Color
- Interaction

STEP 3:

Identify patterns suitable for Farmora.

STEP 4:

Create:

DESIGN_RESEARCH.md

STEP 5:

Create:

DESIGN_SYSTEM.md

STEP 6:

Create:

UI_RULES.md

STEP 7:

Create:

COMPONENT_INVENTORY.md

STEP 8:

Create:

LANDING_PAGE_BLUEPRINT.md

STEP 9:

Only then begin implementation.


============================================================
42. IMPLEMENTATION PHASES
============================================================

PHASE 01 — DESIGN RESEARCH

DO NOT build the entire application.

Analyze the references.

Create design research documentation.


------------------------------------------------------------

PHASE 02 — DESIGN SYSTEM

Establish:

- Colors
- Typography
- Spacing
- Components
- Icons
- Charts
- Animation
- Responsive behavior


------------------------------------------------------------

PHASE 03 — CORE UI COMPONENTS

Build:

- Navbar
- Buttons
- Cards
- Inputs
- Sidebar
- Tabs
- Tables
- Modals
- Badges
- Charts


------------------------------------------------------------

PHASE 04 — LANDING PAGE

Build and polish the complete landing page.

Do not immediately move to every dashboard.


------------------------------------------------------------

PHASE 05 — AUTHENTICATION

Implement:

- Login
- Registration
- Role selection
- Password recovery


------------------------------------------------------------

PHASE 06 — FARMER EXPERIENCE

Build:

- Dashboard
- Market Intelligence
- Price Discovery
- Crops
- Buyers
- Logistics
- Storage
- Transactions


------------------------------------------------------------

PHASE 07 — FPO EXPERIENCE

Build:

- Dashboard
- Members
- Produce aggregation
- Buyers
- Offers
- Orders
- Analytics


------------------------------------------------------------

PHASE 08 — BUYER EXPERIENCE

Build:

- Dashboard
- Requirements
- Marketplace
- Suppliers
- Offers
- Orders


------------------------------------------------------------

PHASE 09 — LOGISTICS + STORAGE

Build discovery and coordination features.


------------------------------------------------------------

PHASE 10 — TRANSACTIONS

Build:

- Offers
- Orders
- Delivery
- Payment status
- History


------------------------------------------------------------

PHASE 11 — AI INTELLIGENCE

Only after the underlying product flow works.

AI capabilities:

- Market recommendation
- Buyer matching
- Price explanation
- Natural language market queries
- Decision support

AI must not invent:

- Prices
- Buyers
- Transactions
- Market statistics


============================================================
43. AI PRODUCT PRINCIPLE
============================================================

AI should be invisible when it doesn't need to be visible.

Instead of forcing users to chat with an AI, use intelligence
inside the workflow.

Example:

User:

Onion
10 tonnes
Nashik

Farmora:

"Based on current market conditions, these are the strongest
selling opportunities."

Then show:

Market
Price
Transport
Storage
Demand
Buyer reliability
Estimated net realization

AI should enhance decision-making.

It should not become a gimmicky chatbot.


============================================================
44. SECURITY
============================================================

Never expose:

- API keys
- Supabase service-role keys
- Private credentials
- Payment secrets

Use:

Environment variables
Server-side APIs
Supabase Row Level Security


============================================================
45. DESIGN QUALITY BAR
============================================================

Every page must be evaluated for:

Visual hierarchy
Typography
Spacing
Alignment
Color
Icon consistency
Responsiveness
Accessibility
Animation
Performance
Loading states
Empty states
Error states

Before completing any section, ask:

"Does this help the farmer?"

"Does this help the buyer?"

"Does this help the FPO?"

"Does this make the selling decision clearer?"


============================================================
46. WHAT MUST NEVER HAPPEN
============================================================

NEVER:

- Copy another website
- Copy another company's branding
- Copy proprietary illustrations
- Mix random component libraries
- Mix random icon styles
- Use emoji as UI icons
- Use five different fonts
- Overuse green
- Overuse gradients
- Overuse glassmorphism
- Overuse 3D
- Animate everything
- Turn everything into cards
- Create meaningless charts
- Add AI for the sake of AI
- Fake statistics
- Fake verification
- Fake transactions
- Expose API keys
- Sacrifice usability for visual effects


============================================================
47. FINAL VISUAL DIRECTION
============================================================

Farmora should visually communicate:

TRUST
+
INTELLIGENCE
+
OPPORTUNITY
+
TRANSPARENCY
+
AGRICULTURE

The visual language should combine:

Premium fintech
+
Market intelligence
+
Modern marketplace
+
Agricultural technology.


============================================================
48. FINAL USER JOURNEY
============================================================

LANDING PAGE
      ↓
GET STARTED
      ↓
SELECT ROLE
      ↓
FARMER
      ↓
ADD PRODUCE
      ↓
SELECT CROP
      ↓
QUANTITY
      ↓
QUALITY
      ↓
LOCATION
      ↓
MARKET INTELLIGENCE
      ↓
COMPARE MARKETS
      ↓
COMPARE BUYERS
      ↓
CALCULATE NET REALIZATION
      ↓
BEST OPPORTUNITY
      ↓
CONNECT WITH BUYER
      ↓
LOGISTICS
      ↓
DELIVERY
      ↓
PAYMENT
      ↓
COMPLETED TRANSACTION


============================================================
49. PRIMARY PRODUCT EXPERIENCE
============================================================

The most important experience in Farmora is:

A farmer enters:

Crop
Quantity
Quality
Location

Farmora returns:

CURRENT MARKET PRICES
+
BUYER OFFERS
+
DEMAND
+
LOGISTICS COST
+
STORAGE OPTIONS
+
BUYER RELIABILITY
+
NET REALIZATION

Then Farmora recommends:

"BEST SELLING OPPORTUNITY"


============================================================
50. FINAL BRAND MESSAGE
============================================================

Primary:

FARMORA

SELL SMARTER. EARN BETTER.

Supporting:

"Connect with better markets, reliable buyers and smarter
selling opportunities."


Alternative product statement:

"Don't just find a price.
Find the best opportunity."


============================================================
51. ANTIGRAVITY EXECUTION INSTRUCTION
============================================================

Treat this PRD as the design and frontend source of truth for
the Farmora project.

DO NOT immediately build the entire application.

Execute the following sequence:

1. Inspect the repository.
2. Read this PRD completely.
3. Inspect available design references.
4. Perform design reconnaissance.
5. Create DESIGN_RESEARCH.md.
6. Create DESIGN_SYSTEM.md.
7. Create UI_RULES.md.
8. Create COMPONENT_INVENTORY.md.
9. Create LANDING_PAGE_BLUEPRINT.md.
10. Establish reusable UI primitives.
11. Build ONLY the landing page.
12. Polish the landing page to production quality.
13. Verify responsive behavior.
14. Verify accessibility.
15. Verify performance.
16. Stop and wait before implementing the full dashboard.

IMPORTANT:

Do not ask to install unnecessary libraries.

Do not introduce unnecessary frameworks.

Do not create a generic AI-generated SaaS design.

Do not copy the visual identity of any reference website.

Use the references to learn principles and create an original
Farmora visual identity.

The final product should look like a serious startup/product
that could be presented to:

- Government officials
- Hackathon judges
- Farmers
- FPOs
- Buyers
- Investors

QUALITY BAR:

The final result should NOT look like a hackathon template.

It should feel like a real product.

============================================================
END OF PRD
============================================================