# FARMORA — UI RULES

> Mandatory rules for every page, component, and feature in Farmora.
> These rules are non-negotiable and must be followed by all contributors.

---

## 1. Component Foundation

1. **shadcn/ui is the primary component library.** All base components (Button, Input, Select, Dialog, etc.) must use shadcn/ui as their foundation.
2. **Do NOT mix component libraries randomly.** Secondary libraries (Aceternity UI, Magic UI, Motion-Primitives) may only be used where they provide a specific visual or interaction advantage not available in shadcn/ui.
3. **Components must be customized, not replaced.** shadcn/ui components are customized via Farmora's design tokens. Never replace a shadcn component with an incompatible alternative.

---

## 2. Icons

4. **Lucide is the only icon system.** No mixing icon families. No Font Awesome, no Heroicons, no Material Icons.
5. **Consistent stroke weight (1.75).** All Lucide icons use the same stroke width.
6. **Consistent sizing.** Default: 18px. Small: 16px. Large: 22px. No arbitrary sizes.
7. **Icons inherit text color.** Use `currentColor`. Never hardcode icon colors unless required by semantic meaning.
8. **Never use emojis as primary interface icons.** Emojis may appear in content (e.g., user-generated text) but never as UI navigation or action icons.

---

## 3. Typography

9. **Manrope is the display font.** Used for: hero text, section headings, large metrics, page titles.
10. **Inter is the body font.** Used for: paragraphs, tables, forms, labels, descriptions, dashboard data.
11. **Tabular figures for financial data.** All currency values, prices, and numeric comparisons must use `font-feature-settings: "tnum"` for proper column alignment.
12. **No more than two font families.** Manrope + Inter. Never introduce a third font unless for monospace code display (JetBrains Mono).
13. **Responsive typography.** Use the defined type scale — headings scale down on mobile. Never use desktop-sized headings on small screens.

---

## 4. Color

14. **Green is a brand color, not the entire UI.** The interface foundation is neutral (off-white, white, warm grays). Green appears for brand identity, primary CTAs, and active states.
15. **Amber/gold represents opportunity and value.** Use for highlighting important actions, best opportunities, and value-oriented CTAs.
16. **Semantic color only.** Green for success/growth. Red for error/decline. Amber for warning/opportunity. Blue for info. Never use color decoratively.
17. **Avoid excessive gradients.** Solid colors with subtle borders are the primary visual language. Gradients may appear in the landing page hero only, and must be subtle.
18. **Maintain sufficient contrast.** Text on all backgrounds must meet WCAG AA contrast ratios (4.5:1 for body text, 3:1 for large text).

---

## 5. Layout

19. **Consistent spacing scale.** Use only the defined spacing tokens (4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128px). No arbitrary values.
20. **Landing page = generous whitespace.** 80–128px between sections. Let content breathe.
21. **Dashboard = compact density.** 16–32px between elements. Maximize information value per pixel.
22. **Not everything needs to be a card.** Use flat sections, dividers, and spacing to create hierarchy. Cards are for self-contained units of related information.
23. **Avoid excessive rounded corners.** Standard: 8px. Cards: 12px. Landing page features: up to 20px. Never make everything pill-shaped.

---

## 6. Shadows & Elevation

24. **Prefer borders over shadows.** Most component separation uses subtle borders, not shadows.
25. **Shadows indicate interactive elevation.** Default cards have `shadow-xs`. Hover states elevate to `shadow-md`. Modals use `shadow-lg`.
26. **No neon glows or colored shadows.** Shadows use warm, transparent black only.
27. **No excessive glassmorphism.** Backdrop blur is acceptable on the navbar only. Avoid frosted glass everywhere.

---

## 7. Animation

28. **Every animation must be purposeful.** Animations communicate state changes, guide attention, or provide feedback. Never animate for decoration.
29. **UI interactions: fast (150–300ms).** Hover effects, button presses, input focus.
30. **Content reveals: moderate (400–800ms).** Scroll-triggered section entrances, modal openings.
31. **Respect `prefers-reduced-motion`.** Disable non-essential animations when the user has requested reduced motion.
32. **No infinite animation loops** except loading spinners and skeleton screens.
33. **Avoid unnecessary animation.** If removing an animation doesn't reduce understanding or usability, remove it.

---

## 8. Data & Financial Display

34. **Prioritize net realization over headline price.** Wherever prices are compared, show the net value after costs — not just the gross price.
35. **Right-align numeric data.** All currency values and quantities are right-aligned in tables and comparison views.
36. **Always show currency context.** Display "₹" prefix and "/q" (per quintal) or unit suffixes consistently.
37. **Label demo data clearly.** Use "Demo Data", "Prototype Data", or "Illustrative" labels on all non-real data. Never imply real transactions or verified buyers without genuine verification.

---

## 9. Mobile Experience

38. **Mobile farmer experience is first-class.** Mobile is not a shrunk desktop. Design intentional mobile layouts.
39. **Bottom navigation on mobile.** Use a fixed bottom nav with 4–5 primary tabs on mobile devices.
40. **Minimum tap target: 44px.** All interactive elements must be at least 44×44px on touch devices.
41. **Key decisions in ≤3 taps.** A farmer should be able to find their best selling price within 3 taps from the dashboard.
42. **Tables → cards on mobile.** Data tables transform into stacked card views on screens <768px.

---

## 10. Accessibility

43. **Semantic HTML always.** Use proper heading hierarchy (one `<h1>` per page), landmark elements (`<nav>`, `<main>`, `<footer>`), and appropriate ARIA roles.
44. **Keyboard navigation.** Every interactive element must be keyboard-accessible with visible focus states.
45. **Focus ring: visible and consistent.** Use a 2px offset focus ring in the primary brand color.
46. **Never communicate with color alone.** Always pair color with text labels, icons, or patterns. Example: price changes show ↑/↓ arrows + percentage, not just green/red.
47. **Screen-reader-friendly.** All images have alt text. Icon-only buttons have `aria-label`. Dynamic content uses `aria-live`.

---

## 11. Performance

48. **Lazy load below-the-fold content.** Charts, maps, and heavy components load on viewport entry.
49. **Optimize images.** Use Next.js `<Image>` component with proper `width`, `height`, and `loading="lazy"`.
50. **Code splitting.** Dashboard modules are dynamically imported. The landing page doesn't load dashboard code.
51. **No unnecessary JavaScript.** If a component can be server-rendered, it should be.

---

## 12. Content Rules

52. **One coherent design language.** Every page should feel like it belongs to the same product.
53. **Do not copy any reference website's identity.** References are for learning patterns and principles. Farmora has its own original visual identity.
54. **Quality bar: "Does this help the farmer?"** Before shipping any section, ask whether it helps farmers, buyers, or FPOs make better selling decisions.
55. **No fake statistics.** Unless backed by real data, all numbers must be labeled as demo/illustrative.
