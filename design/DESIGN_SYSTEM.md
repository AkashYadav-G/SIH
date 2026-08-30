# FARMORA — DESIGN SYSTEM

> Single source of truth for all visual decisions across Farmora.
> Every component, page, and feature must reference this document.

---

## 1. Color System

### 1.1 Brand Colors

| Token                  | HSL                    | Hex       | Usage                                        |
|------------------------|------------------------|-----------|----------------------------------------------|
| `--color-primary`      | `152 45% 22%`          | `#1F5F3A` | Primary brand, key CTAs, active states        |
| `--color-primary-hover`| `152 45% 18%`          | `#194F30` | Primary hover state                           |
| `--color-primary-light`| `152 30% 95%`          | `#EDF5F0` | Primary tinted backgrounds                    |
| `--color-secondary`    | `145 18% 62%`          | `#88AD93` | Secondary elements, subtle accents            |
| `--color-secondary-light`| `145 18% 94%`        | `#EEF3EF` | Secondary tinted backgrounds                  |
| `--color-accent`       | `38 85% 55%`           | `#E8A020` | Opportunity, value, amber CTAs, highlights    |
| `--color-accent-hover` | `38 85% 48%`           | `#D08E15` | Accent hover state                            |
| `--color-accent-light` | `38 50% 95%`           | `#FDF5E6` | Accent tinted backgrounds                     |

### 1.2 Neutral Colors

| Token                     | HSL                 | Hex       | Usage                                   |
|---------------------------|---------------------|-----------|-----------------------------------------|
| `--color-background`      | `40 20% 98%`        | `#FAF9F7` | Page background (warm off-white)        |
| `--color-surface`         | `0 0% 100%`         | `#FFFFFF` | Cards, panels, elevated surfaces        |
| `--color-surface-hover`   | `40 10% 97%`        | `#F7F6F4` | Surface hover state                     |
| `--color-border`          | `40 8% 90%`         | `#E8E5E0` | Borders, dividers                       |
| `--color-border-strong`   | `40 6% 80%`         | `#CEC9C2` | Stronger borders for emphasis           |
| `--color-text-primary`    | `20 15% 12%`        | `#211E1A` | Primary text (near-black, warm)         |
| `--color-text-secondary`  | `20 5% 45%`         | `#756F68` | Secondary text, descriptions            |
| `--color-text-tertiary`   | `20 4% 62%`         | `#A19B94` | Placeholder text, hints                 |
| `--color-text-inverse`    | `0 0% 100%`         | `#FFFFFF` | Text on dark/colored backgrounds        |

### 1.3 Semantic Colors

| Token                    | HSL                | Hex       | Usage                              |
|--------------------------|--------------------|-----------|-------------------------------------|
| `--color-success`        | `152 55% 38%`      | `#2B9A5B` | Positive trends, completions        |
| `--color-success-light`  | `152 40% 94%`      | `#E8F5ED` | Success backgrounds                 |
| `--color-warning`        | `38 90% 50%`       | `#F0A000` | Warnings, attention needed          |
| `--color-warning-light`  | `38 60% 94%`       | `#FEF5E0` | Warning backgrounds                 |
| `--color-error`          | `0 65% 52%`        | `#D44030` | Errors, negative trends, decline    |
| `--color-error-light`    | `0 50% 95%`        | `#FDECEA` | Error backgrounds                   |
| `--color-info`           | `210 60% 50%`      | `#3380CC` | Informational, links, help          |
| `--color-info-light`     | `210 40% 94%`      | `#E5EEF8` | Info backgrounds                    |

### 1.4 Color Usage Rules

- **DO NOT** make the entire website green. Green is the brand accent, not the palette.
- Neutral colors (off-white, white, warm grays) are the primary interface foundation.
- Green represents brand identity and agriculture.
- Amber/gold represents opportunity, value, and important actions.
- Semantic colors are reserved for data meaning — never decorative.
- Avoid excessive gradients. Use solid colors with subtle border differentiation.

---

## 2. Typography

### 2.1 Font Families

