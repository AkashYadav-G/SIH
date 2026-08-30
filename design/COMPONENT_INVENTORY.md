# FARMORA — COMPONENT INVENTORY

> Complete list of reusable components required across all Farmora interfaces.
> Components are organized by category and marked with their priority.

---

## Priority Legend

- **P0** — Required for landing page (Phase 04)
- **P1** — Required for authentication + dashboards (Phase 05–06)
- **P2** — Required for marketplace, logistics, transactions (Phase 07–10)
- **P3** — Required for AI features (Phase 11)

---

## 1. Layout Components

| Component          | Priority | Description                                         |
|--------------------|----------|-----------------------------------------------------|
| `Navbar`           | P0       | Top navigation bar for landing page                 |
| `Sidebar`          | P1       | Collapsible sidebar for dashboard views             |
| `MobileNav`        | P0       | Mobile bottom navigation bar                        |
| `Footer`           | P0       | Landing page footer with link groups                |
| `PageHeader`       | P1       | Dashboard page header with title + breadcrumb       |
| `Container`        | P0       | Max-width container for content centering            |
| `Section`          | P0       | Landing page section wrapper with standard spacing   |

---

## 2. Buttons & Actions

| Component          | Priority | Description                                         |
|--------------------|----------|-----------------------------------------------------|
| `Button`           | P0       | Primary, secondary, accent, ghost, destructive      |
| `IconButton`       | P0       | Icon-only button with tooltip                       |
| `ButtonGroup`      | P1       | Group of related buttons                            |
| `LinkButton`       | P0       | Button-styled link for navigation                   |

---

## 3. Data Display

| Component          | Priority | Description                                         |
|--------------------|----------|-----------------------------------------------------|
| `Card`             | P0       | Base card with border, padding, optional hover      |
| `MetricCard`       | P0       | KPI card: label + large number + trend indicator    |
| `PriceCard`        | P0       | Crop price display: crop + price + change %         |
| `TrendCard`        | P1       | Mini chart + metric + trend direction               |
| `MarketCard`       | P0       | Market summary: name + prices + demand              |
| `BuyerCard`        | P0       | Buyer display: name + crop + offer + trust score    |
| `OpportunityCard`  | P1       | Best opportunity: market + net realization           |
| `TrustScore`       | P1       | Visual trust/reliability score display (0–100)      |
| `Badge`            | P0       | Status badge: success, warning, error, info, etc.   |
| `Avatar`           | P1       | User/company avatar with fallback initials          |
| `EmptyState`       | P1       | Empty state illustration with message + CTA         |
| `Skeleton`         | P1       | Loading skeleton placeholder                        |
| `Stat`             | P0       | Impact stat: number + label (for landing page)      |

---

## 4. Forms & Inputs

| Component          | Priority | Description                                         |
|--------------------|----------|-----------------------------------------------------|
| `Input`            | P0       | Text input with label, error, helper text           |
| `Select`           | P0       | Dropdown select with search capability              |
| `Textarea`         | P1       | Multi-line text input                               |
| `Checkbox`         | P1       | Checkbox with label                                 |
| `RadioGroup`       | P1       | Radio button group                                  |
| `Switch`           | P1       | Toggle switch                                       |
| `CropSelector`     | P1       | Crop selection dropdown with crop icons             |
| `QuantityInput`    | P1       | Numeric input with unit selector (kg/quintal/tonne) |
| `QualitySelector`  | P1       | Quality grade selector (Grade A, B, C)              |
| `LocationSelector` | P1       | Location input with district/taluka hierarchy       |
| `DateSelector`     | P1       | Date picker for harvest dates                       |
| `SearchInput`      | P1       | Search input with icon and keyboard shortcuts       |
| `FormField`        | P1       | Form field wrapper with label + error handling      |

---

## 5. Navigation

| Component          | Priority | Description                                         |
|--------------------|----------|-----------------------------------------------------|
| `Tabs`             | P0       | Tab navigation for content switching                |
| `Breadcrumb`       | P1       | Breadcrumb navigation for dashboard pages           |
| `Pagination`       | P1       | Page navigation for lists and tables                |
| `StepIndicator`    | P0       | Step/progress indicator for "How It Works"          |

---

## 6. Overlays & Feedback