| Token               | Font Family           | Usage                                     |
|----------------------|-----------------------|-------------------------------------------|
| `--font-display`     | `'Manrope', sans-serif` | Hero, headings, large numbers, metrics   |
| `--font-body`        | `'Inter', sans-serif`   | Body, tables, forms, labels, dashboard   |
| `--font-mono`        | `'JetBrains Mono', monospace` | Code, tabular numbers, prices     |

### 2.2 Type Scale

| Token              | Desktop     | Mobile      | Weight | Font        | Line Height | Letter Spacing |
|--------------------|-------------|-------------|--------|-------------|-------------|----------------|
| `--text-hero`      | 72px        | 40px        | 800    | Manrope     | 1.05        | -0.03em        |
| `--text-h1`        | 56px        | 32px        | 700    | Manrope     | 1.1         | -0.025em       |
| `--text-h2`        | 42px        | 28px        | 700    | Manrope     | 1.15        | -0.02em        |
| `--text-h3`        | 30px        | 22px        | 600    | Manrope     | 1.2         | -0.015em       |
| `--text-h4`        | 22px        | 18px        | 600    | Manrope     | 1.3         | -0.01em        |
| `--text-body-lg`   | 18px        | 16px        | 400    | Inter       | 1.6         | 0              |
| `--text-body`      | 16px        | 15px        | 400    | Inter       | 1.6         | 0              |
| `--text-body-sm`   | 14px        | 13px        | 400    | Inter       | 1.5         | 0              |
| `--text-caption`   | 13px        | 12px        | 500    | Inter       | 1.4         | 0.01em         |
| `--text-label`     | 12px        | 11px        | 600    | Inter       | 1.3         | 0.04em         |
| `--text-metric`    | 36px        | 24px        | 700    | Manrope     | 1.1         | -0.02em        |

### 2.3 Typography Rules

- Display font (Manrope): Hero headlines, section titles, large metrics
- Body font (Inter): Everything else — paragraphs, tables, forms, labels
- Monospace: Financial figures, prices, tabular data alignment
- Use negative letter-spacing for headings, positive for labels/caps
- Always use font-feature-settings: "tnum" for tabular numbers in financial data
- Responsive typography scales smoothly — no jumps between breakpoints

---

## 3. Spacing

### 3.1 Spacing Scale

| Token          | Value    | Usage                                        |
|----------------|----------|----------------------------------------------|
| `--space-1`    | 4px      | Tight gaps (icon-to-label, inline elements)  |
| `--space-2`    | 8px      | Small gaps (within compact components)       |
| `--space-3`    | 12px     | Compact padding (badges, chips)              |
| `--space-4`    | 16px     | Standard padding (cards, inputs, buttons)    |
| `--space-5`    | 20px     | Component internal spacing                   |
| `--space-6`    | 24px     | Section padding, card gaps                   |
| `--space-8`    | 32px     | Major component spacing                      |
| `--space-10`   | 40px     | Section internal padding                     |
| `--space-12`   | 48px     | Dashboard section gaps                       |
| `--space-16`   | 64px     | Landing page inter-section (small)           |
| `--space-20`   | 80px     | Landing page inter-section (medium)          |
| `--space-24`   | 96px     | Landing page inter-section (large)           |
| `--space-32`   | 128px    | Landing page hero spacing                    |

### 3.2 Spacing Rules

- **Landing page:** Generous whitespace (80–128px between sections)
- **Dashboard:** Compact density (16–32px between elements)
- Consistent padding within component families (all cards use the same padding)
- Never use arbitrary values — always reference the spacing scale

---

## 4. Border Radius

| Token              | Value    | Usage                                     |
|--------------------|----------|-------------------------------------------|
| `--radius-sm`      | 6px      | Badges, chips, small elements             |
| `--radius-md`      | 8px      | Buttons, inputs, select                   |
| `--radius-lg`      | 12px     | Cards, dropdowns, dialogs                 |
| `--radius-xl`      | 16px     | Feature cards, hero elements              |
| `--radius-2xl`     | 20px     | Landing page hero cards                   |
| `--radius-full`    | 9999px   | Avatars, pills, circular elements         |

### Radius Rules

- Do NOT make every element excessively rounded
- Standard UI uses `radius-md` (8px)
- Cards use `radius-lg` (12px)
- Landing page promotional elements can go up to `radius-2xl` (20px)
- Avatars and pills use `radius-full`

---

## 5. Shadows

| Token                  | Value                                           | Usage                           |
|------------------------|------------------------------------------------|---------------------------------|
| `--shadow-xs`          | `0 1px 2px rgba(0,0,0,0.04)`                  | Subtle elevation                |
| `--shadow-sm`          | `0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)` | Cards, default           |
| `--shadow-md`          | `0 4px 8px rgba(0,0,0,0.06), 0 2px 4px rgba(0,0,0,0.04)` | Hover states, dropdowns  |
| `--shadow-lg`          | `0 8px 24px rgba(0,0,0,0.08), 0 4px 8px rgba(0,0,0,0.04)` | Modals, popovers        |
| `--shadow-xl`          | `0 16px 48px rgba(0,0,0,0.10), 0 8px 16px rgba(0,0,0,0.05)` | Hero elements         |

### Shadow Rules

- Prefer subtle borders over shadows for component separation
- Shadows should be warm-toned (use warm black, not pure black)
- No neon glows or colored shadows
- No excessive glassmorphism
- Shadows indicate elevation hierarchy: flat → sm → md → lg

---

## 6. Buttons

### 6.1 Button Variants

| Variant      | Background                 | Text                  | Border                    |
|--------------|----------------------------|-----------------------|---------------------------|
| Primary      | `--color-primary`          | white                 | none                      |
| Secondary    | transparent                | `--color-text-primary`| `--color-border`          |
| Accent       | `--color-accent`           | white                 | none                      |
| Ghost        | transparent                | `--color-text-secondary`| none                    |
| Destructive  | `--color-error`            | white                 | none                      |

### 6.2 Button Sizes

| Size   | Height | Padding (x) | Font Size | Radius       |
|--------|--------|-------------|-----------|--------------|
| sm     | 32px   | 12px        | 13px      | `radius-md`  |
| md     | 40px   | 16px        | 14px      | `radius-md`  |
| lg     | 48px   | 24px        | 16px      | `radius-md`  |
| xl     | 56px   | 32px        | 16px      | `radius-md`  |

### 6.3 Button States

All buttons must support:
- **Default:** Base appearance
- **Hover:** Slightly darker/lighter + cursor pointer
- **Active/Pressed:** Slight scale(0.98)
- **Focus:** Visible focus ring (2px offset, primary color)
- **Disabled:** 50% opacity, cursor not-allowed
- **Loading:** Spinner replaces text content

---

## 7. Inputs

| Property        | Value                               |
|-----------------|-------------------------------------|
| Height          | 40px (md), 48px (lg)               |
| Padding         | 12px horizontal                     |
| Border          | 1px solid `--color-border`          |
| Border (focus)  | 1px solid `--color-primary`         |
| Border Radius   | `--radius-md`                       |
| Font            | Inter, 14px                         |
| Background      | `--color-surface`                   |
| Placeholder     | `--color-text-tertiary`             |
| Focus ring      | 0 0 0 3px `--color-primary-light`   |

---

## 8. Cards

| Property        | Value                               |
|-----------------|-------------------------------------|
| Background      | `--color-surface`                   |
| Border          | 1px solid `--color-border`          |
| Border Radius   | `--radius-lg`                       |
| Padding         | 20–24px                             |
| Shadow          | `--shadow-xs` (default)             |
| Shadow (hover)  | `--shadow-md`                       |
| Transition      | all 200ms ease                      |

### Card Rules

- Not everything should be a card — use flat sections when appropriate
- Cards should have strong internal hierarchy: heading → metric → description
- Dashboard cards use compact padding (16–20px)
- Landing page cards use generous padding (24–32px)