| Component          | Priority | Description                                         |
|--------------------|----------|-----------------------------------------------------|
| `Dialog`           | P0       | Modal dialog with overlay                           |
| `Dropdown`         | P0       | Dropdown menu with items                            |
| `Tooltip`          | P0       | Hover/focus tooltip for additional info             |
| `Toast`            | P1       | Notification toast (success, error, info)           |
| `Popover`          | P1       | Popover with rich content                           |
| `Sheet`            | P1       | Slide-in side panel for detail views                |
| `AlertBanner`      | P1       | Full-width alert banner (info, warning)             |

---

## 7. Data Tables

| Component          | Priority | Description                                         |
|--------------------|----------|-----------------------------------------------------|
| `Table`            | P0       | Base data table with header, body, footer           |
| `TableHeader`      | P0       | Sortable column header                              |
| `TableRow`         | P0       | Table row with hover state                          |
| `TableCell`        | P0       | Table cell with alignment options                   |
| `MobileTableCard`  | P1       | Card representation of a table row for mobile       |
| `FilterBar`        | P1       | Row of filter controls above a table                |

---

## 8. Charts & Visualization

| Component          | Priority | Description                                         |
|--------------------|----------|-----------------------------------------------------|
| `PriceChart`       | P0       | Line/area chart for price history (Recharts)        |
| `DemandChart`      | P1       | Bar chart for demand levels                         |
| `ArrivalChart`     | P1       | Area chart for market arrivals                      |
| `RevenueChart`     | P2       | Revenue over time for FPO dashboard                 |
| `ComparisonChart`  | P1       | Grouped bar for market/buyer comparison             |
| `MiniSparkline`    | P1       | Inline sparkline for table cells                    |
| `ChartTooltip`     | P0       | Custom styled tooltip for Recharts                  |
| `ChartLegend`      | P1       | Custom styled legend for Recharts                   |

---

## 9. Marketplace Components

| Component            | Priority | Description                                       |
|----------------------|----------|---------------------------------------------------|
| `BuyerProfile`       | P2       | Detailed buyer profile view                       |
| `BuyerRequirement`   | P2       | Buyer requirement card (crop, qty, quality)       |
| `BidCard`            | P2       | Bid/offer card from buyer                         |
| `OfferCard`          | P2       | Seller's offer card                               |
| `PriceComparison`    | P1       | Side-by-side price comparison view                |
| `NetRealization`     | P1       | Net realization breakdown component               |
| `CostBreakdown`      | P1       | Transport + storage + handling cost breakdown     |

---

## 10. Logistics & Storage Components

| Component          | Priority | Description                                         |
|--------------------|----------|-----------------------------------------------------|
| `TransportCard`    | P2       | Transport provider: vehicle + capacity + cost       |
| `StorageCard`      | P2       | Storage facility: type + capacity + distance + cost |
| `RouteCard`        | P2       | Route summary: origin → destination + distance      |
| `AvailabilityBadge`| P2       | Available / Full / Limited availability indicator   |

---

## 11. Transaction Components

| Component          | Priority | Description                                         |
|--------------------|----------|-----------------------------------------------------|
| `OrderTimeline`    | P2       | Order status timeline (offer → payment)             |
| `TransactionCard`  | P2       | Transaction summary card                            |
| `PaymentStatus`    | P2       | Payment status indicator                            |
| `OrderSummary`     | P2       | Complete order summary with costs                   |

---

## 12. Authentication Components

| Component          | Priority | Description                                         |
|--------------------|----------|-----------------------------------------------------|
| `AuthLayout`       | P1       | Split layout for auth pages                         |
| `LoginForm`        | P1       | Email/phone + password login form                   |
| `RegisterForm`     | P1       | Registration form with validation                   |
| `RoleSelector`     | P1       | Role selection (Farmer, FPO, Buyer, Logistics)      |
| `ForgotPassword`   | P1       | Password reset request form                         |

---

## 13. AI Components (Future)

| Component          | Priority | Description                                         |
|--------------------|----------|-----------------------------------------------------|
| `AIRecommendation` | P3       | AI-generated market recommendation display          |
| `InsightCard`      | P3       | AI insight: explanation + confidence + data source   |
| `MarketQuery`      | P3       | Natural language market query input                 |
| `DecisionPanel`    | P3       | AI decision support panel with options               |

---

## Component Implementation Notes

1. All components are built on shadcn/ui primitives
2. Components use Farmora design tokens (CSS variables)
3. Every component supports keyboard navigation
4. Every component supports `prefers-reduced-motion`
5. Interactive components have loading, disabled, and error states
6. Mobile-responsive by default (not an afterthought)