---

## 9. Tables

| Property          | Value                                 |
|-------------------|---------------------------------------|
| Header bg         | `--color-background`                  |
| Header font       | Inter, 12px, 600, uppercase tracking  |
| Header color      | `--color-text-secondary`              |
| Row height        | 48px                                  |
| Row border        | 1px solid `--color-border` (bottom)   |
| Row hover         | `--color-surface-hover`               |
| Cell padding      | 12px 16px                             |
| Number alignment  | Right-aligned, tabular figures        |

### Table Rules

- Use tabular figures for all numeric columns
- Right-align numeric data, left-align text
- Tables transform to card lists on mobile (<768px)
- Show 4–5 columns maximum on default view
- Use horizontal scroll for additional columns on tablet

---

## 10. Navigation

### 10.1 Top Navbar (Landing Page)

| Property       | Value                              |
|----------------|------------------------------------|
| Height         | 64px                               |
| Background     | `--color-surface` with backdrop-blur |
| Position       | Fixed top                          |
| Border         | 1px solid `--color-border` (bottom)|
| Logo           | Left-aligned                       |
| Links          | Center-aligned                     |
| CTA            | Right-aligned                      |

### 10.2 Sidebar (Dashboard)

| Property        | Value                              |
|-----------------|------------------------------------|
| Width (expanded)| 260px                              |
| Width (collapsed)| 64px                              |
| Background      | `--color-surface`                  |
| Border          | 1px solid `--color-border` (right) |
| Item height     | 36px                               |
| Item padding    | 8px 12px                           |
| Active item bg  | `--color-primary-light`            |
| Active item text| `--color-primary`                  |
| Icon size       | 18px                               |

### 10.3 Mobile Bottom Navigation

| Property       | Value                              |
|----------------|------------------------------------|
| Height         | 64px + safe-area                   |
| Background     | `--color-surface`                  |
| Items          | 5 max                              |
| Icon size      | 22px                               |
| Label size     | 11px                               |
| Active color   | `--color-primary`                  |
| Inactive color | `--color-text-tertiary`            |

---

## 11. Badges

| Variant    | Background                  | Text                     | Border |
|------------|-----------------------------|--------------------------| ------|
| Default    | `--color-background`        | `--color-text-secondary` | `--color-border` |
| Success    | `--color-success-light`     | `--color-success`        | none   |
| Warning    | `--color-warning-light`     | `--color-warning`        | none   |
| Error      | `--color-error-light`       | `--color-error`          | none   |
| Info       | `--color-info-light`        | `--color-info`           | none   |
| Accent     | `--color-accent-light`      | `--color-accent`         | none   |
| Primary    | `--color-primary-light`     | `--color-primary`        | none   |

**Shared properties:** Height 22px, padding 4px 8px, font 12px/600, radius `--radius-sm`

---

## 12. Charts (Recharts)

| Property            | Value                                   |
|---------------------|-----------------------------------------|
| Primary line        | `--color-primary`                       |
| Secondary line      | `--color-accent`                        |
| Grid lines          | `--color-border` at 0.5 opacity         |
| Axis labels         | Inter 12px, `--color-text-tertiary`     |
| Tooltip bg          | `--color-surface` with `--shadow-lg`    |
| Area fill           | Primary at 10% opacity                 |
| Positive bar        | `--color-success`                       |
| Negative bar        | `--color-error`                         |

### Chart Rules

- Charts must be responsive
- Never add charts purely for decoration
- Every chart must have a clear title and purpose
- Include proper axis labels and units (₹/quintal, tonnes)
- Use tooltips for detailed data on hover
- Ensure accessibility: don't rely on color alone

---

## 13. Icons (Lucide)

| Property      | Value       |
|---------------|-------------|
| Default size  | 18px        |
| Small size    | 16px        |
| Large size    | 22px        |
| Stroke width  | 1.75        |
| Color         | currentColor|

### Farmora Icon Mapping

| Concept        | Lucide Icon               |
|----------------|---------------------------|
| Market         | TrendingUp                |
| Price          | IndianRupee               |
| Crop           | Wheat                     |
| Buyer          | Building2                 |
| FPO            | Users                     |
| Transport      | Truck                     |
| Storage        | Warehouse                 |
| Location       | MapPin                    |
| Analytics      | ChartNoAxesCombined       |
| Search         | Search                    |
| Notification   | Bell                      |
| Settings       | Settings                  |
| Profile        | User                      |
| Success        | CheckCircle2              |
| Warning        | AlertTriangle             |
| Info           | Info                      |
| Close          | X                         |
| Menu           | Menu                      |
| Arrow          | ChevronRight              |
| External       | ExternalLink              |

### Icon Rules

- One consistent icon family (Lucide) throughout
- Consistent stroke weight (1.75)
- Never use emojis as primary interface icons
- Icons inherit text color via `currentColor`
- Always pair icons with accessible labels

---

## 14. Animations

### 14.1 Timing

| Token                    | Duration | Easing                    | Usage                       |
|--------------------------|----------|---------------------------|-----------------------------|
| `--transition-fast`      | 150ms    | ease-out                  | Hover, focus, toggle        |
| `--transition-normal`    | 200ms    | ease-out                  | Buttons, inputs, badges     |
| `--transition-slow`      | 300ms    | ease-in-out               | Cards, panels               |
| `--transition-reveal`    | 600ms    | cubic-bezier(0.16,1,0.3,1)| Scroll reveals, sections   |
| `--transition-spring`    | 400ms    | cubic-bezier(0.34,1.56,0.64,1)| Playful interactions   |

### 14.2 Animation Patterns

| Pattern             | Values                              | When to use                  |
|---------------------|-------------------------------------|------------------------------|
| Fade Up             | opacity 0→1, y: 20px→0             | Section reveals on scroll    |
| Fade In             | opacity 0→1                         | Modals, overlays             |
| Scale In            | scale 0.95→1, opacity 0→1          | Dropdowns, popovers          |
| Slide Right         | x: -20px→0, opacity 0→1            | Sidebar items, list entries  |
| Stagger             | delay: index × 60ms                | Card grids, list items       |
| Number Counter      | 0→target, 800ms duration           | Metric cards, impact stats   |
| Hover Lift          | y: -2px, shadow: sm→md             | Cards, interactive elements  |
| Press               | scale: 0.98                         | Buttons on click             |

### 14.3 Animation Rules

- All animations must be smooth and purposeful
- Respect `prefers-reduced-motion` — disable non-essential animations
- Dashboard animations: subtle (150–300ms)
- Landing page animations: expressive (400–800ms)
- Never animate for decoration — only for communication
- No infinite loops except loading spinners

---

## 15. Responsive Breakpoints

| Token     | Value    | Target                           |
|-----------|----------|----------------------------------|
| `--bp-sm` | 640px    | Mobile landscape                 |
| `--bp-md` | 768px    | Tablet portrait                  |
| `--bp-lg` | 1024px   | Tablet landscape / small laptop  |
| `--bp-xl` | 1280px   | Desktop                          |
| `--bp-2xl`| 1536px   | Large desktop                    |

### Responsive Rules

| Context         | Mobile (<768px) | Tablet (768–1024px) | Desktop (>1024px) |
|-----------------|-----------------|---------------------|--------------------|
| Navigation      | Bottom nav      | Collapsed sidebar   | Full sidebar       |
| Cards per row   | 1               | 2                   | 3–4                |
| Tables          | Card list       | Horizontal scroll   | Full table         |
| Typography      | Mobile scale    | —                   | Desktop scale      |
| Section spacing | 48–64px         | 64–80px             | 80–128px           |
| Hero font       | 40px            | 56px                | 72px               |

---

## 16. Dark Mode (Future)

Dark mode is not in the initial scope but the design system is prepared:
- All colors are defined as CSS variables
- Components reference tokens, not hardcoded colors
- When implemented, dark mode inverts surface/background and adjusts text colors
- Brand green and amber remain consistent across modes
